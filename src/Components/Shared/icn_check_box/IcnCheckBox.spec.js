import React from 'react';
import { mount, shallow ,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

//import faker from 'faker';
//import _ from 'lodash';
import IcnCheckBox from './IcnCheckBox'
configure({adapter: new Adapter()});
const generateProps = (custom = {}) => ({
  callback: jest.fn(),
  checked: false,
  disabled: false,
  ...custom,
});

const setUp = props => shallow(<IcnCheckBox {...props} />);

describe('IcnCheckBox', () => {
  let props, wrapper, input;

  afterEach(() => {
    wrapper = null;
    props = null;
    input = null;
    jest.clearAllMocks();
  });

  describe('with selection', () => {
    beforeEach(() => {
      props = generateProps();
      wrapper = setUp(props);
      input = wrapper.find('input');
    });

    it('Renders input', () => {
      expect(
        input.length
      ).toBe(1);
    });

    it('callback on change', () => {
      input.props().onChange();
      expect(props.callback).toHaveBeenCalled();
    });

    it('not disabled', () => {
      expect(
        input.props().disabled
      ).toBe(false);
    });

    it('not checked', () => {
      expect(
        input.props().checked
      ).toBe(false);
    });
  });

  describe('without selection', () => {
    beforeEach(() => {
      props = generateProps({checked: true});
      wrapper = setUp(props);
      input = wrapper.find('input');
    });

    it('checked', () => {
      expect(
        input.props().checked
      ).toBe(true);
    });

    it('callback on change', () => {
      input.props().onChange();
      expect(props.callback).toHaveBeenCalled();
    });
  });

  describe('as disabled', () => {
    beforeEach(() => {
      props = generateProps({disabled: true});
      wrapper = setUp(props);
      input = wrapper.find('input');
    });

    it('is disabled', () => {
      expect(
        input.props().disabled
      ).toBe(true);
    });
  });

  describe('with label', () => {
    it('renders label after checkbox', () => {
      props = generateProps();
      wrapper = setUp({...props, label: 'some text'});
      expect(wrapper.childAt(2).text()).toEqual('some text');
    });
  });
});
