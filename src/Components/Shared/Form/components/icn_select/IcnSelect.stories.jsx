import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import IcnSelect from './IcnSelect';
import StateContainer from '../../../../../stories/lib/StateContainer';
import FieldDecorator from '../../../../../stories/lib/FieldDecorator';

const icnSelectProps = {
  id: 'fruit',
  data: {
    label: 'Fruit',
    responses: [
      { text: 'Apples', value: 'apples' },
      { text: 'Oranges', value: 'oranges' },
    ],
  },
};

const smallSelectTheme = {
  id: 'smallSelect',
  data: {
    responses: [{ text: '5', value: '5' }, { text: '10', value: '10' }],
  },
};

const mediumSelectTheme = {
  id: 'mediumSelect',
  data: {
    responses: [{ text: '5', value: '5' }, { text: '10', value: '10' }],
  },
};

storiesOf('Deprecated/Single Dropdown (IcnSelect)', module)
  .addDecorator(FieldDecorator)
  .add('Default', () => (
    <StateContainer
      {...icnSelectProps}
      callback={action('select')}
    >
      {(setState, state = {}) => (
        <IcnSelect
          {...state}
          callback={(val) => setState({ selectedValue: val })}
        />
      )}
    </StateContainer>
  ))
  .add('With Selected Value', () => (
    <StateContainer
      {...icnSelectProps}
      callback={action('select')}
      selectedValue="apples"
    >
      {(setState, state = {}) => (
        <IcnSelect
          {...state}
          callback={(val) => setState({ selectedValue: val })}
        />
      )}
    </StateContainer>
  ))
  .add('Read-Only', () => (
    <IcnSelect
      {...icnSelectProps}
      callback={action('select')}
      disabled
    />
  ))
  .add('Passing ...smallSelectedTheme as props', () => (
    <StateContainer
      {...smallSelectTheme}
      callback={action('select')}
      selectedValue="5"
    >
      {(setState, state = {}) => (
        <IcnSelect
          {...state}
          smallSelectTheme
          callback={(val) => setState({ selectedValue: val })}
        />
      )}
    </StateContainer>
  ))
  .add('Passing ...mediumSelectedTheme as props', () => (
    <StateContainer
      {...mediumSelectTheme}
      callback={action('select')}
      selectedValue="5"
    >
      {(setState, state = {}) => (
        <IcnSelect
          {...state}
          mediumSelectTheme
          callback={(val) => setState({ selectedValue: val })}
        />
      )}
    </StateContainer>
  ));
