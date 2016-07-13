var React = require('react');
var ReactDOM = require('react-dom');
var League = require('./components/League.jsx');
var LeagueGenerator = require('./components/LeagueGenerator.jsx');

window.onload = function(){
  console.log("App Started");
  ReactDOM.render(
    <League teamUrl="http://localhost:3000/teams" matchUrl="http://localhost:3000/matches"/>,
    document.getElementById('app')
  );
}
