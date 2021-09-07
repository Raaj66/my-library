/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { action } from '@storybook/addon-actions';
import IcnButton from './IcnButton';
import { ButtonSize, ButtonType, ButtonVariant } from './IcnButton.types';
import { IIcnButtonProps } from '..';

export default {
  title: 'Components/Buttons/ICN Button',
  component: IcnButton,
  parameters: {
    docs: {
      description: {
        component: '***IcnButton.tsx***',
      },
    },
  },
  argTypes: {
    id: {
      description: 'A unique identifier passed as a string',
      defaultValue: {
        summary: '',
      },
    },
    text: {
      description: 'Text to be rendered inside the button component',
      defaultValue: {
        summary: '',
      },
      control: {
        type: 'text',
      },
    },
    children: {
      description: 'Pass any node to be rendered if `text` is empty',
      defaultValue: {
        summary: null,
      },
    },
    callback: {
      description: 'The function to be called by onClick action',
      defaultValue: {
        summary: null,
      },
    },
    type: {
      description:
        'Enum from Typescript ButtonType, it is mandatory to use ButtonType.<DesiredType>. This should be perfectly available in the code editor, but we recommend the usage of VS Code',
      defaultValue: {
        summary: 'button',
      },
      control: {
        type: 'select',
        options: ButtonType,
      },
    },
    styleType: {
      description: 'This set the button variant, based also on a Typescript enum (*ButtonVariant*)',
      defaultValue: {
        summary: 'primary',
      },
      control: {
        type: 'select',
        options: ButtonVariant,
      },
    },
    size: {
      description: 'Set the desired size of the button, usage with a Typescript enum (*ButtonSize*)',
      defaultValue: {
        summary: 'lg',
      },
      control: {
        type: 'select',
        options: ButtonSize,
      },
    },
    pullRight: {
      description: 'If `true` applies the pull-right class to the button style',
      defaultValue: {
        summary: false,
      },
    },
    disabled: {
      description: 'If `true` makes the button unclickable and change its appearance',
      defaultValue: {
        summary: false,
      },
    },
    className: {
      description: 'Use this prop to pass custom styles to the component',
      defaultValue: {
        summary: '',
      },
    },
    iconSvg: {
      description: 'Makes it possible to render an svg icon inside the component',
      defaultValue: {
        summary: null,
      },
    },
    iconClassName: {
      description: 'Pass custom styles to the icon component, so that an icon would be render',
      defaultValue: {
        summary: '',
      },
    },
  },
};
export const Default = (args: IIcnButtonProps) => <IcnButton {...args} />;
Default.args = {
  id: '',
  text: 'Save',
  children: null,
  callback: null,
  type: ButtonType.Button,
  styleType: ButtonVariant.Primary,
  size: ButtonSize.Large,
  pullRight: false,
  disabled: false,
  className: '',
  iconSvg: null,
  iconClassName: '',
};
