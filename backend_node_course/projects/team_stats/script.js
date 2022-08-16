const team = {
  _players: [
    {firstName: 'Pete', lastName: 'Wheeler', age: 54},
    {firstName: 'Jack', lastName: 'Sparrow', age: 44},
    {firstName: 'Leo', lastName: 'Davincci', age: 100}
  ],
  _games: [
    {opponent: 'Juventos', teamPoints: 54, opponentPoints: 57},
    {opponent: 'Santos', teamPoints: 54, opponentPoints: 55},
    {opponent: 'Sao Paulo', teamPoints: 54, opponentPoints: 63}
  ],
  get players(){
    return this._players;
  },
  get games(){
    return this._games;
  },
  addPlayer(newFirstname, newLastName, newAge){
    let player = {
      firstName: newFirstname,
      lastName: newLastName,
      age: newAge
    };
    this.players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints){
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    };
    this.games.push(game);
  }
};

team.addPlayer('Roberto', 'Carlos', 45);
console.log(team.players);
team.addGame('Liverpool', 54, 74)
console.log(team.games);
