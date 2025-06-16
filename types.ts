export interface ToDoNote {
    id: string;
    title: string;
    isComplete: boolean;
    createdAt: Date;
    description: string;
}

export enum FilterToDo {
    all = "all",
    completed = "completed",
    pending = "pending"
}
