### Default Styling
```js
<FlexRow>
  <FlexCol desktop={{ width: 6 }}><Input/></FlexCol>
  <FlexCol desktop={{ width: 6 }}><Input/></FlexCol>
</FlexRow>
```

### Constrained
```js
<FlexRow constrained>
  <FlexCol desktop={{ width: 6 }}><Input/></FlexCol>
  <FlexCol desktop={{ width: 6 }}><Input/></FlexCol>
</FlexRow>
```

### With Padding
```js
<FlexRow padding>
  <FlexCol desktop={{ width: 6 }}><Input/></FlexCol>
  <FlexCol desktop={{ width: 6 }}><Input/></FlexCol>
</FlexRow>
```

### No wrap
```js
<FlexRow mobile={{ wrap:'nowrap', columnGap:'2rem' }} tablet={{ wrap:'nowrap', columnGap:'2rem' }} desktop={{ wrap:'nowrap', columnGap:'2rem' }} constrained>
  <FlexCol desktop={{ width: 6 }} gutter='0'><Input/></FlexCol>
  <FlexCol desktop={{ width: 6 }} gutter='0'><Input/></FlexCol>
</FlexRow>
```

### Only wrap at mobile sizes
```js
<FlexRow tablet={{ wrap:'nowrap', columnGap:'2rem' }} desktop={{ wrap:'nowrap', columnGap:'2rem' }} constrained>
  <FlexCol desktop={{ width: 6 }} gutter='0'><Input/></FlexCol>
  <FlexCol desktop={{ width: 6 }} gutter='0'><Input/></FlexCol>
</FlexRow>
```