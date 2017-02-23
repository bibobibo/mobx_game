import _ from 'lodash';

const EMPTY = 0;
const FILLED = 1;

class Block {
  constructor(width, height, matrix) {
    this.width = width;
    this.height = height;

    this.isFull = this.isFull.bind(this);
    this.makeRowFilled = this.makeRowFilled.bind(this);
    this.makeRowEmpty = this.makeRowEmpty.bind(this);
    this.fillWith = this.fillWith.bind(this);

    matrix ? this.matrix = matrix : this.fillWith(FILLED);
  }

  isFull() {
    for(let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        if(this.matrix[i][j] === EMPTY) {
          return false;
        }
      }
    }

    return true;
  }

  makeRowFilled(rowIndex) {
    this._FillRowWith(rowIndex, FILLED);
  }

  makeRowEmpty(rowIndex) {
    this._FillRowWith(rowIndex, EMPTY);
  }

  fillWith(value) {
    const newMatrix = [];
    for(let i = 0; i < this.height; i++) {
      newMatrix.push(new Array(this.width).fill(value));
    }

    this.matrix = newMatrix;
  }

  _FillRowWith(rowIndex, value) {
    if(rowIndex<0 || rowIndex >= this.height) {
      return;
    }

    const newRow = new Array(this.width).fill(value);
    const newMatrix = _.clone(this.matrix);
    newMatrix[rowIndex] = newRow;

    this.matrix = newMatrix;
  }
}

export default Block;
