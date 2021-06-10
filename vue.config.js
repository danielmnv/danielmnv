const { name, author} = require('./package.json')
process.env.VUE_APP_VERSION = process.env.npm_package_version || "1.0.0"
process.env.VUE_APP_AUTHOR = author || "Daniel Molina"
process.env.VUE_APP_PROJECT = name || "resume"
process.env.VUE_APP_CV_FILE = "cv.pdf"
process.env.VUE_APP_TYPE = "spa"

console.log(process.env)

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ]
}