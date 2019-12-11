import React, { Component } from "react";

const AppContext = React.createContext({ lang: "en" });

export const AppProvider = AppContext.Provider;
export const AppConsumer = AppContext.Consumer;

class AppContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
      todoList: []
    };
  }

  /**
   * updateContextValue: Update the values in the context
   * @param {string} key the name of the value to be updated
   * @param {string} val the actual value that is passed in the key to update
   **/
  updateContextValue = (key, val) => {
    this.setState({ [key]: val });
  };

  getTodoList = () => {};

  render() {
    return (
      <AppProvider
        value={{
          state: this.state,
          updateContextValue: this.updateContextValue,
          getTodoList: this.getTodoList
        }}
      >
        {this.props.children}
      </AppProvider>
    );
  }
}

export default AppContextProvider;
