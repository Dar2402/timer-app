import React, { memo } from 'react';
import PropTypes from 'prop-types';


const Timer = memo(({ time, backgroundColor }) => {

  /* 
  
  memo is a higher-order component (a function that takes a component and returns a new one) that tells React to skip rendering if the props haven't changed.
  
  */

  return (
    <div style={{ backgroundColor: backgroundColor, height: '100vh', width: '100vw' }}>
      <div className="timer-container">
        <div className="timer">{time.toLocaleTimeString()}</div>
        <div style={{ fontSize: '1.2rem', color: '#fff' }}>
          Background Color: {backgroundColor}
        </div>
      </div>
    </div>
  );
});


Timer.propTypes = {
  time: PropTypes.instanceOf(Date).isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default Timer;
