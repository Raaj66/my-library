
import React from "react";
import IcnLink from "./IcnLink";
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

const preventRedirect = (e) => {
  e.preventDefault();
  action('Cliked link')();
};

storiesOf('Components/IcnLink', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <MemoryRouter>
      <IcnLink
        href={text('Href', '/icn_react/static/subscriptions_dashboard')}
        onClick={preventRedirect}
      >
        Link to Subscription dashboard
      </IcnLink>
    </MemoryRouter>
  ))
  .add('with angular url', () => (
    <MemoryRouter>
      <IcnLink
        href={text('Href', '/subscriptions_dashboard')}
        onClick={preventRedirect}
      >
        Link to Subscription dashboard
      </IcnLink>
    </MemoryRouter>
));
