export default function Contact() {
  return (
    <section id="contact" className="bg-black text-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-zinc-900 p-8">
          <h2 className="text-3xl sm:text-4xl font-bold">Get in touch</h2>
          <p className="text-zinc-300 mt-2">Questions about products or wholesale? We’d love to help.</p>

          <form className="mt-8 grid sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm text-zinc-400">Name</label>
              <input className="rounded-lg bg-black/40 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400/40" placeholder="Your name" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-zinc-400">Email</label>
              <input type="email" className="rounded-lg bg-black/40 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400/40" placeholder="you@example.com" />
            </div>
            <div className="sm:col-span-2 flex flex-col gap-2">
              <label className="text-sm text-zinc-400">Message</label>
              <textarea rows={5} className="rounded-lg bg-black/40 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400/40" placeholder="How can we help?" />
            </div>
            <div className="sm:col-span-2">
              <button type="button" className="rounded-full bg-gradient-to-r from-yellow-500 to-amber-400 text-black font-semibold px-6 py-3 shadow-[0_0_0_1px_rgba(255,215,0,0.6)_inset] hover:opacity-90 transition">Send message</button>
            </div>
          </form>
        </div>
        <p className="text-center text-zinc-500 text-sm mt-6">© {new Date().getFullYear()} Aurelia Hair. All rights reserved.</p>
      </div>
    </section>
  );
}
