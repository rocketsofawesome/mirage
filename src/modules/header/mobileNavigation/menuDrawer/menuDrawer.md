```js
  <MenuDrawer position='static' open style={{height: '73.6rem'}}>
    <UL leftPad='1.4rem' type='none'>
      <li>
        <MobileLinkTop>Shop</MobileLinkTop>
        <UL leftPad='1rem' type='none'>
          <li>
            <Accordion
              toggleElement={
                <MobileLinkSecondary>Boys</MobileLinkSecondary>
              }>
              <UL type='none' leftPad='1rem'>
                <li><MobileLinkTertiary>New Arrivals</MobileLinkTertiary></li>
                <li><MobileLinkTertiary>Best-Sellers</MobileLinkTertiary></li>
                <li><MobileLinkTertiary>Graphics Shop</MobileLinkTertiary></li>
                <li><MobileLinkTertiary>Tees & Shirts</MobileLinkTertiary></li>
                <li><MobileLinkTertiary>Sweatshirts</MobileLinkTertiary></li>
              </UL>
            </Accordion>
          </li>
          <li>
          <Accordion
            toggleElement={
              <MobileLinkSecondary>Girls</MobileLinkSecondary>
            }>
            <UL type='none' leftPad='1rem'>
              <li><MobileLinkTertiary>New Arrivals</MobileLinkTertiary></li>
              <li><MobileLinkTertiary>Best-Sellers</MobileLinkTertiary></li>
              <li><MobileLinkTertiary>Graphics Shop</MobileLinkTertiary></li>
              <li><MobileLinkTertiary>Tees & Shirts</MobileLinkTertiary></li>
              <li><MobileLinkTertiary>Sweatshirts</MobileLinkTertiary></li>
            </UL>
          </Accordion>
          </li>
        </UL>
      </li>

      <li><MobileLinkTop>Subscribe + Save</MobileLinkTop></li>
      <li><MobileLinkTop>Log In</MobileLinkTop></li>
      <li><MobileLinkTop>Blog</MobileLinkTop></li>
    </UL>
  </MenuDrawer>
```
