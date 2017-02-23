const EMPTY = 0;
const FILLED = 1;

const SHAPES_MATRIX = {
  A: [
    [
      [EMPTY, FILLED],
      [FILLED, FILLED],
      [FILLED, EMPTY]
    ],
    [
      [FILLED, FILLED, EMPTY],
      [EMPTY, FILLED, FILLED]
    ]
  ],
  B: [
    [
      [FILLED, EMPTY],
      [FILLED, FILLED],
      [EMPTY, FILLED]
    ],
    [
      [EMPTY, FILLED, FILLED],
      [FILLED, FILLED, EMPTY]
    ]
  ],
  C: [
    [
      [FILLED, FILLED],
      [FILLED, FILLED]
    ]
  ],
  D: [
    [
      [EMPTY, FILLED, EMPTY],
      [FILLED, FILLED, FILLED]
    ],
    [
      [FILLED, EMPTY],
      [FILLED, FILLED],
      [FILLED, EMPTY]
    ],
    [
      [FILLED, FILLED, FILLED],
      [EMPTY, FILLED, EMPTY]
    ],
    [
      [EMPTY, FILLED],
      [FILLED, FILLED],
      [EMPTY, FILLED]
    ]
  ],
  E: [
    [
      [FILLED, FILLED],
      [EMPTY, FILLED],
      [EMPTY, FILLED]
    ],
    [
      [EMPTY, EMPTY, FILLED],
      [FILLED, FILLED, FILLED]
    ],
    [
      [FILLED, EMPTY],
      [FILLED, EMPTY],
      [FILLED, FILLED]
    ],
    [
      [FILLED, FILLED, FILLED],
      [FILLED, EMPTY, EMPTY]
    ]
  ],
  F: [
    [
      [FILLED, FILLED],
      [FILLED, EMPTY],
      [FILLED, EMPTY]
    ],
    [
      [FILLED, FILLED, FILLED],
      [EMPTY, EMPTY, FILLED]
    ],
    [
      [EMPTY, FILLED],
      [EMPTY, FILLED],
      [FILLED, FILLED]
    ],
    [
      [FILLED, EMPTY, EMPTY],
      [FILLED, FILLED, FILLED]
    ]
  ],
  G: [
    [
      [FILLED],
      [FILLED],
      [FILLED],
      [FILLED]
    ],
    [
      [FILLED, FILLED, FILLED, FILLED]
    ]
  ]
};
const SHAPE_TYPES = Object.keys(SHAPES_MATRIX);

class Shape{
  constructor(type, id) {
    this._checkValid(type, id);
    this.type = type;
    this.id = id;
    this.typeLength = SHAPES_MATRIX[type].length;

    this.getShape = this.getShape.bind(this);
    this.transform = this.transform.bind(this);
  }

  transform() {
    this.id = (this.typeLength + parseInt(this.id) + 1) % this.typeLength;
  }

  getShape() {
    return SHAPES_MATRIX[this.type][this.id];
  }

  _checkValid(type, id) {
    const invalidShapeError = new Error(`invalid shape! type: ${type}, id: ${id}`);
    const typeInvalid = SHAPE_TYPES.indexOf(type) === -1;
    let idInvalid;

    if(typeInvalid) {
      throw (invalidShapeError)
    }

    idInvalid = Object.keys(SHAPES_MATRIX[type]).indexOf(id) === -1;
    if(idInvalid) {
      throw (invalidShapeError)
    }
  }
}

const createAllShapes = () => {
  let allShapes = [];
  for (let type of Object.keys(SHAPES_MATRIX)) {
    for (let id of Object.keys(SHAPES_MATRIX[type])) {
      allShapes.push(new Shape(type, id));
    }
  }

  return allShapes;
};

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const next = () => {
  const allShapes = createAllShapes();
  const length = allShapes.length;

  return allShapes[getRandomInt(0, length)]
};

export default next();
