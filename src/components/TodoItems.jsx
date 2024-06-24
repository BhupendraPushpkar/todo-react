import { useState } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { todoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

function TodoItems() {
  const { todoItems } = useContext(todoItemsContext);

  return (
    <div className={styles.itemsContainer}>
      {todoItems?.map((item) => (
        <TodoItem
          todoName={item.name}
          todoDate={item.dueDate}
          key={item.name}
        ></TodoItem>
      ))}
    </div>
  );
}

export default TodoItems;
