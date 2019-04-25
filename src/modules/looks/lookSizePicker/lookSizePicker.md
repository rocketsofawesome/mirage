### No sizes selected
```js
  <LookSizePicker products={
    [
      {
        image: {
          alt: 'Fuzzy Tiger Tee front',
          src: 'https://res.cloudinary.com/roa-canon/image/upload/c_scale,w_122/v1548780269/production/catalog/rfxx1bcmwy7zych1pmof.png'
        },
        variants: [
          {sku: 'sku-1', size: 3, inStock: true},
          {sku: 'sku-2', size: 4, inStock: true},
          {sku: 'sku-3', size: 5, inStock: true},
          {sku: 'sku-4', size: 6, inStock: true},
          {sku: 'sku-5', size: 7, inStock: false},
          {sku: 'sku-6', size: 9, inStock: true},
          {sku: 'sku-7', size: 12, inStock: true},
        ],
        id: '12345'
      },
      {
        image: {
          alt: 'Cool Down Active Short front',
          src: 'https://res.cloudinary.com/roa-canon/image/upload/c_scale,w_122/v1548780269/production/catalog/xrpiecxqwmiso3acxucc.png'
        },
        variants: [
          {sku: 'sku-20', size: 3, inStock: true},
          {sku: 'sku-21', size: 4, inStock: true},
          {sku: 'sku-22', size: 5, inStock: true},
          {sku: 'sku-23', size: 6, inStock: true},
          {sku: 'sku-24', size: 7, inStock: false},
          {sku: 'sku-25', size: 9, inStock: true},
          {sku: 'sku-26', size: 12, inStock: true},
        ],
        id: '12346'
      }
    ]
  }
  onSizeSelect={(productId) => () => { alert(productId) }} />
```

### Sizes selected
```js
  <LookSizePicker products={
    [
      {
        image: {
          alt: 'Fuzzy Tiger Tee front',
          src: 'https://res.cloudinary.com/roa-canon/image/upload/c_scale,w_122/v1548780269/production/catalog/rfxx1bcmwy7zych1pmof.png'
        },
        variants: [
          {sku: 'sku-1', size: 3, inStock: true},
          {sku: 'sku-2', size: 4, inStock: true},
          {sku: 'sku-3', size: 5, inStock: true},
          {sku: 'sku-4', size: 6, inStock: true},
          {sku: 'sku-5', size: 7, inStock: false},
          {sku: 'sku-6', size: 9, inStock: true},
          {sku: 'sku-7', size: 12, inStock: true},
        ],
        id: '12345'
      },
      {
        image: {
          alt: 'Cool Down Active Short front',
          src: 'https://res.cloudinary.com/roa-canon/image/upload/c_scale,w_122/v1548780269/production/catalog/xrpiecxqwmiso3acxucc.png'
        },
        variants: [
          {sku: 'sku-20', size: 3, inStock: true},
          {sku: 'sku-21', size: 4, inStock: true},
          {sku: 'sku-22', size: 5, inStock: true},
          {sku: 'sku-23', size: 6, inStock: true},
          {sku: 'sku-24', size: 7, inStock: false},
          {sku: 'sku-25', size: 9, inStock: true},
          {sku: 'sku-26', size: 12, inStock: true},
        ],
        id: '12346'
      }
    ]
  }
  currentSizes={
    {   
      12345: 'sku-1',
      12346: 'sku-26'
    }
  }
  onSizeSelect={(productId) => ({target: { value }}) => { alert(`productId: ${productId}, value: ${value}`) }} />
```