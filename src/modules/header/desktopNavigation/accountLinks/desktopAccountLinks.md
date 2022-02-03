### Logged In Non-Subscriber User
```js
  <div style={{marginLeft: '200px', height: '370px'}}>
    <DesktopAccountLinks
      name='Shawn'
      loggedIn
      signOut={() => setTimeout(() => { alert('signing out!') }, 1000 )} />
  </div>
```

### Logged In Subscriber User
```js
  <div style={{marginLeft: '200px', height: '370px'}}>
    <DesktopAccountLinks
      name='Shawn'
      loggedIn
      showSubscriptionLinks
      renderLink={(inProps) => {
        const {target, children, ...props } = inProps
        return (<span href={target} {...props} onClick={()=> alert('Hello')}>{children}</span>)
      }}
      signOut={() => setTimeout(() => { alert('signing out!') }, 1000 )} />
  </div>
```

### Logged Out User:
```js
  <div style={{marginLeft: '200px'}}>
    <DesktopAccountLinks signOut={() => setTimeout(() => { alert('signing out!') }, 1000 )} />
  </div>
```
