import React from "react";
import { ModeToggle } from "./ui/toggle-theme";

function HeaderApp() {
    return (
        <div className="flex justify-center w-full">
            <div className="w-fit border p-2 bg-card rounded-xl flex items-center gap-2">
                <h2 className="font-semibold">Mi Lista de Tareas</h2>
                <ModeToggle />
            </div>
        </div>
    );
}

export default HeaderApp;
