import { Camera, Video, Palette, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Content Capture Days",
    desc: "On-location shoots with agile crews to batch record high-volume social content in your voice.",
    color: "from-fuchsia-500 to-pink-500",
  },
  {
    icon: Video,
    title: "Short-Form Editing",
    desc: "Hyper-optimized hooks, captions, cuts, and memes designed for retention and shareability.",
    color: "from-violet-500 to-indigo-500",
  },
  {
    icon: Palette,
    title: "Creative Design",
    desc: "Brand systems, visuals, and motion graphics that feel playful, polished, and unmistakably you.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: TrendingUp,
    title: "Growth & Distribution",
    desc: "Posting cadences, hashtag strategy, and data-backed iteration to scale what works.",
    color: "from-amber-500 to-orange-500",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 bg-white">
      <div className="absolute inset-x-0 -top-20 h-40 bg-gradient-to-b from-white to-transparent pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Built for the feed, driven by strategy
          </h2>
          <p className="mt-3 text-gray-600">
            End-to-end creative built for TikTok, IG Reels, Shorts and everywhere your audience hangs out.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc, color }) => (
            <div
              key={title}
              className="group rounded-2xl border border-black/10 bg-white shadow-sm hover:shadow-md transition-shadow p-5 relative overflow-hidden"
            >
              <div className={`absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${color} opacity-20 group-hover:opacity-30 transition-opacity`} />
              <div className="relative">
                <div className="h-11 w-11 rounded-xl bg-gray-900 text-white grid place-items-center shadow">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm text-gray-600">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
