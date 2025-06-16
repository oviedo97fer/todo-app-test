import { useCallback, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useToDoStore } from "@/store/useToDoStore";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "../ui/input";

export default function ToDoInput() {
    const [newTodo, setNewTodo] = useState({ title: "", description: "" });
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

    const titleRef = useRef<HTMLInputElement>(null);

    const onAddNewTodo = () => {
        if (!newTodo.title.length || !newTodo.description.length) return;
        addNewTodo(newTodo);
        setNewTodo({ title: "", description: "" });
        titleRef.current!.focus();
    };

    return (
        <div className="w-full">
            <Input
                ref={titleRef}
                placeholder="Escribe el título de la tarea"
                className="bg-transparent dark:bg-transparent font-caveat text-2xl px-0 border-none"
                autoFocus
                maxLength={50}
                value={newTodo.title}
                onChange={(e) => setNewTodo((prev) => ({ ...prev, title: e.target.value }))}
            />
            <Textarea
                className="font-caveat max-h-18 md:max-h-40 text-lg md:text-xl resize-none border-none px-0"
                placeholder="Escribe la descripción de la tarea y presiona Ctrl+Enter o haz clic en Agregar.."
                rows={9}
                maxLength={120}
                onKeyDown={handleKeyDown}
                value={newTodo.description}
                onChange={(e) => setNewTodo((prev) => ({ ...prev, description: e.target.value }))}
            />
            <Button
                onClick={onAddNewTodo}
                className="px-6 w-full"
                disabled={!newTodo.title.length || !newTodo.description.length}
            >
                <Plus className="w-4 h-4 mr-2" />
                Agregar
            </Button>
        </div>
    );
}
