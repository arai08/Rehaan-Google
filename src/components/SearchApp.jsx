"use client";

import React, { useMemo, useState } from "react";

export default function SearchApp() {
  const [query, setQuery] = useState("");

  const typedData = [];

  const results = useMemo(() => {
    if (!query) return typedData;
    const q = query.toLowerCase();
    return typedData.filter((item) => {
      return (
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        (item.tags || []).join(" ").toLowerCase().includes(q)
      );
    });
  }, [query, typedData]);

  return (
    <div className="w-full app-center">
      <header className="mb-6 text-center">
        <h2 className="text-white text-6xl lg:text-7xl xl:text-8xl font-ropaSans">Rehaan</h2>
      </header>

      <div className="mx-auto w-full max-w-3xl px-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const el = document.getElementById("search");
            el?.blur?.();
          }}
          className="flex flex-col items-center gap-4"
        >
          <label htmlFor="search" className="sr-only">Search portfolio</label>

          <div className="search-pill">
            <svg className="h-5 w-5 pill-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <input
              id="search"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Rehaan-oogle"
              className="search-input"
            />

            <svg className="h-5 w-5 pill-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M12 15a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M19 11v1a7 7 0 0 1-14 0v-1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="buttons-row">
            <button type="submit" className="ghost-btn">Search</button>
            <button
              type="button"
              onClick={() => {
                if (results.length > 0) {
                  const url = results[0].url ?? "#";
                  if (url !== "#") window.location.href = url;
                }
              }}
              className="ghost-btn"
              disabled={results.length === 0}
            >
              I'm Feeling Lucky
            </button>
          </div>
        </form>

        {query && (
          <div className="mt-8 rounded-lg bg-white/70 p-4 shadow-sm backdrop-blur-sm dark:bg-black/60">
            <p className="mb-3 text-xs uppercase text-zinc-500">Results ({results.length})</p>
            <ul className="flex flex-col gap-3">
              {results.map((r) => (
                <li key={r.id} className="rounded-md p-3 hover:bg-zinc-100 dark:hover:bg-zinc-900">
                  <a className="block" href={r.url ?? "#"}>
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-lg font-semibold text-foreground dark:text-white">{r.title}</h3>
                    </div>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{r.description}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
