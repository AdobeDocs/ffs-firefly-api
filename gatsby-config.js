/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

module.exports = {
  pathPrefix: process.env.PATH_PREFIX || '/firefly-api/',
  siteMetadata: {
    pages: [
      {
        title: 'Overview',
        path: '/'
      },
      {
        title: 'Getting Started',
        path: '/getting-started/'
      },
      {
        title: 'Guides',
        path: '/guides/'
      },
      {
        title: 'API Reference',
        path: '/api/'
      }
    ],
    subPages: [
      {
        title: 'Quickstart',
        path: '/guides/',
      },
      {
        title: 'Concepts',
        path: '/guides/concepts/custom-models/',
        pages: [
          {
            title: 'Custom Models Overview',
            path: '/guides/concepts/custom-models/'
          },
          {
            title: 'Style Presets',
            path: '/guides/concepts/style-presets/'
          },
          {
            title: 'Style Image Reference',
            path: '/guides/concepts/style-image-reference/'
          },
          {
            title: 'Structure Image Reference',
            path: '/guides/concepts/structure-image-reference/'
          },
          {
            title: 'Image Upload',
            path: '/guides/concepts/image-upload/'
          },
          {
            title: 'Using Masks',
            path: '/guides/concepts/masking/'
          },
          {
            title: 'Using Placement',
            path: '/guides/concepts/placement/'
          },
          {
            title: 'Seeds',
            path: '/guides/concepts/seeds/'
          },
          {
            title: 'Rate Limits',
            path: '/guides/concepts/rate-limits/'
          }
        ]
        },
        {
          title: 'How-Tos',
          path: '/guides/how-tos/firefly-generate-image-api-tutorial/',
          pages:[
            {
              title: 'Firefly Generate Image API Tutorial',
              path: '/guides/how-tos/firefly-generate-image-api-tutorial/'
            },
            {
              title: 'Firefly Expand Image API Tutorial',
              path: '/guides/how-tos/firefly-expand-image-api-tutorial/'
            },
            {
              title: 'Firefly Fill Image API Tutorial',
              path: '/guides/how-tos/firefly-fill-image-api-tutorial/'
            },
            {
              title: 'Using the Firefly Asynchronous API',
              path: '/guides/how-tos/using-async-apis/'
            },
            {
              title: 'Custom Models Generate Image API Tutorial',
              path: '/guides/how-tos/cm-generate-image/'
            },
            {
              title: 'Grant apps access to a Custom Model',
              path: '/guides/how-tos/cm-share-model/'
            }
          ]
        },
      {
        title: 'Getting Started',
        path: '/getting-started/',
        header: true,
        pages: [
          {
            title: 'Authentication',
            path: '/getting-started/'
          },
          {
            title: 'Create Credentials',
            path: '/getting-started/create-credentials/'
          },
          {
            title: 'Using Adobe Developer Console',
            path: '/getting-started/dev-console/'
          },
          {
            title: 'Technical Usage Notes',
            path: '/getting-started/usage-notes/'
          },
          {
            title: 'Help',
            path: '/getting-started/help/best-practices/',
            pages:[
              {
                title: 'Best Practices',
                path: '/getting-started/help/best-practices/'
              },
              {
                title: 'Troubleshooting',
                path: '/getting-started/help/troubleshooting/'
              }
            ]
          },
          {
            title: 'Changelog',
            path: '/getting-started/changelog/'
          }
        ]
      },
    ]
  },
  plugins: [`@adobe/gatsby-theme-aio`]
};