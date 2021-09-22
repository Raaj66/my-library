/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import 'bootstrap/dist/css/bootstrap.css';
import IcnWarningModal from './IcnWarningModal';

storiesOf('Components/Modals/Warning Modal', module)
  .addDecorator(withKnobs)
  .add('with subtitle', () => (
    <IcnWarningModal
      title={text('title', 'Delete Document')}
      subhead={text('subtitle', 'Bens Doc Type')}
      bodyText={text('bodyText', 'Are you sure you want to delete this document?')}
      primaryButtonText={text('primaryButtonText', 'Yes')}
      tertiaryButtonText={text('tertiaryButtonText', 'No')}
      isOpen={boolean('open', true)}
    />
  ))
  .add('withouth subtitle', () => (
    <IcnWarningModal
      title={text('title', 'Delete Document')}
      bodyText={text('bodyText', 'Are you sure you want to delete this document?')}
      primaryButtonText={text('primaryButtonText', 'Yes')}
      tertiaryButtonText={text('tertiaryButtonText', 'No')}
      isOpen={boolean('open', true)}
    />
  ));
