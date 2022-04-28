import React from 'react';

const styles = {
  'bottomRight': {
    position: 'fixed',
    bottom: 50,
    right: 50,
    zIndex: 10,
    fontSize: '1.5em'
  }
};

export default ({ name, color, position }) =>
  <span className="fa-stack fa-2x" style={styles[position] || {}}>
    <i className="fa fa-circle fa-stack-2x"></i>
    <i className={`fa fa-${name} fa-inverse fa-stack-1x`} style={{ background: color, borderRadius: '99em' }}></i>
  </span>