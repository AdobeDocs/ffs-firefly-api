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
        path: '/guides/concepts/authentication/',
        pages: [
          // {
          //   title: 'Get Credentials',
          //   path: '/guides/concepts/create-credentials/'
          // },
          {
            title: 'Authentication',
            path: '/guides/concepts/authentication/'
          },
          {
            title: 'Image Model Styles',
            path: '/guides/concepts/styles/'
          },
          {
            title: 'Rate limits',
            path: '/guides/concepts/rate-limits/'
          },
          {
            title: ' Seed ID',
            path: '/guides/concepts/seed-id'

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
        title: 'Changelog',
        path: '/guides/changelog/',
      },
      {
        title: 'Help',
        path: '/guides/help/best-practices/',
        pages:[
          {
            title: 'Best Practices',
            path: '/guides/help/best-practices/'
          },
          {
            title: 'Troubleshooting',
            path: '/guides/help/troubleshooting/'
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
          }
        ]
      },
    ]
  },
  plugins: [`@adobe/gatsby-theme-aio`]
};