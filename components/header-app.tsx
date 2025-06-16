import React from "react";
import { ModeToggle } from "./ui/toggle-theme";

function HeaderApp() {
    return (
        <div className="flex justify-center w-full mx-auto container">
            <div className="w-full border p-2 bg-card rounded-xl flex justify-between items-center gap-2">
                <h2 className="font-semibold">Mi Lista de Tareas</h2>
                <ModeToggle />
            </div>
        </div>
    );
}

export default HeaderApp;
