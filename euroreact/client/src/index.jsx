var React = require('react');
var ReactDOM = require('react-dom');
var League = require('./components/League.jsx');
var LeagueGenerator = require('./components/LeagueGenerator.jsx');

window.onload = function(){
  console.log("App Started");
  ReactDOM.render(
    <League url="http://localhost:3000/teams"/>,
    document.getElementById('app')
  );
}
