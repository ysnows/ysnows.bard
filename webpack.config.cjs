const path = require("path")

module.exports = {
    target: 'node',
    entry: "./src/index.js", // 入口
    output: {
        path: path.join(__dirname, "dist"), // 出口路径
        filename: "main.js" // 出口文件名
    }
}
