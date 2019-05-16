```js
<LookDetail
  images={require('./defaultProps').images}
  information={require('./defaultProps').information}
  products={require('./defaultProps').products}
  style={{position: 'relative'}} 
  currentSizes={
    {   
      12345: 'sku-1',
      12346: 'sku-26'
    }
  }
  onSizeSelect={(productId) => ({target: { value }}) => { alert(`productId: ${productId}, value: ${value}`) }}
  sizePickerHeader={[<Label>Sizes:</Label>,<br />, <Link>SIZE CHART</Link>]}
  sizePickerFooter={<Button>Add Outfit to Bag</Button>} />
```
