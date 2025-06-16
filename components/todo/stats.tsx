import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

function ToDoStats() {
    const completedCount = 1;
    const totalCount = 2;

    return (
        <div className="flex flex-wrap gap-2 justify-between items-center mb-6">
            <div className="flex gap-4">
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
            {completedCount > 0 && (
                <Button
                    variant="outline"
                    size="sm"
                    // onClick={clearCompleted}
                    className="text-red-600 hover:text-red-700"
                >
                    Limpiar Completadas
                </Button>
            )}
        </div>
    );
}

export default ToDoStats;
