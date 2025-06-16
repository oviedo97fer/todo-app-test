import TodoApp from "@/components/todo-container";

export default function Home() {
    return (
        <div className="pt-4 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col items-center sm:items-start">
                <TodoApp />
            </main>
            <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
                Hecho por{" "}
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https:/fernandooviedo.site"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Fernando Oviedo
                </a>
            </footer>
        </div>
    );
}
