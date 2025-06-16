import React, { useCallback, useState } from "react";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { ToDoNote } from "@/types";
import { cn } from "@/lib/utils";
import { useToDoStore } from "@/store/useToDoStore";

function TodoCard(props: ToDoNote) {
    const { id, completed, text } = props;
    const { deleteTodo } = useToDoStore();
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const handleMouseEnter = useCallback((): void => {
        setIsHovered(true);
    }, []);

    const handleMouseLeave = useCallback((): void => {
        setIsHovered(false);
    }, []);

    return (
        <TodoCardContainer>
            <div
                className="flex flex-row gap-2 items-center"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Checkbox
                    id={`todo-${id}`}
                    checked={completed}
                    // onCheckedChange={() => toggleTodo(todo.id)}
                    className="w-5 h-5"
                />
                <p className="flex-1 font-caveat text-2xl text-primary-foreground">{text}</p>

                {isHovered && (
                    <Button variant="ghost" size="sm" onClick={() => deleteTodo(id)}>
                        <Trash2 className="w-4 h-4" />
                    </Button>
                )}
            </div>
        </TodoCardContainer>
    );
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

function TodoCardContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative h-fit w-full">
            <div
                className={cn(
                    `
                        shadow-[2px_3px_15px_rgba(0,0,0,0.2)]
                        transition-all
                        duration-300
                        hover:shadow-[2px_3px_20px_rgba(0,0,0,0.25)]
						rounded-xl
                        rounded-tr-[58px]
						h-fit w-full
                        `
                )}
            >
                <div
                    className={cn(
                        `relative
                            min-w-64
							w-full
							h-fit
                            p-3
                            rounded-xl
                            bg-[#d0ad56] hover:bg-[#c19d44] after:bg-[#d5b668]
                            cursor-pointer
                            `,
                        // corner folded
                        `
                            after:content-['']
                            after:absolute
                            after:right-0
                            after:top-0
                            after:shadow-md
                            after:w-[1.4rem]
                            after:h-[1.4rem]
                            after:display-block
                            after:rounded-bl-xl
                            `
                    )}
                    style={{
                        clipPath: "polygon(0 0, calc(100% - 1.4rem) 0, 100% 1.4rem, 100% 100%, 0 100%)"
                    }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}
export default TodoCard;
