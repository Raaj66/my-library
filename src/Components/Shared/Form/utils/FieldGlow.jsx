import { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  enabled: PropTypes.bool,
  children: PropTypes.func.isRequired,
};

const defaultProps = {
  enabled: false,
};

class FieldGlow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      on: props.enabled,
    };

    this.disableGlow = this.disableGlow.bind(this);
    this.enableGlow = this.enableGlow.bind(this);
    this.onDidUpdate = this.onDidUpdate.bind(this);
  }

  componentDidUpdate(prevProps) {
    this.onDidUpdate(prevProps);
  }

  onDidUpdate(prevProps) {
    if (this.props.enabled !== prevProps.enabled) {
      this.setState({
        on: this.props.enabled,
      });
    }
  }

  enableGlow() {
    this.setState({
      on: true,
    });
  }

  disableGlow() {
    this.setState({
      on: false,
    });
  }

  render() {
    return (
      this.props.children(this.state, this.enableGlow, this.disableGlow)
    );
  }
}

FieldGlow.propTypes = propTypes;
FieldGlow.defaultProps = defaultProps;

export default FieldGlow;
