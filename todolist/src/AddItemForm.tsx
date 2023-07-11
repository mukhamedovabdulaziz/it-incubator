import React, {ChangeEvent, KeyboardEvent, useState} from "react";

type AddItemFormPropsType = {
  addItem: (title: string) => void;
}

export function AddItemForm(props: AddItemFormPropsType) {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [error, setError] = useState<string>("");

  const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(e.currentTarget.value);
  }

  const onKeyUpHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    setError("");
    if (e.key === "Enter") {
      addNewTask();
    }
  }
  const addNewTask = () => {
    if (newTaskTitle.trim() !== "") {
      props.addItem(newTaskTitle.trim());
      setNewTaskTitle("");
    } else {
      setError("Title is required");
    }
  }

  return (
    <div>
      <input value={newTaskTitle}
             onChange={onNewTitleChangeHandler}
             onKeyUp={onKeyUpHandler}
             className={error ? "error" : ""}
      />
      <button onClick={addNewTask}>+</button>
      {error && <div className="error-message">{error}</div>}
    </div>
  )
}