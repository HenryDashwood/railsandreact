var React = require('react');
var PropTypes = React.PropTypes;

var TeamGenerator = React.createClass({

  getInitialState: function() {
    return {team: ''};
  },

  handleTeamChange: function(e) {
    this.setState({team: e.target.value})
  },

  handleTeamSubmit: function(e) {
    e.preventDefault();
    console.log("Yeah")
    var teamName = this.state.team.trim();
    if(!teamName) {
      return;
    }
    this.props.onTeamSubmit({name: teamName})
    this.setState({team: team})
  },

  render: function() {
    return (
      <div>
        // <form className="teamForm" onSubmit={this.handleTeamSubmit}>
        //   <input type="text" placeholder="Team name" value={this.state.team} onChange={this.handleTeamChange}/>
        //   <input type="submit" value="Post" />
        // </form>
      </div>
    );
  }

});

module.exports = TeamGenerator;

//and also add the team to the database (an ajax POST request)
//Make another form to make matches and take in match results
//make that form update the league table appropriately
