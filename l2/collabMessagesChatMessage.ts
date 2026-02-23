/// <mls fileReference="_102025_/l2/collabMessagesChatMessage.ts" enhancement="_100554_enhancementLit"/>

import { html, nothing, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { collab_translate, collab_circle_exclamation } from '/_102025_/l2/collabMessagesIcons.js';
import { formatTimestamp } from '/_100554_/l2/aiAgentHelper.js';
import { loadChatPreferences } from '/_102025_/l2/collabMessagesHelper.js';

import { StateLitElement } from '/_100554_/l2/stateLitElement.js';
import { IChatPreferences, IMessage, IThreadInfo, MessageReactions } from '/_102025_/l2/collabMessagesHelper.js';

/// **collab_i18n_start**
const message_pt = {
    loading: 'Carregando...',
    msgNotSend: 'Mensagem não enviada*',
}

const message_en = {
    loading: 'Loading...',
    msgNotSend: 'Message not sent*',
}

type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = {
    'en': message_en,
    'pt': message_pt
}
/// **collab_i18n_end**

@customElement('collab-messages-chat-message-102025')
export class CollabMessagesChatMessage102025 extends StateLitElement {

    @property() message?: IMessage;
    @property({ attribute: false }) allThreads: mls.msg.Thread[] = [];
    @property() actualThread: IThreadInfo | undefined;
    @property() usersAvaliables: mls.msg.User[] = [];
    @property() userId: string | undefined;
    @state() userPreferenceChat?: IChatPreferences;
    @property({ attribute: false }) openedReactionMessageId?: string;
    @property({ attribute: false }) reactionPickerTarget?: HTMLElement;

    public onTaskClick?: Function;
    private msg: MessageType = messages['en'];
    // private readonly reactionEmojis = ['👍', '😂', '❤️', '😮', '😢', '😡'];

    private readonly reactionEmojis: Record<string, string> = {
        thumbs_up: '👍',
        laugh: '😂',
        heart: '❤️',
        wow: '😮',
        sad: '😢',
        angry: '😡'
    } as const;


    updated() {
        this.positionReactionPicker();
        this.animateReactionPicker();
    }

    render() {
        const lang = this.getMessageKey(messages);
        this.msg = messages[lang];
        this.userPreferenceChat = loadChatPreferences();
        return this.renderMessage();
    }

    private renderMessage() {
        const message = this.message;
        if (!message) return html`${nothing}`
        const isSame = message.isSame;
        const dateFormated = formatTimestamp(message.createAt);
        const userToFind = [
            ...this.usersAvaliables,
            ...(this.actualThread?.users || [])
        ].filter(
            (user, index, self) =>
                index === self.findIndex(u => u.userId === user.userId)
        );

        const userName = userToFind.find((user) => user.userId === message.senderId)?.name || message.senderId;
        const userAvatar = userToFind.find((user) => user.userId === message.senderId)?.avatar_url || '';
        const cls = message.senderId === this.userId ? 'user' : 'system';
        const titleTranslated = this.getTitleMessageTranslated(message);

        return html`
            <div class="message ${cls} ${isSame ? 'same' : ''}">
                <div class="message-group">
                    <div class="message-row">
                        ${cls === 'user' ? this.renderReactionButtonAdd(message) : nothing}
                        <div class="message-card ${cls} ${isSame ? 'same' : ''}">
                            ${!isSame ? html`<div class="message-title">@${userName}</div>` : ``}
                            ${this.renderMessageByLanguage(message)}
                            ${message.isLoading ? html`<span class="loader"></span>` : ''}
                            ${message.isFailed ? html`<div class="failed">
                                <div>
                                    <span>${collab_circle_exclamation}</span>
                                    <small>${this.msg.msgNotSend}</small>
                                </div>
                                <small>${message.isFailedError}</small>
                            </div>`: ''}
                            ${message.taskId ? html`
                                <div class="message-ai">
                                    <collab-messages-task-102025
                                        messageId=${message.createAt}
                                        .context= ${message.context}
                                        lastChanged= ${message.lastChanged}
                                        taskId=${message.taskId}
                                        threadId=${this.actualThread?.thread.threadId}
                                        userId=${this.userId}
                                        title=${titleTranslated}
                                        status=${message.taskStatus}
                                        @taskclick=${() => { if (this.onTaskClick) this.onTaskClick(message?.taskId || '', message.createAt, message.threadId, message) }}
                                    >
                                    </collab-messages-task-102025>
                                </div> `: html``}
                            ${this.renderMessageResultByLanguage(message)}
                            ${this.renderMessageFooterResult(message)}
                            ${this.renderReactions(message)}
                            ${this.renderReactionPicker(message)}
                            <div class="message-footer">${dateFormated?.timeShort}</div>
                        </div>
                        ${cls === 'system' ? this.renderReactionButtonAdd(message) : nothing}

                        ${cls === 'system' && !isSame ? html`<collab-messages-avatar-102025 avatar=${userAvatar}></collab-messages-avatar-102025>` : ''}
                    </div>
                </div>
            </div>

         `;
    }

    private renderMessageByLanguage(message: mls.msg.Message) {
        const mode = this.userPreferenceChat?.translationMode || 'icon';
        if (!this.userPreferenceChat || mode === 'none' || !message.translations) {
            return html`
            <div class="message-content">
                ${this.renderCollabMessagesRichPreview(message.content)} 
            </div>`
        }
        const { language } = this.userPreferenceChat;
        const messageByLanguagePref = message.translations ? message.translations[language] : '';
        const isSameLanguege = language === message.language_detected;
        switch (mode) {
            case 'icon':
                return html`
                <div class="message-content">
                    ${this.renderCollabMessagesRichPreview(messageByLanguagePref || message.content)} 
                     ${!isSameLanguege ? collab_translate : ''}
                </div>`;
            case 'text':
                return html`
                <div class="message-content">
                    ${this.renderCollabMessagesRichPreview(messageByLanguagePref || message.content)}   
                </div>
                ${!isSameLanguege ?
                        html`<small class="message-content translate">
                            ${this.renderCollabMessagesRichPreview(message.content)}   
                        </small>`
                        : ''}`;
            case 'iconText':
                return html`
                    <div class="message-content">
                        ${this.renderCollabMessagesRichPreview(messageByLanguagePref || message.content)}   
                        ${!isSameLanguege ? collab_translate : ''}
                    </div>
                ${!isSameLanguege ?
                        html`<small class="message-content translate">
                        ${this.renderCollabMessagesRichPreview(message.content)}    
                    </small>`
                        : ''
                    }`;
            case 'trace':
                return html`
                <div class="message-content trace">
                    <div>
                        <b>[LanguageDetected: ${message.language_detected}]</b>
                        ${this.renderCollabMessagesRichPreview(message.content)}   
                    </div>
                    ${Object.keys(message.translations).map((key) => {
                    if (key === 'language_detected') return ''
                    if (key === message.language_detected) return ''
                    return html`
                            <div>
                                <b>[${key}]</b>
                                ${this.renderCollabMessagesRichPreview(message.translations ? message.translations[key] : '')}                        
                            </div>`
                })}
                </div>`
            default:
                return null;
        }
    }

    private renderMessageResultByLanguage(message: mls.msg.Message) {

        if (!message.taskResults || message.taskResults.length === 0 || message.taskStatus !== 'done') return html``;
        const mode = this.userPreferenceChat?.translationMode || 'icon';
        if (!this.userPreferenceChat || mode === 'none') {
            return html`<div class="message-content">${message.taskResults[0]}</div>`
        }
        const response = message.taskResults[0];
        const { language } = this.userPreferenceChat;
        const messageByLanguagePref = message.taskResultsTranslated ? message.taskResultsTranslated[language] : '';
        const isSameLanguege = language === message.taskResultsTranslated?.language_detected;

        switch (mode) {
            case 'icon':
                return html`<div class="message-content">${messageByLanguagePref || response} ${!isSameLanguege ? collab_translate : ''}</div>`;
            case 'text':
                return html`
                <div class="message-content">${messageByLanguagePref || response}</div>
                ${!isSameLanguege ? html`<small class="message-content translate">${response}</small>` : ''}`;
            case 'iconText':
                return html`<div class="message-content">${messageByLanguagePref || response} ${!isSameLanguege ? collab_translate : ''}</div>
                ${!isSameLanguege ? html`<small class="message-content translate">${response}</small>` : ''}`;
            case 'trace':
                return html`<div class="message-content trace">
                <div><b>[LanguageDetected: ${message.language_detected}]</b> ${response}</div>
                ${Object.keys(message.taskResultsTranslated || {}).map((key) => {
                    if (key === 'language_detected') return ''
                    if (key === message.taskResultsTranslated?.language_detected) return ''
                    return html`<div><b>[${key}]</b> ${message.taskResultsTranslated ? message.taskResultsTranslated[key] : ''}</div>`
                })}
                </div>`
            default:
                return null;
        }
    }

    private renderMessageFooterResult(message: mls.msg.MessagePerformanceCache) {

        if (!message.footers || message.footers.length === 0) return html``;
        return html`<div class="message-result">
            ${message.footers?.map((footer) => {
            const content = footer.lines.join('\n').trim();
            if (!content) return html``;
            return html`
                <div class="message-result-text">
                    <b>${footer.title?.trim()}</b>
                    <div>
                        ${this.renderCollabMessagesRichPreview(footer.lines.join('\n').trim())}                    
                    </div>
                </div>`
        })}
        </div>`

    }

    private renderCollabMessagesRichPreview(text: string) {

        return html`
        <collab-messages-rich-preview-text-102025 
            @mention-hover=${this.onMentionHover}
            @channel-hover=${this.onChannelHover}
            .allUsers=${this.usersAvaliables} 
            .allThreads=${this.allThreads}
            text="${text}"
        ></collab-messages-rich-preview-text-102025>`
    }

    private async onMentionHover(ev: CustomEvent) {

        this.removeAllUserModal();
        if (!ev.detail || !ev.detail.userId || !ev.detail.element) return;
        const actualUserModal = this.usersAvaliables.find((user) => user.userId === ev.detail.userId);
        if (!actualUserModal) return;
        const rects = (ev.detail.element as HTMLElement).getBoundingClientRect();
        const modal = document.createElement('collab-messages-user-modal-102025');
        (modal as any).user = actualUserModal;
        (modal as any).setAttribute('actualUserId', this.userId);
        this.appendChild(modal);
        await (modal as LitElement).updateComplete;
        const rectsModal = modal.getBoundingClientRect();
        modal.style.top = (rects.top - rectsModal.height - rects.height - 70) + 'px';
        modal.style.left = '20px';

    }


    private async onChannelHover(ev: CustomEvent) {

        this.removeAllChannelModal();
        if (!ev.detail || !ev.detail.threadId || !ev.detail.element) return;
        const actualThreadModal = this.allThreads.find((thread) => thread.threadId === `${ev.detail.threadId}`);
        if (!actualThreadModal) return;
        const rects = (ev.detail.element as HTMLElement).getBoundingClientRect();
        const modal = document.createElement('collab-messages-thread-modal-102025');
        (modal as any).thread = actualThreadModal;
        this.appendChild(modal);
        await (modal as LitElement).updateComplete;
        const rectsModal = modal.getBoundingClientRect();
        modal.style.top = (rects.top - rectsModal.height - rects.height - 70) + 'px';
        modal.style.left = '20px';

    }

    private removeAllUserModal() {
        const all = this.querySelectorAll('collab-messages-user-modal-102025');
        all.forEach((item) => item.remove());
    }

    private removeAllChannelModal() {
        const all = this.querySelectorAll('collab-messages-thread-modal-102025');
        all.forEach((item) => item.remove());
    }

    private getTitleMessageTranslated(message: mls.msg.Message) {
        const mode = this.userPreferenceChat?.translationMode || 'icon';
        if (!this.userPreferenceChat || mode === 'none' || !message.taskTitleTranslated) {
            return message.taskTitle;
        }
        const { language } = this.userPreferenceChat;
        const titleByLanguagePref = message.taskTitleTranslated ? (message.taskTitleTranslated[language] ? message.taskTitleTranslated[language] : message.taskTitle) : message.taskTitle;
        return titleByLanguagePref;
    }


    //Reactions

    private renderReactions(message: IMessage) {
    if (!message.reactions) return nothing;

    return html`
        <div class="message-reactions">
            ${Object.entries(message.reactions).map(([name, users]) => {
                const emoji = this.reactionEmojis[name as string];
                if (!emoji) return nothing;

                const reacted =
                    this.userId && users.includes(this.userId);

                return html`
                    <button
                        class="reaction ${reacted ? 'active' : ''}"
                        @click=${() => this.onReactionClick(message, name)}
                    >
                        <span>${emoji}</span>
                        <span>${users.length}</span>
                    </button>
                `;
            })}
        </div>
    `;
}

    private renderReactionButtonAdd(message: IMessage) {
        return html`
            <button
                class="reaction add"
                @click=${(ev: Event) => this.openReactionPicker(message, ev)}
            >
                😊
            </button>
        `
    }

    private onReactionClick(message: IMessage, emoji: string) {
        if (!this.userId) return;
        const updated = this.toggleReaction(message, emoji, this.userId);
        this.message = updated;
    }


    private renderReactionPicker(message: IMessage) {
        if (this.openedReactionMessageId !== message.createAt) return nothing;

        return html`
        <div class="reaction-picker">
            ${Object.entries(this.reactionEmojis).map(([name, emoji]) => html`
                <button
                    class="reaction-picker-item"
                    @click=${() => this.onPickerEmojiSelect(message, name)}
                >
                    ${emoji}
                </button>
            `)}
        </div>
    `;
    }


    private onPickerEmojiSelect(message: IMessage, emoji: string) {
        if (!this.userId) return;
        const updated = this.toggleReaction(message, emoji, this.userId);
        this.message = updated;
        this.closeReactionPicker();
    }


    private openReactionPicker(message: IMessage, ev?: Event) {
        ev?.stopPropagation();

        if (this.openedReactionMessageId === message.createAt) {
            this.closeReactionPicker();
            return;
        }

        this.closeReactionPicker();
        this.openedReactionMessageId = message.createAt;
        this.reactionPickerTarget = ev?.currentTarget as HTMLElement;
    }

    private closeReactionPicker() {
        this.openedReactionMessageId = undefined;
        this.reactionPickerTarget = undefined;
        if (!this.parentElement) return;
        const all = Array.from(this.parentElement.querySelectorAll('collab-messages-chat-message-102025')) as CollabMessagesChatMessage102025[]
        all.forEach((item: CollabMessagesChatMessage102025) => {
            item.openedReactionMessageId = undefined;
            item.reactionPickerTarget = undefined;
        });

    }

    private toggleReaction(
        message: IMessage,
        reaction: string,
        userId: string
    ): IMessage {

        const current = message.reactions ?? {};
        const next: MessageReactions = {};

        // remove o usuário de qualquer reação existente
        for (const [name, users] of Object.entries(current)) {
            const filtered = users.filter(id => id !== userId);
            if (filtered.length) {
                next[name] = filtered;
            }
        }

        // toggle
        if (!current[reaction]?.includes(userId)) {
            next[reaction] = [...(next[reaction] ?? []), userId];
        }

        return {
            ...message,
            reactions: Object.keys(next).length ? next : undefined,
            lastChanged: Date.now()
        };
    }

    private animateReactionPicker() {
        const picker = this.querySelector(
            '.reaction-picker'
        ) as HTMLElement | null;

        if (!picker) return;

        const items = Array.from(
            picker.querySelectorAll('.reaction-picker-item')
        ) as HTMLElement[];

        requestAnimationFrame(() => {
            picker.classList.add('open');

            // ⏱️ stagger mais lento
            items.forEach((el, i) => {
                setTimeout(() => {
                    el.classList.add('show');
                }, 65 * i);
            });
        });
    }
    private positionReactionPicker() {
        if (!this.reactionPickerTarget) return;

        const picker = this.querySelector(
            '.reaction-picker'
        ) as HTMLElement | null;

        if (!picker) return;

        const btnRect = this.reactionPickerTarget.getBoundingClientRect();
        const pickerRect = picker.getBoundingClientRect();

        const parent = picker.offsetParent as HTMLElement;
        const parentRect = parent.getBoundingClientRect();

        const GAP = 8;

        const top =
            btnRect.top -
            parentRect.top -
            pickerRect.height -
            GAP;

        picker.style.top = `${Math.max(top, 4)}px`;
        picker.style.bottom = 'auto';

        if (parent.classList.contains('user')) {
            picker.style.right = '0';
            picker.style.left = 'auto';
        } else {
            picker.style.left = '0';
            picker.style.right = 'auto';
        }
    }


}


