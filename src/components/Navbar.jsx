import { Menu, X, ShoppingBag } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Products", href: "#products" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/50 bg-black/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-yellow-500 to-amber-400 ring-2 ring-yellow-300" />
            <span className="text-lg font-semibold tracking-wide text-white">Aurelia Hair</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-zinc-200 hover:text-yellow-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-500 to-amber-400 text-black font-semibold px-4 py-2 shadow-[0_0_0_1px_rgba(255,215,0,0.6)_inset] hover:opacity-90 transition"
            >
              <ShoppingBag size={18} /> Shop
            </a>
          </nav>

          <button
            className="md:hidden text-white"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-zinc-200 hover:text-yellow-400 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#products"
                onClick={() => setOpen(false)}
                className="inline-flex w-max items-center gap-2 rounded-full bg-gradient-to-r from-yellow-500 to-amber-400 text-black font-semibold px-4 py-2 shadow-[0_0_0_1px_rgba(255,215,0,0.6)_inset] hover:opacity-90 transition"
              >
                <ShoppingBag size={18} /> Shop
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
