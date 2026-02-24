/// <mls fileReference="_102025_/l2/collabMessagesChatMessage.defs.ts" enhancement="_blank" />

// Do not change – automatically generated code. 

export const asis: mls.defs.AsIs = {
  "meta": {
    "fileReference": "_102025_/l2/collabMessagesChatMessage.ts",
    "componentType": "molecule",
    "componentScope": "appFrontEnd",
    "languages": [
      "en",
      "pt"
    ],
    "devFidelity": "final"
  },
  "references": {
    "webComponents": [
      "collab-messages-task-102025",
      "collab-messages-avatar-102025",
      "collab-messages-rich-preview-text-102025",
      "collab-messages-user-modal-102025",
      "collab-messages-thread-modal-102025"
    ],
    "imports": [
      {
        "ref": "lit",
        "dependencies": [
          {
            "name": "html",
            "type": "function"
          },
          {
            "name": "nothing",
            "type": "constant"
          },
          {
            "name": "LitElement",
            "type": "class"
          }
        ]
      },
      {
        "ref": "lit/decorators.js",
        "dependencies": [
          {
            "name": "customElement",
            "type": "function"
          },
          {
            "name": "property",
            "type": "function"
          },
          {
            "name": "state",
            "type": "function"
          }
        ]
      },
      {
        "ref": "/_102025_/l2/collabMessagesIcons.js",
        "dependencies": [
          {
            "name": "collab_translate",
            "type": "constant"
          },
          {
            "name": "collab_circle_exclamation",
            "type": "constant"
          },
          {
            "name": "collab_smile",
            "type": "constant"
          },
          {
            "name": "collab_chevron_down",
            "type": "constant"
          },
          {
            "name": "collab_reply",
            "type": "constant"
          },
          {
            "name": "collab_copy",
            "type": "constant"
          },
          {
            "name": "collab_edit",
            "type": "constant"
          },
          {
            "name": "collab_delete",
            "type": "constant"
          }
        ]
      },
      {
        "ref": "/_100554_/l2/aiAgentHelper.js",
        "dependencies": [
          {
            "name": "formatTimestamp",
            "type": "function"
          }
        ]
      },
      {
        "ref": "/_102025_/l2/collabMessagesHelper.js",
        "dependencies": [
          {
            "name": "loadChatPreferences",
            "type": "function"
          },
          {
            "name": "IChatPreferences",
            "type": "interface"
          },
          {
            "name": "IMessage",
            "type": "interface"
          },
          {
            "name": "IThreadInfo",
            "type": "interface"
          },
          {
            "name": "MessageReactions",
            "type": "type"
          },
          {
            "name": "IMessageReply",
            "type": "interface"
          }
        ]
      },
      {
        "ref": "/_100554_/l2/stateLitElement.js",
        "dependencies": [
          {
            "name": "StateLitElement",
            "type": "class"
          }
        ]
      }
    ]
  },
  "asIs": {
    "semantic": {
      "generalDescription": "LitElement-based chat message component displaying messages with reactions translations replies and rich text support",
      "businessCapabilities": [
        "Display chat messages with user/system distinction",
        "Handle emoji reactions on messages",
        "Support message threading and reply previews",
        "Display message translations in multiple modes",
        "Render rich text content with mentions and channel links",
        "Show message status indicators",
        "Provide message actions menu",
        "Display user avatars and names",
        "Render AI task messages with metadata",
        "Show message timestamps"
      ],
      "technicalCapabilities": [
        "LitElement web component implementation",
        "State management via StateLitElement",
        "Custom event dispatching for interactions",
        "Dynamic DOM creation for modals",
        "CSS-based reaction picker positioning",
        "Translation mode state handling",
        "Message reaction toggle logic",
        "Viewport-aware menu placement"
      ],
      "implementedFeatures": [
        "Message rendering with conditional styling",
        "Reaction system with emoji picker",
        "Reply functionality with preview",
        "Internationalization support",
        "Rich text preview with hover modals",
        "Message menu with actions",
        "Task result display with translation",
        "Message footer rendering"
      ]
    }
  }
}
    