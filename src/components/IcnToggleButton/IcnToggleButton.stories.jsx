import React, { useState, useEffect } from 'react';
import FieldDecorator from 'stories/lib/FieldDecorator';
import IcnToggleButton from './IcnToggleButton';
import argTypes from './IcnToggleButtonArgTypes';

export default {
  title: 'Components/Toggles/IcnToggleButton',
  component: IcnToggleButton,
  decorators: [(Story) => FieldDecorator(() => <Story />)],
  includeStories: /^[A-Z]/,
  argTypes,
};

const Template = (args) => {
  const { value } = args;
  const [state, setState] = useState(value);
  const [callbackReturnValue, setCallbackReturnValue] = useState('');

  useEffect(() => {
    setState(value);
  }, [value]);

  const callback = (val) => {
    setState(val);
    setCallbackReturnValue(val);
  };

  return (
    <div>
      <IcnToggleButton
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...args}
        callback={callback}
        value={state}
      />
      <div>
        Current Selected Value: {JSON.stringify(state)}
        <br />
        Callback Return Value: {JSON.stringify(callbackReturnValue)}
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.storyName = 'default';
Default.args = {
  uniqueKey: 'unique-key',
  options: [
    {
      label: 'OPTION A',
      value: true,
    },
    {
      label: 'OPTION B',
      value: false,
    },
  ],
  value: true,
};
