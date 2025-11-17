const products = [
  {
    id: 1,
    name: "Royal Repair Shampoo",
    price: 28,
    desc: "Strengthens and restores with keratin and argan oil.",
    image:
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=1740&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Velvet Silk Conditioner",
    price: 30,
    desc: "Ultra-smooth hydration for frizz-free softness.",
    image:
      "https://images.unsplash.com/photo-1618077360395-f3068be8e001?q=80&w=1740&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Auric Shine Serum",
    price: 32,
    desc: "Weightless gloss with heat protection up to 450°F.",
    image:
      "https://images.unsplash.com/photo-1611930021800-0bf4fdb3db64?q=80&w=1740&auto=format&fit=crop",
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Bestsellers</h2>
            <p className="text-zinc-300 mt-2">Our most-loved essentials for everyday luxury.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-full border border-yellow-400/40 text-yellow-300 px-5 py-2 hover:bg-yellow-400/10 transition">Wholesale</a>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <article key={p.id} className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/10">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg">{p.name}</h3>
                <p className="text-zinc-400 text-sm mt-1">{p.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-yellow-300 font-semibold">${p.price}</span>
                  <button className="rounded-full bg-gradient-to-r from-yellow-500 to-amber-400 text-black font-semibold px-4 py-2 text-sm shadow-[0_0_0_1px_rgba(255,215,0,0.6)_inset] hover:opacity-90 transition">Add to cart</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
