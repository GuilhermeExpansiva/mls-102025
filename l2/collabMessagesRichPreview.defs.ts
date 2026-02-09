/// <mls fileReference="_102025_/l2/collabMessagesRichPreview.ts" enhancement="_blank" />

// Do not change – automatically generated code. 

export const asis: mls.defs.AsIs = {
  "meta": {
    "fileReference": "_102025_/l2/collabMessagesRichPreview.ts",
    "componentType": "molecule",
    "componentScope": "appFrontEnd",
    "languages": [
      "pt"
    ],
    "devFidelity": "final"
  },
  "references": {
    "webComponents": [
      "collab-messages-rich-preview-102025"
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
        "ref": "/_102025_/l2/collabMessagesTextCode.js"
      },
      {
        "ref": "lit",
        "dependencies": [
          {
            "name": "html",
            "type": "function"
          },
          {
            "name": "unsafeHTML",
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
          }
        ]
      }
    ]
  },
  "codeInsights": {
    "securityWarnings": [
      "Uses unsafeHTML which requires trusted input to prevent XSS"
    ],
    "deadCodeBlocks": [
      "parseRawLinks2 method is defined but never used"
    ],
    "accessibilityIssues": [
      "Copy buttons use inline onclick handlers without keyboard accessibility",
      "Interactive elements lack ARIA labels"
    ],
    "i18nWarnings": [
      "Hardcoded Portuguese strings: 'Copiar código', 'Copiar', 'Copiado!'"
    ]
  },
  "asIs": {
    "semantic": {
      "generalDescription": "Lit web component that renders Slack-style markdown text with rich previews including syntax-highlighted code blocks, mentions, channels, and interactive elements",
      "businessCapabilities": [
        "Render rich text messages with markdown formatting",
        "Display code blocks with syntax highlighting and copy functionality",
        "Highlight user mentions and channel references",
        "Parse and render interactive elements like commands and help references"
      ],
      "technicalCapabilities": [
        "Parse Slack-style markdown to HTML",
        "Extract and protect code blocks and inline code from markdown parsing",
        "Render recursive code blocks using web components",
        "Handle user mentions (@user), channel references (#channel), and agent mentions (@@agent)",
        "Parse commands (/command), object references (_object), and help references (?help)",
        "Convert URLs to clickable links",
        "Support blockquotes, ordered lists, and unordered lists",
        "Support bold, italic, and strikethrough text formatting",
        "Emit custom events on hover and click for interactive elements"
      ],
      "implementedFeatures": [
        "Slack-style markdown parsing with blockquote support",
        "Code block extraction with language detection and copy button",
        "Inline code extraction with copy functionality",
        "User mention parsing with profile linking",
        "Channel reference parsing",
        "Agent mention parsing",
        "Command parsing and highlighting",
        "Object reference parsing",
        "Help reference parsing",
        "Raw URL auto-linking",
        "Markdown URL parsing",
        "Ordered and unordered list support",
        "Bold, italic, and strikethrough formatting",
        "Dynamic event attachment for hover and click interactions",
        "AbortController for event cleanup"
      ],
      "constraints": [
        "Uses unsafeHTML requiring trusted input sanitization",
        "Contains dead code in parseRawLinks2 method",
        "Hardcoded Portuguese UI strings limit internationalization"
      ]
    }
  }
}
    