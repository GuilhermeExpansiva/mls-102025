/// <mls fileReference="_102025_/l2/collabMessagesPrompt.defs.ts" enhancement="_blank" />

// Do not change – automatically generated code. 

export const asis: mls.defs.AsIs = {
  "meta": {
    "fileReference": "_102025_/l2/collabMessagesPrompt.ts",
    "componentType": "molecule",
    "componentScope": "appFrontEnd",
    "languages": [
      "en",
      "pt"
    ],
    "group": "collabMessages"
  },
  "references": {
    "webComponents": [
      "collab-messages-avatar-102025"
    ],
    "imports": [
      {
        "ref": "/_100554_/l2/stateLitElement.js",
        "dependencies": [
          {
            "name": "StateLitElement",
            "type": "class"
          }
        ]
      },
      {
        "ref": "/_100554_/l2/aiAgentBase.js",
        "dependencies": [
          {
            "name": "IAgent",
            "type": "interface"
          }
        ]
      },
      {
        "ref": "/_102025_/l2/collabMessagesIcons.js",
        "dependencies": [
          {
            "name": "collab_arrow_up_long",
            "type": "?"
          }
        ]
      },
      {
        "ref": "/_102025_/l2/collabMessagesIndexedDB.js",
        "dependencies": [
          {
            "name": "getThread",
            "type": "function"
          },
          {
            "name": "listUsers",
            "type": "function"
          }
        ]
      },
      {
        "ref": "/_102025_/l2/collabMessagesEmojis.js",
        "dependencies": [
          {
            "name": "emojiList",
            "type": "?"
          }
        ]
      },
      {
        "ref": "/_102025_/l2/collabMessagesAvatar.js"
      }
    ],
    "statesRO": [
      "mls.stor.files"
    ],
    "statesRW": [
      "ui.mentionActive",
      "ui.mentionQuery",
      "ui.mentionSuggestions",
      "ui.mentionIndex",
      "ui.allUsers",
      "ui.allAgents",
      "ui.alreadyLoadingAgents",
      "ui.lastScopeLoaded",
      "ui.replyingTo",
      "ui.text",
      "ui.actualMention"
    ]
  },
  "codeInsights": {
    "todos": [],
    "securityWarnings": [],
    "unusedImports": [],
    "deadCodeBlocks": [],
    "accessibilityIssues": [],
    "i18nWarnings": [
      "Responding to",
      "Cancel reply",
      "Replying to"
    ],
    "performanceHints": []
  },
  "asIs": {
    "semantic": {
      "generalDescription": "Chat message input component with autocomplete for users, agents, and emojis",
      "businessCapabilities": [
        "Message composition",
        "User mention autocomplete",
        "Agent mention autocomplete",
        "Emoji autocomplete",
        "Reply to message",
        "Multi-language support (EN/PT)"
      ],
      "technicalCapabilities": [
        "Lit-based web component",
        "Textarea auto-resize",
        "Caret position calculation",
        "Mention suggestion dropdown",
        "Keyboard navigation for suggestions",
        "Dynamic agent loading from files",
        "Visual viewport resize handling",
        "Custom event dispatch for textarea resize"
      ],
      "implementedFeatures": [
        "@user mention autocomplete with avatar",
        "@@agent mention autocomplete with avatar",
        "::emoji autocomplete",
        "Reply preview with cancel",
        "Ctrl+Enter to send",
        "Dynamic textarea height adjustment",
        "Mention suggestion keyboard navigation (ArrowUp/ArrowDown/Tab/Enter)",
        "Agent filtering by scope",
        "User mention markdown conversion on send"
      ],
      "constraints": [
        "Requires threadId for user autocomplete",
        "Requires scope property for agent filtering",
        "Agents must have 'public' visibility",
        "Agent files must export createAgent function",
        "Emoji suggestions limited to 10 results",
        "Max textarea height 200px",
        "Min textarea height 40px"
      ]
    }
  }
}
    