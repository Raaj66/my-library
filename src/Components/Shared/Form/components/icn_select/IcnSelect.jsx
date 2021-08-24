import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import _ from 'lodash';
import { privateFieldMaskAttributes } from '../../utils';
import { FieldGlow } from '../../utils';
import styles from './IcnSelect.module.scss';

const cx = classNames.bind(styles);

function scrollIntoView(container, element) {
  if (!container || !element) {
    return;
  }

  // Determine container top and bottom
  const cTop = container.scrollTop;
  const cBottom = cTop + container.clientHeight;

  // Determine element top and bottom
  const eTop = element.offsetTop;
  const eBottom = eTop + element.clientHeight;

  // Check if out of view
  if (eTop < cTop) {
    container.scrollTop -= (cTop - eTop);
  } else if (eBottom > cBottom) {
    container.scrollTop += (eBottom - cBottom);
  }
}

class IcnSelect extends Component {
  static hasValue(val = '') {
    return !_.isUndefined(val) &&
      !_.isNull(val) &&
      val !== '';
  }

  constructor(props) {
    super(props);
    this.state = {
      opened: false,
      activeIndex: 0,
      focused: false,
      searchString: '',
      searchableResponses: props.data.responses,
    };

    this.onContainerClick = this.onContainerClick.bind(this);
    this.onKeyPressed = this.onKeyPressed.bind(this);
    this.selectItem = this.selectItem.bind(this);
    this.selectionDisplay = this.selectionDisplay.bind(this);
    this.handleDirectionalKey = this.handleDirectionalKey.bind(this);
    this.onContainerFocus = this.onContainerFocus.bind(this);
    this.onContainerBlur = this.onContainerBlur.bind(this);
    this.privateFieldAttributes = this.privateFieldAttributes.bind(this);
    this.determineGlow = this.determineGlow.bind(this);
  }

  componentDidMount() {
    this.setActiveIndex(this.props.selectedValue);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.activeIndex !== this.state.activeIndex
    ) {
      this.scroll();
    }

    if (
      this.state.searchString !== '' &&
      prevState.searchString !== this.state.searchString
    ) {
      this.stringSearch();
    }

    if (prevState.opened !== this.state.opened) {
      this.scroll();
    }
  }

  checkGlow(val = '', enable, disable) {
    const { determineGlowOnBlur } = this.props;

    if (determineGlowOnBlur) {
      return determineGlowOnBlur(val, enable, disable);
    }

    if (IcnSelect.hasValue(val)) {
      disable();
    } else {
      enable();
    }
  }


  onContainerClick() {
    if (this.props.disabled) { return; }

    this.setState((prevState) => ({
      opened: !prevState.opened,
    }));
  }

  onContainerFocus() {
    this.setState({
      focused: true,
    });
  }

  onContainerBlur(enableGlow, disableGlow) {
    this.setState({
      opened: false,
      focused: false,
      searchString: '',
      searchableResponses: this.props.data.responses,
    });

    const val = this.props.selectedValue;

    if (this.props.glow) {
      this.checkGlow(val, enableGlow, disableGlow);
    }
  }


  onSelectionHover(idx) {
    this.setState({
      activeIndex: idx,
    });
  }

  setActiveIndex(value) {
    const activeIndex = this.props.data.responses.map((r) => r.value).indexOf(value);

    if (activeIndex >= 0) {
      this.setState({
        activeIndex,
      });
    }
  }

  selectItem(value) {
    this.props.callback(value);

    this.setState({
      opened: false,
    });
  }

  handleDirectionalKey(idxDiff) {
    const { activeIndex } = this.state;


    const optionsLength = this.props.data.responses.length;


    const nextactiveIndex = activeIndex + idxDiff;

    if (nextactiveIndex >= 0 && nextactiveIndex < optionsLength) {
      this.setState(() => ({
        activeIndex: nextactiveIndex,
      }));
    }
  }

  handleEnterKey() {
    const { activeIndex } = this.state;


    const { data } = this.props;

    this.selectItem(data.responses[activeIndex].value);
  }

  stringSearch() {
    const { searchString, searchableResponses } = this.state;
    const filteredResponses = searchableResponses.filter((r) => {
      const matchString = this.responseText(r).toUpperCase();
      return matchString.startsWith(searchString);
    });

    if (filteredResponses.length > 0) {
      const selectedItem = filteredResponses.sort((r) => this.responseText(r))[0];
      this.setState({
        searchableResponses: filteredResponses,
      });

      this.selectItem(selectedItem.value);
      this.setActiveIndex(selectedItem.value);
    } else {
      this.setState({
        searchString: '',
        searchableResponses: this.props.data.responses,
      });
    }
  }

  handleAlphabeticalKey(keyCode) {
    const nextChar = String.fromCharCode(keyCode);

    this.setState((prevState) => ({
      searchString: prevState.searchString + nextChar,
    }));
  }

  handleControlKey(keyCode) {
    if (!this.state.opened) {
      this.setState({
        opened: true,
      });
    } else if (keyCode === 38) {
      this.handleDirectionalKey(-1);
    } else if (keyCode === 40) {
      this.handleDirectionalKey(1);
    } else if (keyCode === 13) {
      this.handleEnterKey();
    }
  }

  onKeyPressed(e) {
    if (this.props.disabled) { return; }

    const { keyCode } = e;

    if (keyCode >= 65 && keyCode <= 90) {
      e.preventDefault();
      this.handleAlphabeticalKey(keyCode);
    } else if ([13, 38, 40].includes(keyCode)) {
      e.preventDefault();
      this.handleControlKey(keyCode);
    }
  }

  scroll() {
    if (this.props.data.responses.length < 7) { return; }

    const { activeIndex } = this.state;


    const container = document.getElementById('dropdown_list');

    if (!container) { return; }

    // check if element is visible.
    if (activeIndex >= 0) {
      const el = container.querySelectorAll('li')[activeIndex];
      scrollIntoView(container, el);
    }
  }

  selectionDisplay() {
    const { selectedValue, data } = this.props;


    const selectedResponse = _.find(data.responses, { value: selectedValue });

    if (selectedResponse) {
      return this.responseText(selectedResponse);
    }

    return selectedValue;
  }

  responseText(response) {
    return response.text || response.value;
  }

  privateFieldAttributes() {
    return this.props.privateFieldMask ? privateFieldMaskAttributes() : {};
  }

  renderSelection(label, selectedValue, rightPlaceholder, withTextEllipsis) {
    if (selectedValue) {
      const positionClass = label ? styles.with_label : styles.without_label;
      const privateFieldAttributes = this.privateFieldAttributes();
      return (
        <span>
          <span className={cx({ select_label_small: true })}>
            { label }
          </span>
          <span
            {...privateFieldAttributes}
            className={cx(styles.selected_item, positionClass, { with_ellipsis: withTextEllipsis })}
            data-input-value={selectedValue}
          >
            {this.selectionDisplay()}
          </span>
        </span>
      );
    }
    return (
      <div>
        <span className={styles.select_label}>{label}</span>
        {
          rightPlaceholder && (
            <span className={styles.right_placeholder}>
              { rightPlaceholder }
            </span>
          )
        }
      </div>
    );
  }

  renderDisabledSelect(label, selectedValue) {
    const privateFieldAttributes = this.privateFieldAttributes();
    return (
      <div
        ref={this.setWrapperRef}
        className={cx({ dropdown: true })}
      >
        <button type="button" className={cx(styles.dropbtn, styles.disabled)}>
          <span className={cx({ select_label_small: true, hidden: !selectedValue })}>
            {label}
          </span>
          {
            selectedValue && (
            <span
              {...privateFieldAttributes}
              className={styles.selected_item}
              data-input-label={label}
            >
              {this.selectionDisplay()}
            </span>
            )}
          <i className={`fa fa-caret-down ${styles.caret_down}`} />
        </button>
      </div>
    );
  }

  determineGlow(glowState = {}) {
    if (this.props.determineGlow) {
      return this.props.determineGlow(this.props, glowState);
    }

    const { selectedValue, disabled } = this.props;

    return !disabled && !selectedValue && glowState.on;
  }

  render() {
    const {
      data,
      disabled,
      selectedValue,
      positioning,
      altTheme,
      smallSelectTheme,
      mediumSelectTheme,
      rightPlaceholder,
      privateFieldMask,
      id,
      glow,
      overflowTextEllipsis,
    } = this.props;
    const { label, responses } = data;
    const { opened } = this.state;
    let { focused } = this.state;
    if (smallSelectTheme === true) {
      focused = false;
    }
    const hasScrollbar = responses.length > 7;
    const privateFieldAttributes = this.privateFieldAttributes();

    if (disabled && selectedValue) {
      return (
        <div
          style={positioning}
          className={cx({
            alt_theme: !!altTheme,
            small_select_theme: !!smallSelectTheme,
            medium_select_theme: !!mediumSelectTheme,
          })}
        >
          { this.renderDisabledSelect(label, selectedValue) }
        </div>
      );
    }

    return (
      <FieldGlow enabled={glow}>
        {
        (glowState, enableGlow, disableGlow) => (
          <div
            onFocus={this.onContainerFocus}
            onBlur={() => {
              this.onContainerBlur(enableGlow, disableGlow);
            }}
            tabIndex="0"
            onKeyDown={this.onKeyPressed}
            style={positioning}
            id={id}
            className={cx({
              outer_container: true,
              has_scrollbar: hasScrollbar,
              alt_theme: !!altTheme,
              small_select_theme: !!smallSelectTheme,
              medium_select_theme: !!mediumSelectTheme,
              focused,
              disabled,
              incomplete: this.determineGlow(glowState),
            })}
          >
            <div className={cx({ dropdown: true, opened })}>
              <button
                type="button"
                data-input-label={label}
                onClick={this.onContainerClick}
                tabIndex="-1"
                className={cx(styles.dropbtn, this.props.customClassName)}
                data-testid="icn-select-button"
              >
                { this.renderSelection(label, selectedValue, rightPlaceholder, overflowTextEllipsis) }
                <i className={`fa fa-caret-down ${styles.caret_down}`} />
              </button>
              {
                responses.length > 0 && opened && (
                <div id="dropdown_content" className={cx({ dropdown_content: true })}>
                  <ul
                    id="dropdown_list"
                    data-testid="icn-select-dropdown-list"
                    className={cx({ dropdown_list: !!smallSelectTheme })}
                  >
                    {
                      responses.map((response, idx) => {
                        const { value } = response;

                        return (
                          <li
                            title={this.props.hasItemTitle ? value : null}
                            className={cx({ active: idx === this.state.activeIndex, ellipsis: overflowTextEllipsis })}
                            onMouseDown={() => this.selectItem(value)}
                            onMouseOver={() => this.onSelectionHover(idx)}
                            {...privateFieldAttributes}
                            key={idx}
                          >
                            { this.responseText(response) }
                          </li>
                        );
                      })
                    }
                  </ul>
                </div>
                )}
            </div>
          </div>
        )}
      </FieldGlow>
    );
  }
}

IcnSelect.defaultProps = {
  disabled: false,
  id: undefined,
  privateFieldMask: false,
  glow: false,
  smallSelectTheme: false,
  mediumSelectTheme: false,
  customClassName: null,
  hasItemTitle: true,
};

IcnSelect.propTypes = {
  data: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  callback: PropTypes.func.isRequired,
  selectedValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  id: PropTypes.string,
  privateFieldMask: PropTypes.bool,
  glow: PropTypes.bool,
  smallSelectTheme: PropTypes.bool,
  mediumSelectTheme: PropTypes.bool,
  customClassName: PropTypes.string,
  hasItemTitle: PropTypes.bool,
};
export default IcnSelect;
