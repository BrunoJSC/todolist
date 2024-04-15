import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { TaskPage } from "./pages/task-page";
import {EditTaskPage} from "@/pages/edit-task.tsx";

export function App() {
  return (
    <>
        <Router>
            <Routes>
                <Route path="/" element={<TaskPage />} />
                <Route path="/edit-task/:id" element={<EditTaskPage />} />
            </Routes>
        </Router>
    </>
  );
}
