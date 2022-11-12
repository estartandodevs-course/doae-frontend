import React from 'react';

const ProgressBar = props => {
  const { bgcolor, completed, margin } = props;

  const containerStyles = {
    display: 'grid',
    height: 35,
    width: '100%',
    backgroundColor: '#F4F4F4',
    borderRadius: '4px',
    margin: margin,
  };

  const fillerStyles = {
    display: 'grid',
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    transition: 'width 1s ease-in-out',
    borderRadius: '0',
    border: '2px solid #f4f4f4',
    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '17px',
    alignItems: 'center',
    textAlign: 'center',
  };

  const labelStyles = {
    padding: 1,
    color: 'white',
    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '17px',
    alignItems: 'center',
    textAlign: 'center',
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
