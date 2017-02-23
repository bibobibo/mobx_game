import React from "react";
import {observable, computed, autorun} from "mobx";
import {observer} from "mobx-react";

@observer
class App extends React.Component {
  render() {
    const store = this.props.store;
    return (
      <div>

      </div>
    );
  }
}

export default App;
