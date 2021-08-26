/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import React from 'react';
import IcnButton from './IcnButton';
import { action } from '@storybook/addon-actions';

const IcnButtonStory = ({
  id,
  text,
  callback,
  type,
  styleType,
  size,
  className,
  disabled,
  pullRight,
  iconClassName,
  iconSvg,
  children,
}) => (
  <IcnButton
    id={id}
    text={`${text}`}
    type={type}
    callback={callback || action('onClick:IcnButton')}
    size={size}
    className={className}
    styleType={styleType}
    disabled={disabled}
    pullRight={pullRight}
    iconClassName={iconClassName}
    iconSvg={iconSvg}
  >
    {children}
  </IcnButton>
);

export default {
  title: 'Components/IcnButton',
  component: IcnButtonStory,
  parameters: {
    docs: {
      description: {
        component:
          '***IcnButton.jsx***',
      },
    },
  },
  argTypes: {
    id: {
      description: 'PropTypes.string',
      defaultValue: {
        summarry: '',
      },
    },
    text: {
      description: 'text to be rendered inside the button component',
      defaultValue: {
        summary: '',
      },
      control: {
        type: 'text',
      },
    },
    children: {
      description: 'pass any node to be rendered if `text` is empty',
      defaultValue: {
        summary: null,
      },
    },
    callback: {
      description: 'function to be called by onClick action',
      defaultValue: {
        summary: null,
      },
    },
    type: {
      description: 'PropTypes.string',
      defaultValue: {
        summary: 'button',
      },
    },
    styleType: {
      description: 'select one out of three fixed style types',
      defaultValue: {
        summary: 'primary',
      },
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary'],
      },
    },
    size: {
      description: 'select one out of three available button sizes',
      defaultValue: {
        summary: 'lg',
      },
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
    pullRight: {
      description: 'if `true` applies the pull-right class to the button style',
      defaultValue: {
        summary: false,
      },
    },
    disabled: {
      description: 'if `true` makes the button unclickable and change its appearance',
      defaultValue: {
        summary: false,
      },
    },
    className: {
      description: 'pass custom styles to the component',
      defaultValue: {
        summary: '',
      },
    },
    iconSvg: {
      description: 'makes it possible to render an svg icon inside the component',
      defaultValue: {
        summary: null,
      },
    },
    iconClassName: {
      description: 'pass custom styles to the icon component',
      defaultValue: {
        summary: '',
      },
    },
  },
};

export const Primary = (args) => <IcnButtonStory {...args} />;
export const Secondary = (args) => <IcnButtonStory {...args} />;
export const Tertiary = (args) => <IcnButtonStory {...args} />;

Primary.args = {
  id: '',
  text: 'Save',
  children: null,
  callback: null,
  type: 'button',
  styleType: 'primary',
  size: 'lg',
  pullRight: false,
  disabled: false,
  className: '',
  iconSvg: null,
  iconClassName: '',
};

Secondary.args = {
  ...Primary.args,
  styleType: 'secondary',
};

Tertiary.args = {
  ...Primary.args,
  styleType: 'tertiary',
};

