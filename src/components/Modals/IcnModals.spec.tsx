import React from 'react';
import IcnButton, { ButtonSize, ButtonVariant } from '@components/Buttons/Button';
import { mount } from '@helper/enzime';
import IcnBaseModal from './BaseModal/IcnBaseModal';
import IcnWarningModal from './WarningModal/IcnWarningModal';
import IcnActionModal from './ActionModal/IcnActionModal';
import IcnHistoryModal from './HistoryModal/IcnHistoryModal';
import { ModalSize } from './IcnModal.types';

describe('modals shallow', () => {
  it('renders IcnBaseModal', () => {
    const wrapper = mount(
      <IcnBaseModal
        title="Title"
        bodyText="This is the bodytext"
        primaryButtonText="Yes"
        tertiaryButtonText="No"
        onRequestClose={() => {
          console.log('Modal close');
        }}
        buttons={<IcnButton size={ButtonSize.Medium} text="Yes" styleType={ButtonVariant.Primary} />}
      />
    );
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('h1').text()).toBe('Title');
    expect(wrapper.find('.footer')).toHaveLength(1);
    expect(wrapper.find(IcnButton)).toHaveLength(1);
  });

  it('renders IcnBaseModal with a description', () => {
    const wrapper = mount(
      <IcnBaseModal
        title="Title"
        bodyText="This is the bodytext"
        description="Hello World, This is the description"
        primaryButtonText="Yes"
        tertiaryButtonText="No"
        onRequestClose={() => {
          console.log('Modal closed');
        }}
        buttons={<IcnButton size={ButtonSize.Medium} text="Yes" styleType={ButtonVariant.Primary} />}
      />
    );
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('.description').exists()).toBe(true);
    expect(wrapper.find('p').text()).toBe('Hello World, This is the description');
  });
  it('renders IcnBaseModal with 2 buttons', () => {
    const callbackTest = jest.fn();
    const callbackTestBtn2 = jest.fn();
    const wrapper = mount(
      <IcnBaseModal
        title="Title"
        bodyText="This is the bodytext"
        primaryButtonText="Yes"
        tertiaryButtonText="No"
        onRequestClose={() => {
          console.log('Modal closed');
        }}
        primaryButtonCallback={callbackTest}
        tertiaryButtonCallback={callbackTestBtn2}
        buttons={
          <>
            <IcnButton size={ButtonSize.Medium} text="Yes" styleType={ButtonVariant.Primary} />
            <IcnButton size={ButtonSize.Medium} text="Yes" styleType={ButtonVariant.Tertiaty} />
          </>
        }
      />
    );
    // expect(wrapper.props().style.content.width).toEqual('546px');
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('h1').text()).toBe('Title');
    expect(wrapper.find('.footer')).toHaveLength(1);
    expect(wrapper.find(IcnButton)).toHaveLength(2);
  });
  it('renders IcnBaseModal with children', () => {
    const wrapper = mount(
      <IcnBaseModal
        title="Title"
        bodyText="This is the bodytext"
        primaryButtonText="Yes"
        tertiaryButtonText="No"
        onRequestClose={() => {
          console.log('Modal closed');
        }}
        buttons={<IcnButton size={ButtonSize.Medium} text="Yes" styleType={ButtonVariant.Primary} />}
      >
        <h3>Test</h3>
      </IcnBaseModal>
    );
    expect(wrapper.children().find('h3')).toHaveLength(1);
    expect(wrapper.exists()).toBe(true);
  });
  it('renders large IcnBaseModal', () => {
    const wrapper = mount(
      <IcnBaseModal
        title="Title"
        bodyText="This is the bodytext"
        primaryButtonText="Yes"
        tertiaryButtonText="No"
        size={ModalSize.Large}
        onRequestClose={() => {
          console.log('Modal closed');
        }}
        buttons={<IcnButton size={ButtonSize.Medium} text="Yes" styleType={ButtonVariant.Primary} />}
      />
    );
    // expect(wrapper.props().style.content.width).toEqual('720px');
    expect(wrapper.exists()).toBe(true);
  });
  it('renders IcnWarningModal', () => {
    const wrapper = mount(
      <IcnWarningModal
        title="Title"
        bodyText="This is the bodytext"
        primaryButtonText="Yes"
        tertiaryButtonText="No"
        onRequestClose={() => {
          console.log('Modal closed');
        }}
      />
    );
    expect(wrapper.exists()).toBe(true);
  });
  it('renders IcnWarningModal with props', () => {
    const wrapper = mount(
      <IcnWarningModal
        title="Title"
        bodyText="This is the bodytext"
        primaryButtonText="Yes"
        tertiaryButtonText="No"
        onRequestClose={() => {
          console.log('Modal closed');
        }}
      />
    );
    expect(wrapper.props().title).toEqual('Title');
    expect(wrapper.props().primaryButtonText).toEqual('Yes');
    expect(wrapper.props().tertiaryButtonText).toEqual('No');
  });
  it('renders IcnActionModal', () => {
    const wrapper = mount(
      <IcnActionModal
        title="Title"
        bodyText="This is the bodytext"
        primaryButtonText="Yes"
        tertiaryButtonText="No"
        onRequestClose={() => {
          console.log('Modal closed');
        }}
      >
        <h3>Test</h3>
      </IcnActionModal>
    );
    expect(wrapper.exists()).toBe(true);
  });
  it('renders IcnActionModal with children props', () => {
    const wrapper = mount(
      <IcnActionModal
        title="Title"
        bodyText="This is the bodytext"
        primaryButtonText="Yes"
        tertiaryButtonText="No"
        size={ModalSize.Large}
        onRequestClose={() => {
          console.log('Modal closed');
        }}
      >
        <h3>Test</h3>
      </IcnActionModal>
    );
    expect(wrapper.props().title).toEqual('Title');
    expect(wrapper.props().primaryButtonText).toEqual('Yes');
    expect(wrapper.props().tertiaryButtonText).toEqual('No');
    expect(wrapper.props().size).toEqual('lg');
    expect(wrapper.children().find('h3')).toHaveLength(1);
  });
  it('renders IcnHistoryModal', () => {
    const wrapper = mount(
      <IcnHistoryModal
        title="Title"
        bodyText="This is the bodytext"
        primaryButtonText="Yes"
        onRequestClose={() => {
          console.log('Modal closed');
        }}
      >
        <h3>Test</h3>
      </IcnHistoryModal>
    );
    expect(wrapper.exists()).toBe(true);
  });
  it('renders IcnHistoryModal with children props', () => {
    const wrapper = mount(
      <IcnHistoryModal
        title="Title"
        bodyText="This is the bodytext"
        primaryButtonText="Yes"
        size={ModalSize.Medium}
        onRequestClose={() => {
          console.log('Modal closed');
        }}
      >
        <h3>Test</h3>
      </IcnHistoryModal>
    );
    expect(wrapper.props().title).toEqual('Title');
    expect(wrapper.props().primaryButtonText).toEqual('Yes');
    expect(wrapper.props().size).toEqual('md');
    expect(wrapper.children().find('h3')).toHaveLength(1);
  });
});
