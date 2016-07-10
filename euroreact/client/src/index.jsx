var React = require('react');
var ReactDOM = require('react-dom');
var League = require('./components/League.jsx');

window.onload = function(){
  console.log("App Started");
  ReactDOM.render(
    // <League url="http://localost:3000/api/league"/>,
    document.getElementById('app')
  );
}
