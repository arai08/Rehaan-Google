import SearchApp from "../components/SearchApp";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-28 px-6 bg-transparent dark:bg-black">
        <SearchApp />
      </main>
    </div>
  );
}
