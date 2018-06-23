import React from 'react';

const TextField = ({handleChange, value}) => (
    <input type='text' onChange={handleChange} value={value} />
)

export default TextField;