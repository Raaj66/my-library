/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import 'bootstrap/dist/css/bootstrap.css';
import IcnHistoryModal from './IcnHistoryModal';
import { ModalSize } from '../IcnModal.types';

const sizeOptions = ModalSize;
storiesOf('Components/Modals/History Modal', module)
  .addDecorator(withKnobs)
  .add('without scroll', () => (
    <IcnHistoryModal
      title={text('title', 'History Modal')}
      primaryButtonText={text('primaryButtonText', 'Yes')}
      size={select('size', sizeOptions, ModalSize.Large)}
      isOpen={boolean('open', true)}
    >
      <p>{text('content', 'Content')}</p>
    </IcnHistoryModal>
  ))
  .add('with scroll', () => (
    <IcnHistoryModal
      title={text('title', 'History Modal With Scroll')}
      primaryButtonText={text('primaryButtonText', 'Yes')}
      size={select('size', sizeOptions, ModalSize.Large)}
      isOpen={boolean('open', true)}
    >
      <p>Paragraph to enable scrolling</p>
      <p>Paragraph to enable scrolling</p>
      <p>Paragraph to enable scrolling</p>
      <p>Paragraph to enable scrolling</p>
      <p>Paragraph to enable scrolling</p>
      <p>Paragraph to enable scrolling</p>
      <p>Paragraph to enable scrolling</p>
      <p>Paragraph to enable scrolling</p>
      <p>Paragraph to enable scrolling</p>
      <p>Paragraph to enable scrolling</p>
      <p>Paragraph to enable scrolling</p>
      <p>Paragraph to enable scrolling</p>
      <p>Paragraph to enable scrolling</p>
      <p>Paragraph to enable scrolling</p>
      <p>Paragraph to enable scrolling</p>
      <p>Paragraph to enable scrolling</p>
      <p>Paragraph to enable scrolling</p>
      <p>Paragraph to enable scrolling</p>
      <p>Paragraph to enable scrolling</p>
      <p>Paragraph to enable scrolling</p>
      <p>Paragraph to enable scrolling</p>
      <p>Paragraph to enable scrolling</p>
      <p>Paragraph to enable scrolling</p>
      <p>Paragraph to enable scrolling</p>
      <p>Paragraph to enable scrolling</p>
      <p>Paragraph to enable scrolling</p>
      <p>Paragraph to enable scrolling</p>
      <p>Paragraph to enable scrolling</p>
      <p>Paragraph to enable scrolling</p>
      <p>Paragraph to enable scrolling</p>
      <p>Paragraph to enable scrolling</p>
      <p>Paragraph to enable scrolling</p>
    </IcnHistoryModal>
  ));
