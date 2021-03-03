import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { PrivateRoute } from '../../components/routers/PrivateRoute';

describe('test in <PrivateRoute />', () => {

  const props = {
    location: {
      pathname: '/marvel'
    }
  };
  
  test('should show the component if it is authenticated and save localstorage', () => {

    const wrapper = mount( 
      <MemoryRouter>
        <PrivateRoute 
          isAuthenticated = { true } 
          component = { () => <span>Ready</span> } 
          {...props} 
        /> 
      </MemoryRouter>
    );

    expect( wrapper.find('span').exists() ).toBe( true );
    
  })
  

})
