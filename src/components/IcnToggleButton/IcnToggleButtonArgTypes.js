export default {
  uniqueKey: {
    name: 'uniqueKey',
    type: { name: 'string' },
    description: 'unique key',
    table: {
      type: {
        summary: 'string',
        detail: 'uniqueKey',
      },
    },
    control: {
      type: 'text',
    },
  },
  value: {
    name: 'value',
    type: [{ name: 'bool' }, { name: 'string' }, { name: 'object' }],
    description: 'button toggle selected value',
    table: {
      type: {
        summary: 'bool',
        detail: 'can be boolean value / string value / object',
      },
    },
    control: {
      type: 'select',
      options: [true, false, '', undefined],
    },
  },
  returnByValue: {
    name: 'returnByValue',
    type: { name: 'bool' },
    defaultValue: false,
    description: 'change return value type',
    table: {
      type: {
        summary: 'bool',
      },
    },
    control: {
      type: 'select',
      options: [true, false],
    },
  },
  fixedContainer: {
    name: 'fixedContainer',
    type: { name: 'bool' },
    defaultValue: true,
    description: 'change to switch between fixed container / 100% width',
    table: {
      type: {
        summary: 'bool',
      },
    },
    control: {
      type: 'select',
      options: [true, false],
    },
  },
  disabled: {
    name: 'disabled',
    type: { name: 'bool' },
    defaultValue: false,
    description: 'to disable the toggle switch',
    table: {
      type: {
        summary: 'bool',
      },
    },
    control: {
      type: 'select',
      options: [true, false],
    },
  },
  labelKey: {
    name: 'labelKey',
    type: { name: 'string' },
    defaultValue: 'label',
    description: 'The key name of the label in option object, pass custom labelKey name to change the default',
    table: {
      type: {
        summary: 'string',
      },
    },
    control: {
      type: 'text',
    },
  },
  valueKey: {
    name: 'valueKey',
    type: { name: 'string' },
    defaultValue: 'value',
    description: 'The key name of the value in option object, pass custom valueKey name to change the default',
    table: {
      type: {
        summary: 'string',
      },
    },
    control: {
      type: 'text',
    },
  },
};
