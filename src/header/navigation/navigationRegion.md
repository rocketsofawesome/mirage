```js
<NavigationRegion>
  <Link href="#">Shop</Link>
  <Link href="#">Box</Link>
  <Link href="#">Earn $$$</Link>
</NavigationRegion>
```

## More than 3 links:
```js
<NavigationRegion>
  <Link href="#">Shop</Link>
  <Link href="#">Box</Link>
  <Link href="#">Earn $$$</Link>
  <Link href="#">Name</Link>
  <Link href="#">Bag</Link>
</NavigationRegion>
```

## Only one link:
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
