import { ITask } from "@/types/tasks";
import Task from "./Task";
interface TodoListProps {
    tasks: ITask[];
}
const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
    console.log("TASKS ARRAY:", tasks.map(t => t.id));
    return (
        <div className="overflow-x-auto">
            <table className="table">

                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => (
                        <Task key={`${task.text}-${index}`} task={task} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TodoList;