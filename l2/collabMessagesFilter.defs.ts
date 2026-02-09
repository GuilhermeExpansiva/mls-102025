/// <mls fileReference="_102025_/l2/collabMessagesFilter.ts" enhancement="_blank" />

// Do not change – automatically generated code. 

export const asis: mls.defs.AsIs = {
  "meta": {
    "fileReference": "_102025_/l2/collabMessagesFilter.ts",
    "componentType": "molecule",
    "componentScope": "appFrontEnd",
    "languages": [
      "pt"
    ]
  },
  "references": {
    "webComponents": [
      "collab-messages-filter-102025"
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
            "name": "classMap",
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
            "name": "state",
            "type": "function"
          },
          {
            "name": "property",
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
      },
      {
        "ref": "/_102025_/l2/collabMessagesIcons.js",
        "dependencies": [
          {
            "name": "collab_magnifying_glass",
            "type": "constant"
          }
        ]
      }
    ]
  },
  "codeInsights": {
    "unusedImports": [
      "state"
    ],
    "i18nWarnings": [
      "Fechar pesquisa",
      "Buscar"
    ],
    "accessibilityIssues": [
      "Button uses title attribute without aria-label",
      "Missing aria-expanded state on toggle button"
    ]
  },
  "asIs": {
    "semantic": {
      "generalDescription": "Expandable search filter component with toggle functionality and real-time input handling",
      "businessCapabilities": [
        "Filter content by text query",
        "Toggle search input visibility",
        "Clear search query on close"
      ],
      "technicalCapabilities": [
        "Dispatch custom search-change events",
        "Handle keyboard Escape key",
        "Manage input focus on expand",
        "Toggle CSS classes for visual states"
      ],
      "implementedFeatures": [
        "Expandable search input",
        "Keyboard navigation with Escape key",
        "Real-time input change dispatch",
        "Icon button toggle",
        "Click-outside-to-toggle behavior"
      ],
      "constraints": [
        "Fixed 100ms timeout for focus management"
      ]
    }
  }
}
    