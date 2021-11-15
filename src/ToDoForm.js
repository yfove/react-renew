// for the form to work we have to keep track of the changes
// so we logically have to handle what happens as the input changes

// Form Logic
// Local State ( so we will need to emply that useState() )
// form component with with an input value assigned to correct variable
// function that handles the state's changes
// function that handles form submission

import React, {useState} from 'react';

const [userInput, setUserInput] = useState('');

const ToDoForm = () => 
{
    return (
        <div>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
        </div>
    );
};

export default ToDoForm;