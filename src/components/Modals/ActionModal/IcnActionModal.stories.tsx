/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import 'bootstrap/dist/css/bootstrap.css';
import IcnActionModal from './IcnActionModal';
import { ModalSize } from '../IcnModal.types';

const sizeOptions = ModalSize;
storiesOf('Components/Modals/Action Modal', module)
  .addDecorator(withKnobs)
  .add('without scroll', () => (
    <IcnActionModal
      title={text('title', 'Action Modal')}
      primaryButtonText={text('primaryButtonText', 'Yes')}
      tertiaryButtonText={text('tertiaryButtonText', 'No')}
      size={select('size', sizeOptions, ModalSize.Medium)}
      isOpen={boolean('open', true)}
    >
      <p style={{ marginBottom: '0px' }}>{text('content', 'Content')}</p>
    </IcnActionModal>
  ))
  .add('with scroll', () => (
    <IcnActionModal
      title={text('title', 'Action Modal With Scroll')}
      primaryButtonText={text('primaryButtonText', 'Yes')}
      tertiaryButtonText={text('tertiaryButtonText', 'No')}
      size={select('size', sizeOptions, ModalSize.Medium)}
      isOpen={boolean('open', true)}
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Elit ullamcorper dignissim cras tincidunt lobortis. Magna eget est lorem ipsum. Vitae suscipit
        tellus mauris a diam. Sed faucibus turpis in eu. Interdum varius sit amet mattis vulputate. Ornare massa eget
        egestas purus viverra accumsan in nisl nisi. Elementum nibh tellus molestie nunc non. Sem viverra aliquet eget
        sit amet. Quis auctor elit sed vulputate. Consectetur a erat nam at lectus urna duis convallis convallis.
        Consequat mauris nunc congue nisi vitae suscipit tellus. Accumsan lacus vel facilisis volutpat est velit egestas
        dui id. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Egestas egestas fringilla
        phasellus faucibus scelerisque eleifend donec pretium. Fringilla urna porttitor rhoncus dolor purus non enim.
        Viverra nibh cras pulvinar mattis nunc sed blandit. Viverra nibh cras pulvinar mattis nunc sed.
      </p>

      <p>
        Cras tincidunt lobortis feugiat vivamus. Cras sed felis eget velit aliquet. Amet cursus sit amet dictum sit
        amet. Laoreet sit amet cursus sit amet dictum sit amet. Pellentesque sit amet porttitor eget dolor. Eget sit
        amet tellus cras adipiscing. Et sollicitudin ac orci phasellus egestas tellus rutrum. Ut diam quam nulla
        porttitor massa id neque aliquam. Sit amet consectetur adipiscing elit pellentesque. Sed risus ultricies
        tristique nulla aliquet enim tortor at auctor. Arcu dictum varius duis at consectetur lorem donec massa.
      </p>

      <p>
        Pellentesque habitant morbi tristique senectus et netus et. Lacus laoreet non curabitur gravida arcu ac tortor
        dignissim. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Eget nullam non nisi est sit amet
        facilisis. Ipsum nunc aliquet bibendum enim facilisis gravida. Feugiat scelerisque varius morbi enim nunc
        faucibus a pellentesque sit. Sed risus ultricies tristique nulla aliquet. Integer quis auctor elit sed vulputate
        mi. Porttitor rhoncus dolor purus non enim praesent. Imperdiet dui accumsan sit amet. Id semper risus in
        hendrerit gravida rutrum quisque. Quis auctor elit sed vulputate mi sit. Sollicitudin tempor id eu nisl nunc mi
        ipsum faucibus. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Morbi leo urna
        molestie at elementum eu. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Turpis egestas maecenas
        pharetra convallis posuere morbi leo urna molestie. Metus dictum at tempor commodo ullamcorper a lacus
        vestibulum. Pharetra diam sit amet nisl.
      </p>

      <p>
        Turpis egestas pretium aenean pharetra. Elementum nisi quis eleifend quam adipiscing vitae. Mattis vulputate
        enim nulla aliquet porttitor. Placerat orci nulla pellentesque dignissim. Et netus et malesuada fames ac. Arcu
        cursus vitae congue mauris rhoncus aenean vel. Justo nec ultrices dui sapien eget mi. Ullamcorper velit sed
        ullamcorper morbi tincidunt. Aliquam ultrices sagittis orci a scelerisque purus. Mattis rhoncus urna neque
        viverra justo.
      </p>

      <p>
        Egestas congue quisque egestas diam in arcu cursus euismod quis. Ut sem nulla pharetra diam sit amet nisl
        suscipit adipiscing. Vulputate ut pharetra sit amet aliquam id. Facilisis volutpat est velit egestas dui.
        Egestas integer eget aliquet nibh. Iaculis urna id volutpat lacus laoreet non curabitur. Accumsan sit amet nulla
        facilisi morbi tempus iaculis. Luctus accumsan tortor posuere ac ut consequat. Auctor urna nunc id cursus metus
        aliquam. Felis imperdiet proin fermentum leo vel. Ipsum dolor sit amet consectetur adipiscing. Consectetur purus
        ut faucibus pulvinar elementum integer. Est pellentesque elit ullamcorper dignissim cras. Massa placerat duis
        ultricies lacus. Donec massa sapien faucibus et molestie ac.
      </p>
    </IcnActionModal>
  ));
