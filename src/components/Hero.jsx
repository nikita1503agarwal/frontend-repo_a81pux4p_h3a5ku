export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-500/10 via-black to-black" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight">
              Luxury Hair Care
              <span className="block bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">for Every Crown</span>
            </h1>
            <p className="mt-6 text-lg text-zinc-300 max-w-xl">
              Elevate your routine with salon-grade formulas crafted to nourish, protect, and shine. Black and gold elegance, inside and out.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#products" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-500 to-amber-400 text-black font-semibold px-6 py-3 shadow-[0_0_0_1px_rgba(255,215,0,0.6)_inset] hover:opacity-90 transition">
                Shop Bestsellers
              </a>
              <a href="#about" className="inline-flex items-center justify-center rounded-full border border-yellow-400/40 text-yellow-300 px-6 py-3 hover:bg-yellow-400/10 transition">
                Our Promise
              </a>
            </div>
          </div>
          <div className="relative h-[420px] sm:h-[520px] lg:h-[560px]">
            <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-tr from-yellow-500/20 to-amber-300/10 blur-2xl" />
            <div className="relative h-full rounded-[28px] bg-[linear-gradient(135deg,_#111_0%,_#0a0a0a_60%,_#1a1a1a_100%)] border border-white/10 shadow-xl overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMzMDU0MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
              <div className="relative p-8 sm:p-10 flex flex-col justify-end h-full">
                <h3 className="text-2xl font-semibold">Gold Standard Shine</h3>
                <p className="text-zinc-300 mt-2">Rich oils and active botanicals that love your hair back.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
