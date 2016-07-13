var React = require('react');
var LeagueGenerator = require("./LeagueGenerator.jsx");
var MatchGenerator = require("./MatchGenerator.jsx");
var TeamGenerator = require("./TeamGenerator.jsx");

var League = React.createClass({

  loadTeamsFromServer: function() {
    var url = this.props.teamUrl;
    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.onload = function(){
      console.log('Recevied team data')
      if(request.status === 200){
        var teams = JSON.parse(request.responseText);
        console.log('Got the team data', teams)
        this.setState({teams: teams});
      }
    }.bind(this)
    request.send();
  },

  loadMatchesFromServer: function() {
    var url = this.props.matchUrl;
    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.onload = function(){
      console.log('Recevied match data')
      if(request.status === 200){
        var matches = JSON.parse(request.responseText);
        console.log('Got the match data', matches)
        this.setState({matches: matches});
      }
    }.bind(this)
    request.send();
  },

  componentDidMount: function() {
    this.loadTeamsFromServer();
    this.loadMatchesFromServer();
  },

  getInitialState: function() {
    return { teams: [], matches: []};
  },

  onTeamSubmit: function(team) {
    console.log("Team submit called", team);
    var newTeams = this.state.teams.concat([team]);
    this.setState({teams: newTeams});

    var url = this.props.teamUrl;
    var request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function(){
      if(request.status === 200){
      }
    }.bind(this)
    request.send( JSON.stringify(team) );
  },

  onMatchSubmit: function(match) {
    console.log("Match submit called", match);
    var newMatches = this.state.matches.concat([match]);


    this.setState({matches: newMatches});

    var url = this.props.matchUrl;
    var request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function(){
      if(request.status === 200){
      }
    }.bind(this)
    request.send( JSON.stringify(match) );
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
        <tr key={index}>
          <td>{match.home_team}</td>
          <td>{match.home_score}</td>
          <td>{match.away_score}</td>
          <td>{match.away_team}</td>
        </tr>
      );
    });

    return(
      <div>

        <div class="main-nav">
          <img src="http://cdn.pulselive.com/test/client/pl/dev/i/elements/premier-league-logo-header-mob.svg" alt="Premier League Logo" />
          <h1>League Table</h1>
        </div>

        <table class="table">
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

        <table class="table">
          <thead>
            <tr>
              <th>Home Team</th>
              <th>Home Score</th>
              <th>Away Score</th>
              <th>Away Team</th>
            </tr>
          </thead>
          <tbody>
            {leagueMatches}
          </tbody>
        </table>

        <TeamGenerator onTeamSubmit={this.onTeamSubmit}/>
        <MatchGenerator onMatchSubmit={this.onMatchSubmit}/>

        <div class="footer">
          <div class="copy-sign">{'\u00A9 Henry Dashwood'}</div>
        </div>

      </div>
    )
  }
});

module.exports = League;
