```js
  <BackgroundImage src={'https://www.fillmurray.com/g/1440/300'}/>
```

```js
  <BackgroundImage src='https://www.fillmurray.com/g/100/100'
    sources={
      {
        960: 'https://www.fillmurray.com/g/1440/800',
        600: 'https://www.fillmurray.com/g/800/350',
        0: 'https://www.fillmurray.com/g/320/100'
      }
    }
    />
```

```js
  <Grid>
    <Sizer mobile={{width: 4}} desktop={{start: 1, width:6}}>
      <BackgroundImage src='https://www.fillmurray.com/g/100/100'
        sources={
          {
            960: 'https://www.fillmurray.com/g/1440/800',
            600: 'https://www.fillmurray.com/g/800/350',
            0: 'https://www.fillmurray.com/g/320/100'
          }
        }
        />
    </Sizer>
  </Grid>
```
