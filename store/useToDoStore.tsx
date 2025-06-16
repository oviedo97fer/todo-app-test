import { ToDoNote } from "@/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface ToDoState {
    todos: ToDoNote[];
    setTodos: (todos: ToDoNote[]) => void;
    deleteTodo: (id: string) => void;
    newTodo: string;
    setNewTodo: (newTodo: string) => void;
}

export const useToDoStore = create<ToDoState>()(
    persist(
        (set, get) => ({
            todos: [],
            newTodo: "",
            deleteTodo: (id: string) => set({ todos: get().todos.filter((todo) => todo.id !== id) }),
            setTodos: (todos) => set({ todos }),
            setNewTodo: (newTodo) => set({ newTodo })
        }),
        {
            name: "todos-storage",
            storage: createJSONStorage(() => localStorage),
            version: 1
        }
    )
);
