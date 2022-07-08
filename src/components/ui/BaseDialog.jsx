import React from 'react';
import ReactDOM from 'react-dom';

import classes from './BaseDialog.module.scss';

function BaseDialog({ children, onClick, className, open }) {
  const wrapper = open && (
    <>
      <div className={classes.overlay} onClick={onClick} role="presentation" />
      <div className={`${classes['base-dialog']}${!className && ''}`}>
        {children}
      </div>
    </>
  );
  return ReactDOM.createPortal(wrapper, document.getElementById('modal'));
}

export default BaseDialog;
