```js
  <div style={{position: 'relative', height: '70rem'}}>
    <Header
      position='absolute'
      mobileProps={
        {
          position: 'absolute',
          drawerPosition:'absolute',
          signOut: () => alert('signing out')
        }
      }
      desktopProps={
        {
          position: 'static',
          signOut: () => alert('signing out')
        }
      } />
    </div>
```

#### With bag count

```js
  <div style={{position: 'relative', height: '70rem'}}>
    <Header
      position='absolute'
      above={
        <Status fontSize='14px'>FREE SHIPPING FOR ORDERS OF $50+ • FREE RETURNS</Status>
      }
      mobileProps={
        {
          bagCount: 5,
          position: 'absolute',
          drawerPosition:'absolute',
          signOut: () => alert('signing out')
        }
      }
      desktopProps={
        {
          bagCount: 5,
          position: 'static',
          signOut: () => alert('signing out')
        }
      } />
    </div>
```

#### loggedIn

```js
  <div style={{position: 'relative', height: '70rem'}}>
    <Header
      position='absolute'
      above={
        <Status fontSize='14px'>FREE SHIPPING FOR ORDERS OF $50+ • FREE RETURNS</Status>
      }
      mobileProps={
        {
          bagCount: 5,
          position: 'absolute',
          drawerPosition:'absolute',
          loggedIn: true,
          signOut: () => alert('signing out')
        }
      }
      desktopProps={
        {
          bagCount: 5,
          position: 'static',
          loggedIn: true,
          signOut: () => alert('signing out')
        }
      } />
    </div>
```

#### With status messages

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
