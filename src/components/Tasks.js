import React from 'react';
// import axios from "axios";

const Tasks = (props) => {
    const onChangeTasks  = (_id) => {
// const deleteTask = props.tasks(el=>
// el._id!==_id)
//         props.setTasks(deleteTask)
    }
    console.log(props)
// const deleteTask={status:"todo"}
//        axios.delete(`https://expressjs-server.vercel.app/tasks/${id}`,
//            newStatus).then((res)=>{
//                console.log(res)
//        })
//            .catch((err)=>{
//                alert('server kaput')
//            })
//     }

console.log(props)

    return (
        <div className=' col-sm-6 col-md-3' style={{width:"auto"}}>
        <div className="card">
            <div className="card-body " key={props.card.id}>

            <p className="card-title"><b> {props.card.status}</b></p>

            </div>
          <hr/>
            <span className="d-grid gap-xxl-4 d-md-flex justify-content-md-end">

            <p className="card-title"><b> {props.card.name}</b></p>
            <button type="button" style={{border:"2px double gold", float:'right'}}  className="btn btn-light me-md-2"><i className="arrow left"></i> Edit</button>
                </span>
            <p className="card-text" style={{ float:'left'}}><i>{props.card.description} </i></p>
            <p className="card-text">Priority: {props.card.priority}
               <span className="d-inline-flex p-2">  <button type="button"   className="btn btn-light"> ⏫️</button> <button type="button"   className="btn btn-light"> ⏬️</button>
            </span>
            </p>

                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button"  className="btn btn-light"><i className="arrow left"></i> ⏪</button>
                    <button type="button" onClick={()=>onChangeTasks(props.card._id)} style={{border:"4px double red", width:"30px", height:"25px"}} className="btn-close btn btn-light"></button>
                    <button type="button"  className="btn btn-light"> <i className="arrow right"></i> ⏩️ </button>
                </div>
        </div>
        </div>
    );
};

export default Tasks;

