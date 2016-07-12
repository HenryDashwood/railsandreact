var React = require('react');
var LeagueGenerator = require("./LeagueGenerator.jsx");
var MatchGenerator = require("./MatchGenerator.jsx");
var Team = require("./Team.jsx");
var TeamGenerator = require("./TeamGenerator.jsx");

var League = React.createClass({

  loadTeamsFromServer: function() {
    var url = this.props.url;
    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.onload = function(){
      console.log('recevied data')
      if(request.status === 200){
        var data = JSON.parse(request.responseText);
        console.log('got the data', data)
        // this.loadTeamsFromServer();
        this.setState({teams: data});

      }
    }.bind(this)
    request.send();

  },

  componentDidMount: function() {
    this.loadTeamsFromServer();
  },

  getInitialState: function() {
    return { teams: [], matches: []};
  },

  onTeamSubmit: function(team) {
    console.log("team submit called", team)
    var newTeams = this.state.teams.concat( [team] );
    this.setState({teams: newTeams});

    var url = this.props.url;
    var request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function(){
      if(request.status === 200){
      }
    }.bind(this)
    request.send( JSON.stringify(team) );
  },

  render: function(){

    var leagueTeams = this.state.teams.map(function(team, index) {
      return (
        <tr key={index}>
          <td>{team.name}</td>
          <td>{team.played}</td>
          <td>{team.wins}</td>
          <td>{team.draws}</td>
          <td>{team.losses}</td>
          <td>{team.goals_for}</td>
          <td>{team.goals_against}</td>
          <td>{team.goal_difference}</td>
          <td>{team.points}</td>
        </tr>
      );
    });

    var leagueMatches = this.state.matches.map(function(match, index) {
      return (
        <div>
          <h3><home_team /></h3>
          <h3><home_score /></h3>
          <h3><away_score /></h3>
          <h3><away_team /></h3>
        </div>
      );
    });

    return(
      <div>

        <div class="main-nav">
          <img src="http://cdn.pulselive.com/test/client/pl/dev/i/elements/premier-league-logo-header-mob.svg" alt="Premier League Logo" />
          <h1>League Table</h1>
        </div>

        <table>
          <thead>
            <tr>
              <th>Nation</th>
              <th>Matches</th>
              <th>Wins</th>
              <th>Draws</th>
              <th>Losses</th>
              <th>Goals for</th>
              <th>Goals against</th>
              <th>Goal Difference</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {leagueTeams}
          </tbody>
        </table>
        <div>
          {leagueMatches}
        </div>
        <TeamGenerator onTeamSubmit={this.onTeamSubmit}/>
        <MatchGenerator />

        <div class="footer">
          <div class="copy-sign">{'\u00A9 Henry Dashwood'}</div>
        </div>

      </div>
    )
  }
});

module.exports = League;
