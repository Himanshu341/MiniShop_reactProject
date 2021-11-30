import React from 'react';
import TextField from '@material-ui/core/TextField';

import './form-input.style.css';

const FormInput = ({handleChange , label,name , ...otherProps}) => {
    return(
        <>
            <div className="group">
            <TextField fullWidth label={name} type="text" className="form-input" onChange={handleChange} {...otherProps} />
            {
                label ? (
                    <label className= {`${otherProps.length ? 'shrink' : ' '} form-input-label` }>

                    </label>
                ) : null
            }
             </div>
        </>
    )
}

export default FormInput;