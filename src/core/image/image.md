### Basic Image:
```js
  <Image src={'https://dummyimage.com/100x100/CCC/333.png&text=small'}/>
```

### Using the responsive srcSet property:
```js
  <Image src={'https://dummyimage.com/100x100/CCC/333.png&text=small'}
    srcSet={
      {
        '800w': 'https://dummyimage.com/800x800/CCC/333.png&text=large',
        '350w': 'https://dummyimage.com/350x350/CCC/333.png&text=medium',
        '100w': 'https://dummyimage.com/100x100/CCC/333.png&text=small'
      }
    }
    />
```

### Constraining image by size:
```js
  <Image src={'https://dummyimage.com/100x100/CCC/333.png&text=small'}
    srcSet={
      {
        '800w': 'https://dummyimage.com/800x800/CCC/333.png&text=large',
        '350w': 'https://dummyimage.com/350x350/CCC/333.png&text=medium',
        '100w': 'https://dummyimage.com/100x100/CCC/333.png&text=small'
      }
    }
    sizes={
      {
        '800px': '(min-width: 500px)',
        '350px': '(min-width: 300px)',
        '100px': '(min-width: 200px)'
      }
    }
    />
```

### Constraining image by size:
```js
  <Image src={'https://dummyimage.com/100x100/CCC/333.png&text=small'}
    srcSet={
      {
        '800w': 'https://dummyimage.com/800x800/CCC/333.png&text=large',
        '350w': 'https://dummyimage.com/350x350/CCC/333.png&text=medium',
        '100w': 'https://dummyimage.com/100x100/CCC/333.png&text=small'
      }
    }
    sizes={
      {
        '800px': '(min-width: 500px)',
        '350px': '(min-width: 300px)',
        '100px': '(min-width: 200px)'
      }
    }
    style={{
      maxWidth: '320px'
    }}
    />
```
