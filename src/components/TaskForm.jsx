import React, { useState, useContext } from 'react';
import { myContext } from '../context/context';

const Taskform = () => {
    const { addTask } = useContext(myContext);
    //console.log(task)
    const [tasks, settask] = useState({
        title: '',
        description: ''
    });

    const handleChange = (e) => {
        //settask([e.target.name]: e.target.value)
        settask({ ...tasks, [e.target.name]: e.target.value })

    };
    const handleSubmite = (e) => {
        e.preventDefault();
        console.log(e)
        addTask(tasks);
    }
    return (
        <div> 
            <form onSubmit={handleSubmite}>
                <h2>Task Form</h2>
                <div className='formTaskbody'>
                    <input type='text' className='form-control' placeholder='title' name='title' onChange={handleChange} />
                    <input type='text' className='form-control' id='exampleFormControlInput1' placeholder='description' name='description' onChange={handleChange} />
                    <button className='btn btn-primary'>Save</button>
                </div>
            </form>
        </div>
    );
}

export default Taskform;
