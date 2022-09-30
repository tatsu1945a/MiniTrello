import React from 'react'
import { Task } from "./Task"
import { DragDropContext, Droppable } from "react-beautiful-dnd";


const reorder = (taskList, startIndex, endIndex) => {
  //console.log(result);
  // タスクを並び替え
  const remove = taskList.splice(startIndex, 1); 
  //console.log(remove);
  taskList.splice(endIndex, 0 ,remove[0]);
};

export const Tasks = ({taskList, setTaskList}) => {
  const handleDrangEnd = (result) => {
    reorder(taskList, result.source.index, result.destination.index);

    setTaskList(taskList);
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleDrangEnd}>
        <Droppable droppableId="droppableId">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
            
              {taskList.map((task, index) => (
                <div key={task.id}>
                  <Task 
                    index={index}
                    task={task}
                    taskList={taskList}
                    setTaskList={setTaskList}
                  />
                </div>
              ))}
              {provided.placeholder}
            </div> 
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}
