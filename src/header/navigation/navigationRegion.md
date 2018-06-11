```js
<NavigationRegion>
  <Link href="#">Shop</Link>
  <Link href="#">Box</Link>
  <Link href="#">Earn $$$</Link>
</NavigationRegion>
```

## Three Links Example:
```js
<NavigationRegion>
  <Link href="#">Shop</Link>
  <Link href="#">Box</Link>
  <Link href="#">Earn $$$</Link>
  <Link href="#">Name</Link>
  <Link href="#">Bag</Link>
</NavigationRegion>
```

## One Link Example:
```js
<NavigationRegion>
  <Link href="#">Bag</Link>
</NavigationRegion>
```

## Start and Stop Example:
```js
<div style={{display: 'grid', gridTemplateColumns: '[grid] repeat(8, 1fr)', width: '900px'}}>
  <NavigationRegion columnStart={1} columnEnd={4}>
    <Link href="#">Shop</Link>
    <Link href="#">Box</Link>
    <Link href="#">Earn $$$</Link>
  </NavigationRegion>
</div>
```
