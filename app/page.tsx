import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] px-6 text-center">
      {/* Background Glow */}
      <div className="absolute top-0 -z-10 h-full w-full bg-white dark:bg-neutral-950">
        <div className="absolute bottom-auto left-1/2 right-auto top-0 h-[500px] w-[500px] -translate-x-[50%] translate-y-[20%] rounded-full bg-[rgba(59,130,246,0.15)] blur-[80px]"></div>
      </div>

      {/* Hero Section */}
      <div className="max-w-3xl">
        <h1 className="text-6xl font-extrabold tracking-tight sm:text-7xl mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-500 dark:from-white dark:to-neutral-400">
          Apex Pathing
        </h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-10 leading-relaxed">
          The ultimate motion profiling and pathing library for FTC teams. <br className="hidden md:block" /> 
          Achieve smooth, reliable, and high-speed autonomous movement.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-20">
          <Link href="/github-readme" className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20">
            Get Started
          </Link>
          <a href="https://github.com/ApexPathing/main.git" target="_blank" className="px-8 py-3 rounded-full border border-neutral-200 dark:border-neutral-800 font-medium hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all">
            View on GitHub →
          </a>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
        <FeatureCard 
          emoji="🚀" 
          title="Fast" 
          desc="Optimized for quick calculation and low latency." 
        />
        <FeatureCard 
          emoji="🎯" 
          title="Accurate" 
          desc="High-precision PIDF and feedforward control." 
        />
        <FeatureCard 
          emoji="🛠️" 
          title="Simple" 
          desc="Easy to use API with comprehensive tuners." 
        />
      </div>

      <footer className="mt-24 pb-10 text-neutral-500 text-sm">
        MIT 2026 © ApexPathing
      </footer>
    </div>
  )
}

function FeatureCard({ emoji, title, desc }: { emoji: string, title: string, desc: string }) {
  return (
    <div className="p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm text-left hover:border-blue-500/50 transition-colors">
      <div className="text-3xl mb-4">{emoji}</div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}
