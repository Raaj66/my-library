/* eslint-disable @typescript-eslint/no-empty-function */
import React, { PureComponent } from 'react';
import { ButtonSize, ButtonType, ButtonVariant } from '../Button/IcnButton.types';
import IcnButton from '../Button/IcnButton';
import { Input, Label } from './IcnFileSelector.styled';
import { IIcnFileSelectorProps } from './IcnFileSelector.types';

type IcnFileSelectorState = {
  fileTitle: string;
};

export class IcnFileSelector extends PureComponent<IIcnFileSelectorProps, IcnFileSelectorState> {
  fileInput: React.MutableRefObject<HTMLInputElement>;

  constructor(props: IIcnFileSelectorProps) {
    super(props);
    this.state = { fileTitle: '' };
    this.fileInput = React.createRef();
    this.redirectClickToInput = this.redirectClickToInput.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files[0];
    const { onFileSelected } = this.props;
    if (file) {
      this.setState({ fileTitle: file.name });
      onFileSelected(file);
    } else {
      this.setState({ fileTitle: '' });
    }
  }

  redirectClickToInput() {
    const { disabled } = this.props;
    if (!disabled && this.fileInput.current) {
      this.fileInput.current.click();
    }
  }

  reset() {
    this.fileInput.current.value = null;
    this.setState({ fileTitle: '' });
  }

  render() {
    const {
      id = 'file_input',
      name = 'file_input',
      accept = '*',
      text = '',
      type = ButtonType.Button,
      styleType = ButtonVariant.Primary,
      size = ButtonSize.Large,
      disabled = false,
    } = this.props;
    const { fileTitle } = this.state;
    return (
      <div>
        <label htmlFor={id}>
          <Input
            id={id}
            name={name}
            type="file"
            accept={accept}
            ref={this.fileInput}
            onChange={this.handleInputChange}
          />
          <IcnButton
            text={text}
            type={type}
            styleType={styleType}
            size={size}
            callback={this.redirectClickToInput}
            disabled={disabled}
          />
          <Label>{fileTitle}</Label>
        </label>
      </div>
    );
  }
}

export default IcnFileSelector;
