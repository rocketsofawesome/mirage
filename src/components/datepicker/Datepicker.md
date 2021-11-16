## Regular Styles

#### Normal input
```js
<Datepicker label='Pick a Date' onChange={(date) => console.log(date)} />
```

#### Input with errors
```js
<Datepicker label='Pick a Date' error="Some error message" onChange={() => null} touched />
```

#### Input with initial value as string
```js
<Datepicker label='Pick a Date' initialValue='2021-08-08' onChange={() => null} />
```

#### Input with initial value as Date
```js
<Datepicker label='Pick a Date' initialValue={new Date()} onChange={() => null} />
```
