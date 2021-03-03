import authReducer from "../../auth/authReducer"
import { types } from "../../types/types";

describe('tests in authReducer', () => {
  
  test('should return the default state', () => {

    const state = authReducer({ logged: false}, {});
    expect( state ).toEqual({ logged: false });

  });

  test('should authenticate and set the username', () => {

    const action = {
      type: types.login,
      payload: {
        name: 'angel'
      }
    }

    const state = authReducer({ logged: false}, action );
    expect( state ).toEqual({ logged: true, name: 'angel' });
    
  });

  test('should delete the username and set the logged in false', () => {

    const action = {
      type: types.logout
    }

    const state = authReducer({ logged: true, name: 'yersson' }, action );
    expect( state ).toEqual({ logged: false });
    
  })
  
  
  

})
