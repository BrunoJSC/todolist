import { FormEvent, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { API } from "@/lib/api";
import Modal from "react-modal";

Modal.setAppElement('#root');

export const AddTaskForm = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title) return;

    // const task = {
    //   title,
    // };

    try {
      const response = await API.post("/tasks", {
        title,
      });

      console.log(response.data);

      setTitle("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="max-w-screen-md" onSubmit={handleSubmit}>
      <h1 className="text-primary text-md mb-5">
        Adicione uma nova tarefa a sua lista
      </h1>

      <div>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título da tarefa"
        />
      </div>

      <Button variant="secondary" type="submit" className="mt-5">
        Adicionar
      </Button>
    </form>
  );
};
