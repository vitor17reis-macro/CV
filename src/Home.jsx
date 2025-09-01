// src/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { posts } from "./data/posts";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Notas de Realidade</h1>
      <div className="grid gap-4">
        {posts.map(p => (
          <article key={p.id} className="rounded-xl border p-4">
            <div className="text-sm text-neutral-500">{new Date(p.date).toLocaleDateString()}</div>
            <h2 className="text-lg font-medium">{p.title?.pt || p.title?.en}</h2>
            <p className="text-sm mt-1">{p.summary?.pt || p.summary?.en}</p>

            {p.type === "external" ? (
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex text-sm underline underline-offset-4"
              >
                Ler mais
              </a>
            ) : (
              <Link
                to={`/analises/${p.slug}`}
                className="mt-2 inline-flex text-sm underline underline-offset-4"
              >
                Ler mais
              </Link>
            )}
          </article>
        ))}
      </div>
    </main>
  );
}
