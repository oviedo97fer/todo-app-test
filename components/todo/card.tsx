import React from "react";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { ToDoNote } from "@/types";

function TodoCard(props: ToDoNote) {
    const { id, completed, text } = props;
    return (
        <div
            className={`shadow-md transition-all duration-200 hover:shadow-lg ${
                completed ? "bg-gray-50 border-gray-200" : "bg-white"
            }`}
        >
            <div className="flex items-center gap-3">
                <Checkbox
                    id={`todo-${id}`}
                    checked={completed}
                    // onCheckedChange={() => toggleTodo(todo.id)}
                    className="w-5 h-5"
                />
                <div className="flex-1 min-w-0">
                    <label
                        htmlFor={`todo-${id}`}
                        className={`block text-sm font-medium cursor-pointer ${
                            completed ? "text-gray-500 line-through" : "text-gray-900"
                        }`}
                    >
                        {text}
                    </label>
                    <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-gray-400">
                            {/*  {todo.createdAt.toLocaleDateString("es-ES", {
                                day: "numeric",
                                month: "short",
                                hour: "2-digit",
                                minute: "2-digit"
                            })} */}
                        </span>
                    </div>
                </div>
                <Button
                    variant="ghost"
                    size="sm"
                    // onClick={() => deleteTodo(todo.id)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                >
                    <Trash2 className="w-4 h-4" />
                </Button>
            </div>
        </div>
    );
}

export default TodoCard;
