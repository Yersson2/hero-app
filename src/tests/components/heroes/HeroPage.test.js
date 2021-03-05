import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { HeroPage } from '../../../components/heroes/HeroPage';

describe('test in <HeroPage />', () => {

  const history = {
    length: 10,
    push: jest.fn(),
    goBack: jest.fn()
  };

  const wrapper = mount(
    <MemoryRouter initialEntries = {['/hero']}>
      <HeroPage history = { history } />
    </MemoryRouter>
  );

  test('should show the component redirect if there not args in the url', () => {

    expect( wrapper.find('Redirect').exists() ).toBe( true );

  });
  
  test('should show a hero if the parameter exists and is found', () => {

    const wrapper = mount(
      <MemoryRouter initialEntries = {['/hero/marvel-spider']}>
        <Route path = "/hero/:heroId" component = { HeroPage } />
      </MemoryRouter>
    );

    expect( wrapper.find('.row').exists() ).toBe( true );
    
  });

  test('should goback to the before page with push', () => {

    const history = {
      length: 1,
      push: jest.fn(),
      goBack: jest.fn()
    };

    const wrapper = mount(
      <MemoryRouter initialEntries = {['/hero/marvel-spider']}>
        <Route 
          path = "/hero/:heroId" 
          component = { () => <HeroPage history = { history }/> } />
      </MemoryRouter>
    );

    wrapper.find('button').prop('onClick')();

    expect( history.push ).toHaveBeenCalledWith('/');
    expect( history.goBack ).not.toHaveBeenCalled();
    
  });

  test('should goback to the before page with goback', () => {

    const wrapper = mount(
      <MemoryRouter initialEntries = {['/hero/marvel-spider']}>
        <Route 
          path = "/hero/:heroId" 
          component = { () => <HeroPage history = { history }/> } />
      </MemoryRouter>
    );

    wrapper.find('button').prop('onClick')();

    expect( history.push ).toHaveBeenCalledTimes( 0 );
    expect( history.goBack ).toHaveBeenCalled();
    
  });

  test('should call redirect if the hero does not exists', () => {

    const wrapper = mount(
      <MemoryRouter initialEntries = {['/hero/marvel-spiderasdasd']}>
        <Route 
          path = "/hero/:heroId" 
          component = { () => <HeroPage history = { history }/> } />
      </MemoryRouter>
    );

    expect( wrapper.text() ).toBe('');
    
  })
  
})
