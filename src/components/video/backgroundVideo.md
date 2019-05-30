```js
  <BackgroundVideo sources={
    {
      mobile: 'https://videos.ctfassets.net/8hhsfnb6grdi/7Iiffn2YxDIeMNqnG80As5/01aa536f3cd8ce2daa6d33b9b9c21543/ROA_Test01_Mobile.mp4',
      desktop: 'https://videos.ctfassets.net/8hhsfnb6grdi/4vn6I5vreD5xJGa24tBcLX/f9fa268493031b19e2610b4b4a66381d/ROA_Test01_1.mp4'
    }}
    mobileFallback={{
      src: 'https://images.ctfassets.net/8hhsfnb6grdi/3nZk1G88lWxhsc57fhdTRY/815bca5047a12e187fecb165472b2c7f/020519_HP_MobileHero.jpg?w=270&h=270&fit=thumb'}}
    >
    <Grid style={{height: '100%'}}>
      <Sizer style={{alignSelf: 'center'}}desktop={{start: 3, width: 8}}>
        <H1 style={{textAlign: 'center'}}>Summer Breeze</H1>
        <H3 style={{textAlign: 'center'}}>Blowing through the jasmine in my mind</H3>
      </Sizer>
    </Grid>
  </BackgroundVideo>
```
