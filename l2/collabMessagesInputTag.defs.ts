/// <mls fileReference="_102025_/l2/collabMessagesInputTag.ts" enhancement="_blank" />

// Do not change – automatically generated code. 

export const asis: mls.defs.AsIs = {
  "meta": {
    "fileReference": "_102025_/l2/collabMessagesInputTag.ts",
    "componentType": "molecule",
    "componentScope": "appFrontEnd"
  },
  "references": {
    "imports": [
      {
        "ref": "lit",
        "dependencies": [
          {
            "name": "html",
            "type": "function"
          },
          {
            "name": "ifDefined",
            "type": "function"
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
            "name": "query",
            "type": "function"
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
  "codeInsights": {
    "securityWarnings": [
      "Dynamic RegExp construction with user-provided pattern property may lead to ReDoS if pattern is not sanitized"
    ],
    "performanceHints": [
      "Usage of deprecated keyCode property instead of key for keyboard events"
    ]
  },
  "asIs": {
    "semantic": {
      "generalDescription": "Lit-based web component for inputting and managing tags with validation support",
      "businessCapabilities": [
        "Tag input and collection management",
        "Tag validation against regex patterns",
        "Duplicate tag prevention",
        "Tag deletion functionality"
      ],
      "technicalCapabilities": [
        "Custom form input element with value getter/setter",
        "Keyboard event handling for Enter, Comma and Backspace keys",
        "Real-time validation feedback with CSS classes",
        "Lit reactive updates",
        "Public API for programmatic tag manipulation"
      ],
      "implementedFeatures": [
        "Tag addition via Enter key or comma character",
        "Tag deletion via Backspace when input is empty",
        "Regex pattern validation for tag format",
        "Visual feedback for invalid and duplicate tags",
        "Comma-separated value serialization",
        "Placeholder support",
        "Custom change callback support"
      ]
    }
  }
}
    