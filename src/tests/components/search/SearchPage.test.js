import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter, Route } from 'react-router';
import { SearchPage } from '../../../components/search/SearchPage';

describe('test in <Search />', () => {
  
  test('should show correctly with default values ', () => {

    const wrapper = mount(
      <MemoryRouter initialEntries = {['/search']}>
        <Route path = "/search" component = { SearchPage } />
      </MemoryRouter>
    );

    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('.alert-info').text().trim() ).toBe('Search a hero');
    
  });

  test('should show batman and the input with the queryString value', () => {

    const wrapper = mount(
      <MemoryRouter initialEntries = {['/search?q=batman']}>
        <Route path = "/search" component = { SearchPage } />
      </MemoryRouter>
    );

    expect( wrapper.find('input').prop('value') ).toBe('batman');
    expect( wrapper ).toMatchSnapshot();
    
  });

  test('should show an error if does not find the hero', () => {

    const wrapper = mount(
      <MemoryRouter initialEntries = {['/search?q=batman123']}>
        <Route path = "/search" component = { SearchPage } />
      </MemoryRouter>
    );

    expect( wrapper.find('.alert-danger').text().trim() ).toBe(`There isn't a hero with batman123`);
    expect( wrapper ).toMatchSnapshot();
    
  });

  test("should call the history's push", () => {

    const history = {
      push: jest.fn()
    };

    const wrapper = mount(
      <MemoryRouter initialEntries = {['/search?q=batman123']}>
        <Route 
          path = "/search" 
          component = { () => <SearchPage history = { history } /> } />
      </MemoryRouter>
    );

    wrapper.find('input').simulate( 'change', {
      target: {
        name: 'searchText',
        value: 'batman'
      }
    });

    wrapper.find('form').prop('onSubmit')({
      preventDefault(){}
    });

    expect( history.push ).toHaveBeenCalledWith(`?q=batman`);
    
  })
  
  
  
  
})
