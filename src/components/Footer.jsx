export default function Footer() {
  return (
    <footer className="mt-20 border-t border-zinc-800 pt-6 pb-8 text-sm text-zinc-400">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div>© {new Date().getFullYear()} Rehaan Arai</div>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Newsletter</a>
            <a href="#" className="hover:underline">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
