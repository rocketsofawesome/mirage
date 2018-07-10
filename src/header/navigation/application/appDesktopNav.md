```js
<DesktopNav>
  <NavigationRegion>
    <Link href="#">Shop</Link>
    <Link href="#">Box</Link>
    <Link href="#">Earn $$$</Link>
  </NavigationRegion>
  <Logo />
  <NavigationRegion columns={3}>
    <Link href="#">Name</Link>
    <Link href="#">Bag</Link>
  </NavigationRegion>
</DesktopNav>
```

## No Links Example:
```js
<DesktopNav links={false}>
  <Label>CALL US: 1-877-ROCKETS</Label>
  <Logo />
  <Label alignRight>FREE SHIPPING & RETURNS</Label>
</DesktopNav>
```


## Back Link Example:
```js
<DesktopNav links={false}>
  <Link href="#">← BACK TO SHOP</Link>
  <H1 lowercase center>Checkout</H1>
</DesktopNav>
```
