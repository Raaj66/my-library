/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { mount } from '@helper/enzime';
import { ButtonSize, ButtonType, ButtonVariant, IIcnButtonProps } from '@components/Buttons/Button';
import IcnFileSelector from './IcnFileSelector';

describe('IcnFileSelector', () => {
  const fileName = 'test.pdf';
  it('resets fileName to blank when no file is selected', () => {
    const componentWrapper = mount(<IcnFileSelector text="" />);
    const component = componentWrapper.instance();
    componentWrapper.setState({ fileTitle: fileName });
    componentWrapper.find('input').simulate('change', { target: { files: [] } });
    expect(component.state).toEqual({ fileTitle: '' });
  });
  it('resets fileName to blank', () => {
    const componentWrapper = mount(<IcnFileSelector text="" />);
    const component = componentWrapper.instance() as IcnFileSelector;
    componentWrapper.setState({ fileTitle: fileName });
    component.reset();
    expect(component.state).toEqual({ fileTitle: '' });
  });
  it('fires onFileSelected when file is selected', () => {
    let onFiledSelectedRan = false;
    const defaultProps = {
      text: '',
      onFileSelected: () => {
        onFiledSelectedRan = true;
      },
    };
    const componentWrapper = mount(<IcnFileSelector {...defaultProps} />);
    const component = componentWrapper.instance();
    expect(component.state).toEqual({ fileTitle: '' });
    const file = new File([new Blob()], fileName, { type: 'application/pdf' });
    componentWrapper.find('input').simulate('change', { target: { files: [file] } });
    expect(onFiledSelectedRan).toEqual(true);
  });
  it('sets fileName when file is selected', () => {
    const componentWrapper = mount(<IcnFileSelector text="Test" />);
    const component = componentWrapper.instance();
    expect(component.state).toEqual({ fileTitle: '' });
    const file = new File([new Blob()], fileName, { type: 'application/pdf' });
    componentWrapper.find('input').simulate('change', { target: { files: [file] } });
    expect(component.state).toEqual({ fileTitle: fileName });
  });
  it('sets the name of the button', () => {
    const defaultProps = { text: 'Click Here' };
    const componentWrapper = mount(<IcnFileSelector {...defaultProps} />);
    expect(componentWrapper.find('IcnButton').text()).toEqual(defaultProps.text);
  });
  it('shares props with the IcnButton', () => {
    const defaultProps: IIcnButtonProps = {
      text: 'Test',
      type: ButtonType.Button,
      styleType: ButtonVariant.Primary,
      size: ButtonSize.Large,
      disabled: false,
    };
    const componentWrapper = mount(<IcnFileSelector {...defaultProps} />);
    const buttonProps = componentWrapper.find('IcnButton').props() as any;
    delete buttonProps.callback;
    expect(buttonProps).toEqual(defaultProps);
  });
});
