import * as React from 'react';
import { reducer } from './index';

const initialState = {
  socialDetailPageData: {}
}
const DataContext = React.createContext(initialState);

export const Provider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
      <DataContext.Provider value={{ state, dispatch }}>
        {children}
      </DataContext.Provider>
  );
};

export function useDataContext() {
    return React.useContext(DataContext);
}
