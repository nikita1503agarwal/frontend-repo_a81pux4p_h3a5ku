export default function About() {
  return (
    <section id="about" className="relative bg-black text-white py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-300/10 via-black to-black" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold">Our Promise</h2>
        <p className="text-zinc-300 mt-4 leading-relaxed">
          We craft high-performance haircare with clean, consciously sourced ingredients. Every formula is tested for salon-grade results and packaged with a commitment to sustainability. Luxe experience, responsible beauty.
        </p>
        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          {[
            { title: "Clean & Effective", text: "No parabens, sulfates, or silicones that weigh you down." },
            { title: "Cruelty-Free", text: "Never tested on animals, ever." },
            { title: "Recyclable", text: "Thoughtful packaging with minimal waste." },
          ].map((f) => (
            <div key={f.title} className="rounded-xl border border-white/10 bg-zinc-900 p-6">
              <h3 className="font-semibold text-yellow-300">{f.title}</h3>
              <p className="text-zinc-400 mt-2 text-sm">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
