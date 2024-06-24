import { useContext } from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { todoItemsContext } from "../store/todo-items-store";

function TodoItem1({ todoName, todoDate }) {
  const { handleDeleteButton } = useContext(todoItemsContext);
  return (
    <>
      <div className="container">
        <div className="row kg-row">
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-danger kg-button"
              onClick={() => handleDeleteButton(todoName)}
            >
              <RiDeleteBin2Fill />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoItem1;
