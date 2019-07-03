```js
  <Contentful
  operation='getEntries'
  query={{
    'sys.id': '21Va4brrDmkukCqAGuUCGu',
    include: 10
  }}>
    <ContentfulRenderer
    quickAdd={(sku) => () => { alert(`${sku} clicked`) } } />
  </Contentful>
```
