/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from '../../../enzime';
import IcnButton from './IcnButton';
import { ButtonSize, ButtonType, ButtonVariant, IIcnButtonProps } from './IcnButton.types';

describe('Button shallow', () => {
  const mockProps: IIcnButtonProps = {
    text: 'Test',
    callback: jest.fn(),
    type: ButtonType.Submit,
    styleType: ButtonVariant.Primary,
    size: ButtonSize.ExtraLarge,
    disabled: false,
    pullRight: false,
    iconClassName: '',
    iconSvg: null,
  };
  it('renders default button', () => {
    const wrapper = shallow(<IcnButton {...mockProps} />);
    const btn = wrapper.find('button');
    expect(btn.hasClass('icnBtn')).toEqual(true);
    expect(btn.hasClass('primary')).toEqual(true);
    expect(btn.find('span').text()).toMatch('Test');
    expect(btn.prop('type')).toEqual('submit');
    expect(btn.hasClass('pull-right')).toEqual(false);
    expect(btn.find('i').exists()).toEqual(false);
    expect(btn.find('IconSvg').exists()).toEqual(false);
  });
  it('renders secondary button style', () => {
    const props = {
      ...mockProps,
      styleType: ButtonVariant.Secondary,
    };
    const wrapper = shallow(<IcnButton {...props} />);
    expect(wrapper.find('button').hasClass('secondary')).toEqual(true);
  });
  it('renders tertiary button style', () => {
    const props = {
      ...mockProps,
      styleType: ButtonVariant.Tertiaty,
    };
    const wrapper = shallow(<IcnButton {...props} />);
    expect(wrapper.find('button').hasClass('tertiary')).toEqual(true);
  });
  it('renders button with lg size', () => {
    const props = {
      ...mockProps,
      size: ButtonSize.Large,
    };
    const wrapper = shallow(<IcnButton {...props} />);
    expect(wrapper.find('button').hasClass('lg')).toEqual(true);
  });
  it('renders button with md size', () => {
    const props = {
      ...mockProps,
      size: ButtonSize.Medium,
    };
    const wrapper = shallow(<IcnButton {...props} />);
    expect(wrapper.find('button').hasClass('md')).toEqual(true);
  });
  it('renders button with sm size', () => {
    const props = {
      ...mockProps,
      size: ButtonSize.Small,
    };
    const wrapper = shallow(<IcnButton {...props} />);
    expect(wrapper.find('button').hasClass('sm')).toEqual(true);
  });
  it('renders disabled button', () => {
    const props = {
      ...mockProps,
      disabled: true,
    };
    const wrapper = shallow(<IcnButton {...props} />);
    expect(wrapper.find('button').prop('disabled')).toEqual(true);
    expect(wrapper.find('button').hasClass('disabled')).toEqual(true);
  });
  it('renders button on right side', () => {
    const props = {
      ...mockProps,
      pullRight: true,
    };
    const wrapper = shallow(<IcnButton {...props} />);
    expect(wrapper.find('button').hasClass('pull_right')).toEqual(true);
  });
  it('renders button with icon class', () => {
    const props = {
      ...mockProps,
      iconClassName: 'fa fa-download',
    };
    const wrapper = shallow(<IcnButton {...props} />);
    expect(wrapper.find('button i').hasClass('xl')).toEqual(true);
    expect(wrapper.find('button i').hasClass('fa fa-download')).toEqual(true);
  });
  it('renders button with icon svg', () => {
    const IconSvg = () => <svg />;
    const props = {
      ...mockProps,
      iconSvg: IconSvg,
    };
    const wrapper = shallow(<IcnButton {...props} />);
    expect(wrapper.find('button IconSvg').exists()).toEqual(true);
    expect(wrapper.find('button IconSvg').hasClass('iconSvg')).toEqual(true);
  });
  it('simulates click event', () => {
    const clickButtonSpy = jest.fn();
    const props = {
      ...mockProps,
      callback: clickButtonSpy,
    };
    const wrapper = shallow(<IcnButton {...props} />);
    const btn = wrapper.find('button');
    btn.simulate('click');
    expect(clickButtonSpy).toHaveBeenCalled();
  });
});
