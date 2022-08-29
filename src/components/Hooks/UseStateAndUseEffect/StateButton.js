import React, { useState } from 'react';

const StateButton = () => {
  const [isButtonClicked, setIsButtonClickedStatus] = useState(false);

  const clickMe = () => {
    setIsButtonClickedStatus(true)
  }
  

  return (
    <>

    <button onClick={clickMe}> 
    {isButtonClicked ? 'clicked Me' : 'click Me'}
    </button>
    </>
    
  );
};

export default StateButton