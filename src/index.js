import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Background from './2.jpg'
import BoardBackground from './board3.png'
/*
function UserName(user) {
  return user.firstName + ' ' + user.middleName + ' ' + user.lastName;
};

const user = {
  firstName: 'Pratyush',
  middleName: 'Ram',
  lastName: 'Tripathi'
};
function getGreeting(user) {
  if (user) {
    return <h1>Hello {UserName(user)}!</h1>;
  }
  return <h1>Hello stranger...</h1>;
}
const element = (
  <p>
    {getGreeting(user)}
  </p>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);

const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello world!'
  }
};

function tick() {
  const element = (
    <div>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));}

setInterval(tick, 1000);


class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <h1>It is {this.state.date.toLocaleTimeString()}.</h1>
    );
  }
}
function tick() {
  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );
}
9
setInterval(tick, 1000);
*/
/*var initialPos = 0
const dice = 6
class Reservation extends React.Component{
  constructor(props) {
    super(props);
    this.roll = this.roll.bind(this)
    this.state = ({rolledValue: Math.floor(Math.random()*6)+1})
  }

  roll() {
    this.setState = ({rolledValue: Math.floor(Math.random()*6)+1})
    //this.state.rolledValue = Math.floor(Math.random()*6)+1
    //var roll = this.state.rolledValue
    //initialPos += roll
    //alert("roll" + this.state.rolledValue)
  }
  render() {
    return(
      <button onClick={this.roll}>
        {this.roll}
      </button>
    );
  };
}
ReactDOM.render(
  <Reservation />,
  document.getElementById('root')
);
*/

var player1Pos = 0;
var player2Pos = 0;
const player1face = "P1";
const player2face = "P2";
class Snakes_and_ladder extends React.Component {
  constructor(props) {
    super(props);
    this.updateHTML = this.updateHTML.bind(this);
    this.handleTable = this.handleTable.bind(this);
    this.alerts = this.alerts.bind(this);
    this.playerwin = this.playerwin.bind(this);
    this.snake = this.snake.bind(this);
    this.ladders = this.ladders.bind(this);
    this.samePos = this.samePos.bind(this);
  }

  state = {
    roll: 6,
    counter_player1: 0,
    counter_player2: 0,
    finalStep: 100,
    roll2: 6,
    turnPlayer1: false,
    turnPlayer2: true,
    player1win: false,
    player2win: false,
    colValue: null,
    boardDisplayPlayer1: false,
    boardDisplayPlayer2: false,
    rollSixPlayer1: false,
    rollSixPlayer2: false,
  }

  updateHTML(elmId, value, clName) {
    var elem = document.getElementById(elmId);
    if(typeof elem !== 'undefined' && elem !== null) {
      elem.innerHTML = value;
      elem.style.background = clName;
    }
  }

  handleTable() {
    return(
      <div>
        <div>
          <img class = "boardBackground" src = {BoardBackground} />
          <table class = 'numtable'>
              <tr>
                  <td id = "100" class="tableComponent">**</td>
                  <td id = "99"class="tableComponent2">{this.state.finalStep - 1}</td>
                  <td id = "98"class="tableComponent">{this.state.finalStep - 2}</td>
                  <td id = "97"class="tableComponent2">{this.state.finalStep - 3}</td>
                  <td id = "96"class="tableComponent">{this.state.finalStep - 4}</td>
                  <td id = "95"class="tableComponent2">{this.state.finalStep - 5}</td>
                  <td id = "94"class="tableComponent">{this.state.finalStep - 6}</td>
                  <td id = "93"class="tableComponent2">{this.state.finalStep - 7}</td>
                  <td id = "92"class="tableComponent">{this.state.finalStep - 8}</td>
                  <td id = "91"class="tableComponent2">{this.state.finalStep - 9}</td>
              </tr>
              <tr>
                <td id = "81"class="tableComponent2">{this.state.finalStep - 19}</td>
                <td id = "82"class="tableComponent">{this.state.finalStep - 18}</td>
                <td id = "83"class="tableComponent2">{this.state.finalStep - 17}</td>
                <td id = "84"class="tableComponent">{this.state.finalStep - 16}</td>
                <td id = "85"class="tableComponent2">{this.state.finalStep - 15}</td>
                <td id = "86"class="tableComponent">{this.state.finalStep - 14}</td>
                <td id = "87"class="tableComponent2">{this.state.finalStep - 13}</td>
                <td id = "88"class="tableComponent">{this.state.finalStep - 12}</td>
                <td id = "89"class="tableComponent2">{this.state.finalStep - 11}</td>
                <td id = "90"class="tableComponent">{this.state.finalStep - 10}</td>
              </tr>
              <tr>
                  <td id = "80"class="tableComponent">{this.state.finalStep - 20}</td>
                  <td id = "79"class="tableComponent2">{this.state.finalStep - 21}</td>
                  <td id = "78"class="tableComponent">{this.state.finalStep - 22}</td>
                  <td id = "77"class="tableComponent2">{this.state.finalStep - 23}</td>
                  <td id = "76"class="tableComponent">{this.state.finalStep - 24}</td>
                  <td id = "75"class="tableComponent2">{this.state.finalStep - 25}</td>
                  <td id = "74"class="tableComponent">{this.state.finalStep - 26}</td>
                  <td id = "73"class="tableComponent2">{this.state.finalStep - 27}</td>
                  <td id = "72"class="tableComponent">{this.state.finalStep - 28}</td>
                  <td id = "71"class="tableComponent2">{this.state.finalStep - 29}</td>
              </tr>
              <tr>
                <td id = "61"class="tableComponent2">{this.state.finalStep - 39}</td>
                <td id = "62"class="tableComponent">{this.state.finalStep - 38}</td>
                <td id = "63"class="tableComponent2">{this.state.finalStep - 37}</td>
                <td id = "64"class="tableComponent">{this.state.finalStep - 36}</td>
                <td id = "65"class="tableComponent2">{this.state.finalStep - 35}</td>
                <td id = "66"class="tableComponent">{this.state.finalStep - 34}</td>
                <td id = "67"class="tableComponent2">{this.state.finalStep - 33}</td>
                <td id = "68"class="tableComponent">{this.state.finalStep - 32}</td>
                <td id = "69"class="tableComponent2">{this.state.finalStep - 31}</td>
                <td id = "70"class="tableComponent">{this.state.finalStep - 30}</td>
              </tr>
              <tr>
                  <td id = "60"class="tableComponent">{this.state.finalStep - 40}</td>
                  <td id = "59"class="tableComponent2">{this.state.finalStep - 41}</td>
                  <td id = "58"class="tableComponent">{this.state.finalStep - 42}</td>
                  <td id = "57"class="tableComponent2">{this.state.finalStep - 43}</td>
                  <td id = "56"class="tableComponent">{this.state.finalStep - 44}</td>
                  <td id = "55"class="tableComponent2">{this.state.finalStep - 45}</td>
                  <td id = "54"class="tableComponent">{this.state.finalStep - 46}</td>
                  <td id = "53"class="tableComponent2">{this.state.finalStep - 47}</td>
                  <td id = "52"class="tableComponent">{this.state.finalStep - 48}</td>
                  <td id = "51"class="tableComponent2">{this.state.finalStep - 49}</td>
              </tr>
              <tr>
                <td id = "41"class="tableComponent2">{this.state.finalStep - 59}</td>
                <td id = "42"class="tableComponent">{this.state.finalStep - 58}</td>
                <td id = "43"class="tableComponent2">{this.state.finalStep - 57}</td>
                <td id = "44"class="tableComponent">{this.state.finalStep - 56}</td>
                <td id = "45"class="tableComponent2">{this.state.finalStep - 55}</td>
                <td id = "46"class="tableComponent">{this.state.finalStep - 54}</td>
                <td id = "47"class="tableComponent2">{this.state.finalStep - 53}</td>
                <td id = "48"class="tableComponent">{this.state.finalStep - 52}</td>
                <td id = "49"class="tableComponent2">{this.state.finalStep - 51}</td>
                <td id = "50"class="tableComponent">{this.state.finalStep - 50}</td>
              </tr>
              <tr>
                  <td id = "40"class="tableComponent">{this.state.finalStep - 60}</td>
                  <td id = "39"class="tableComponent2">{this.state.finalStep - 61}</td>
                  <td id = "38"class="tableComponent">{this.state.finalStep - 62}</td>
                  <td id = "37"class="tableComponent2">{this.state.finalStep - 63}</td>
                  <td id = "36"class="tableComponent">{this.state.finalStep - 64}</td>
                  <td id = "35"class="tableComponent2">{this.state.finalStep - 65}</td>
                  <td id = "34"class="tableComponent">{this.state.finalStep - 66}</td>
                  <td id = "33"class="tableComponent2">{this.state.finalStep - 67}</td>
                  <td id = "32"class="tableComponent">{this.state.finalStep - 68}</td>
                  <td id = "31"class="tableComponent2">{this.state.finalStep - 69}</td>
              </tr>
              <tr>
                <td id = "21"class="tableComponent2">{this.state.finalStep - 79}</td>
                <td id = "22"class="tableComponent">{this.state.finalStep - 78}</td>
                <td id = "23"class="tableComponent2">{this.state.finalStep - 77}</td>
                <td id = "24"class="tableComponent">{this.state.finalStep - 76}</td>
                <td id = "25"class="tableComponent2">{this.state.finalStep - 75}</td>
                <td id = "26"class="tableComponent">{this.state.finalStep - 74}</td>
                <td id = "27"class="tableComponent2">{this.state.finalStep - 73}</td>
                <td id = "28"class="tableComponent">{this.state.finalStep - 72}</td>
                <td id = "29"class="tableComponent2">{this.state.finalStep - 71}</td>
                <td id = "30"class="tableComponent">{this.state.finalStep - 70}</td>
              </tr>
              <tr>
                  <td id = "20"class="tableComponent">{this.state.finalStep - 80}</td>
                  <td id = "19"class="tableComponent2">{this.state.finalStep - 81}</td>
                  <td id = "18"class="tableComponent">{this.state.finalStep - 82}</td>
                  <td id = "17"class="tableComponent2">{this.state.finalStep - 83}</td>
                  <td id = "16"class="tableComponent">{this.state.finalStep - 84}</td>
                  <td id = "15"class="tableComponent2">{this.state.finalStep - 85}</td>
                  <td id = "14"class="tableComponent">{this.state.finalStep - 86}</td>
                  <td id = "13"class="tableComponent2">{this.state.finalStep - 87}</td>
                  <td id = "12"class="tableComponent">{this.state.finalStep - 88}</td>
                  <td id = "11" class="tableComponent2">{this.state.finalStep - 89}</td>
              </tr>
              <tr>
                <td id = "1"class="tableComponent2">{this.state.finalStep - 99}</td>
                <td id = "2"class="tableComponent">{this.state.finalStep - 98}</td>
                <td id = "3"class="tableComponent2">{this.state.finalStep - 97}</td>
                <td id = "4"class="tableComponent">{this.state.finalStep - 96}</td>
                <td id = "5"class="tableComponent2">{this.state.finalStep - 95}</td>
                <td id = "6"class="tableComponent">{this.state.finalStep - 94}</td>
                <td id = "7"class="tableComponent2">{this.state.finalStep - 93}</td>
                <td id = "8"class="tableComponent">{this.state.finalStep - 92}</td>
                <td id = "9"class="tableComponent2">{this.state.finalStep - 91}</td>
                <td id = "10"class="tableComponent">{this.state.finalStep - 90}</td>
              </tr>
          </table>
        </div>
      </div>
    );
  }

  alerts(props, player) {
    if (props === true) {
      return(
        <table class = "footertable">
          <tr>
            <td class = "blink">{"Extra chance to " + player + "!!!!"}</td>
          </tr>
        </table>
      );
    }
  }

  playerwin() {
    if (this.state.player1win === true) {
      return (
        <table class = "footertable">
          <tr>
            <td>
              <div>
                {alert("Player1 has won the game!!!!")}
                {this.updateHTML(player1Pos, player1face, "cyan")}
                {alert("The page will reload...")}
                {window.location.reload()}
              </div>
            </td>
          </tr>
        </table>
      );
    } else if (this.state.player2win === true) {
      return (
        <table>
          <tr>
            <td>
              <div>
                {alert("Player2 has won the game!!!!")}
                {this.updateHTML(player2Pos, player2face, "blue")}
                {alert("The page will reload...")}
                {window.location.reload()}
              </div>
            </td>
          </tr>
        </table>
      )
    }
  }

  snake() {
    const head = [
       "27",
       "30",
       "40",
       "94",
       "61",
       "78",
       "89",
       "99"
    ];
    const tail = [
      "17",
      "8",
      "3",
      "76",
      "45",
      "41",
      "51",
      "13"
    ];

    if (head.includes(String(player1Pos))) {
      var head_index = head.indexOf(String(player1Pos));
      var tail_index = tail[head_index];
      player1Pos = parseInt(tail_index);
      return(
        <div>
          Player1 got bit!!!!:
          {head[head_index]}
          -
          {player1Pos}
        </div>
      );
    } else if (head.includes(String(player2Pos))) {
      var head_index = head.indexOf(String(player2Pos));
      var tail_index = tail[head_index];
      player2Pos = parseInt(tail_index);
      return(
        <div>
          Player2 got bit:
          {head[head_index]}
          -
          {player2Pos}
        </div>
      );
    }
  }

  ladders() {
    const bottom = [
      "7",
      "23",
      "88",
      "28",
      "58",
      "80"
    ]

    const top = [
      "36",
      "53",
      "97",
      "74",
      "71",
      "84"
    ]

    if (bottom.includes(String(player1Pos))) {
      var bottom_index = bottom.indexOf(String(player1Pos));
      var top_index = top[bottom_index];
      player1Pos = parseInt(top_index)
      return(
        <div>
          Player1 climed a ladder from:

            {bottom[bottom_index]}
             -
            {player1Pos}
        </div>
      );
    } else if (bottom.includes(String(player2Pos))) {
      var bottom_index = bottom.indexOf(String(player2Pos));
      var top_index = top[bottom_index];
      player2Pos = parseInt(top_index);

      return(
        <div>
          Player2 climed a ladder from:
          {bottom[bottom_index]}
          -
          {player2Pos}
        </div>
      );
    }
  }


  samePos(player1, player2, color) {
    if (player1 === 0 && player2 === 0) {
      return(
        <div>
          {alert("Click on the buttons to roll the dice...")}
          {alert("The black arrows will be the ladder...")}
          {alert("The green arrows will be the snake...")}
        </div>
      );
    } else if (player1 === player2) {
      return(
        <div style={{color: color}}>
          Player1 and Player2 are on {player1}.
        </div>
      );
    }
  }

//-----------------------------PLAYER1------------------------------
  player1Game = (roll) => {
    this.state.rollSixPlayer1 = false;
    this.setState({ roll });
    var player1History = player1Pos;
    if (player1Pos + roll > this.state.finalStep) {
      this.setState({counter_player1: 0})
      this.setState({turnPlayer2: false})
      this.setState({turnPlayer1: true})

    } else if (roll === 6 && this.state.counter_player1 < 3) {
      this.state.counter_player1 += 1
      if (this.state.counter_player1 === 3) {
        this.setState({counter_player1: 0})
        this.setState({turnPlayer2: false})
        this.setState({turnPlayer1: true})
      } else {
        player1Pos += roll
        this.setState({rollSixPlayer1: true})
      }

    } else {
      this.setState({counter_player1: 0})
      player1Pos += roll
      this.setState({turnPlayer2: false})
      this.setState({turnPlayer1: true})
    }

    if (player1Pos === this.state.finalStep) {
      this.setState({player1win: true})
    }

    if (player1Pos > player1History && player1History % 2 === 0) {
      this.updateHTML(player1History, player1History, "transparent")
    } else if (player1Pos > player1History && player1History % 2 !== 0) {
      this.updateHTML(player1History, player1History, "transparent")
    }

  }
//------------------------PLAYER2-----------------------------------
  player2Game = (roll2) => {
    this.state.rollSixPlayer2 = false;
    this.setState({ roll2 });
    var player2History = player2Pos;
    if (player2Pos + roll2 > this.state.finalStep){
      this.setState({counter_player2: 0})
      this.setState({turnPlayer2: true})
      this.setState({turnPlayer1: false})

    } else if (roll2 === 6 && this.state.counter_player2 < 3) {
      this.state.counter_player2 += 1;
      if (this.state.counter_player2 === 3) {
        this.setState({counter_player2: 0})
        this.setState({turnPlayer2: true})
        this.setState({turnPlayer1: false})
      } else {
        player2Pos += roll2
        this.setState({rollSixPlayer2: true})
      }

    } else {
      this.setState({counter_player2: 0})
      player2Pos += roll2
      this.setState({turnPlayer2: true})
      this.setState({turnPlayer1: false})
    }
    if (player2Pos === this.state.finalStep) {
      this.setState({player2win: true})
    }

    if (player2Pos > player2History && player2History % 2 === 0) {
      this.updateHTML(player2History, player2History, "transparent")
    } else if (player2Pos > player2History && player2History % 2 !== 0){
      this.updateHTML(player2History, player2History, "transparent")
    }
  }

//----------------------------BUTTON_DISPLAY---------------------------------

//--------------------------------WINNER-------------------------------------
  render() {
    var selStyle = {
      background: "url(" + {Background} + ")"
    }
    const { roll } = this.state
    const { roll2 } = this.state //destucture state

//------------------------------RETURN-----------------------------------------

    return (
      <table>
        <tr>
          <td>
            <div>
              {this.handleTable()}
              <div class="allign">
                {this.snake()}
                {this.ladders()}
                {this.updateHTML(player1Pos, player1face, "cyan")}
                {this.updateHTML(player2Pos, player2face, "blue")}
                Final Position: {this.state.finalStep}
                <p></p>

                Player 1's dice:
                <button id = "player_1" disabled={this.state.turnPlayer1 || this.state.player1win || this.state.player2win} class="dice" onClick={ () => { this.player1Game(Math.floor(Math.random()*6)+1)}  }>
                  {roll}
                </button>
                Player one's initial position: {player1Pos}
                <p></p>
                Player 2's dice:
                <button id = "player_2"disabled={this.state.turnPlayer2 || this.state.player2win || this.state.player1win} class="dice_2" onClick={ () => { this.player2Game(Math.floor(Math.random()*6)+1)}}>
                  {roll2}
                </button>
                Player two's initial position: {player2Pos}
                <p></p>
              </div>
              {this.playerwin()}
            </div>
          </td>
          <td class="allign2">
            {<h3>{this.alerts(this.state.rollSixPlayer1, "Player1")}</h3>}
            {<h3>{this.alerts(this.state.rollSixPlayer2, "Player2")}</h3>}
            {this.samePos(player1Pos, player2Pos, "blue")}
          </td>
        </tr>
      </table>
    );
  }
//----------------------------------END----------------------------------------
}

var selStyle = {
  background: "url(" + {BoardBackground} + ")"
}

ReactDOM.render(
  <Snakes_and_ladder />,
  document.getElementById('root')
);
