### Logged In Non-Subscriber User
```js
  <div style={{marginLeft: '200px', height: '370px'}}>
    <DesktopAccountLinks
      name='Shawn'
      loggedIn />
  </div>
```

### Logged In Subscriber User
```js
  <div style={{marginLeft: '200px', height: '370px'}}>
    <DesktopAccountLinks
      name='Shawn'
      loggedIn
      isSubscriptionMember
      renderLink={(inProps) => {
        const {target, children, ...props } = inProps
        return (<span href={target} {...props} onClick={()=> alert('Hello')}>{children}</span>)
      }} />
  </div>
```

### Logged Out User:
```js
  <div style={{marginLeft: '200px'}}>
    <DesktopAccountLinks />
  </div>
```
