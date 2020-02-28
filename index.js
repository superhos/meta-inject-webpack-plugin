/**
 * A webpack plugin to inject meta tag to Html.
 * @author sevenschan
 */

 class MetaInjectWebpackPlugin {
     constructor (options) {
         this.meta = options.meta
     }

     apply (compiler) {
         if (compiler.hooks) {
             // Webpack 4.x
             compiler.hooks.compilation.tap('MetaInjectWebpack', (compilation) => {
                 if (compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing) {
                     compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing.tapAsync(
                         'htmlWebpackPluginBeforeHtmlProcessing',
                         (data, cb) => this.processData(data, cb)
                     )
                 }
             })
         } else {
            // Webpack 3.x
            compilation.plugin(
                'html-webpack-plugin-before-html-processing',
                (data, cb) => this.processData(data, cb)
            )
         }
     }

     processData (data, cb) {
        const res = []
        this.meta.forEach(e => res.push(this.makeTag(e)))
        data.html = data.html.replace('</head>', res.join(' ') + '</head>')
        cb(null, data)
     }

     makeTag (obj) {
         if (typeof obj === 'string') return obj
         let res = '<meta'
         Object.keys(obj).forEach(e => {
             res += ` ${e}="${obj[e]}"`
         })
         res += ' >'
         return res
     }
 }

 module.exports = MetaInjectWebpackPlugin