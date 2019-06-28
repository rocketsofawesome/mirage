### Default:
```js
<QuickAddSize input={{
  name: '5-default',
  onClick: () => { alert('Selecting a size!') }
}}>5</QuickAddSize>
```

### Selected:
```js
<QuickAddSize checked input={{
  name: '5-selected',
  onClick: () => { alert('Selecting a size!') }
}}>5</QuickAddSize>
```

### Disabled:
```js
<QuickAddSize input={{
  name: '5-disabled',
  disabled: true,
  onClick: () => { alert('Selecting a size!') }
}}>5</QuickAddSize>
```
