"use client";

import React, { useMemo, useState } from "react";

type Item = {
  id: string;
  title: string;
  description: string;
  url?: string;
  tags?: string[];
};

export default function SearchApp() {
  const [query, setQuery] = useState("");

  // portfolio.json removed per request; start with empty dataset.
  // You can later replace this with a fetch or dynamic import.
  const typedData: Item[] = [];

  const results: Item[] = useMemo(() => {
    if (!query) return typedData;
    const q = query.toLowerCase();
    return typedData.filter((item: Item) => {
      return (
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        (item.tags || []).join(" ").toLowerCase().includes(q)
      );
    });
  }, [query, typedData]);

  return (
    <div className="w-full">
      <header className="mb-10 text-center">
        <div className="flex flex-col items-center gap-2">
          {/* Google-like logotype built from colored spans */}
          <div className="flex items-end gap-0">
            <span className="text-6xl font-extrabold" style={{ color: "#4285F4" }}>G</span>
            <span className="text-6xl font-extrabold" style={{ color: "#EA4335" }}>o</span>
            <span className="text-6xl font-extrabold" style={{ color: "#FBBC05" }}>o</span>
            <span className="text-6xl font-extrabold" style={{ color: "#4285F4" }}>g</span>
            <span className="text-6xl font-extrabold" style={{ color: "#34A853" }}>l</span>
            <span className="text-6xl font-extrabold" style={{ color: "#EA4335" }}>e</span>
          </div>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Search my portfolio — try "design", "react", or "blog"</p>
        </div>
      </header>

      <div className="mx-auto w-full max-w-2xl">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // live search already filters; blur the input to mimic submit behavior
            const el = document.getElementById("search") as HTMLInputElement | null;
            el?.blur();
          }}
          className="flex flex-col items-center gap-4"
        >
          <label htmlFor="search" className="sr-only">Search portfolio</label>

          <div className="flex w-full items-center rounded-3xl border border-zinc-200 px-4 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-300 dark:bg-black dark:border-zinc-700">
            {/* magnifying icon */}
            <svg className="h-5 w-5 text-zinc-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <input
              id="search"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Rehaan Google"
              className="ml-3 flex-1 bg-transparent text-lg placeholder:text-zinc-400 focus:outline-none dark:text-white"
            />

            {/* mic icon */}
            <svg className="h-5 w-5 text-zinc-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M12 15a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M19 11v1a7 7 0 0 1-14 0v-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              className="rounded-md bg-zinc-100 px-4 py-2 text-sm text-zinc-800 hover:shadow-md dark:bg-zinc-800 dark:text-white"
            >
              Google Search
            </button>
            <button
              type="button"
              onClick={() => {
                if (results.length > 0) {
                  const url = results[0].url ?? "#";
                  if (url !== "#") window.location.href = url;
                }
              }}
              className="rounded-md bg-zinc-100 px-4 py-2 text-sm text-zinc-800 hover:shadow-md dark:bg-zinc-800 dark:text-white"
              disabled={results.length === 0}
            >
              I'm Feeling Lucky
            </button>
          </div>
        </form>

        <div className="mt-8 rounded-lg bg-white/70 p-4 shadow-sm backdrop-blur-sm dark:bg-black/60">
          <p className="mb-3 text-xs uppercase text-zinc-500">Results ({results.length})</p>
          <ul className="flex flex-col gap-3">
            {results.map((r) => (
              <li key={r.id} className="rounded-md p-3 hover:bg-zinc-100 dark:hover:bg-zinc-900">
                <a className="block" href={r.url ?? "#"}>
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-lg font-semibold text-foreground dark:text-white">{r.title}</h3>
                    {r.tags && (
                      <div className="hidden items-center gap-2 text-xs text-zinc-500 sm:flex">
                        {r.tags.map((t) => (
                          <span key={t} className="rounded-full bg-zinc-100 px-2 py-0.5 dark:bg-zinc-800">{t}</span>
                        ))}
                      </div>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{r.description}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
