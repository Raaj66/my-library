import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import IcnToggleButton from './IcnToggleButton';

describe('Icn Toggle Button', () => {
  let props;

  beforeEach(() => {
    props = {
      uniqueKey: 'unique-key',
      options: [
        {
          label: 'ACTIVE',
          value: true,
        },
        {
          label: 'DEACTIVATE',
          value: false,
        },
      ],
    };
  });

  afterEach(cleanup);

  const renderIcnToggleButton = (props2) => {
    render(
      <IcnToggleButton
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props2}
      />
    );

    const ActiveButton = screen.getByText('ACTIVE');
    const DeactivateButton = screen.getByText('DEACTIVATE');

    return {
      ActiveButton,
      DeactivateButton,
    };
  };

  describe('Render', () => {
    it('Render Icn Toggle Button', () => {
      const { ActiveButton, DeactivateButton } = renderIcnToggleButton(props);

      expect(ActiveButton).toBeInTheDocument();
      expect(DeactivateButton).toBeInTheDocument();
      expect(ActiveButton.className.includes('active')).toBe(false);
      expect(DeactivateButton.className.includes('active')).toBe(false);
      expect(ActiveButton).not.toHaveAttribute('disabled');
      expect(DeactivateButton).not.toHaveAttribute('disabled');
    });

    it('Render Icn Toggle With Pre Selected Simple Value', () => {
      props.value = true;
      const { ActiveButton, DeactivateButton } = renderIcnToggleButton(props);

      expect(ActiveButton.className.includes('active')).toBe(true);
      expect(DeactivateButton.className.includes('active')).toBe(false);
    });

    it('Render Icn Toggle With Pre Selected Object Value', () => {
      props.value = {
        label: 'Whatever Does Not Mater',
        value: false,
      };

      const { ActiveButton, DeactivateButton } = renderIcnToggleButton(props);

      expect(ActiveButton.className.includes('active')).toBe(false);
      expect(DeactivateButton.className.includes('active')).toBe(true);
    });

    it('Render Disabled Icn Toggle', () => {
      props.disabled = true;

      const { ActiveButton, DeactivateButton } = renderIcnToggleButton(props);

      expect(ActiveButton).toHaveAttribute('disabled');
      expect(DeactivateButton).toHaveAttribute('disabled');
    });
  });

  describe('Toggle', () => {
    it('Toggle Click Non-Active Button', () => {
      props.value = true;
      const { ActiveButton, DeactivateButton } = renderIcnToggleButton(props);

      expect(ActiveButton.className.includes('active')).toBe(true);
      expect(DeactivateButton.className.includes('active')).toBe(false);

      userEvent.click(DeactivateButton);

      expect(ActiveButton.className.includes('active')).toBe(false);
      expect(DeactivateButton.className.includes('active')).toBe(true);
    });

    it('Click Active Button', () => {
      props.value = true;
      const { ActiveButton, DeactivateButton } = renderIcnToggleButton(props);

      expect(ActiveButton.className.includes('active')).toBe(true);
      expect(DeactivateButton.className.includes('active')).toBe(false);

      userEvent.click(ActiveButton);

      expect(ActiveButton.className.includes('active')).toBe(true);
      expect(DeactivateButton.className.includes('active')).toBe(false);
    });

    it('Click Non-Active Button When No Initial Value', () => {
      const { ActiveButton, DeactivateButton } = renderIcnToggleButton(props);

      expect(ActiveButton.className.includes('active')).toBe(false);
      expect(DeactivateButton.className.includes('active')).toBe(false);

      userEvent.click(ActiveButton);

      expect(ActiveButton.className.includes('active')).toBe(true);
      expect(DeactivateButton.className.includes('active')).toBe(false);
    });

    it('Click Non-Active Button When No Initial Value to Call the Callback', () => {
      props.callback = jest.fn();

      const { ActiveButton } = renderIcnToggleButton(props);

      userEvent.click(ActiveButton);

      expect(props.callback).toHaveBeenCalledWith(props.options[0]);
    });
  });
});
