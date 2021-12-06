### No Padding
```js
<RectangularRadioButton name='gender' value='9' shape='rectangle'>Girls</RectangularRadioButton>
<Padding >
  <RectangularRadioButton name='gender' value='9' shape='rectangle'>Boys</RectangularRadioButton>
</Padding>
```

### Padding with Qualitative Prop
```js
<RectangularRadioButton name='qualitativeGender' value='9' shape='rectangle'>Girls</RectangularRadioButton>
<Padding y='sm'>
  <RectangularRadioButton name='qualitativeGender' value='9' shape='rectangle'>Boys</RectangularRadioButton>
</Padding>
```

### Padding with Numerical Prop
```js
<RectangularRadioButton name='numericalGender' value='9' shape='rectangle'>Girls</RectangularRadioButton>
<Padding y='3rem'>
  <RectangularRadioButton name='numericalGender' value='9' shape='rectangle'>Boys</RectangularRadioButton>
</Padding>
```