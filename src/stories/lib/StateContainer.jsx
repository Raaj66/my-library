import { Component } from 'react';
import PropTypes from 'prop-types';

export default class StateContainer extends Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);

    this.state = { ...props };
  }

  update(obj = {}) {
    return this.setState(obj);
  }

  render() {
    const { children } = this.props;
    return children && children(this.update, this.state);
  }
}

StateContainer.propTypes = {
  children: PropTypes.element.isRequired,
};
