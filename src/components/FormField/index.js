import React from 'react';

function FormField({label, type, name, value, onChange, inputType, style}) {
    return(
        <fieldset 
            style={style}
        >
            <label>{label}<br></br></label>
            {
                inputType == 'input' 
                    ?  
                        <input
                            type={type}
                            name={name}
                            value={value}
                            onChange={onChange} 
                        />      
                    : 
                        <textarea
                            type={type}
                            name={name}
                            value={value}
                            onChange={onChange}
                            cols="50" 
                            rows="5"
                        />
            }
            
        </fieldset>
    )
}

export default FormField;