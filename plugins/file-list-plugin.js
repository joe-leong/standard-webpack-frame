/**
 * 打包时机
 * 打包生成资源
 * 将处理后的数据输出
 */
class FileListPlugin{
  constructor(options = {}) {
    this.options = options
    this.filename = this.options.filename || 'fileList.md'
  }
  apply(compiler) {
    compiler.hooks.emit.tap('FileListPlugin', compilation => {
      const { filename: fileName } = this
      const { assets } = compilation
      const fileCount = Object.keys(assets).length
      let content = `# 本次打包共生成${fileCount}个文件\n\n`;
      for (const filename in assets) {
       content += `-${filename}\n`
      }
      compilation.assets[fileName] = {
        source: () => {
          return content
        },
        size: () => {
          return content.length
        }
      }
    })
  }
}
exports = module.exports = FileListPlugin;
