import React, { Component } from 'react';
import * as shortid from 'shortid';
import './index.css';
import UpArrow from './assets/UpArrow.png';
import RightArrow from './assets/RightArrow.png';
import DownArrow from './assets/DownArrow.png';
import LeftArrow from './assets/LeftArrow.png';

class RisingSunPuzzle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      piecePositions: { // Top-left corner of each piece; since pieces can't rotate this is unambiguous
        sun: [2, 4],
        square1: [1, 4],
        square2: [1, 5],
        square3: [4, 4],
        square4: [4, 5],
        wide: [2, 3],
        tall1: [1, 1],
        tall2: [2, 1],
        tall3: [3, 1],
        tall4: [4, 1],
      },
    };
  }

  render() {
    const pieceNames = Object.keys(this.state.piecePositions);
    const pieces = pieceNames.map((pieceName) => {
      const topLeft = this.state.piecePositions[pieceName];

      let pieceClassName = "risingsunpuzzle-piece risingsunpuzzle-piece-";

      switch(pieceName) {
        case "sun":
          pieceClassName = pieceClassName.concat("sun");
          break;
        case "wide":
          pieceClassName = pieceClassName.concat("cloud");
          break;
        case "tall1":
        case "tall2":
        case "tall3":
        case "tall4":
          pieceClassName = pieceClassName.concat("night");
          break;
        default: // square1, square2, square3, square4
          pieceClassName = pieceClassName.concat("star");
      }

      const pieceID = shortid.generate();
      const pieceStyle = {
        gridColumnStart: topLeft[0],
        gridRowStart: topLeft[1],
      };

      const arrowUp = new Image();
      const arrowRight = new Image();
      const arrowDown = new Image();
      const arrowLeft = new Image();

      arrowUp.src = UpArrow;
      arrowRight.src = RightArrow;
      arrowDown.src = DownArrow;
      arrowLeft.src = LeftArrow;

      return <div key={pieceID} className={pieceClassName} style={pieceStyle}>
        <div className="risingsunpuzzle-arrow risingsunpuzzle-arrowUp">
          {arrowUp}
        </div>
        <div className="risingsunpuzzle-arrow risingsunpuzzle-arrowRight">
          {arrowRight}
        </div>
        <div className="risingsunpuzzle-arrow risingsunpuzzle-arrowDown">
          {arrowDown}
        </div>
        <div className="risingsunpuzzle-arrow risingsunpuzzle-arrowLeft">
          {arrowLeft}
        </div>
      </div>;
    });

    return (
      <div className="risingsunpuzzle-board">
        {pieces}
      </div>
    );
  }
}

export default RisingSunPuzzle;
