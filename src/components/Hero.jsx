import Spline from "@splinetool/react-spline";
import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[78vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/dRBdpY8aSqcdPO2y/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-white/60 to-white"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur">
            <Sparkles size={14} className="text-fuchsia-600" />
            Gen Z Viral Video + Creative Design Agency
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-black tracking-tight leading-[1.05] text-gray-900">
            Make it trend. Keep it iconic.
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-gray-600 max-w-2xl">
            We craft scroll-stopping videos and bold brand visuals built for TikTok,
            Reels, and YouTube Shorts. From concept to edit — engineered to go viral.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-flex justify-center items-center rounded-full bg-gray-900 text-white px-6 py-3 font-medium shadow hover:bg-black transition-colors"
            >
              Book a Strategy Call
            </a>
            <a
              href="#work"
              className="inline-flex justify-center items-center rounded-full bg-white text-gray-900 px-6 py-3 font-medium border border-black/10 hover:border-black/20 shadow-sm"
            >
              See Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
