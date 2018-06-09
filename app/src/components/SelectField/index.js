import React from 'react';

const SelectField = ({ options, onChange }) => {
    return (
        <select onChange={onChange}>
            {options.map((item, index) => (
               <option>{item.text}</option> 
            ))}
        </select>
    )
}

export default SelectField