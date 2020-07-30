import React, { Component } from "react";
// import { AccountFunctions } from "./account-functions"

const AccountContext = React.createContext({ 
  account: {}
});
const AccountConsumer = AccountContext.Consumer;

class AccountProvider extends Component {
  constructor(state) {
    super(state);
    this.state = { 
      account: {}
    };
  }

  componentDidMount() {
    
  }

  render() {
    const { children } = this.props;
    return (
      <AccountContext.Provider value={{ }} >
        {children}
      </AccountContext.Provider>
    );
  }
}

export { AccountProvider, AccountConsumer };
