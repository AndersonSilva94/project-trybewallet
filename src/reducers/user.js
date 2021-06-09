// Esse reducer será responsável por tratar as informações da pessoa usuária
// lembrar de importar a action
import { LOGIN } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
  },
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN:
    return { ...state, user: { ...state.user, email: action.payload.email } };
  default:
    return state;
  }
};

export default user;
