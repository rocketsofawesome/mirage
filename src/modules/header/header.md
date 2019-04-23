```js
  <div style={{position: 'relative', height: '70rem'}}>
    <Header
      mobileProps={
        {
          position: 'absolute',
          drawerPosition:'absolute'
        }
      }
      desktopProps={
        {
          position: 'static'
        }
      } />
    </div>
```

```js
  <div style={{position: 'relative', height: '70rem'}}>
    <Header
      above={
        <Status>FREE SHIPPING FOR ORDERS OF $50+ • FREE RETURNS</Status>
      }
      below={
        <Status type="error">Error message appears here.</Status>
      }
      mobileProps={
        {
          position: 'absolute',
          drawerPosition:'absolute'
        }
      }
      desktopProps={
        {
          position: 'static'
        }
      } />
    </div>
```
