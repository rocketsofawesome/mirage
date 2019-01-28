```js
<DefaultSection>
  <Link uppercase>Change</Link>
  <DefaultAddress address={
    {
      first_name: 'Jada P.',
      last_name: 'Smith',
      address1: '194 Laurel Canyon Dr.',
      city: 'Los Angeles',
      state: 'CA',
      zipcode: '90123'
    }
  }/>
</DefaultSection>
```

```js
<DefaultSection>
  <Link uppercase>Change</Link>
  <DefaultPayment card={{
    brand: 'jcb',
    exp_month: '08',
    exp_year: '2020',
    last_4_digits: '1234'
  }}/>
</DefaultSection>
```
