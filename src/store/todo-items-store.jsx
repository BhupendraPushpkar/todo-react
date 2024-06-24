import { useReducer } from "react";
import { createContext } from "react";

export const todoItemsContext = createContext();

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoList = currTodoItems;
  if (action.type === "NEW_ITEM") {
    console.log(
      `Todo Added for ${action.payload.todoName} and ${action.payload.todoDate}`
    );
    newTodoList = [
      ...currTodoItems,
      { name: action.payload.todoName, dueDate: action.payload.todoDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    console.log("Deleting Todo with name:", action.payload.todoName);
    newTodoList = newTodoList.filter(
      (item) => item.name != action.payload.todoName
    );
  }
  return newTodoList;
};

const TodoItemsContextProvider = ({ children }) => {
  let todoItems = [
    {
      name: "Buy Ghee",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2023",
    },
  ];

  // let [todoList, setTodoItems] = useState(todoItems);

  const [todoList, dispathTodoItems] = useReducer(todoItemsReducer, todoItems);

  const addTodoInList = (todoName, todoDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        todoName,
        todoDate,
      },
    };
    dispathTodoItems(newItemAction);
    // console.log(`Todo Added for ${todoName} and ${todoDate}`);
    // let newTodoList = [...todoList, {name : todoName, dueDate : todoDate}]
    // setTodoItems(newTodoList)
  };

  const handleDeleteButton = (todoName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        todoName,
      },
    };
    dispathTodoItems(deleteItemAction);
  };
  return (
    <todoItemsContext.Provider
      value={{ todoItems: todoList, addTodoInList, handleDeleteButton }}
    >
      {children}
    </todoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
