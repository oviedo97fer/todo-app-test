import React, { useMemo } from "react";
import { Badge } from "../ui/badge";
import { useToDoStore } from "@/store/useToDoStore";

function ToDoStats() {
    const { todos } = useToDoStore();

    const totalCount = useMemo(() => {
        return todos.length;
    }, [todos]);

    const completedCount = useMemo(() => {
        return todos.filter((todo) => todo.completed).length;
    }, [todos]);

    return (
        <div className="flex flex-wrap gap-2 pt-2">
            <Badge variant="secondary" className="text-sm">
                Total: {totalCount}
            </Badge>
            <Badge variant="default" className="text-sm">
                Completadas: {completedCount}
            </Badge>
            <Badge variant="outline" className="text-sm">
                Pendientes: {totalCount - completedCount}
            </Badge>
        </div>
    );
}

export default ToDoStats;
