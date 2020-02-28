# MetaInjectWebpackPlugin

## Feature

Webpack plugin to inject meta tag to Html.

## Use

### Step 1. configration

Notice that: HtmlWebpackPlugin is necessary.

````javascript
const MetaInjectWebpackPlugin = require('meta-inject-webpack-plugin')

// Webapck config
const webpackConfig = {
  // ...
  plugin: [
      // ...
      new MetaInjectWebpackPlugin({
          meta: [
            {
                name: 'renderer',
                content: 'webket'   
            },
            '<meta name="test" content="test">'
          ]
      })
  ]
}
````

2. Build it!

And you can check out these meta tag in after-built html file.

## License

[MIT](https://github.com/ElemeFE/page-skeleton-webpack-plugin/blob/master/LICENSE)

Copyright(c) 2020-present, @sevenschan