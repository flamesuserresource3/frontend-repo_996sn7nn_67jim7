import { Rocket, Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold text-gray-900">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-indigo-500 grid place-items-center text-white shadow-lg shadow-fuchsia-500/30">
            <Rocket size={18} />
          </div>
          <span className="text-lg tracking-tight">Vibe Viral</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#services" className="hover:text-gray-900 transition-colors">Services</a>
          <a href="#work" className="hover:text-gray-900 transition-colors">Work</a>
          <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-4 py-2 text-sm font-medium shadow hover:shadow-md hover:bg-black transition-colors"
        >
          <Sparkles size={16} />
          Start a Project
        </a>
      </div>
    </header>
  );
}
