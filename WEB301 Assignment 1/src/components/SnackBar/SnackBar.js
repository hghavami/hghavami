import React from 'react';
import styles from './SnackBar.module.css';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';


const SnackBar = (props) => {
    const { showSnackBar, handleSnackBarClick } = props;

    return (
        <div >

            {showSnackBar ? (
                <Card >
                    <CardHeader className={styles.SnackBar}

                        action={
                            <IconButton>
                                <CloseIcon onClick={handleSnackBarClick} />
                            </IconButton>
                        }
                        title="This is a success message"

                    />

                </Card>

            ) : (
                    ""
                )}

        </div>

    );

};



export default SnackBar;