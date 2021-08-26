import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  withKnobs,
  text,
  boolean, select,
} from '@storybook/addon-knobs';
import IcnCheckBox from './IcnCheckBox';
//import FieldDecorator from '../../.storybook/FieldDecorator';
//import StateContainer from '../../.storybook/StateContainer';

const onCheckBoxClicked = (setState, state) => {
//   setState({
//     checked: !state.checked,
//   });
};

storiesOf('Components/Shared/IcnCheckBox', module)
  //.addDecorator(FieldDecorator)
  .addDecorator(withKnobs)
  .add('default', () => (
    // <StateContainer
    //   checked={false}
    // >
    //   {(setState, state) => (
        <div>
          <IcnCheckBox
            standardSize={boolean('standardSize', false)}
            isRadio={boolean('isRadio', false)}
            glow={boolean('glow', false)}
            tieToId="checkbox_unique_id"
            checked={false}
            indeterminate={boolean('indeterminate', false)}
            disabled={boolean('disabled', false)}
           // callback={() => onCheckBoxClicked(setState, state)}
            label={text('label', '')}
            className={text('className', 'checkbox_custom_className')}
            size={select('size', ['large', 'medium'], 'large')}
          />
        </div>
    //   )}
    // </StateContainer>
  ));
