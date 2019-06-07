```js
  <div style={{position: 'relative', height: '70rem'}}>
    <Header
      position='absolute'
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

### Subscription Member:
```js
  <div style={{position: 'relative', height: '70rem'}}>
    <Header
      position='absolute'
      isSubscriptionMember={true}
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
      position='absolute'
      above={
        <Status fontSize='14px'>FREE SHIPPING FOR ORDERS OF $50+ • FREE RETURNS</Status>
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
