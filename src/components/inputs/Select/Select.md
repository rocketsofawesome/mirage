#### Default State
```js
  <Select
    label='City'
    options={[
      { value: 'NY', text: 'New York' },
      { value: 'CA', text: 'California' }
    ]}
  />
```

#### Active State
```js
  <Select
    label='City'
    options={[
      { value: 'NY', text: 'New York' },
      { value: 'CA', text: 'California' }
    ]}
    active={true}
  />
```

#### Error State
```js
<Select
  label='City'
  options={[
    { value: 'NY', text: 'New York' },
    { value: 'CA', text: 'California' }
  ]}
  error='This field is required'
  touched={true}
  active={false}
/>
```

#### Without Label
```js
<Select
  options={[
    { value: 'NY', text: 'New York' },
    { value: 'CA', text: 'California' }
  ]}
/>
```

## Mini Styles

#### Normal Input
```js
<Select
  kind='mini'
  label='City'
  options={[
    { value: 'NY', text: 'New York' },
    { value: 'CA', text: 'California' }
  ]}
/>
```

#### Input With Errors
```js
<Select
  error='Some error message'
  kind='mini'
  label='City'
  options={[
    { value: 'NY', text: 'New York' },
    { value: 'CA', text: 'California' }
  ]}
  touched={true}
/>
```