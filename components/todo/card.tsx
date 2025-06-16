import React, { memo } from "react";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { ToDoNote } from "@/types";
import { cn } from "@/lib/utils";
import { useToDoStore } from "@/store/useToDoStore";

function TodoCard(props: ToDoNote) {
    const { id, completed, createdAt, text } = props;
    const { deleteTodo, toggleTodo } = useToDoStore();

    return (
        <TodoCardContainer className={cn(completed && "opacity-50")}>
            <div className="flex flex-row gap-2 items-center">
                <Checkbox
                    id={`todo-${id}`}
                    checked={completed}
                    onCheckedChange={() => toggleTodo(id)}
                    className="w-5 h-5"
                />
                <p
                    className={cn(
                        "flex-1 font-caveat text-2xl text-primary-foreground break-all",
                        completed && "line-through"
                    )}
                >
                    {text}
                </p>
                <Button variant="ghost" className="self-start" size="sm" onClick={() => deleteTodo(id)}>
                    <Trash2 className="w-4 h-4" />
                </Button>
            </div>
            <div>
                <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-background">
                        {new Date(createdAt).toLocaleDateString("es-ES", {
                            day: "numeric",
                            month: "short",
                            hour: "2-digit",
                            minute: "2-digit"
                        })}
                    </span>
                </div>
            </div>
        </TodoCardContainer>
    );
}

function TodoCardContainer({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <div className="relative h-fit px-2">
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
                        `,
                    className
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
export default memo(TodoCard);
