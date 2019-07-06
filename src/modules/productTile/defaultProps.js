const exampleClickHandler = (sku) => () => { alert(`${sku} clicked`) }
const productWithVariants = {
  product:   {
    "_index": "colorways_development_20190706143737041",
    "_type": "colorway",
    "_id": "4419",
    "_score": null,
    "sort": [
      5860001
    ],
    "color_family": "blue",
    "color": "Heather Navy",
    "nav_taxons": [
      "shop/girls",
      "shop/girls/just-in",
      "featured-products/summer-2019",
      "shop/girls-best-sellers",
      "shop/girls-new-arrivals",
      "shop/girls-new-arrivals/graphics",
      "shop/girls",
      "shop/girls/tops",
      "shop/girls/tops/graphics-shop"
    ],
    "nav_categories": [
      "Girls",
      "Just In",
      "Girls New Arrivals",
      "Graphics",
      "Girls",
      "Tops",
      "Graphics Shop"
    ],
    "skus": [
      {
        "size": [
          "6"
        ],
        "in_stock": true
      },
      {
        "size": [
          "8"
        ],
        "in_stock": true
      },
      {
        "size": [
          "7"
        ],
        "in_stock": true
      },
      {
        "size": [
          "5"
        ],
        "in_stock": true
      },
      {
        "size": [
          "12"
        ],
        "in_stock": true
      },
      {
        "size": [
          "10"
        ],
        "in_stock": true
      },
      {
        "size": [
          "3"
        ],
        "in_stock": true
      },
      {
        "size": [
          "4"
        ],
        "in_stock": true
      }
    ],
    "code": "5647-240",
    "category": [
      "Tops",
      "Graphic Tees"
    ],
    "description": "We're dreaming of sweet treats this summer thanks to a Zelda flip sequin ice cream cone on our comfy tri-blend you've got to feel to believe!",
    "details": "* 50% Polyester, 38% Cotton, 12% Rayon\r* Machine wash cold inside out\r* Only non-chlorine bleach\r* Tumble dry low\r* Cool iron if needed on reverse side only",
    "id": "1751-5647-240",
    "product_id": 1751,
    "product_slug": "rainbow-sequin-zelda-tee",
    "colorway_id": 4419,
    "name": "Rainbow Sequin Zelda Tee",
    "sort_order": [
      {
        "shop": 2150003
      },
      {
        "shop-girls-new-arrivals": 2150003
      },
      {
        "shop-girls-new-arrivals-graphics": 2150003
      },
      {
        "shop": 3300001
      },
      {
        "shop-girls-best-sellers": 3300001
      },
      {
        "shop": 450001
      },
      {
        "shop-girls": 450001
      },
      {
        "shop-girls-just-in": 450001
      },
      {
        "shop": 480002
      },
      {
        "shop-girls": 480002
      },
      {
        "shop-girls-tops": 480002
      },
      {
        "shop-girls-tops-graphics-shop": 480002
      },
      {
        "featured-products": 5860001
      },
      {
        "featured-products-summer-2019": 5860001
      }
    ],
    "style_number": "5647",
    "colorways": [
      {
        "id": 4419,
        "slug": "heathernavy",
        "color": "Heather Navy",
        "code": "5647-240",
        "shots": [
          {
            "id": 2688485,
            "shot_type": "back",
            "cloudinary_key": "production/catalog/cdwuwjsslhhgah2ajmr6"
          },
          {
            "id": 2688487,
            "shot_type": "detail",
            "cloudinary_key": "production/catalog/vj9vd5bdrppry8uzfqoy"
          },
          {
            "id": 2688486,
            "shot_type": "front",
            "cloudinary_key": "production/catalog/fnm4byyqsua0g0jj7dou"
          }
        ],
        "skus": [
          {
            "id": 19001,
            "sku": "5647-240-L",
            "size": "6",
            "price": 22.5,
            "cost_price": null,
            "in_stock": true
          },
          {
            "id": 19002,
            "sku": "5647-240-E",
            "size": "8",
            "price": 22.5,
            "cost_price": null,
            "in_stock": true
          },
          {
            "id": 19003,
            "sku": "5647-240-M",
            "size": "7",
            "price": 22.5,
            "cost_price": null,
            "in_stock": true
          },
          {
            "id": 19004,
            "sku": "5647-240-K",
            "size": "5",
            "price": 22.5,
            "cost_price": null,
            "in_stock": true
          },
          {
            "id": 19005,
            "sku": "5647-240-O",
            "size": "12",
            "price": 22.5,
            "cost_price": null,
            "in_stock": true
          },
          {
            "id": 19006,
            "sku": "5647-240-N",
            "size": "10",
            "price": 22.5,
            "cost_price": null,
            "in_stock": true
          },
          {
            "id": 19007,
            "sku": "5647-240-H",
            "size": "3",
            "price": 22.5,
            "cost_price": null,
            "in_stock": true
          },
          {
            "id": 19008,
            "sku": "5647-240-I",
            "size": "4",
            "price": 22.5,
            "cost_price": null,
            "in_stock": true
          }
        ]
      }
    ]
  },
  quickAdd: exampleClickHandler
}

const productWithOneSize = {
  product: {
    "_index": "colorways_development_20190706143737041",
    "_type": "colorway",
    "_id": "4312",
    "_score": null,
    "sort": [
      5860003
    ],
    "color_family": "blue",
    "color": "Blue",
    "nav_taxons": [
      "shop/boys-new-arrivals",
      "shop/boys-new-arrivals/swim",
      "featured-products/summer-2019",
      "shop/boys",
      "shop/boys/swimwear",
      "shop/vacation"
    ],
    "nav_categories": [
      "Boys New Arrivals",
      "Swim",
      "Boys",
      "Swimwear"
    ],
    "skus": [
      {
        "size": [
          "OS"
        ],
        "in_stock": true
      }
    ],
    "code": "A222-C01",
    "category": [
      "Swim",
      "Swim Accessories"
    ],
    "description": "AHHHHHHH! The coolest goggles on the planet are here.",
    "details": "*90% silicone, 10% pc\r\n*UV protected & anti-fog lenses\r\n*Adjustable head strap",
    "id": "1665-A222-C01",
    "product_id": 1665,
    "product_slug": "monster-goggle",
    "colorway_id": 4312,
    "name": "Monster Goggle",
    "sort_order": [
      {
        "shop": 230023
      },
      {
        "shop-boys": 230023
      },
      {
        "shop-boys-swimwear": 230023
      },
      {
        "shop": 2350008
      },
      {
        "shop-boys-new-arrivals": 2350008
      },
      {
        "shop-boys-new-arrivals-swim": 2350008
      },
      {
        "featured-products": 5860003
      },
      {
        "featured-products-summer-2019": 5860003
      },
      {
        "shop": 2780049
      },
      {
        "shop-vacation": 2780049
      }
    ],
    "style_number": "A222",
    "colorways": [
      {
        "id": 4312,
        "slug": "blue",
        "color": "Blue",
        "code": "A222-C01",
        "shots": [
          {
            "id": 2707248,
            "shot_type": "front",
            "cloudinary_key": "production/catalog/uduxsics6nhvmvilwh16"
          }
        ],
        "skus": [
          {
            "id": 18009,
            "sku": "A222-C01-A",
            "size": "OS",
            "price": 24.5,
            "cost_price": null,
            "in_stock": true
          }
        ]
      },
      {
        "id": 4311,
        "slug": "moss",
        "color": "Moss",
        "code": "A222-D07",
        "shots": [
          {
            "id": 2707247,
            "shot_type": "front",
            "cloudinary_key": "production/catalog/dyv8xevmgetyztwk3ald"
          }
        ],
        "skus": [
          {
            "id": 18008,
            "sku": "A222-D07-A",
            "size": "OS",
            "price": 24.5,
            "cost_price": null,
            "in_stock": true
          }
        ]
      }
    ]
  },
  quickAdd: exampleClickHandler
}

export { productWithVariants, productWithOneSize }
