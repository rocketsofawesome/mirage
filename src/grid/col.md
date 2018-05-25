Without any columns or rows passed, the Col component will default to the standard 1 span width, the height is not set

## Default Example:
```js
<Row style={{backgroundColor: '#B5BABF'}}>
  <Col style={{height: '30px', backgroundColor:'#E6ECF2' }}/>
</Row>
```

## Example with column _start_ set:
```js
<Row style={{backgroundColor: '#B5BABF'}}>
  <Col columns={'2'} style={{height: '30px', backgroundColor:'#E6ECF2' }}/>
</Row>
```

## Example with column _start_ and _end_ set:
```js
<Row style={{backgroundColor: '#B5BABF'}}>
  <Col columns={' 2 / 4'} end={4} style={{height: '30px', backgroundColor:'#E6ECF2' }}/>
</Row>
```

## Example with column _start_ and _span_ set:
```js
<Row style={{backgroundColor: '#B5BABF'}}>
  <Col columns={' 3 / span 3'} end={4} style={{height: '30px', backgroundColor:'#E6ECF2' }}/>
</Row>
```

## Example with row _start_ set:
```js
<Row style={{backgroundColor: '#B5BABF', height: '150px'}}>
  <Col end={4} style={{height: '30px', backgroundColor:'#E6ECF2' }}/>
  <Col rows={'2'} end={4} style={{backgroundColor:'#E6ECF2' }}/>
</Row>
```

## Example with row _start_ and _span_ set:
```js
<Row style={{backgroundColor: '#B5BABF', height: '150px'}}>
  <Col end={4} style={{height: '30px', backgroundColor:'#E6ECF2' }}/>
  <Col rows={'2 / span 2'} end={4} style={{backgroundColor:'#E6ECF2' }}/>
</Row>
```

## Example with row _start_ and _end_ set:
```js
<Row style={{backgroundColor: '#B5BABF', height: '150px'}}>
  <Col end={4} style={{height: '30px', backgroundColor:'#E6ECF2' }}/>
  <Col rows={'3 / 4'} end={4} style={{backgroundColor:'#E6ECF2' }}/>
</Row>
```
