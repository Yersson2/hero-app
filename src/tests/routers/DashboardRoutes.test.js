import { AuthContext } from "../../auth/AuthContext";
import React from 'react';
import { DashboardRoutes } from "../../components/routers/DashboardRoutes";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";

describe('test in <DashboardRoutes />', () => {

  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: true,
      name: 'angel'
    }
  };
  
  test('should show correctly', () => {

    const wrapper = mount(
      <AuthContext.Provider value = { contextValue } >
        <MemoryRouter>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('.text-info').text().trim() ).toBe('angel');
    
  })
  

})
