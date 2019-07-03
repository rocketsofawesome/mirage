### Default:
```js
<QuickAddSize input={{
  name: '5-default',
  onChange: () => { alert('Selecting a size!') }
}}>5</QuickAddSize>
```

### Selected:
```js
<QuickAddSize checked input={{
  name: '5-selected',
  onChange: () => { alert('Selecting a size!') }
}}>5</QuickAddSize>
```

### Disabled:
```js
<QuickAddSize input={{
  name: '5-disabled',
  disabled: true,
  onChange: () => { alert('Selecting a size!') }
}}>5</QuickAddSize>
```
