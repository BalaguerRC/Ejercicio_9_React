export default function appReducer(state, action) {
    console.log(state, action)
    //const tasklist={};
    switch (action.type) {
        case 'ADD':
            return {
                task: [...state.task, action.payload]
            }
        case 'DELETE':
            return{
                task: state.task.filter((task)=>task.id!== action.payload)
                
            }
        case 'FILTER':
            //const fount=[state.task.find(task=> task.title=== action.payload)]
            if(state.task.find(task=> task.title=== action.payload)){
                return{
                    task: [state.task.find(task=> task.title=== action.payload)]
                }
                //console.log('true')
            }
            else{
                return {task: [...state.task]};
                //console.log('false')
            }
            //break;
        default:
            return state;
    }
   
}
