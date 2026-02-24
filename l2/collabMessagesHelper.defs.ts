/// <mls fileReference="_102025_/l2/collabMessagesHelper.defs.ts" enhancement="_blank" />

// Do not change – automatically generated code. 

export const asis: mls.defs.AsIs = {
  "meta": {
    "fileReference": "_102025_/l2/collabMessagesHelper.ts",
    "componentType": "tool",
    "componentScope": "appFrontEnd"
  },
  "references": {
    "imports": [
      {
        "ref": "/_100554_/l2/aiAgentHelper.js",
        "dependencies": [
          {
            "name": "getTemporaryContext",
            "type": "function"
          },
          {
            "name": "notifyMessageSendChange",
            "type": "function"
          },
          {
            "name": "notifyThreadChange",
            "type": "function"
          },
          {
            "name": "notifyThreadCreate",
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
            "name": "addThread",
            "type": "function"
          },
          {
            "name": "listThreads",
            "type": "function"
          },
          {
            "name": "updateThread",
            "type": "function"
          }
        ]
      }
    ]
  },
  "asIs": {
    "semantic": {
      "generalDescription": "Helper module for collaborative messaging features including FCM token registration, message handling with agent integration, thread management, and local storage persistence for chat preferences and notification settings",
      "businessCapabilities": [
        "Register FCM notification tokens",
        "Send messages with optional bot context",
        "Create and manage chat threads",
        "Handle direct message threads",
        "Persist chat preferences to localStorage",
        "Manage notification preferences and audio settings",
        "Load and migrate legacy localStorage data"
      ],
      "technicalCapabilities": [
        "Integrate with AI agents for message processing",
        "Interact with IndexedDB for thread storage",
        "Call messaging API endpoints",
        "Generate cryptographically secure device IDs",
        "Extract agent names from message prefixes",
        "Merge bot context variables"
      ],
      "implementedFeatures": [
        "FCM token registration with device ID generation",
        "Message sending with bot context support",
        "Agent name extraction from @@ prefixed messages",
        "Thread creation for groups and DMs",
        "DM thread deduplication check",
        "LocalStorage persistence for preferences",
        "Legacy data migration from old keys",
        "Notification preference management",
        "Audio notification toggle",
        "Last tab persistence",
        "User ID management",
        "Default chat preferences loading"
      ]
    }
  }
}
    