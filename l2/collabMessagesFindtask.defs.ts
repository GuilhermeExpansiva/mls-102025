/// <mls fileReference="_102025_/l2/collabMessagesFindtask.ts" enhancement="_blank" />

// Do not change – automatically generated code. 

export const asis: mls.defs.AsIs = {
  "meta": {
    "fileReference": "_102025_/l2/collabMessagesFindtask.ts",
    "componentType": "organism",
    "componentScope": "appFrontEnd",
    "languages": [
      "en",
      "pt"
    ]
  },
  "references": {
    "webComponents": [
      "collab-messages-task-details-102025"
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
        "ref": "/_100554_/l2/serviceBase.js",
        "dependencies": [
          {
            "name": "ServiceBase",
            "type": "class"
          }
        ]
      },
      {
        "ref": "/_102025_/l2/collabMessagesHelper.js",
        "dependencies": [
          {
            "name": "getUserId",
            "type": "function"
          }
        ]
      },
      {
        "ref": "/_102025_/l2/collabMessagesTaskDetails.js",
        "dependencies": []
      }
    ]
  },
  "asIs": {
    "semantic": {
      "generalDescription": "LitElement web component for finding tasks by message ID and task ID",
      "businessCapabilities": [
        "Search tasks by message and task identifiers",
        "Display task search interface"
      ],
      "technicalCapabilities": [
        "LitElement-based UI component",
        "API integration for task retrieval",
        "Internationalization support",
        "State management for loading and form inputs"
      ],
      "implementedFeatures": [
        "Input fields for MessageId and TaskId",
        "Search button with loading state indicator",
        "Integration with collab-messages-task-details component",
        "Error handling via ServiceBase",
        "Bilingual support (English and Portuguese)"
      ]
    }
  }
}
    