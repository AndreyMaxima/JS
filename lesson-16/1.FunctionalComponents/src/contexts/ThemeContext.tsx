import React, { ReactNode } from 'react';
import { DARK_THEME } from '../constants/localStorage';
import { TRUE_STRING } from '../constants/common';

interface Props {
  children: ReactNode;
}

export interface ThemeContextState {
  darkTheme: boolean;
  toggleTheme: (value: boolean) => void;
}

const { Provider, Consumer } = React.createContext<Partial<ThemeContextState>>({});

class ThemeContextProvider extends React.Component<Props, ThemeContextState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      darkTheme: localStorage.getItem(DARK_THEME) === TRUE_STRING,
      toggleTheme: this.toggleTheme.bind(this),
    };
  }

  toggleTheme(value: boolean) {
    this.setState({ darkTheme: value });
    localStorage.setItem(DARK_THEME, value.toString());
  }

  render(): React.ReactNode {
    return (
      <Provider value={{
        darkTheme: this.state.darkTheme,
        toggleTheme: this.state.toggleTheme,
      }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer };
