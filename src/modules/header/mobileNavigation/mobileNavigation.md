_Note: The drawerPosition and position props are only used to constrain the mobile navigation for the pattern library_

#### Logged out user:
```js
  <div style={{position: 'relative'}}>
    <MobileNavigation
      drawerPosition='absolute'
      position='absolute'
      boysLinks={require('./defaultProps').boysLinks}
      girlsLinks={require('./defaultProps').girlsLinks}
      babyLinks={require('./defaultProps').babyLinks}
      renderLink={require('./defaultProps').renderLink}
      clickBag={() => console.log('Bag clicked')}
    />
    <img style={{maxWidth: '100%'}} src='https://www.fillmurray.com/g/500/700' />
  </div>
```

#### Logged in non-subscriber user:
```js
  <div style={{position: 'relative'}}>
    <MobileNavigation
      drawerPosition='absolute'
      position='absolute'
      boysLinks={require('./defaultProps').boysLinks}
      girlsLinks={require('./defaultProps').girlsLinks}
      babyLinks={require('./defaultProps').babyLinks}
      renderLink={require('./defaultProps').renderLink}
      loggedIn />
    <img style={{maxWidth: '100%'}} src='https://www.fillmurray.com/g/500/700' />
  </div>
```

#### Logged in subscriber user:
```js
  <div style={{position: 'relative'}}>
    <MobileNavigation
    drawerPosition='absolute'
    position='absolute'
      boysLinks={require('./defaultProps').boysLinks}
      girlsLinks={require('./defaultProps').girlsLinks}
      babyLinks={require('./defaultProps').babyLinks}
      renderLink={require('./defaultProps').renderLink}
      isSubscriptionMember
      loggedIn />
    <img style={{maxWidth: '100%'}} src='https://www.fillmurray.com/g/500/700' />
  </div>
```
