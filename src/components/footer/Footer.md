## Displaying the footer for a box subscriber
```js
  <Footer
    isNotSubscriber={false}
    isSubscriptionMember={true}
    referrerAmount={'20'}
    referredUserAmount={'50'}
    homepageUrl='https://www.rocketsofawesome.com'
  />
```

## Displaying the footer for a non-subscriber
```js
  <Footer
    isNotSubscriber={true}
    isSubscriptionMember={false}
    referrerAmount={'20'}
    referredUserAmount={'50'}
    homepageUrl='https://www.rocketsofawesome.com'
  />
```
