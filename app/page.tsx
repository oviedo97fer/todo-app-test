import TodoApp from "@/components/todo-container";

export default function Home() {
    return (
        <div className="pt-4 font-[family-name:var(--font-geist-sans)] flex flex-col">
            <main className="flex flex-col items-center">
                <TodoApp />
            </main>
        </div>
    );
}
