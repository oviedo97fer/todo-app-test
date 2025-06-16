import { FilterToDo, ToDoNote } from "@/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface ToDoState {
    todos: ToDoNote[];
    setTodos: (todos: ToDoNote[]) => void;
    addTodo: (todo: ToDoNote) => void;
    addNewTodo: (newTodo: { title: string; description: string }) => void;
    toggleTodo: (id: string) => void;
    deleteTodo: (id: string) => void;
    clearAllTodos: () => void;
    filter: FilterToDo;
    setFilter: (filter: FilterToDo) => void;
}

export const useToDoStore = create<ToDoState>()(
    persist(
        (set, get) => ({
            todos: [],
            addNewTodo: (newTodo) => {
                const todo: ToDoNote = {
                    id: Date.now().toString(),
                    title: newTodo.title.trim(),
                    description: newTodo.description.trim(),
                    isComplete: false,
                    createdAt: new Date()
                };
                set({ todos: [...get().todos, todo] });
            },
            toggleTodo: (id: string) =>
                set({
                    todos: get().todos.map((todo) =>
                        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
                    )
                }),
            addTodo: (todo) => set({ todos: [...get().todos, todo] }),
            deleteTodo: (id: string) => set({ todos: get().todos.filter((todo) => todo.id !== id) }),
            setTodos: (todos) => set({ todos }),
            clearAllTodos: () => set({ todos: [] }),
            filter: FilterToDo.all,
            setFilter: (filter: FilterToDo) => set({ filter })
        }),
        {
            name: "todos-storage",
            storage: createJSONStorage(() => localStorage),
            version: 1
        }
    )
);
