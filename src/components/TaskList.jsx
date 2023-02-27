import React, { useContext } from 'react';
import { myContext } from '../context/context';


const Tasklist = () => {

    //const context= useContext(myContext);
    const { task, DeleteTask } = useContext(myContext);

    /*onChange={handleChange} */
    /*useEffect(() => {
        ShowTask(search);
    });*/
    return (
        <div className='container1'>
            <div>
                {task.map((task) => (
                    <div className='card' key={task.id}>
                        <div className='card-body' >
                            <h3>ID: {task.id} </h3>
                            <h5 className='card-title'>Tittle: {task.title}</h5>
                            <h6 className='card-text1'>Description: {task.description}</h6>
                            <button style={{ 'display': 'block', 'height': 'auto' }} onClick={() => DeleteTask(task.id)} className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Tasklist;
