class AppContext {
  constructor(state) {
    this.state = state
  }

  initStart() {
    this.state.initStart();
  }

  initEnd() {
    this.state.initEnd();
  }

  pause() {
    this.state.pause();
  }

  play() {
    this.state.play();
  }

  removeWholeRowStart() {
    this.state.removeWholeRowStart();
  }

  removeWholeRowEnd() {
    this.state.removeWholeRowEnd();
  }
}

export default AppContext;
