import "./globals.css";
import Footer from "../components/Footer";

export const metadata = {
  title: "Rehaan — Google",
  description: "Personal portfolio search — a Google-style clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
  <body className="antialiased font-roboto">
        {/* Top-right nav (Gmail, Images, More, Profile) similar to Google */}
        <nav className="absolute right-6 top-4 z-50 flex items-center gap-4 text-sm">
          <a
            href="#"
            className="hidden rounded px-2 py-1 text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800 sm:inline"
          >
            Gmail
          </a>
          <a
            href="#"
            className="hidden rounded px-2 py-1 text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800 sm:inline"
          >
            Images
          </a>

          {/* More / apps grid button */}
          <button
            aria-label="Apps"
            title="Google apps"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            <svg className="h-5 w-5 text-zinc-700 dark:text-zinc-200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <rect x="3" y="3" width="4" height="4" rx="1" fill="currentColor" />
              <rect x="10" y="3" width="4" height="4" rx="1" fill="currentColor" />
              <rect x="17" y="3" width="4" height="4" rx="1" fill="currentColor" />
              <rect x="3" y="10" width="4" height="4" rx="1" fill="currentColor" />
              <rect x="10" y="10" width="4" height="4" rx="1" fill="currentColor" />
              <rect x="17" y="10" width="4" height="4" rx="1" fill="currentColor" />
              <rect x="3" y="17" width="4" height="4" rx="1" fill="currentColor" />
              <rect x="10" y="17" width="4" height="4" rx="1" fill="currentColor" />
              <rect x="17" y="17" width="4" height="4" rx="1" fill="currentColor" />
            </svg>
          </button>

          {/* Profile avatar */}
          <button
            aria-label="Profile"
            title="Profile"
            className="h-9 w-9 flex-none overflow-hidden rounded-full bg-zinc-200 text-sm font-medium leading-9 text-zinc-800 dark:bg-zinc-700 dark:text-white"
          >
            R
          </button>
        </nav>

        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
