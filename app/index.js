var React         = require('react');
var ReactDOM      = require('react-dom');
var MainContainer = require('./containers/MainContainer');

require('./css/main.less');
require('./css/icons.css');

ReactDOM.render(<MainContainer />, document.getElementById('app'));