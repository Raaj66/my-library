export const customStyles: ReactModal.Styles = {
  overlay: {
    position: 'fixed',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(63,90,109,0.8)',
    zIndex: 1250,
    overflow: 'auto',
  },
  content: {
    boxShadow: '3px 3px 5px 0 rgba(0,0,0,0.20)',
    padding: '48px 0px 48px 56px',
    top: '128px',
    left: '50%',
    bottom: 'auto',
    overflow: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%)',
    outline: 0,
    border: '1px solid rgba(63, 90, 109, 1)',
    borderRadius: '0px',
    width: '546px',
    maxHeight: '78%',
    display: 'flex',
    flexFlow: 'column',
  },
};

export default customStyles;
