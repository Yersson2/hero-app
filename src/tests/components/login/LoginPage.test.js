import { mount } from 'enzyme';
import React from 'react';
import { AuthContext } from '../../../auth/AuthContext';
import { LoginPage } from '../../../components/login/LoginPage';
import { types } from '../../../types/types';

describe('test in <LoginPage />', () => {

  const history = {
    replace: jest.fn()
  };

  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: false
    }
  };

  const wrapper = mount(
    <AuthContext.Provider value = { contextValue }>
      <LoginPage history = { history } />
    </AuthContext.Provider>
  )

  test('should show correctly', () => {

    expect( wrapper ).toMatchSnapshot();
    
  });

  test('should perform the dispatch and the navigation ', () => {

    const handleClick = wrapper.find('button').prop('onClick');
    handleClick();

    expect( contextValue.dispatch ).toHaveBeenCalledWith({
      type: types.login,
      payload: {
        name: 'yersson'
      }
    });

    expect( history.replace ).toHaveBeenCalledWith('/');
    localStorage.setItem('lasPath', '/dc');
    handleClick();
    expect( history.replace ).toHaveBeenCalledWith('/dc');
    
  });
  
  
  
})
