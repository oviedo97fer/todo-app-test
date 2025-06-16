"use client";

import { CheckCircle2 } from "lucide-react";
import { useToDoStore } from "@/store/useToDoStore";
import ToDoStats from "./todo/stats";
import ToDoList, { ToDoListFilters, ToDoListFooter } from "./todo/list";
import ToDoInput from "./todo/input";

export default function TodoApp() {
    const { todos } = useToDoStore();

    return (
        <div className="bg-card rounded-xl w-full flex flex-col md:flex-row min-h-[80vh] max-h-[80vh]">
            <div className="flex md:flex-3 md:min-w-[30%] md:max-w-[30%] md:justify-between flex-col space-y-2 w-full p-4 pb-2">
                <ToDoInput />
                {todos.length > 0 && <ToDoStats />}
            </div>
            <div className="flex-6 flex flex-col py-4">
                {todos.length === 0 && <NoToDoText />}
                {!!todos.length && (
                    <>
                        <ToDoListFilters />
                        <ToDoList />
                    </>
                )}
                {!!todos.length && <ToDoListFooter />}
            </div>
        </div>
    );
}

function NoToDoText() {
    return (
        <div className="flex-1 flex flex-col items-center justify-center">
            <CheckCircle2 className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-lg font-medium text-foreground-500 mb-2">No tienes tareas pendientes</h3>
            <p className="text-gray-400 text-center">Agrega una nueva tarea para organizar tu dia!</p>
        </div>
    );
}
