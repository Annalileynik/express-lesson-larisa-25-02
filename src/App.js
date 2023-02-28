import axios from 'axios';
import './App.css';
import {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Colum from "./components/Colum";
function App() {

    const[statuses,setStatuses]=useState([])
    const[tasks,setTasks]=useState([])
  const getStatuses  = () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
    axios.get('https://expressjs-server.vercel.app/statuses')
        .then( (res)=>{
          // handle success
          setStatuses(res.data);
        })
        .catch((err)=> {
          // handle error
          alert('trouble');
        })
  }

  useEffect(()=>{
    getStatuses()
  },[])

//     const updateTask = (id) => {
// const newStatus={status:"todo"}
//        axios.patch(`https://expressjs-server.vercel.app/tasks/${id}`,
//            newStatus).then((res)=>{
//                console.log(res)
//        })
//            .catch((err)=>{
//                alert('server kaput')
//            })
//     } //need to change statuses tasks in server

    const getTasks  = () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        axios.get('https://expressjs-server.vercel.app/tasks')
            .then( (res)=>{
                // handle success
                setTasks(res.data);
            })
            .catch((err)=> {
                // handle error
                alert('trouble');
            })
    }

    useEffect(()=>{
        getTasks()
    },[])


  return (
    <div className="App">
      <h1>Kanban board</h1>
        <hr/>
        <span className="d-flex justify-content-between">
            <button className="btn btn-light"  type="button">Create Card</button>
            <button className="btn btn-light me-md-2"  type="button">Create New Status</button>
        </span>
        {/*<button onClick={()=>updateTask("63dd9cf579ea0dc9396aeda9")}>update</button>*/}
            <div className="container">
                <div className="row align-items-start">
                    {statuses.map((status)=>
                    <Colum status={status} key={status._id}
                           tasks={tasks}
                           setTasks={setTasks}
                   />
                    )}

                </div>
            </div>
    </div>
  );
}

export default App;
