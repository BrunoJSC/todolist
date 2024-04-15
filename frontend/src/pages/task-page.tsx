import { Header } from "@/components/header";
import Modal from "react-modal";
import {useEffect, useState} from "react";
import { AddTaskForm } from "@/components/form";
import {API} from "@/lib/api.ts";
import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router-dom";

type TasksProps = {
    id: number;
    title: string;
    completed: boolean;
}

export function TaskPage() {
  const [modalIsOpen, setIsOpenModal] = useState(false);
  const [tasks, setTasks] = useState<TasksProps[]>([])

  function handleOpenModal() {
    setIsOpenModal(true);
  }

  function handleCloseModal() {
    setIsOpenModal(false);
  }

    const handleToggleTask = async (id: number, completed: boolean) => {
        try {
            const response = await API.put(`/tasks/${id}`, { completed });
            const updatedTasks = tasks.map(task => task.id === id ? { ...task, completed: response.data.completed } : task);
            setTasks(updatedTasks);
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

  const deletedTask = async (id: number) => {
      try {
          await API.delete(`/tasks/${id}`);
          const deleteTask = tasks.filter(task => task.id !== id);
          setTasks(deleteTask);
      } catch (error) {
          console.log(error);
      }

  }

    useEffect(() => {
        const getAllTasks = async () => {
            const response = await API.get("/tasks");


            console.log(response.data);

            setTasks(response.data);
        }


        getAllTasks();

    }, [tasks]);

  return (
    <div>
      <Header title="Tasks" onAddTask={handleOpenModal} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Adicionar Tarefa"
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            maxWidth: "900px",
            width: "100%",
            padding: "2rem",
            borderRadius: "8px",
          },
        }}
      >
        <AddTaskForm />
      </Modal>
      <main className="p-4 max-w-screen-md mx-auto mt-10">{/* <TaskList /> */}
          {tasks.map((task: TasksProps) => (
              <div key={task.id} className="flex items-center justify-between shadow-md w-full p-4 mb-10">
                  <Link to={`/edit-task/${task.id}`}>
                      <h1 className={`font-bold text-lg  text-black ${task.completed ? "line-through" : ""}`}>{task.title}</h1>
                  </Link>

                  <div className="flex items-center gap-3">
                      <input type="checkbox" checked={task.completed}
                             onChange={() => handleToggleTask(task.id, !task.completed)}/>
                      <p>{task.completed ? "Completed" : "Not Completed"}</p>
                      <Button variant="destructive" onClick={() => deletedTask(task.id)}>Deletar</Button>
                  </div>
              </div>
          ))}
      </main>
    </div>
  );
}
