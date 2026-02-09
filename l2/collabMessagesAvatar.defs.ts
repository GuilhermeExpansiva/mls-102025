/// <mls fileReference="_102025_/l2/collabMessagesAvatar.ts" enhancement="_blank" />

// Do not change – automatically generated code. 

export const asis: mls.defs.AsIs = {
  "meta": {
    "fileReference": "_102025_/l2/collabMessagesAvatar.ts",
    "componentType": "molecule",
    "componentScope": "appFrontEnd"
  },
  "references": {
    "webComponents": [
      "collab-messages-avatar-102025"
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
            "name": "collab_user",
            "type": "constant"
          }
        ]
      }
    ]
  },
  "asIs": {
    "semantic": {
      "generalDescription": "LitElement web component for displaying user avatars with support for SVG, images, or fallback icons",
      "businessCapabilities": [
        "Display user avatar image",
        "Show default user icon when no avatar provided"
      ],
      "technicalCapabilities": [
        "Render SVG content using unsafeHTML",
        "Render image URLs using img tag",
        "Dynamic CSS custom properties for sizing",
        "Reactive property updates"
      ],
      "implementedFeatures": [
        "SVG avatar rendering",
        "Image avatar rendering",
        "Default placeholder icon",
        "Configurable width and height properties",
        "CSS custom property injection for dimensions"
      ]
    }
  }
}
    