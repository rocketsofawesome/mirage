```js
<PersistentCartProduct
  item={{
    id: 2943132,
    price: "34.5",
    amount: "34.5",
    total: "34.5",
    variant_id: 19915,
    sku: "7084-025-N",
    quantity: 1,
    name: "Varsity Sequin Skirt",
    color: "Silver",
    size: "10",
    category: [
      "Bottoms",
      "Skirts"
    ],
    cost_price: null,
    product_id: 894,
    slug: "sequin-skirt-7084",
    colorway_slug: "silver",
    colorway_code: "7084-025",
    order_id: 772492,
    on_sale: false,
    original_price: "34.5",
    colorway_variants: [
      {
        id: 11562,
        sku: "7084-025-H",
        size: "3",
        in_stock: false
      },
      {
        id: 11566,
        sku: "7084-025-C",
        size: "4/5",
        in_stock: false
      },
      {
        id: 16484,
        sku: "7084-025-I",
        size: "4",
        in_stock: false
      },
      {
        id: 16486,
        sku: "7084-025-K",
        size: "5",
        in_stock: false
      },
      {
        id: 11567,
        sku: "7084-025-D",
        size: "6/7",
        in_stock: false
      },
      {
        id: 16485,
        sku: "7084-025-L",
        size: "6",
        in_stock: false
      },
      {
        id: 16483,
        sku: "7084-025-M",
        size: "7",
        in_stock: false
      },
      {
        id: 11563,
        sku: "7084-025-E",
        size: "8",
        in_stock: false
      },
      {
        id: 11565,
        sku: "7084-025-F",
        size: "10/12",
        in_stock: false
      },
      {
        id: 19915,
        sku: "7084-025-N",
        size: "10",
        in_stock: true
      },
      {
        id: 19914,
        sku: "7084-025-O",
        size: "12",
        in_stock: true
      },
      {
        id: 11564,
        sku: "7084-025-P",
        size: "14",
        in_stock: false
      }
    ],
    shot: {
      id: 4503793,
      shot_type: "front",
      cloudinary_key: "production/catalog/kirtmym9iy3c5wirjihg"
    },
    adjustments: []
  }}
  onUpdateQuantity={(item, quantity) => console.log('Update Quantity', item, quantity)}
  onUpdateSize={(item, size) => console.log('Update Size', item, size)}
  onRemoveItem={(itemId) => console.log('Remove item', itemId)}
  hideCartSidebar={() => {}}
/>
```
