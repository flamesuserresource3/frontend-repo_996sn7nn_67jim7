export default function Portfolio() {
  const items = [
    {
      tag: "UGC + Edit",
      title: "90-day Reels sprint for DTC skincare",
      result: "+2.3M views, 4x CTR",
      gradient: "from-fuchsia-500 via-violet-500 to-indigo-500",
    },
    {
      tag: "Campaign",
      title: "TikTok challenge for food delivery app",
      result: "37k UGC entries, top-5 trend",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    },
    {
      tag: "Brand Design",
      title: "Playful rebrand for creator-led startup",
      result: "+120% saves, 3x share rate",
      gradient: "from-amber-500 via-orange-500 to-rose-500",
    },
  ];

  return (
    <section id="work" className="relative py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Selected Work</h2>
          <p className="mt-3 text-gray-600">A snapshot of results from brands we partner with.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((card) => (
            <article
              key={card.title}
              className="group rounded-2xl overflow-hidden border border-black/10 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`h-44 bg-gradient-to-br ${card.gradient}`} />
              <div className="p-5">
                <span className="inline-flex items-center rounded-full bg-gray-900 text-white text-xs px-2.5 py-1">
                  {card.tag}
                </span>
                <h3 className="mt-3 font-semibold text-gray-900 leading-snug">{card.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{card.result}</p>
              </div>
            </article>
          ))}
        </div>

        <div id="contact" className="mt-16 rounded-3xl border border-black/10 bg-white p-8 sm:p-10 shadow-sm text-center">
          <h3 className="text-2xl font-bold text-gray-900">Ready to make your brand unskippable?</h3>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Tell us your goals. We'll design a content system that hits them — and looks great doing it.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:hello@vibeviral.agency"
              className="inline-flex justify-center items-center rounded-full bg-gray-900 text-white px-6 py-3 font-medium shadow hover:bg-black"
            >
              hello@vibeviral.agency
            </a>
            <a
              href="#"
              className="inline-flex justify-center items-center rounded-full bg-white text-gray-900 px-6 py-3 font-medium border border-black/10 hover:border-black/20 shadow-sm"
            >
              Download Capabilities Deck
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
