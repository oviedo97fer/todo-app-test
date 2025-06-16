import { useMemo } from "react";
import { useToDoStore } from "@/store/useToDoStore";
import { ScrollArea } from "../ui/scroll-area";
import TodoCard from "./card";
import { Button } from "../ui/button";
import { ListFilter, SearchCheck, Trash2 } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { FilterToDo } from "../../types";
import { cn } from "@/lib/utils";

export default function ToDoList() {
    const { todos, filter } = useToDoStore();

    const filteredTodos = useMemo(() => {
        switch (filter) {
            case FilterToDo.all:
                return todos;
            case FilterToDo.completed:
                return todos.filter((todo) => todo.isComplete);
            case FilterToDo.pending:
                return todos.filter((todo) => !todo.isComplete);
            default:
                return [];
        }
    }, [todos, filter]);

    return (
        <ScrollArea className="max-h-[50vh] md:max-h-[80vh] overflow-auto w-full rounded-md px-3">
            <div className="flex flex-col gap-2">
                {!!todos.length && filteredTodos.length === 0 && (
                    <div className="flex-1 flex flex-col items-center justify-center">
                        <SearchCheck className="w-12 h-12 mb-4" />
                        <h3 className="text-lg font-medium text-foreground-500 mb-2">
                            No se encuentran tareas con este filtro
                        </h3>
                    </div>
                )}

                {filteredTodos.map((todo) => (
                    <TodoCard key={todo.id} {...todo} />
                ))}
            </div>
        </ScrollArea>
    );
}

export function ToDoListFooter() {
    const { todos, clearAllTodos } = useToDoStore();

    return (
        <div className="flex justify-end items-center mt-2 px-4">
            <Button variant="link" className="self-end text-sm" size="sm" onClick={clearAllTodos}>
                <Trash2 className="w-3 h-3" /> Borrar todas las tareas
            </Button>
        </div>
    );
}

export function ToDoListFilters() {
    const { filter, setFilter } = useToDoStore();
    return (
        <div className="px-4 flex justify-end mb-2">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                        <ListFilter className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all" />

                        <span className="sr-only">Toggle theme</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem
                        onClick={() => setFilter(FilterToDo.all)}
                        className={cn(filter == FilterToDo.all && "bg-card")}
                    >
                        Todas
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={() => setFilter(FilterToDo.completed)}
                        className={cn(filter == FilterToDo.completed && "bg-card")}
                    >
                        Completadas
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={() => setFilter(FilterToDo.pending)}
                        className={cn(filter == FilterToDo.pending && "bg-card")}
                    >
                        Pendientes
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
