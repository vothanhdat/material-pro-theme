const path = require('path');
module.exports = {
  prerenderPaths: [
    '/'
  ],
  alias:{
    "components" : path.resolve(__dirname, 'src/components/'),
    "routes" : path.resolve(__dirname, 'src/routes/'),
    "views" : path.resolve(__dirname, 'src/views/'),
    "assets" : path.resolve(__dirname, 'src/assets/'),
  }
}