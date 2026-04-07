/// <mls fileReference="_102025_/l2/collabMessagesSettingsOpenClaw.ts" enhancement="_100554_/l2/enhancementLit.ts"/>

import { html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { StateLitElement } from '/_102029_/l2/stateLitElement.js';

import {
    generateUUIDv7,
    generateAgentAvatar,
} from '/_102025_/l2/collabMessagesHelper.js';

import {
    collab_plug,
    collab_plus,
    collab_trash,
    collab_refresh,
    collab_chevron_left,
    collab_edit,
    collab_xmark,
    collab_floppy_disk,
    collab_check,
    collab_warning,
    collab_robot,
} from '/_102025_/l2/collabMessagesIcons.js';

import {
    msgListOpenClawConnectors,
    msgAddOrUpdateOpenClawConnector
} from '/_102025_/l2/shared/api.js';

import * as msg from '/_102025_/l2/shared/interfaces.js';

/// **collab_i18n_start**
const message_pt = {
    loading: 'Carregando informações...',
    save: 'Salvar',
    cancel: 'Cancelar',
    back: 'Voltar',
    connectorsTitle: 'OpenClaw',
    newConnector: 'Novo connector',
    editConnector: 'Editar connector',
    noConnectors: 'Nenhum connector configurado',
    connectorName: 'Nome',
    connectorNameHint: 'Nome amigável para identificar esta instância',
    connectorNamePlaceholder: 'Ex: OpenClaw Produção',
    baseUrl: 'URL base',
    baseUrlHint: 'Deve apontar para o Gateway HTTP do OpenClaw (porta padrão: 18789)',
    baseUrlPlaceholder: 'https://chat-gw.collab.codes',
    gatewayToken: 'Gateway token',
    gatewayTokenHint: 'Token para autenticar chamadas ao endpoint /v1/chat/completions',
    inboundToken: 'Inbound token',
    inboundTokenHint: 'Token secreto para validar webhooks vindos do OpenClaw',
    defaultTimeout: 'Timeout (ms)',
    defaultTimeoutHint: 'Chamadas síncronas',
    outputMode: 'Modo de saída',
    outputModeHint: 'Como publicar respostas',
    connectorEnabled: 'Ativo',
    connectorDisabled: 'Inativo',
    configSection: 'Configuração',
    authSection: 'Autenticação',
    behaviorSection: 'Comportamento padrão',
    deleteSection: 'Remover integração',
    changeToken: 'Alterar',
    generateToken: 'Gerar',
    removeConnector: 'Remover',
    errorConnectorName: 'Nome do connector é obrigatório',
    errorBaseUrl: 'URL base é obrigatória',
    errorGatewayToken: 'Gateway token é obrigatório',
    errorInboundToken: 'Inbound token é obrigatório',
    successSavingConnector: 'Connector salvo com sucesso',
    successRemoveConnector: 'Connector removido com sucesso',
    deleteWarningTitle: 'Atenção',
    deleteWarningMessage: 'Ao remover este connector, todas as integrações associadas serão desativadas e os agentes configurados serão perdidos. Esta ação não pode ser desfeita.',
    deleteConfirmInstruction: 'Digite o nome do connector para confirmar:',
    deleteConfirmButton: 'Confirmar remoção',
    agentsSection: 'Agentes',
    addAgent: 'Adicionar agente',
    agentName: 'Nome do agente',
    agentAvatar: 'URL do avatar (opcional)',
    agentNamePlaceholder: 'Ex: Bot de Vendas',
    noAgents: 'Nenhum agente configurado',
    errorAgentName: 'O nome do agente é obrigatório',
    successAddingAgent: 'Agente adicionado com sucesso',
    confirmRemoveAgent: 'Remover este agente?',
    testConnectionSection: 'Verificar conexão',
    testConnectionInfo: 'Teste a conectividade com o servidor antes de salvar para garantir que as configurações estão corretas.',
    testConnectionBtn: 'Testar conexão',
    testConnectionTesting: 'Testando...',
    testConnectionSuccess: 'Conexão estabelecida com sucesso',
    testConnectionLatency: 'Latência',
    testConnectionError: 'Falha na conexão',
    testConnectionErrorTimeout: 'Timeout - servidor não respondeu',
    testConnectionErrorAuth: 'Erro de autenticação - verifique o token',
    testConnectionErrorNetwork: 'Erro de rede - verifique a URL',
    testConnectionErrorUnknown: 'Erro desconhecido',
};

const message_en = {
    loading: 'Loading...',
    save: 'Save',
    cancel: 'Cancel',
    back: 'Back',
    connectorsTitle: 'OpenClaw',
    newConnector: 'New connector',
    editConnector: 'Edit connector',
    noConnectors: 'No connectors configured',
    connectorName: 'Name',
    connectorNameHint: 'Friendly name to identify this instance',
    connectorNamePlaceholder: 'Ex: OpenClaw Production',
    baseUrl: 'Base URL',
    baseUrlHint: 'Must point to the OpenClaw HTTP Gateway (default port: 18789)',
    baseUrlPlaceholder: 'https://chat-gw.collab.codes',
    gatewayToken: 'Gateway token',
    gatewayTokenHint: 'Token to authenticate calls to /v1/chat/completions endpoint',
    inboundToken: 'Inbound token',
    inboundTokenHint: 'Secret token to validate webhooks from OpenClaw',
    defaultTimeout: 'Timeout (ms)',
    defaultTimeoutHint: 'Synchronous calls',
    outputMode: 'Output mode',
    outputModeHint: 'How to publish responses',
    connectorEnabled: 'Active',
    connectorDisabled: 'Inactive',
    configSection: 'Configuration',
    authSection: 'Authentication',
    behaviorSection: 'Default behavior',
    deleteSection: 'Remove integration',
    changeToken: 'Change',
    generateToken: 'Generate',
    removeConnector: 'Remove',
    errorConnectorName: 'Connector name is required',
    errorBaseUrl: 'Base URL is required',
    errorGatewayToken: 'Gateway token is required',
    errorInboundToken: 'Inbound token is required',
    successSavingConnector: 'Connector saved successfully',
    successRemoveConnector: 'Connector removed successfully',
    deleteWarningTitle: 'Warning',
    deleteWarningMessage: 'Removing this connector will disable all associated integrations and configured agents will be lost. This action cannot be undone.',
    deleteConfirmInstruction: 'Type the connector name to confirm:',
    deleteConfirmButton: 'Confirm removal',
    agentsSection: 'Agents',
    addAgent: 'Add agent',
    agentName: 'Agent name',
    agentAvatar: 'Avatar URL (optional)',
    agentNamePlaceholder: 'Ex: Sales Bot',
    noAgents: 'No agents configured',
    errorAgentName: 'Agent name is required',
    successAddingAgent: 'Agent added successfully',
    confirmRemoveAgent: 'Remove this agent?',
    testConnectionSection: 'Verify connection',
    testConnectionInfo: 'Test connectivity with the server before saving to ensure the settings are correct.',
    testConnectionBtn: 'Test connection',
    testConnectionTesting: 'Testing...',
    testConnectionSuccess: 'Connection established successfully',
    testConnectionLatency: 'Latency',
    testConnectionError: 'Connection failed',
    testConnectionErrorTimeout: 'Timeout - server did not respond',
    testConnectionErrorAuth: 'Authentication error - check the token',
    testConnectionErrorNetwork: 'Network error - check the URL',
    testConnectionErrorUnknown: 'Unknown error',
};

type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = {
    'en': message_en,
    'pt': message_pt
};
/// **collab_i18n_end**

type ViewMode = 'main' | 'connectorDetails' | 'editAgent';

interface IOpenClawAgent2 {
    id: string;
    name: string;
    avatarUrl: string;
    senderId: string;
    createdAt: string;
}

interface IOpenClawAgent {
    id: string;
    identityName: string;
    identityEmoji: string;
    identitySource: string;
    workspace: string;
    agentDir: string; model: string;
    bindings: number;
    isDefault: boolean;
    routes: string[];
}


interface IOpenClawConnectorLocal extends msg.OpenClawConnector {
    isNew?: boolean;
    agents: IOpenClawAgent[],
    gatewayTokenChanged?: boolean;
    inboundTokenChanged?: boolean;
}

@customElement('collab-messages-settings-open-claw-102025')
export class CollabMessagesSettingsOpenClaw extends StateLitElement {

    private msg: MessageType = messages['en'];

    @property() userId: string = '';

    // OpenClaw Connector states
    @state() connectors: IOpenClawConnectorLocal[] = [];
    @state() viewMode: ViewMode = 'main';
    @state() currentConnectorId: string = '';
    @state() editingConnector: IOpenClawConnectorLocal | null = null;
    @state() isTestingConnection: boolean = false;
    @state() connectionTestResult: 'none' | 'success' | 'error' = 'none';
    @state() connectionTestMessage: string = '';
    @state() connectionTestLatency: number = 0;

    // Delete confirmation states
    @state() showDeleteConfirmation: boolean = false;
    @state() deleteConfirmationInput: string = '';

    // Agent states
    @state() newAgentName: string = '';
    @state() newAgentAvatarUrl: string = '';
    @state() editingAgent: IOpenClawAgent | null = null;
    @state() isNewAgent: boolean = false;

    @property() labelOkConnector: string = '';
    @property() labelErrorConnector: string = '';
    @property() labelOkAgent: string = '';
    @property() labelErrorAgent: string = '';

    @property() isSavingConnector: boolean = false;
    @property() isSavingAgent: boolean = false;

    async firstUpdated() {

        if (!this.userId) return;

        const rc = await msgListOpenClawConnectors({
            userId: this.userId
        });

        if (rc.response) {
            this.connectors = rc.response.connectors.map((item) => {
                return {
                    ...item, isNew: false, agents: [

                        {
                            "id": "main",
                            "identityName": "Eduardo",
                            "identityEmoji": "🧭",
                            "identitySource": "identity",
                            "workspace": "/home/node/.openclaw/workspace",
                            "agentDir": "/home/node/.openclaw/agents/main/agent",
                            "model": "microsoft-foundry/gpt-4.1",
                            "bindings": 0,
                            "isDefault": true,
                            "routes": [
                                "default (no explicit rules)"
                            ]
                        },
                    ], gatewayTokenChanged: false, inboundTokenChanged: false
                }
            });
        }

        // Dados de teste
        /*this.connectors = [
            {
                "connectorId": "01936f8a-7c2e-7d4b-9a1f-3e8b5c6d7a2f",
                "name": "OpenClaw Produção",
                "baseUrl": "https://openclaw.collab.codes",
                "gatewayToken": "d46e07c67f4196e537c69d1998c3a7ea03529fd89f43f3e2dbe52d7d12059c68",
                "inboundToken": "wh-prod-x9y8z7w6v5u4t3s2r1q0p9o8n7m6l5k4",
                "enabled": true,
                "defaultTimeoutMs": 60000,
                "defaultOutputMode": "final_only",
                "agents": [
                    {
                        "id": "01936f8a-8d3e-7f4a-9b2c-1d4e5f6a7b8c",
                        "name": "Assistant Bot",
                        "avatarUrl": "https://api.dicebear.com/7.x/bottts/svg?seed=assistant",
                        "senderId": "integration:openclaw:assistantbot",
                        "createdAt": "2024-11-15T10:35:00.000Z"
                    },
                    {
                        "id": "01936f8a-9e4f-8a5b-0c3d-2e5f6a7b8c9d",
                        "name": "Support Agent",
                        "avatarUrl": "https://api.dicebear.com/7.x/bottts/svg?seed=support",
                        "senderId": "integration:openclaw:supportagent",
                        "createdAt": "2024-11-16T14:20:00.000Z"
                    }
                ],
            },
        ];*/
    }



    render() {
        const lang = this.getMessageKey(messages);
        this.msg = messages[lang];

        if (this.viewMode === 'editAgent') {
            return this.renderEditAgentView();
        }

        if (this.viewMode === 'connectorDetails') {
            return this.renderConnectorDetailsView();
        }

        return this.renderOpenClawConnectors();
    }

    private renderOpenClawConnectors() {
        return html`
        <div>
            <div class="section connectors">
                <h4>${collab_plug} ${this.msg.connectorsTitle}</h4>

                ${this.connectors.length === 0
                ? html`<p class="no-items">${this.msg.noConnectors}</p>`
                : html`
                        <div class="connectors-list">
                            ${this.connectors.map(connector => this.renderConnectorCard(connector))}
                        </div>
                    `
            }

                <div class="connector-add-link">
                    <button class="btn-link" @click=${this.handleAddConnector}>
                        ${collab_plus} ${this.msg.newConnector}
                    </button>
                </div>
            </div>
        </div>`;
    }

    private renderConnectorCard(connector: IOpenClawConnectorLocal) {
        const isEnabled = connector.enabled;
        const agentCount = connector.agents?.length || 0;
        return html`
        <div class="connector-card ${!isEnabled ? 'disabled' : ''}">
            <div class="connector-info">
                <div class="connector-header">
                    <span class="connector-name">${connector.name || `Connector #${connector.connectorId.slice(0, 8)}`}</span>
                    <span class="connector-status ${isEnabled ? 'active' : 'inactive'}">
                        <span class="status-dot"></span>
                        ${isEnabled ? this.msg.connectorEnabled : this.msg.connectorDisabled}
                    </span>
                </div>
                <div class="connector-url">${connector.baseUrl}</div>
                <div class="connector-meta">
                    <span>Timeout: <strong>${connector.defaultTimeoutMs}ms</strong></span>
                    <span>${this.msg.agentsSection}: <strong>${agentCount}</strong></span>
                </div>
            </div>
            <div class="connector-actions">
                <button class="btn-icon" @click=${() => this.handleOpenConnectorDetails(connector.connectorId)} title="Editar">
                    ${collab_edit}
                </button>
                <button class="btn-icon btn-toggle ${isEnabled ? 'on' : 'off'}" @click=${() => this.handleToggleConnector(connector.connectorId)} title="${isEnabled ? 'Desativar' : 'Ativar'}">
                    ${this.renderToggleIcon(isEnabled)}
                </button>
            </div>
        </div>`;
    }

    private renderToggleIcon(isOn: boolean) {
        return html`
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="1" y="5" width="22" height="14" rx="7"/>
            <circle cx="${isOn ? 16 : 8}" cy="12" r="3" fill="currentColor"/>
        </svg>`;
    }

    private renderConnectorDetailsView() {
        if (!this.editingConnector) return html``;

        const connector = this.editingConnector;

        return html`
        <div>
            <div class="connector-details-header">
                <button class="btn-back" @click=${this.handleBackToMain}>
                    ${collab_chevron_left}
                </button>
                <h3>${collab_plug} ${connector.isNew ? this.msg.newConnector : this.msg.editConnector}</h3>
            </div>

            ${this.renderConfigurationSection(connector)}

            ${!connector.isNew ? this.renderAgentSection(connector) : html`${nothing}`}
            ${!connector.isNew ? this.renderDeleteSection(connector) : html`${nothing}`}
            
            ${this.labelOkConnector ? html`<small class="saving-ok">${this.labelOkConnector}</small>` : ''}
            ${this.labelErrorConnector ? html`<small class="saving-error">${this.labelErrorConnector}</small>` : ''}
        </div>`;
    }

    private renderConfigurationSection(connector: IOpenClawConnectorLocal) {
        const isNew = connector.isNew;
        const showGatewayTokenField = isNew || connector.gatewayTokenChanged;
        const showInboundTokenField = isNew || connector.inboundTokenChanged;

        return html`
        <div class="section connector-form">
            <div class="section-header">
                <span class="section-title">${this.msg.configSection}</span>
                <label class="toggle-label" @click=${this.handleConnectorEnabledToggle}>
                    <span class="toggle-switch ${connector.enabled ? 'on' : ''}">
                        <span class="toggle-thumb"></span>
                    </span>
                    ${connector.enabled ? this.msg.connectorEnabled : this.msg.connectorDisabled}
                </label>
            </div>

            <div class="form-field">
                <label>${this.msg.connectorName} *</label>
                <input 
                    type="text" 
                    .value=${connector.name} 
                    @input=${this.handleConnectorNameChange}
                    placeholder="${this.msg.connectorNamePlaceholder}"
                />
                <small class="field-hint">${this.msg.connectorNameHint}</small>
            </div>

            <div class="form-field">
                <label>${this.msg.baseUrl} *</label>
                <input 
                    type="url" 
                    .value=${connector.baseUrl} 
                    @input=${this.handleConnectorUrlChange}
                    placeholder="${this.msg.baseUrlPlaceholder}"
                />
                <small class="field-hint warning">
                    ${collab_warning}
                    ${this.msg.baseUrlHint}
                </small>
            </div>

            <div class="section-divider">
                <span class="section-title">${this.msg.authSection}</span>
            </div>

            <div class="form-field">
                <label>${this.msg.gatewayToken} *</label>
                ${showGatewayTokenField ? html`
                    <div class="token-field">
                        <input 
                            type="text" 
                            .value=${connector.gatewayToken} 
                            @input=${this.handleGatewayTokenChange}
                            placeholder="Token..."
                        />
                        <button class="btn-icon" @click=${() => this.handleGenerateToken('gateway')} title="${this.msg.generateToken}">
                            ${collab_refresh}
                        </button>
                    </div>
                ` : html`
                    <div class="token-field">
                        <input type="password" value="••••••••••••••••••••••••" readonly />
                        <button class="btn-change-token" @click=${() => this.handleChangeToken('gateway')}>
                            ${collab_edit} ${this.msg.changeToken}
                        </button>
                    </div>
                `}
                <small class="field-hint">${this.msg.gatewayTokenHint}</small>
            </div>

            <div class="form-field">
                <label>${this.msg.inboundToken} *</label>
                ${showInboundTokenField ? html`
                    <div class="token-field">
                        <input 
                            type="text" 
                            .value=${connector.inboundToken} 
                            @input=${this.handleInboundTokenChange}
                            placeholder="Token..."
                        />
                        <button class="btn-icon" @click=${() => this.handleGenerateToken('inbound')} title="${this.msg.generateToken}">
                            ${collab_refresh}
                        </button>
                    </div>
                ` : html`
                    <div class="token-field">
                        <input type="password" value="••••••••••••••••••••••••" readonly />
                        <button class="btn-change-token" @click=${() => this.handleChangeToken('inbound')}>
                            ${collab_edit} ${this.msg.changeToken}
                        </button>
                    </div>
                `}
                <small class="field-hint">${this.msg.inboundTokenHint}</small>
            </div>

            <div class="section-divider">
                <span class="section-title">${this.msg.behaviorSection}</span>
            </div>

            <div class="form-row">
                <div class="form-field">
                    <label>${this.msg.defaultTimeout}</label>
                    <input 
                        type="number" 
                        .value=${String(connector.defaultTimeoutMs)} 
                        @input=${this.handleTimeoutChange}
                        min="5000" 
                        max="300000" 
                        step="1000"
                    />
                    <small class="field-hint">${this.msg.defaultTimeoutHint}</small>
                </div>
                <div class="form-field">
                    <label>${this.msg.outputMode}</label>
                    <select .value=${connector.defaultOutputMode} @change=${this.handleOutputModeChange}>
                        <option value="final_only">Final</option>
                        <option value="status_and_final">Status/Final</option>
                    </select>
                    <small class="field-hint">${this.msg.outputModeHint}</small>
                </div>
            </div>


            ${!connector.isNew ? this.renderTestConnectionSection(connector) : html`${nothing}`}


            <div class="form-actions">
                <button class="btn-secondary" @click=${this.handleCancelConnector}>
                    ${collab_xmark} ${this.msg.cancel}
                </button>
                <button @click=${this.handleSaveConnector} ?disabled=${this.isSavingConnector}>
                    ${this.isSavingConnector ? html`<span class="loader"></span>` : html`${collab_floppy_disk} ${this.msg.save}`}
                </button>
            </div>
        </div>`;
    }

    private renderTestConnectionSection(connector: IOpenClawConnectorLocal) {
        return html`
        <div class="section-divider">
            <span class="section-title">${this.msg.testConnectionSection}</span>
        </div>

        <div class="test-connection-section">
            <p class="test-connection-info">${this.msg.testConnectionInfo}</p>
            
            ${this.connectionTestResult === 'success' ? html`
                <div class="test-result success">
                    <div class="test-result-icon">
                        ${collab_check}
                    </div>
                    <div class="test-result-content">
                        <span class="test-result-title">${this.msg.testConnectionSuccess}</span>
                        <span class="test-result-detail">${this.msg.testConnectionLatency}: ${this.connectionTestLatency}ms</span>
                    </div>
                </div>
            ` : this.connectionTestResult === 'error' ? html`
                <div class="test-result error">
                    <div class="test-result-icon">
                        ${collab_xmark}
                    </div>
                    <div class="test-result-content">
                        <span class="test-result-title">${this.msg.testConnectionError}</span>
                        <span class="test-result-detail">${this.connectionTestMessage}</span>
                    </div>
                </div>
            ` : nothing}
            
            <button 
                class="btn-test-connection ${this.connectionTestResult}" 
                @click=${this.handleTestConnection}
                ?disabled=${this.isTestingConnection || !connector.baseUrl || !connector.gatewayToken}
            >
                ${this.isTestingConnection ? html`
                    <span class="loader"></span>
                    ${this.msg.testConnectionTesting}
                ` : html`
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                    ${this.msg.testConnectionBtn}
                `}
            </button>
        </div>`;
    }

    private renderAgentSection(connector: IOpenClawConnectorLocal) {
        return html`
        <div class="section connector-form">
            <div class="section-divider">
                <span class="section-title">${this.msg.agentsSection}(In develpoment)</span>
            </div>

            <div class="agents-list">
                ${connector.agents.length === 0
                ? html`<p class="no-items">${this.msg.noAgents}</p>`
                : connector.agents.map((agent) => this.renderAgentCard(agent))
            }
            </div>

            <div class="agent-add-link">
                <button class="btn-link" @click=${this.handleOpenAddAgent} disabled >
                    ${collab_plus} ${this.msg.addAgent}
                </button>
            </div>
        </div>`;
    }

    private renderDeleteSection(connector: IOpenClawConnectorLocal) {
        const isNew = connector.isNew;

        return html`
        <div class="section connector-form">
            <div class="section-divider">
                <span class="section-title">${this.msg.deleteSection}</span>
            </div>

            ${!isNew && !this.showDeleteConfirmation ? html`
                <div class="delete-warning-section">
                    <div class="delete-warning-box">
                        <div class="warning-header">
                            ${collab_warning}
                            <span>${this.msg.deleteWarningTitle}</span>
                        </div>
                        <p class="warning-message">${this.msg.deleteWarningMessage}</p>
                        <button class="btn-danger-outline" @click=${this.handleToggleDeleteConfirmation}>
                            ${collab_trash} ${this.msg.removeConnector}
                        </button>
                    </div>
                </div>
            ` : nothing}
            ${this.showDeleteConfirmation ? this.renderDeleteConfirmation(connector) : nothing}
        </div>`;
    }

    private renderDeleteConfirmation(connector: IOpenClawConnectorLocal) {
        const connectorName = connector.name || `Connector #${connector.connectorId.slice(0, 8)}`;
        const isMatch = this.deleteConfirmationInput.trim() === connectorName;

        return html`
        <div class="delete-confirmation">
            <label>${this.msg.deleteConfirmInstruction}</label>
            <span class="confirm-name">${connectorName}</span>
            <input 
                type="text" 
                .value=${this.deleteConfirmationInput}
                @input=${this.handleDeleteConfirmationInput}
            />
            <div class="delete-actions">
                <button class="btn-cancel" @click=${this.handleCancelDelete}>
                    ${this.msg.cancel}
                </button>
                <button 
                    class="btn-confirm" 
                    @click=${() => this.handleConfirmDelete(connector.connectorId)}
                    ?disabled=${!isMatch || this.isSavingConnector}
                >
                    ${this.isSavingConnector ? html`<span class="loader"></span>` : this.msg.deleteConfirmButton}
                </button>
            </div>
        </div>`;
    }

    private renderAgentCard(agent: IOpenClawAgent) {
        return html`
        <div class="agent-card">
            <div class="agent-avatar">
              ${this.renderAvatar(agent)}
            </div>
            <div class="agent-info">
                <span class="agent-name">${agent.identityName}</span>
                <span class="agent-sender-id">${agent.id}</span>
            </div>
            <div class="agent-actions" style="display:none"> 
                <button class="btn-icon" @click=${() => this.handleOpenEditAgent(agent)} title="${this.msg.editConnector}">
                    ${collab_edit}
                </button>
                <button class="btn-icon btn-danger" @click=${() => this.handleRemoveAgent(agent.id)} title="${this.msg.confirmRemoveAgent}">
                    ${collab_trash}
                </button>
            </div>
        </div>`;
    }

    private renderAvatar(agent: IOpenClawAgent) {
        const value = agent.identityEmoji;

        if (!value) {
            return html`<div class="agent-avatar-placeholder">${collab_robot}</div>`;
        }

        // 1. SVG string
        if (value.trim().startsWith("<svg")) {
            return html`<div class="agent-avatar-svg" .innerHTML=${value}></div>`;
        }

        // 2. URL (http, https, data, etc)
        if (this.isUrl(value)) {
            return html`<img src="${value}" alt="${agent.identityName}" />`;
        }

        // 3. Emoji ou texto simples
        return html`<div class="agent-avatar-emoji">${value}</div>`;
    }

    private isUrl(value: string): boolean {
        try {
            new URL(value);
            return true;
        } catch {
            return value.startsWith("data:image");
        }
    }

    private renderEditAgentView() {
        if (!this.editingConnector) return html``;

        const previewAvatar = this.newAgentAvatarUrl || (this.newAgentName ? generateAgentAvatar(this.newAgentName) : '');
        const previewSenderId = this.newAgentName
            ? `integration:openclaw:${this.newAgentName.toLowerCase().replace(/\s+/g, '')}`
            : 'integration:openclaw:...';

        return html`
        <div>
            <div class="connector-details-header">
                <button class="btn-back" @click=${this.handleBackToConnectorDetails}>
                    ${collab_chevron_left}
                </button>
                <h3>${collab_robot} ${this.isNewAgent ? this.msg.addAgent : this.msg.editConnector}</h3>
            </div>

            <div class="section agent-form">
                <div class="agent-preview-large">
                    ${previewAvatar
                ? html`<img src="${previewAvatar}" alt="Preview" class="preview-avatar" />`
                : html`<div class="preview-avatar-placeholder">${collab_robot}</div>`
            }
                    <div class="preview-info">
                        <span class="preview-name">${this.newAgentName || '...'}</span>
                        <span class="preview-sender-id">${previewSenderId}</span>
                    </div>
                </div>

                <div class="form-field">
                    <label>${this.msg.agentName} *</label>
                    <input 
                        type="text" 
                        .value=${this.newAgentName} 
                        @input=${this.handleNewAgentNameInput} 
                        placeholder="${this.msg.agentNamePlaceholder}" 
                    />
                </div>

                <div class="form-field">
                    <label>${this.msg.agentAvatar}</label>
                    <div class="avatar-input-group">
                        <input 
                            type="url" 
                            .value=${this.newAgentAvatarUrl} 
                            @input=${this.handleNewAgentAvatarInput} 
                            placeholder="https://..." 
                        />
                        <button class="btn-icon" @click=${this.handleGenerateAgentAvatar} title="${this.msg.generateToken}">
                            ${collab_refresh}
                        </button>
                    </div>
                </div>

                <div class="form-actions">
                    <button class="btn-secondary" @click=${this.handleBackToConnectorDetails}>
                        ${collab_xmark} ${this.msg.cancel}
                    </button>
                    <button @click=${this.handleSaveAgent} ?disabled=${this.isSavingAgent}>
                        ${this.isSavingAgent
                ? html`<span class="loader"></span>`
                : html`${collab_floppy_disk} ${this.msg.save}`}
                    </button>
                </div>

                ${this.labelOkAgent ? html`<small class="saving-ok">${this.labelOkAgent}</small>` : ''}
                ${this.labelErrorAgent ? html`<small class="saving-error">${this.labelErrorAgent}</small>` : ''}
            </div>
        </div>`;
    }

    // ========== NAVIGATION ==========


    private navigateTo(newView: ViewMode, resetScroll: boolean = false) {

        this.viewMode = newView;
        this.dispatchEvent(new CustomEvent('settings-change', {
            detail: { mode: 'view', viewMode: newView === 'main' ? 'all' : 'openclaw' },
            bubbles: true,
            composed: true
        }));

    }

    // ========== CONNECTOR HANDLERS ==========
    private async handleAddConnector() {

        const newConnector: IOpenClawConnectorLocal = {
            connectorId: generateUUIDv7(),
            name: '',
            baseUrl: '',
            gatewayToken: '',
            inboundToken: '',
            enabled: true,
            defaultTimeoutMs: 60000,
            defaultOutputMode: 'final_only',
            agents: [],
            isNew: true
        };

        this.editingConnector = newConnector;
        this.currentConnectorId = newConnector.connectorId;

        this.clearStates();
        this.clearErrors();
        this.navigateTo('connectorDetails', true);




    }

    private clearErrors() {
        this.labelOkConnector = '';
        this.labelErrorConnector = '';
        this.labelOkAgent = '';
        this.labelErrorAgent = '';
    }

    private clearStates() {
        this.showDeleteConfirmation = false;
        this.deleteConfirmationInput = '';
        this.newAgentName = '';
        this.newAgentAvatarUrl = '';
        this.isTestingConnection = false;
        this.connectionTestResult = 'none';
        this.connectionTestMessage = '';
        this.connectionTestLatency = 0;
    }

    private handleOpenConnectorDetails(connectorId: string) {
        const connector = this.connectors.find(c => c.connectorId === connectorId);
        if (!connector) return;
        this.editingConnector = {
            ...connector,
            agents: connector.agents || [],
            isNew: false,
            gatewayTokenChanged: false,
            inboundTokenChanged: false
        };
        this.currentConnectorId = connectorId;
        this.labelOkConnector = '';
        this.labelErrorConnector = '';
        this.labelOkAgent = '';
        this.labelErrorAgent = '';
        this.showDeleteConfirmation = false;
        this.deleteConfirmationInput = '';
        this.newAgentName = '';
        this.newAgentAvatarUrl = '';
        this.isTestingConnection = false;
        this.connectionTestResult = 'none';
        this.connectionTestMessage = '';
        this.connectionTestLatency = 0;
        this.navigateTo('connectorDetails', true);
    }

    private handleBackToMain() {
        this.currentConnectorId = '';
        this.editingConnector = null;
        this.labelErrorConnector = '';
        this.labelOkConnector = '';
        this.labelOkAgent = '';
        this.labelErrorAgent = '';
        this.showDeleteConfirmation = false;
        this.deleteConfirmationInput = '';
        this.newAgentName = '';
        this.newAgentAvatarUrl = '';
        this.isTestingConnection = false;
        this.connectionTestResult = 'none';
        this.connectionTestMessage = '';
        this.connectionTestLatency = 0;
        this.navigateTo('main');
    }

    private handleCancelConnector() {
        this.handleBackToMain();
    }

    private handleConnectorNameChange(e: Event) {
        if (!this.editingConnector) return;
        const input = e.target as HTMLInputElement;
        this.editingConnector = { ...this.editingConnector, name: input.value };
    }

    private handleConnectorUrlChange(e: Event) {
        if (!this.editingConnector) return;
        const input = e.target as HTMLInputElement;
        this.editingConnector = { ...this.editingConnector, baseUrl: input.value };
    }

    private handleGatewayTokenChange(e: Event) {
        if (!this.editingConnector) return;
        const input = e.target as HTMLInputElement;
        this.editingConnector = { ...this.editingConnector, gatewayToken: input.value };
    }

    private handleInboundTokenChange(e: Event) {
        if (!this.editingConnector) return;
        const input = e.target as HTMLInputElement;
        this.editingConnector = { ...this.editingConnector, inboundToken: input.value };
    }

    private handleChangeToken(type: 'gateway' | 'inbound') {
        if (!this.editingConnector) return;
        if (type === 'gateway') {
            this.editingConnector = { ...this.editingConnector, gatewayToken: '', gatewayTokenChanged: true };
        } else {
            this.editingConnector = { ...this.editingConnector, inboundToken: '', inboundTokenChanged: true };
        }
    }

    private handleTimeoutChange(e: Event) {
        if (!this.editingConnector) return;
        const input = e.target as HTMLInputElement;
        this.editingConnector = { ...this.editingConnector, defaultTimeoutMs: parseInt(input.value) || 60000 };
    }

    private handleOutputModeChange(e: Event) {
        if (!this.editingConnector) return;
        const select = e.target as HTMLSelectElement;
        this.editingConnector = { ...this.editingConnector, defaultOutputMode: select.value as msg.OpenClawOutputMode };
    }

    private handleConnectorEnabledToggle() {
        if (!this.editingConnector) return;
        this.editingConnector = { ...this.editingConnector, enabled: !this.editingConnector.enabled };
    }

    private handleGenerateToken(type: 'gateway' | 'inbound') {
        if (!this.editingConnector) return;
        const newToken = generateUUIDv7();
        if (type === 'gateway') {
            this.editingConnector = { ...this.editingConnector, gatewayToken: newToken };
        } else {
            this.editingConnector = { ...this.editingConnector, inboundToken: newToken };
        }
    }

    private async handleToggleConnector(connectorId: string) {
        const connector = this.connectors.find(c => c.connectorId === connectorId);
        if (!connector) return;

        this.connectors = this.connectors.map(c =>
            c.connectorId === connectorId ? { ...c, enabled: !c.enabled } : c
        );

        try {
            // await saveOpenClawConnectors(this.connectors);
        } catch (err: any) {
            this.connectors = this.connectors.map(c =>
                c.connectorId === connectorId ? { ...c, enabled: !c.enabled } : c
            );
        }
    }

    private async handleSaveConnector() {
        if (!this.editingConnector) return;

        this.labelOkConnector = '';
        this.labelErrorConnector = '';

        if (!this.editingConnector.name.trim()) {
            this.labelErrorConnector = this.msg.errorConnectorName;
            return;
        }
        if (!this.editingConnector.baseUrl.trim()) {
            this.labelErrorConnector = this.msg.errorBaseUrl;
            return;
        }

        const isNew = this.editingConnector.isNew;
        if (isNew) {
            if (!this.editingConnector.gatewayToken.trim()) {
                this.labelErrorConnector = this.msg.errorGatewayToken;
                return;
            }
            if (!this.editingConnector.inboundToken.trim()) {
                this.labelErrorConnector = this.msg.errorInboundToken;
                return;
            }
        }

        this.isSavingConnector = true;

        const { isNew: _, gatewayTokenChanged, inboundTokenChanged, ...connectorData } = this.editingConnector;

        let updatedConnectors: IOpenClawConnectorLocal[];
        if (isNew) {
            updatedConnectors = [...this.connectors, connectorData];
        } else {
            updatedConnectors = this.connectors.map(c => {
                if (c.connectorId === connectorData.connectorId) {
                    return {
                        ...c,
                        ...connectorData,
                        gatewayToken: gatewayTokenChanged ? connectorData.gatewayToken : c.gatewayToken,
                        inboundToken: inboundTokenChanged ? connectorData.inboundToken : c.inboundToken,
                    };
                }
                return c;
            });
        }

        try {
            await this.saveOpenClawConnector(this.editingConnector);
            this.connectors = updatedConnectors;
            this.labelOkConnector = this.msg.successSavingConnector;

            if (isNew) {
                this.editingConnector = {
                    ...this.editingConnector,
                    isNew: false,
                    gatewayTokenChanged: false,
                    inboundTokenChanged: false
                };
            }


        } catch (err: any) {
            this.labelErrorConnector = err.message;
        } finally {
            this.isSavingConnector = false;
        }
    }

    private async saveOpenClawConnector(newConnector: IOpenClawConnectorLocal) {

        if (!this.userId) throw new Error('Invalid user id');

        const { isNew, agents, gatewayTokenChanged, inboundTokenChanged, ...payload } = newConnector;

        const result = await msgAddOrUpdateOpenClawConnector({
            userId: this.userId,
            ...payload
        });

        if (!result.success || !result.response) {
            throw new Error(result.error || 'Failed to update the thread avatar. Please try again.');
        };

        return result;
    }


    private async handleTestConnection() {
        if (!this.editingConnector) return;

        const { baseUrl, gatewayToken } = this.editingConnector;

        if (!baseUrl || !gatewayToken) return;

        this.isTestingConnection = true;
        this.connectionTestResult = 'none';
        this.connectionTestMessage = '';
        this.connectionTestLatency = 0;

        const startTime = performance.now();

        try {
            const response = await fetch(`${baseUrl}/v1/chat/completions`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${gatewayToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: 'gpt-4.1',
                    messages: [{ role: 'user', content: 'ping' }],
                    max_tokens: 1,
                    stream: false
                }),
                signal: AbortSignal.timeout(this.editingConnector.defaultTimeoutMs || 30000)
            });

            const endTime = performance.now();
            this.connectionTestLatency = Math.round(endTime - startTime);

            if (response.ok) {
                this.connectionTestResult = 'success';
            } else if (response.status === 401) {
                this.connectionTestResult = 'error';
                this.connectionTestMessage = this.msg.testConnectionErrorAuth;
            } else if (response.status === 403) {
                this.connectionTestResult = 'error';
                this.connectionTestMessage = this.msg.testConnectionErrorAuth;
            } else {
                let errorDetail = '';
                try {
                    const errorBody = await response.json();
                    errorDetail = errorBody?.error?.message || errorBody?.message || '';
                } catch {
                    errorDetail = response.statusText;
                }
                this.connectionTestResult = 'error';
                this.connectionTestMessage = `HTTP ${response.status}${errorDetail ? ': ' + errorDetail : ''}`;
            }
        } catch (error: any) {
            const endTime = performance.now();
            this.connectionTestLatency = Math.round(endTime - startTime);
            this.connectionTestResult = 'error';

            if (error.name === 'TimeoutError' || error.name === 'AbortError') {
                this.connectionTestMessage = this.msg.testConnectionErrorTimeout;
            } else if (error.message?.includes('Failed to fetch') || error.message?.includes('NetworkError')) {
                this.connectionTestMessage = this.msg.testConnectionErrorNetwork;
            } else if (error.message?.includes('CORS')) {
                this.connectionTestMessage = 'Erro de CORS - servidor não permite requisições do navegador';
            } else {
                this.connectionTestMessage = error.message || this.msg.testConnectionErrorUnknown;
            }
        } finally {
            this.isTestingConnection = false;
        }
    }

    // ========== DELETE CONFIRMATION HANDLERS ==========
    private handleToggleDeleteConfirmation() {
        this.showDeleteConfirmation = !this.showDeleteConfirmation;
        this.deleteConfirmationInput = '';
    }

    private handleDeleteConfirmationInput(e: Event) {
        const input = e.target as HTMLInputElement;
        this.deleteConfirmationInput = input.value;
    }

    private handleCancelDelete() {
        this.showDeleteConfirmation = false;
        this.deleteConfirmationInput = '';
    }

    private async handleConfirmDelete(connectorId: string) {
        if (!this.editingConnector) return;

        const connectorName = this.editingConnector.name || `Connector #${connectorId.slice(0, 8)}`;
        if (this.deleteConfirmationInput.trim() !== connectorName) return;

        this.isSavingConnector = true;
        const updatedConnectors = this.connectors.filter(c => c.connectorId !== connectorId);

        try {
            // await saveOpenClawConnectors(updatedConnectors);
            this.connectors = updatedConnectors;
            this.labelOkConnector = this.msg.successRemoveConnector;
            this.showDeleteConfirmation = false;
            this.deleteConfirmationInput = '';
            this.handleBackToMain();
        } catch (err: any) {
            this.labelErrorConnector = err.message;
        } finally {
            this.isSavingConnector = false;
        }
    }

    // ========== AGENT HANDLERS ==========
    private handleOpenAddAgent() {
        this.newAgentName = '';
        this.newAgentAvatarUrl = '';
        this.editingAgent = null;
        this.isNewAgent = true;
        this.labelOkAgent = '';
        this.labelErrorAgent = '';
        this.navigateTo('editAgent', true);
    }

    private handleOpenEditAgent(agent: IOpenClawAgent) {
        this.editingAgent = agent;
        this.newAgentName = agent.identityName;
        this.newAgentAvatarUrl = agent.identityEmoji;
        this.isNewAgent = false;
        this.labelOkAgent = '';
        this.labelErrorAgent = '';
        this.navigateTo('editAgent', true);
    }

    private handleBackToConnectorDetails() {
        this.editingAgent = null;
        this.newAgentName = '';
        this.newAgentAvatarUrl = '';
        this.labelOkAgent = '';
        this.labelErrorAgent = '';
        this.navigateTo('connectorDetails');
    }

    private handleNewAgentNameInput(e: Event) {
        const input = e.target as HTMLInputElement;
        this.newAgentName = input.value;
    }

    private handleNewAgentAvatarInput(e: Event) {
        const input = e.target as HTMLInputElement;
        this.newAgentAvatarUrl = input.value;
    }

    private handleGenerateAgentAvatar() {
        if (this.newAgentName) {
            this.newAgentAvatarUrl = generateAgentAvatar(this.newAgentName);
        }
    }

    private async handleSaveAgent() {
        if (!this.editingConnector) return;

        this.labelOkAgent = '';
        this.labelErrorAgent = '';

        if (!this.newAgentName.trim()) {
            this.labelErrorAgent = this.msg.errorAgentName;
            return;
        }

        this.isSavingAgent = true;
        const sanitizedName = this.newAgentName.toLowerCase().replace(/\s+/g, '');

        /* 
        if (this.isNewAgent) {
            const agentId = generateUUIDv7();
            const newAgent: IOpenClawAgent = {
                id: agentId,
                identityName: this.newAgentName.trim(),
                identityEmoji: this.newAgentAvatarUrl || generateAgentAvatar(this.newAgentName),
                senderId: `integration:openclaw:${sanitizedName}`,
                createdAt: new Date().toISOString()
            };

            this.editingConnector = {
                ...this.editingConnector,
                agents: [...this.editingConnector.agents, newAgent]
            };
        } else if (this.editingAgent) {
            const updatedAgent: IOpenClawAgent = {
                ...this.editingAgent,
                name: this.newAgentName.trim(),
                avatarUrl: this.newAgentAvatarUrl || generateAgentAvatar(this.newAgentName),
                senderId: `integration:openclaw:${sanitizedName}`,
            };

            this.editingConnector = {
                ...this.editingConnector,
                agents: this.editingConnector.agents.map(a =>
                    a.id === this.editingAgent!.id ? updatedAgent : a
                )
            };
        }

        try {
            const updatedConnectors = this.connectors.map(c =>
                c.connectorId === this.editingConnector!.connectorId
                    ? { ...c, agents: this.editingConnector!.agents }
                    : c
            );

            if (!this.editingConnector.isNew) {
                // await saveOpenClawConnectors(updatedConnectors);
                this.connectors = updatedConnectors;
            }

            this.labelOkAgent = this.msg.successAddingAgent;

            setTimeout(() => {
                this.handleBackToConnectorDetails();
            }, 1000);

        } catch (err: any) {
            this.labelErrorAgent = err.message;
        } finally {
            this.isSavingAgent = false;
        }
        */
    }

    private async handleRemoveAgent(agentId: string) {
        if (!this.editingConnector) return;
        if (!confirm(this.msg.confirmRemoveAgent)) return;

        this.editingConnector = {
            ...this.editingConnector,
            agents: this.editingConnector.agents.filter(a => a.id !== agentId)
        };

        if (!this.editingConnector.isNew) {
            try {
                const updatedConnectors = this.connectors.map(c =>
                    c.connectorId === this.editingConnector!.connectorId
                        ? { ...c, agents: this.editingConnector!.agents }
                        : c
                );
                // await saveOpenClawConnectors(updatedConnectors);
                this.connectors = updatedConnectors;
            } catch (err: any) {
                console.error('Error removing agent:', err);
            }
        }
    }
}