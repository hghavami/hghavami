
import React from 'react';
import Icon from '@material-ui/core/Icon';


const Increment = (props) => {
    const {handleIncrement } = props;

    return (
        <div onClick={handleIncrement} >
                <Icon fontSize="large" >expand_less</Icon>
            </div>
  
    );
};

export default Increment;