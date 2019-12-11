import React, {useReducer, useMemo} from 'react';
import PropTypes from 'prop-types';

const initialState = {
  user: {
    parent: false,
  },
};

const initialContext = [{...initialState}, () => {}];

export const UserContext = React.createContext(initialContext);

const updater = (state, update) => {
  return {...state, ...update};
};

export function UserProvider(props) {
  const [userState, updateUser] = useReducer(updater, initialState);
  const value = useMemo(() => [userState, updateUser], [userState]);

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
