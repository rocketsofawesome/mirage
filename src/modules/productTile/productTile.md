### Product Tile with Multiple Variants
```js
  <div style={{ width: '33.33%'}}>
    <ProductTile
      {...require('./defaultProps').productWithVariants}
      onQuickView={(product, colorway) => console.log('Quick view', product, colorway)}
    />
  </div>
```


### Product Tile with a Single Size
```js
  <div style={{ width: '33.33%'}}>
    <ProductTile {...require('./defaultProps').productWithOneSize} />
  </div>
```


#### Product Tile for a product in Sale
```js
  <div style={{ width: '33.33%'}}>
    <ProductTile {...require('./defaultProps').productOnSale} />
  </div>
```
