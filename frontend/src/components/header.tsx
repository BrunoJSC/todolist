import { Button } from "./ui/button";

type HeaderProps = {
  title: string;
  onAddTask?: () => void;
};

export function Header({ title, onAddTask }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 p-4 flex items-center justify-between sticky">
      <h1 className="text-lg md:text-xl font-bold">{title}</h1>

      {<Button onClick={onAddTask}>Criar uma nova tarefa</Button>}
    </header>
  );
}
