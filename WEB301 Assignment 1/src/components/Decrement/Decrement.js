import React from 'react';
import Icon from '@material-ui/core/Icon';


const Decrement = (props) => {
    const {value , handleDecrement } = props;

    return (
        <div onClick={handleDecrement}>
        
        { value >= 1 ?
                (<Icon fontSize="large">expand_more</Icon> ):
                (<p></p>)
            }

        </div>
  
    );
};

export default Decrement;

