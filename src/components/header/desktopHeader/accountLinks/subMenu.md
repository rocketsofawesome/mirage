_Note: The `inline` prop is simply used in the style guide_

### Not Opened:
```js
  <SubMenu inline />
```

### Non Subscriber:
```js
  <SubMenu open inline />
```

### Subscriber with less than 4 children:
```js
  <SubMenu childCount={1} open inline showSubscriptionLinks />
```

### Subscriber with 4 children:
```js
  <SubMenu childCount={4} open inline showSubscriptionLinks />
```
