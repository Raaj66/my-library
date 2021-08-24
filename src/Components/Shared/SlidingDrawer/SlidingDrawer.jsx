import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
} from 'react';
import PropTypes from 'prop-types';
import useOnClickOutside from '../../../hooks/useOnClickOutside';
import { ESCAPE_KEY } from '../../../constants';

import styles from './SlidingDrawer.module.scss';

const SlidingDrawer = ({
  isOpen,
  children,
  onToggle,
  closeException,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(isOpen);
  const drawerWrapper = useRef(null);

  useEffect(() => {
    if (isDrawerOpen !== isOpen) {
      setIsDrawerOpen(isOpen);
    }
  }, [isDrawerOpen, isOpen]);

  const closeDrawer = useCallback(() => {
    setIsDrawerOpen(false);
    onToggle(false);
  }, [setIsDrawerOpen, onToggle]);

  const toggleDrawer = useCallback(() => {
    setIsDrawerOpen((prevState) => {
      onToggle(!prevState);
      return !prevState;
    });
  }, [setIsDrawerOpen, onToggle]);

  const handleKeyDown = useCallback((event) => {
    if (event.keyCode === ESCAPE_KEY && isDrawerOpen) {
      closeDrawer();
    }
  }, [closeDrawer, isDrawerOpen]);

  useEffect(() => {
    const removeListner = window.addEventListener('keydown', handleKeyDown);

    return removeListner;
  }, [handleKeyDown]);

  useEffect(() => {
    if (isDrawerOpen) {
      drawerWrapper.current.classList.add(styles['SlidingDrawer--open']);
    } else {
      drawerWrapper.current.classList.remove(styles['SlidingDrawer--open']);
    }
  }, [isDrawerOpen]);

  useOnClickOutside(drawerWrapper, {
    handler: closeDrawer,
    events: ['mousedown'],
    except: closeException,
    disable: !isDrawerOpen,
  });

  return (
    <div className={styles.SlidingDrawer} ref={drawerWrapper}>
      <div className={styles.SlidingDrawer__slider}>
        {typeof children === 'function' ?
          children({ toggleDrawer, isOpen }) :
          children
        }
      </div>
    </div>
  );
};

SlidingDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
  ]).isRequired,
  onToggle: PropTypes.func.isRequired,
  closeException: PropTypes.func,
};

SlidingDrawer.defaultProps = {
  closeException: () => {},
};

export default SlidingDrawer;
