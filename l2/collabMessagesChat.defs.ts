/// <mls fileReference="_102025_/l2/collabMessagesChat.defs.ts" enhancement="_blank" />

// Do not change – automatically generated code. 

export const asis: mls.defs.AsIs = {
  "meta": {
    "fileReference": "_102025_/l2/collabMessagesChat.ts",
    "componentType": "organism",
    "componentScope": "appFrontEnd",
    "languages": [
      "en",
      "pt"
    ],
    "group": "CONNECT",
    "devFidelity": "final"
  },
  "references": {
    "webComponents": [
      "collab-messages-prompt-102025",
      "collab-messages-task-info-102025",
      "collab-messages-task-102025",
      "collab-messages-topics-102025",
      "collab-messages-avatar-102025",
      "collab-messages-thread-details-102025",
      "collab-messages-user-modal-102025",
      "collab-messages-thread-modal-102025",
      "collab-messages-filter-102025",
      "collab-messages-add-102025",
      "collab-messages-chat-message-102025",
      "collab-messages-rich-preview-text-102025",
      "collab-messages-text-code-102025"
    ],
    "imports": [
      {
        "ref": "/_102025_/l2/collabMessagesIcons.js",
        "dependencies": [
          {
            "name": "collab_chevron_left",
            "type": "constant"
          },
          {
            "name": "collab_gear",
            "type": "constant"
          },
          {
            "name": "collab_translate",
            "type": "constant"
          },
          {
            "name": "collab_circle_exclamation",
            "type": "constant"
          },
          {
            "name": "collab_plus",
            "type": "constant"
          },
          {
            "name": "collab_folder_tree",
            "type": "constant"
          }
        ]
      },
      {
        "ref": "/_102025_/l2/collabMessagesSyncNotifications.js",
        "dependencies": [
          {
            "name": "removeThreadFromSync",
            "type": "function"
          },
          {
            "name": "getThreadUpdateInBackground",
            "type": "function"
          },
          {
            "name": "checkIfNotificationUnread",
            "type": "function"
          }
        ]
      },
      {
        "ref": "/_100554_/l2/libCommom.js",
        "dependencies": [
          {
            "name": "openElementInServiceDetails",
            "type": "function"
          },
          {
            "name": "clearServiceDetails",
            "type": "function"
          },
          {
            "name": "changeFavIcon",
            "type": "function"
          }
        ]
      },
      {
        "ref": "/_100554_/l2/aiAgentHelper.js",
        "dependencies": [
          {
            "name": "getTemporaryContext",
            "type": "function"
          },
          {
            "name": "formatTimestamp",
            "type": "function"
          },
          {
            "name": "notifyThreadChange",
            "type": "function"
          }
        ]
      },
      {
        "ref": "/_100554_/l2/aiAgentOrchestration.js",
        "dependencies": [
          {
            "name": "loadAgent",
            "type": "function"
          },
          {
            "name": "executeBeforePrompt",
            "type": "function"
          }
        ]
      },
      {
        "ref": "/_102025_/l2/collabMessagesIndexedDB.js",
        "dependencies": [
          {
            "name": "addOrUpdateTask",
            "type": "function"
          },
          {
            "name": "addMessages",
            "type": "function"
          },
          {
            "name": "addMessage",
            "type": "function"
          },
          {
            "name": "updateThread",
            "type": "function"
          },
          {
            "name": "updateUsers",
            "type": "function"
          },
          {
            "name": "getMessage",
            "type": "function"
          },
          {
            "name": "getMessagesByThreadId",
            "type": "function"
          },
          {
            "name": "deleteAllMessagesFromThread",
            "type": "function"
          },
          {
            "name": "listUsers",
            "type": "function"
          },
          {
            "name": "getThread",
            "type": "function"
          },
          {
            "name": "updateLastMessageReadTime",
            "type": "function"
          }
        ]
      },
      {
        "ref": "/_102025_/l2/collabMessagesHelper.js",
        "dependencies": [
          {
            "name": "getBotsContext",
            "type": "function"
          },
          {
            "name": "registerToken",
            "type": "function"
          },
          {
            "name": "loadNotificationPreferences",
            "type": "function"
          },
          {
            "name": "loadNotificationDeviceId",
            "type": "function"
          },
          {
            "name": "defaultThreadImage",
            "type": "constant"
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
            "name": "AGENTDEFAULT",
            "type": "constant"
          }
        ]
      },
      {
        "ref": "/_102025_/l2/collabMessagesPrompt.js",
        "dependencies": [
          {
            "name": "CollabMessagesPrompt",
            "type": "class"
          }
        ]
      },
      {
        "ref": "/_102025_/l2/collabMessagesChatMessage.js",
        "dependencies": [
          {
            "name": "CollabMessagesChatMessage102025",
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
      "generalDescription": "Chat interface component for Collab Messages system with thread management, message rendering, and AI agent integration",
      "businessCapabilities": [
        "Display and manage chat threads with status filtering (active, archived, deleting, deleted)",
        "Send and receive messages with real-time updates",
        "Handle AI agent interactions with special mention syntax",
        "Manage thread participants and thread details",
        "Support message threading with replies and reactions",
        "Display task information linked to messages",
        "Handle notification badges and unread message counts",
        "Support message search and filtering by topics",
        "Manage thread lifecycle (archive, delete, restore)",
        "Support direct message threads with user avatars"
      ],
      "technicalCapabilities": [
        "LitElement-based web component with reactive state management",
        "IndexedDB integration for local message caching and offline support",
        "Server API integration for message synchronization (mls.api.msgGetMessagesAfter, mls.api.msgGetMessagesBefore, mls.api.msgAddMessage, mls.api.msgGetThreadUpdate, mls.api.msgGetTaskUpdate)",
        "AI agent orchestration with dynamic agent loading and execution",
        "Custom event handling for task changes, thread changes, and message sends",
        "Scroll-based pagination for message history (infinite scroll)",
        "Clipboard integration with custom copy formatting for chat content",
        "Internationalization support with English and Portuguese",
        "Responsive UI with mobile-friendly design",
        "Web Components composition pattern for modular UI"
      ],
      "implementedFeatures": [
        "Thread list view with grouping by prefix and status",
        "Chat message view with date grouping and sender consolidation",
        "Message prompt with @ mentions and @@ agent mentions",
        "Topic filtering for messages",
        "Thread search/filter functionality",
        "Task detail view integration",
        "Thread detail configuration view",
        "Thread creation view",
        "Welcome message display for new threads",
        "Message status indicators (failed, loading, sent)",
        "Unread message badge and scroll-to-unread behavior",
        "Archive/Delete thread status display with date formatting",
        "Copy-to-clipboard with formatted message extraction",
        "Notification token registration for push notifications",
        "Background thread synchronization"
      ]
    }
  }
}
    