export interface ToDoNote {
    id: string;
    text: string;
    completed: boolean;
    createdAt: Date;
}

export enum FilterToDo {
    all = "all",
    completed = "completed",
    pending = "pending"
}
