import { useContext } from "react";
import { useState, useRef } from "react";
import { MdAssignmentAdd } from "react-icons/md";
import { todoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const { addTodoInList } = useContext(todoItemsContext);
  let dateRef = useRef("");
  let nameRef = useRef("");

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const date = dateRef.current.value;
    const name = nameRef.current.value;

    if (name === "" || date === "") {
      alert("Provide a valid Todo");
    } else {
      addTodoInList(name, date);
      dateRef.current.value = "";
      nameRef.current.value = "";
    }
  };

  return (
    <div className="container text-center">
      <form action="" className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            id="todoName"
            ref={nameRef}
          />
        </div>
        <div className="col-4">
          <input type="date" id="todoDate" ref={dateRef} />
        </div>
        <div className="col-2">
          <button className="btn btn-success kg-button" type="submit">
            <MdAssignmentAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;

//==============================================================================================
//If you want to do the same functionality with useState then check below code

// import { useState, useRef } from "react";
// import { MdAssignmentAdd } from "react-icons/md";

// function AddTodo({addTodoInList})
// {

//   let [date, setDate] = useState("")
//   let [name, setName] = useState("")

//   const handleNameChange = (event) => {
//     setName(event.target.value)

//   }

//   const handleDateChange = (event) => {
//     setDate(event.target.value)
//   }

//   const handleAddButtonClicked = (event) => {
//     if(name === "" || date === "")
//     {
//       alert("Provide a valid Todo")
//     }
//     else
//     {
//       addTodoInList(name, date)
//       setName("")
//       setDate("")
//     }
//     event.preventDefault()
//   }

//   return (
//     <div className="container text-center">
//       <form action="" className="row kg-row" onSubmit={handleAddButtonClicked}>
//         <div className="col-6">
//           <input type="text" placeholder="Enter Todo Here" id="todoName" value= {name} onChange={(event) => handleNameChange(event)}/>
//         </div>
//         <div className="col-4">
//           <input type="date" id="todoDate" value= {date} onChange={(event) => handleDateChange(event)}/>
//         </div>
//         <div className="col-2">
//           <button className="btn btn-success kg-button" type="submit">
//           <MdAssignmentAdd />
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default AddTodo;
