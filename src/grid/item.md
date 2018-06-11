Without any columns or rows passed, the Item component will default to the standard 1 span width, the height is not set

## Default Example:
```js
<Grid style={{backgroundItemor: '#B5BABF'}}>
  <Item style={{height: '30px', backgroundItemor:'#E6ECF2' }}/>
</Grid>
```

## Example with column _start_ set:
```js
<Grid style={{backgroundItemor: '#B5BABF'}}>
  <Item columns={'2'} style={{height: '30px', backgroundItemor:'#E6ECF2' }}/>
</Grid>
```

## Example with column _start_ and _end_ set:
```js
<Grid style={{backgroundItemor: '#B5BABF'}}>
  <Item columns={' 2 / 4'} end={4} style={{height: '30px', backgroundItemor:'#E6ECF2' }}/>
</Grid>
```

## Example with column _start_ and _span_ set:
```js
<Grid style={{backgroundItemor: '#B5BABF'}}>
  <Item columns={' 3 / span 3'} end={4} style={{height: '30px', backgroundItemor:'#E6ECF2' }}/>
</Grid>
```

## Example with row _start_ set:
```js
<Grid style={{backgroundItemor: '#B5BABF', height: '150px'}}>
  <Item end={4} style={{height: '30px', backgroundItemor:'#E6ECF2' }}/>
  <Item rows={'2'} end={4} style={{backgroundItemor:'#E6ECF2' }}/>
</Grid>
```

## Example with row _start_ and _span_ set:
```js
<Grid style={{backgroundItemor: '#B5BABF', height: '150px'}}>
  <Item end={4} style={{height: '30px', backgroundItemor:'#E6ECF2' }}/>
  <Item rows={'2 / span 2'} end={4} style={{backgroundItemor:'#E6ECF2' }}/>
</Grid>
```

## Example with row _start_ and _end_ set:
```js
<Grid style={{backgroundItemor: '#B5BABF', height: '150px'}}>
  <Item end={4} style={{height: '30px', backgroundItemor:'#E6ECF2' }}/>
  <Item rows={'3 / 4'} end={4} style={{backgroundItemor:'#E6ECF2' }}/>
</Grid>
```
