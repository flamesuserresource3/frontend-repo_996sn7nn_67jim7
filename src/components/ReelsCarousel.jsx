import { motion } from "framer-motion";

const reels = [
  // Vertical-friendly videos from public CDNs
  {
    src: "https://cdn.coverr.co/videos/coverr-a-silhouette-of-a-dancer-7605/1080p.mp4",
    caption: "Hook-driven intro",
  },
  {
    src: "https://cdn.coverr.co/videos/coverr-snowboarder-rides-on-snow-6968/1080p.mp4",
    caption: "Kinetic transition",
  },
  {
    src: "https://cdn.coverr.co/videos/coverr-couple-exploring-desert-6963/1080p.mp4",
    caption: "POV b-roll",
  },
  {
    src: "https://cdn.coverr.co/videos/coverr-driving-through-the-desert-7953/1080p.mp4",
    caption: "Speed ramp moment",
  },
  {
    src: "https://cdn.coverr.co/videos/coverr-emotional-dance-5925/1080p.mp4",
    caption: "Beat-match cut",
  },
];

function ReelCard({ src, caption }) {
  return (
    <div className="relative shrink-0 w-48 sm:w-56 md:w-64 aspect-[9/16] rounded-2xl overflow-hidden border border-black/10 bg-black shadow-md">
      <video
        src={src}
        className="h-full w-full object-cover"
        autoPlay
        muted
        playsInline
        loop
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 via-black/20 to-transparent text-white text-xs sm:text-sm">
        {caption}
      </div>
    </div>
  );
}

function MarqueeRow({ direction = "left", speed = 35 }) {
  const content = (
    <div className="flex items-center gap-4 sm:gap-5">
      {reels.map((r, idx) => (
        <ReelCard key={`${r.src}-${idx}`} src={r.src} caption={r.caption} />
      ))}
    </div>
  );

  const distance = 100; // percentage

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex items-center gap-4 sm:gap-5 will-change-transform"
        animate={{ x: direction === "left" ? ["0%", `-${distance}%`] : ["-50%", "0%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
        aria-hidden
      >
        {content}
        {content}
        {content}
      </motion.div>
    </div>
  );
}

export default function ReelsCarousel() {
  return (
    <section className="relative py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
              Reels that stop the scroll
            </h2>
            <p className="mt-2 text-gray-600 max-w-2xl">
              A living carousel of short-form edits — hooks, transitions, and pacing engineered for retention.
            </p>
          </div>
          <div className="hidden sm:block text-sm text-gray-500">Drag to explore · Auto plays on loop</div>
        </div>

        <div className="mt-8 space-y-6">
          <MarqueeRow direction="left" speed={40} />
          <MarqueeRow direction="right" speed={42} />
        </div>
      </div>
    </section>
  );
}
