### Basic InlineImage:
```js
  <InlineImage src='https://www.fillmurray.com/g/100/100' />
```

### Using the responsive srcSet and sizes properties:
#### NOTE:
In order for the InlineImage to be sized correctly when using
`srcSet` prop you must provide a `sizes` prop as well or set its width in css.
If you don't the browser will assume the default size of the InlineImage is 100vw of
the screen which can cause for some strange, rather large InlineImages. For more
reading on this you can read this blog post
[here](https://www.liip.ch/en/blog/things-you-should-know-about-responsive-InlineImages)
and also check out the specifications
[here](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_InlineImages)
. Removing the `size` props will cause the InlineImage to be resized so that it is the
 same size as the viewport.

```js
  <InlineImage src='https://www.fillmurray.com/g/100/100'
    srcSet={
      {
        '800w': 'https://www.fillmurray.com/g/800/800',
        '350w': 'https://www.fillmurray.com/g/350/350',
        '100w': 'https://www.fillmurray.com/g/100/100'
      }
    }
    sizes={
      {
        '(min-width: 800px)': '400px',
        '(min-width: 600px)': '200px',
        'default': '100px'
      }
    }
    />
```

### Setting LazyLoad (image should have data-src set instead of src):
```js
  <InlineImage src='https://www.fillmurray.com/g/100/100' lazyLoad={true} />
```
