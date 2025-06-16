import { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useToDoStore } from "@/store/useToDoStore";
import { Textarea } from "@/components/ui/textarea";

export default function ToDoInput() {
    const [newTodo, setNewTodo] = useState("");
    const { addNewTodo } = useToDoStore();
    const handleKeyDown = useCallback(
        (event: React.KeyboardEvent<HTMLTextAreaElement>): void => {
            const isSubmitKeyPressed = (event.metaKey || event.ctrlKey) && event.key === "Enter";

            if (isSubmitKeyPressed) {
                event.preventDefault();
                onAddNewTodo();
            }
        },
        [addNewTodo, newTodo]
    );

    const onAddNewTodo = () => {
        addNewTodo(newTodo);
        setNewTodo("");
    };

    return (
        <div className="w-full">
            <Textarea
                className="font-caveat max-h-16 md:max-h-40 text-lg md:text-xl resize-none border-none px-0"
                placeholder="Escribe tu tarea y presiona Ctrl+Enter o haz clic en Agregar.."
                rows={9}
                maxLength={120}
                onKeyDown={handleKeyDown}
                value={newTodo}
                autoFocus
                onChange={(e) => setNewTodo(e.target.value)}
            />
            <Button onClick={onAddNewTodo} className="px-6 w-full" disabled={!newTodo.length}>
                <Plus className="w-4 h-4 mr-2" />
                Agregar
            </Button>
        </div>
    );
}
