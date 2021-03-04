import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter, Router } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { Navbar } from '../../components/ui/Navbar';
import { types } from '../../types/types';


describe('test in <Navbar />', () => {

  const historyMock ={
    push: jest.fn(),
    location: {},
    listen: jest.fn(),
    createHref: jest.fn(),
    replace: jest.fn()
  }

  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: true,
      name: 'angel'
    }
  };

  const wrapper = mount(
    <AuthContext.Provider value = { contextValue }>
      <MemoryRouter>
        <Router history = { historyMock }>
          <Navbar />
        </Router>
      </MemoryRouter>
    </AuthContext.Provider>
  );

  afterEach( () => {
    jest.clearAllMocks();
  })
  
  test('should show correctly', () => {

    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('.text-info').text().trim() ).toBe('angel');
    
  });

  test('should call the logout and use history', () => {

    wrapper.find('button').prop('onClick')();

    expect( contextValue.dispatch ).toHaveBeenCalledWith({
      type: types.logout
    });

    expect( historyMock.replace ).toHaveBeenCalledWith('/login');
    
  })
  
  

})
