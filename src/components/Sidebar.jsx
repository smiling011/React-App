export default function Sidebar() {
  const buttons = [
    { id: "about", label: "Sobre mí" },
    { id: "projects", label: "Proyectos" },
    { id: "skills", label: "Habilidades" },
  ];

  return (
    <div className="bg-zinc-800 p-4 flex flex-col gap-3 w-20 items-center">
      {buttons.map(btn => (
        <button
          key={btn.id}
          className="bg-zinc-700 hover:bg-zinc-600 p-2 rounded-md w-full"
          onClick={() => document.dispatchEvent(new CustomEvent("openWindow", { detail: btn.id }))}
        >
          {btn.label[0]}
        </button>
      ))}
    </div>
  );
}
