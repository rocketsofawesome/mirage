### Passing a single video source:
```js
<Video
  source='http://videos.ctfassets.net/8viklopqoo0g/54jDRvPlGEUkmAAAsSMIKY/a2b74a7e9abb1d43fe235a351c376158/Bokeh_Video_Of_Leaves.mp4'
  style={{width: '500px'}}/>
```

### Passing an array of video sources:
```js
<Video
  source={[
    'https://res.cloudinary.com/roa-canon/video/upload/v1535745827/web/ROA_BrandVideo_20180405.mp4',
    'https://res.cloudinary.com/roa-canon/video/upload/v1535745827/web/ROA_BrandVideo_20180405.webm',
    'https://res.cloudinary.com/roa-canon/video/upload/v1535745827/web/ROA_BrandVideo_20180405.ogv'
  ]}
  style={{width: '500px'}}/>
```

### Passing the sources as children:
```js
<Video style={{width: '500px'}}>
  <source src='https://res.cloudinary.com/roa-canon/video/upload/v1535745827/web/ROA_BrandVideo_20180405.mp4' type='video/mp4' />
  <source src='https://res.cloudinary.com/roa-canon/video/upload/v1535745827/web/ROA_BrandVideo_20180405.webm' type='video/webm' />
  <source src='https://res.cloudinary.com/roa-canon/video/upload/v1535745827/web/ROA_BrandVideo_20180405.ogv' type='video/ogv' />
</Video>
```

### Preventing autoplay:
```js
<Video
  autoPlay={false}
  controls
  source='http://videos.ctfassets.net/8viklopqoo0g/54jDRvPlGEUkmAAAsSMIKY/a2b74a7e9abb1d43fe235a351c376158/Bokeh_Video_Of_Leaves.mp4'
  style={{width: '500px'}}/>
```

### Unmuting videos:
```js
<Video
  controls
  muted={false}
  source='https://res.cloudinary.com/roa-canon/video/upload/v1535745827/web/ROA_BrandVideo_20180405.mp4'
  style={{width: '500px'}}/>
