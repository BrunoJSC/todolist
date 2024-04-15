import {useEffect, useState} from "react";
import {API} from "@/lib/api.ts";
import {useNavigate, useParams} from "react-router-dom";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";

export function EditTaskPage() {
    const {id } = useParams();
    const navigate = useNavigate();
    const [task, setTask] = useState({title: "", completed: false});

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const response = await API.get(`/tasks/${id}`);
                setTask(response.data);
            } catch (error) {
                console.error('Failed to fetch task', error);
            }
        };

        fetchTask();
    }, [id]);

    const handleSave = async () => {
        try {
            await API.put(`/tasks/${id}`, task);
            navigate('/');
        } catch (error) {
            console.error('Failed to update task', error);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <h1>Edit task</h1>

            <div className="flex items-center gap-2 mt-3">
                <Input
                    type="text"
                    value={task.title}
                    onChange={(e) => setTask({...task, title: e.target.value})}
                    className="w-full"
                />

                <Input
                    type="checkbox"
                    checked={task.completed}
                    onChange={(e) => setTask({...task, completed: e.target.checked})}
                />

            </div>
            <Button onClick={handleSave} className="mt-4 w-full">
               Salvar
            </Button>
        </div>
    );
}