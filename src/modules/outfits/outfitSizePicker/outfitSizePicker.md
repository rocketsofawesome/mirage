### No sizes selected
```js
  <OutfitSizePicker products={
    [
      {
        image: {
          alt: 'Fuzzy Tiger Tee front',
          src: 'https://d2lknnt52h7uhg.cloudfront.net/roa-canon/image/upload/c_scale,w_122/v1548780269/production/catalog/rfxx1bcmwy7zych1pmof.png'
        },
        variants: [
          {sku: 'sku-1', size: 3, in_stock: true},
          {sku: 'sku-2', size: 4, in_stock: true},
          {sku: 'sku-3', size: 5, in_stock: true},
          {sku: 'sku-4', size: 6, in_stock: true},
          {sku: 'sku-5', size: 7, in_stock: false},
          {sku: 'sku-6', size: 9, in_stock: true},
          {sku: 'sku-7', size: 12, in_stock: true},
        ],
        id: '12345',
        slug: 'example-slug'
      },
      {
        image: {
          alt: 'Cool Down Active Short front',
          src: 'https://d2lknnt52h7uhg.cloudfront.net/roa-canon/image/upload/c_scale,w_122/v1548780269/production/catalog/xrpiecxqwmiso3acxucc.png'
        },
        variants: [
          {sku: 'sku-20', size: 3, in_stock: true},
          {sku: 'sku-21', size: 4, in_stock: true},
          {sku: 'sku-22', size: 5, in_stock: true},
          {sku: 'sku-23', size: 6, in_stock: true},
          {sku: 'sku-24', size: 7, in_stock: false},
          {sku: 'sku-25', size: 9, in_stock: true},
          {sku: 'sku-26', size: 12, in_stock: true},
        ],
        id: '12346',
        slug: 'example-slug'
      }
    ]
  }
  element={
    {
      type: 'a',
      props: {
        href: '#/H1/'
      }
    }
  }
  onSizeSelect={(productId) => () => { alert(productId) }} />
```

### Sizes selected
```js
  <OutfitSizePicker products={
    [
      {
        image: {
          alt: 'Fuzzy Tiger Tee front',
          src: 'https://d2lknnt52h7uhg.cloudfront.net/roa-canon/image/upload/c_scale,w_122/v1548780269/production/catalog/rfxx1bcmwy7zych1pmof.png'
        },
        variants: [
          {sku: 'sku-1', size: 3, in_stock: true},
          {sku: 'sku-2', size: 4, in_stock: true},
          {sku: 'sku-3', size: 5, in_stock: true},
          {sku: 'sku-4', size: 6, in_stock: true},
          {sku: 'sku-5', size: 7, in_stock: false},
          {sku: 'sku-6', size: 9, in_stock: true},
          {sku: 'sku-7', size: 12, in_stock: true},
        ],
        id: '12345',
        slug: 'example-slug'
      },
      {
        image: {
          alt: 'Cool Down Active Short front',
          src: 'https://d2lknnt52h7uhg.cloudfront.net/roa-canon/image/upload/c_scale,w_122/v1548780269/production/catalog/xrpiecxqwmiso3acxucc.png'
        },
        variants: [
          {sku: 'sku-20', size: 3, in_stock: true},
          {sku: 'sku-21', size: 4, in_stock: true},
          {sku: 'sku-22', size: 5, in_stock: true},
          {sku: 'sku-23', size: 6, in_stock: true},
          {sku: 'sku-24', size: 7, in_stock: false},
          {sku: 'sku-25', size: 9, in_stock: true},
          {sku: 'sku-26', size: 12, in_stock: true},
        ],
        id: '12346',
        slug: 'example-slug'
      }
    ]
  }
  element={
    {
      type: 'a',
      props: {
        href: '#/H1/'
      }
    }
  }
  currentSizes={
    {
      12345: 'sku-1',
      12346: 'sku-26'
    }
  }
  onSizeSelect={(productId) => ({target: { value }}) => { alert(`productId: ${productId}, value: ${value}`) }} />
```
