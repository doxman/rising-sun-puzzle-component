import React, { Component } from 'react';
import * as shortid from 'shortid';
import './index.css';

class RisingSunPuzzle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      piecePositions: { // Top-left corner of each piece; since pieces can't rotate this is unambiguous
        sun: [1, 3],
        square1: [0, 3],
        square2: [0, 4],
        square3: [3, 3],
        square4: [3, 4],
        wide: [1, 2],
        tall1: [0, 0],
        tall2: [1, 0],
        tall3: [2, 0],
        tall4: [3, 0],
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

      return <div key={pieceID} className={pieceClassName} style={pieceStyle}></div>;
    });

    return (
      <div className="risingsunpuzzle-board">
        {pieces}
      </div>
    );
  }
}

export default RisingSunPuzzle;
