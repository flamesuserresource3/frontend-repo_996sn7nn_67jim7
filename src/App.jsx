import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-inter">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
      </main>
      <footer className="border-t border-black/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Vibe Viral Agency. All rights reserved.</p>
          <div className="text-sm text-gray-600 flex items-center gap-6">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Instagram</a>
            <a href="#" className="hover:text-gray-900">TikTok</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
