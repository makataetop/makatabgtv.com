import React from "react";
import { motion } from "framer-motion";
import { Search, User, Video, Heart, Menu } from "lucide-react";

// Usage notes:
// - This is a single-file React component that uses Tailwind CSS for styling.
// - Install dependencies: framer-motion, lucide-react, tailwindcss (and configure Tailwind in your project).
// - Drop this file into a React app (Vite / CRA) and import it in App.jsx to preview.

const categories = [
  "Just Chatting",
  "Gaming",
  "IRL",
  "Music",
  "Esports",
  "Creative",
  "Talk Shows",
];

const mockStreams = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  title: `Streamer_${i + 1} plays Awesome Game`,
  viewers: Math.floor(Math.random() * 20_000) + 100,
  game: ["Valorant", "Minecraft", "League", "CS2", "Fortnite"][i % 5],
  thumbnail: `https://picsum.photos/seed/stream${i + 1}/400/225`,
  avatar: `https://i.pravatar.cc/40?img=${i + 3}`,
}));

export default function TwitchLike() {
  return (
    <div className="min-h-screen bg-neutral-900 text-slate-100">
      {/* Top nav */}
      <header className="sticky top-0 z-40 backdrop-blur bg-neutral-900/60 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-md hover:bg-neutral-800/60">
              <Menu size={18} />
            </button>
            <div className="flex items-center gap-3">
              <div className="bg-pink-600 text-white font-bold px-3 py-1 rounded">TWT</div>
              <span className="text-sm font-semibold tracking-wide">Twitch-like</span>
            </div>
          </div>

          <div className="flex-1 max-w-xl mx-6">
            <div className="relative">
              <input
                placeholder="Search streams, channels, games"
                className="w-full bg-neutral-800/60 placeholder:text-neutral-400 rounded-md py-2 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 opacity-80" size={16} />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-md hover:bg-neutral-800/50">
              <Video size={16} /> <span className="text-sm">Go Live</span>
            </button>
            <button className="p-2 rounded-full bg-neutral-800/50 hover:bg-neutral-800/70">
              <User size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Main layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-12 gap-6">
        {/* Left sidebar */}
        <aside className="col-span-2 hidden lg:block">
          <div className="space-y-4">
            <div className="p-3 rounded-lg bg-neutral-800/40">
              <h3 className="text-sm font-semibold mb-2">Categories</h3>
              <ul className="space-y-1">
                {categories.map((c) => (
                  <li key={c} className="text-sm hover:text-white cursor-pointer flex items-center gap-2 py-1 px-2 rounded hover:bg-neutral-800/30">
                    <span className="w-2 h-2 bg-pink-500 rounded-full inline-block" /> {c}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3 rounded-lg bg-neutral-800/40">
              <h3 className="text-sm font-semibold mb-2">Following</h3>
              <div className="space-y-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-3">
                    <img src={`https://i.pravatar.cc/36?img=${i}`} alt="avatar" className="w-9 h-9 rounded-full" />
                    <div>
                      <div className="text-sm font-medium">Friend_{i}</div>
                      <div className="text-xs text-neutral-400">Live • {Math.floor(Math.random() * 8) + 1}k</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Center content */}
        <section className="col-span-12 lg:col-span-7">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            {/* Featured stream */}
            <div className="rounded-lg overflow-hidden bg-neutral-800/30">
              <div className="aspect-video bg-black flex items-center justify-center text-neutral-400">Player placeholder</div>
              <div className="p-3 flex items-center justify-between">
                <div>
                  <div className="font-semibold">Featured — Top Stream Right Now</div>
                  <div className="text-sm text-neutral-400">StreamerName • {mockStreams[0].viewers} viewers • {mockStreams[0].game}</div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="px-3 py-1 rounded-md hover:bg-neutral-800/50">Follow</button>
                  <button className="px-3 py-1 rounded-md hover:bg-neutral-800/50">Share</button>
                </div>
              </div>
            </div>

            {/* Grid of live channels */}
            <div>
              <h2 className="text-lg font-semibold mb-3">Live Channels</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {mockStreams.map((s) => (
                  <div key={s.id} className="rounded-lg overflow-hidden bg-neutral-800/20">
                    <div className="relative">
                      <img src={s.thumbnail} alt={s.title} className="w-full h-40 object-cover" />
                      <div className="absolute left-2 top-2 bg-black/60 px-2 py-1 rounded text-xs">{s.viewers.toLocaleString()} viewers</div>
                    </div>
                    <div className="p-2 flex items-start gap-2">
                      <img src={s.avatar} alt="a" className="w-9 h-9 rounded-full" />
                      <div className="flex-1">
                        <div className="text-sm font-medium truncate">{s.title}</div>
                        <div className="text-xs text-neutral-400">{s.game}</div>
                      </div>
                      <button className="p-2 rounded hover:bg-neutral-800/30">
                        <Heart size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Right column: recommendations / chat */}
        <aside className="col-span-12 lg:col-span-3">
          <div className="space-y-4">
            <div className="p-3 rounded-lg bg-neutral-800/40">
              <h3 className="text-sm font-semibold">Recommended</h3>
              <div className="mt-3 space-y-2">
                {mockStreams.slice(1, 5).map((r) => (
                  <div key={r.id} className="flex items-center gap-3">
                    <img src={r.avatar} alt="a" className="w-10 h-10 rounded" />
                    <div className="flex-1">
                      <div className="text-sm truncate">{r.title}</div>
                      <div className="text-xs text-neutral-400">{r.viewers.toLocaleString()} viewers</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 rounded-lg bg-neutral-800/40 h-[360px] flex flex-col">
              <h3 className="text-sm font-semibold mb-2">Chat (Preview)</h3>
              <div className="flex-1 overflow-auto space-y-2 text-sm text-neutral-300">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-7 h-7 rounded-full bg-neutral-700/60" />
                    <div>
                      <div className="text-xs text-neutral-400">user_{i + 1}</div>
                      <div className="text-sm">Hello chat! 🎮</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-3">
                <input placeholder="Write a message" className="w-full rounded-md bg-neutral-800/60 py-2 px-3 focus:outline-none" />
              </div>
            </div>
          </div>
        </aside>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-800/40 py-6 text-neutral-400 text-sm text-center">
        Built with ❤️ — Twitch-like demo UI
      </footer>
    </div>
  );
}
