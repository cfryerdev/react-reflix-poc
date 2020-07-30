import React, { Component } from "react";
import { KeyEnum, FocusFunctions } from "./focus-functions"

const FocusContext = React.createContext({ });
const FocusConsumer = FocusContext.Consumer;

class FocusProvider extends Component {
  constructor(state) {
    super(state);
    this.state = { };
  }

  componentDidMount() {
    document.addEventListener("keydown", event => {
      if (event.keyCode === KeyEnum.TAB) {
        event.preventDefault();
      }
      var backResult = FocusFunctions.handleSelection_Back(event);
      if (backResult) { return; }

      var defaultResult = FocusFunctions.handleDefaultFocus(event);
      if (defaultResult) { return; }

      var navResult = FocusFunctions.handleSelection_Navigation(event.keyCode);
      if (navResult) { return; }
      
      FocusFunctions.handleSelection_FocusGroups(event.keyCode);
    });
  }

  render() {
    const { children } = this.props;
    return (
      <FocusContext.Provider value={{ }} >
        {children}
      </FocusContext.Provider>
    );
  }
}

export { FocusProvider, FocusConsumer };
