import projects from '../../data/projects.json';

export default function ProjectsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-ropaSans mb-6">Projects</h1>
      <ul className="grid gap-6">
        {projects.map((p) => (
          <li key={p.id} className="rounded-lg border border-zinc-800 p-4">
            <h2 className="text-xl font-semibold">{p.title}</h2>
            <p className="mt-2 text-zinc-400">{p.description}</p>
            <div className="mt-3 flex gap-2 text-xs text-zinc-500">
              {p.tags.map((t) => <span key={t} className="rounded-full bg-zinc-800 px-2 py-0.5">{t}</span>)}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
