Rich Text is a specific field that is provided by [Contentful](https://www.contentful.com/developers/docs/concepts/rich-text/) This component takes the data schema that is provided by Contentful and maps it to existing typography elements that we have on the site.
```js
  const data = require('./example.json');
  <RichText richText={data} />
```
