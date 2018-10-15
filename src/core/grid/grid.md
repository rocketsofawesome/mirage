```js
// Setting up content for the grid!
const Col = (props) => {
  return (<div style={{height: '60px'}}></div>)
}
const row = []
for (var i = 0; i < 24; i++) {
  row.push(<Col key={1} />)
}

// Render the grid!
<Grid debug>
  {row}
</Grid>
```
