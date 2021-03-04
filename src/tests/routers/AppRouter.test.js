import { mount } from 'enzyme';
import React from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { AppRouter } from '../../components/routers/AppRouter';

describe('test un AppRouter', () => {

  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: false
    }
  };

  test('should show the login if does not authenticated', () => {

    const wrapper = mount(
      <AuthContext.Provider value = { contextValue } >
        <AppRouter />
      </AuthContext.Provider>
    );

    expect( wrapper ).toMatchSnapshot();
    
  });

  test('should show the marvel component if it is authenticated', () => {

    const contextValue = {
      dispatch: jest.fn(),
      user: {
        logged: true,
        name: 'Yersson'
      }
    };

    const wrapper = mount(
      <AuthContext.Provider value = { contextValue } >
        <AppRouter />
      </AuthContext.Provider>
    );

    expect( wrapper.find('.navbar').exists() ).toBe( true ); 
    
  })
  
  
  
})
