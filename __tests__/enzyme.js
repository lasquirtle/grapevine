import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Login from '../client/components/Login.jsx';
import SignUp from '../client/components/SignUp.jsx';

configure({ adapter: new Adapter() });

describe('React Unit Tests', () => {
  describe('Login Page Testing', () => {
    let wrapper;
    beforeAll(() => {
      wrapper = shallow(<Login/>)
    })

    it('Has a div with the id login', () => {
      expect(wrapper.find('#login')).toHaveLength(1);
    })

    it('Has a form', () => {
      expect(wrapper.find('form')).toHaveLength(1);
    })
  })

  describe('Signup Page Testing', () => {
    let wrapper;
    beforeAll(() => {
      wrapper = shallow(<SignUp/>)
    })

    it('Has a div with the id signup', () => {
      expect(wrapper.find('#signup')).toHaveLength(1);
    })

    it('Has a form', () => {
      expect(wrapper.find('form')).toHaveLength(1);
    })
  })
})
