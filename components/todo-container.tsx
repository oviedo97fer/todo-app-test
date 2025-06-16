"use client";

import { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, CheckCircle2 } from "lucide-react";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import TodoCard from "./todo/card";
import ToDoStats from "./todo/stats";
import { Textarea } from "./ui/textarea";
import { useToDoStore } from "@/store/useToDoStore";

interface Todo {
    id: string;
    text: string;
    completed: boolean;
    createdAt: Date;
}

export default function TodoApp() {
    const { todos, setTodos, newTodo, setNewTodo } = useToDoStore();

    const addTodo = () => {
        if (newTodo.trim() !== "") {
            const todo: Todo = {
                id: Date.now().toString(),
                text: newTodo.trim(),
                completed: false,
                createdAt: new Date()
            };
            setTodos([todo, ...todos]);
            setNewTodo("");
        }
    };

    /*  const toggleTodo = (id: string) => {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
    };

    const deleteTodo = (id: string) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    }; */

    const completedCount = todos.filter((todo) => todo.completed).length;
    const totalCount = todos.length;

    const handleKeyDown = useCallback(
        (event: React.KeyboardEvent<HTMLTextAreaElement>): void => {
            // Detecta si es Mac (metaKey) o PC/Linux (ctrlKey)
            const isSubmitKeyPressed = (event.metaKey || event.ctrlKey) && event.key === "Enter";

            if (isSubmitKeyPressed) {
                event.preventDefault();
                // Tu acción aquí
                addTodo();
            }
        },
        [addTodo]
    );

    return (
        <div className="bg-card rounded-xl w-full flex p-4 space-x-4">
            <div className="flex-3 flex flex-col space-y-2">
                <Textarea
                    className="font-caveat text-lg md:text-xl resize-none border-none px-0"
                    placeholder="Escribe tu tarea y presiona Ctrl+Enter o haz clic en Agregar.."
                    rows={8}
                    onKeyDown={handleKeyDown}
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <Button onClick={addTodo} className="px-6" disabled={!newTodo.length}>
                    <Plus className="w-4 h-4 mr-2" />
                    Agregar
                </Button>
                {/*  {totalCount > 0 && <ToDoStats />} */}
            </div>
            <div className="flex-6">
                {/* Todo List */}
                <ScrollArea className="h-80 w-full rounded-md border">
                    {todos.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center py-12">
                            <CheckCircle2 className="w-12 h-12 text-green-600 mb-4" />
                            <h3 className="text-lg font-medium text-foreground-500 mb-2">
                                No tienes tareas pendientes
                            </h3>
                            <p className="text-gray-400 text-center">Agrega una nueva tarea para organizar tu dia!</p>
                        </div>
                    ) : (
                        todos.map((todo) => <TodoCard key={todo.id} {...todo} />)
                    )}
                </ScrollArea>
            </div>
        </div>
    );
}
