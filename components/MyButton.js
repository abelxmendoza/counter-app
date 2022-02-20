import React from 'react';

export const MyButton = ({ title, color }) => {
  
    return <button style = {{ backgroundColor: color }}>{title}</button> 

};

export default MyButton