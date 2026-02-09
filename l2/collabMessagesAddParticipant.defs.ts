/// <mls fileReference="_102025_/l2/collabMessagesAddParticipant.ts" enhancement="_blank" />

// Do not change – automatically generated code. 

export const asis: mls.defs.AsIs = {
  "meta": {
    "fileReference": "_102025_/l2/collabMessagesAddParticipant.ts",
    "componentType": "organism",
    "componentScope": "appFrontEnd",
    "languages": [
      "en",
      "pt"
    ],
    "devFidelity": "final"
  },
  "references": {
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
        "ref": "/_102025_/l2/collabMessagesIndexedDB.js",
        "dependencies": [
          {
            "name": "updateThread",
            "type": "function"
          },
          {
            "name": "updateUsers",
            "type": "function"
          }
        ]
      },
      {
        "ref": "/_100554_/l2/aiAgentHelper.js",
        "dependencies": [
          {
            "name": "notifyThreadChange",
            "type": "function"
          }
        ]
      }
    ]
  },
  "asIs": {
    "semantic": {
      "generalDescription": "Lit web component for adding participants to a collaboration message thread with user autocomplete and permission selection",
      "businessCapabilities": [
        "Add participant to message thread",
        "Search and select users from available list",
        "Assign user permissions (admin, moderator, read, write, none)",
        "Validate required form fields",
        "Display operation success or error feedback"
      ],
      "technicalCapabilities": [
        "Real-time user autocomplete with keyboard navigation",
        "Internationalization support for English and Portuguese",
        "Integration with messaging API for user management",
        "IndexedDB synchronization for thread and user data",
        "Custom event dispatching on participant addition",
        "Form state management with loading indicators"
      ],
      "implementedFeatures": [
        "Text input with autocomplete suggestions dropdown",
        "Keyboard navigation for suggestions (ArrowUp, ArrowDown, Enter, Tab)",
        "Permission level selection dropdown",
        "Submit button with loading spinner state",
        "Success and error message display",
        "Automatic suggestion filtering on input",
        "Blur handling with delayed cleanup"
      ],
      "constraints": [
        "Requires actualThread and userId properties to be set",
        "Validates that userIdOrName and auth fields are populated",
        "Success message auto-clears after 3 seconds",
        "Suggestions dropdown closes 200ms after blur event"
      ]
    }
  }
}
    