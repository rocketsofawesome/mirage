import React from 'react'
import { defaultProps as imageProps } from 'SRC/components/contentful/image/defaultProps'

const defaultProps = {
  children: <h1>Example</h1>,
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "gmjegezzs4fa"
      }
    },
    "id": "5ViSPU4zcT0i0OLCvm8Lx9",
    "type": "Entry",
    "createdAt": "2019-02-05T22:02:20.222Z",
    "updatedAt": "2019-06-05T13:58:48.761Z",
    "environment": {
      "sys": {
        "id": "master",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "revision": 5,
    "contentType": {
      "sys": {
        "type": "Link",
        "linkType": "ContentType",
        "id": "responsiveImage"
      }
    },
    "locale": "en-US"
  },
  "fields": {
    "title": "Boys Bestsellers 2019",
    "defaultImage": {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "gmjegezzs4fa"
          }
        },
        "id": "dsMuJwggZGXXtfyjs6VcD",
        "type": "Asset",
        "createdAt": "2019-05-01T19:25:30.324Z",
        "updatedAt": "2019-06-05T13:58:45.790Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 3,
        "locale": "en-US"
      },
      "fields": {
        "title": "Boys Bestsellers 2019",
        "file": {
          "url": "//images.ctfassets.net/gmjegezzs4fa/dsMuJwggZGXXtfyjs6VcD/4c582f438d8b4fd3444be543392e7c3d/BESTSELLERS_SUMMER_2019_SPLIT_TOUT2.jpg",
          "details": {
            "size": 37792,
            "image": {
              "width": 549,
              "height": 720
            }
          },
          "fileName": "BESTSELLERS_SUMMER_2019_SPLIT_TOUT2.jpg",
          "contentType": "image/jpeg"
        }
      }
    }
  }
}

export default defaultProps
