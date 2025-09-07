import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cane Corso – Chovná stanica",
  description: "Oficiálna webová stránka chovnej stanice Cane Corso",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sk">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)]`}
      >
        {/* HLAVIČKA */}
        <header className="sticky top-0 z-50 border-b border-black/10 bg-[color:rgba(255,255,255,0.8)] dark:bg-[color:rgba(10,10,10,0.8)] backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Cane Corso – Chovná stanica"
                width={140}
                height={140}
                className="h-20 w-auto"
                priority
              />
              <span className="sr-only">Cane Corso – Chovná stanica</span>
            </Link>

            {/* Desktop menu */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
              <Link className="hover:text-[var(--accent)] transition" href="/">Domov</Link>
              <Link className="hover:text-[var(--accent)] transition" href="/dogs">Psy</Link>
              <Link
                className="text-[var(--accent)] hover:opacity-90 transition font-semibold"
                href="/litters"
              >
                Aktuálny vrh
              </Link>
              <Link className="hover:text-[var(--accent)] transition" href="/about">O nás</Link>
              <Link className="hover:text-[var(--accent)] transition" href="/contact">Kontakt</Link>
            </nav>

            {/* Mobile hamburger (bez JS) */}
            <details className="md:hidden relative">
              <summary
                className="list-none select-none cursor-pointer rounded-lg border border-black/10 px-3 py-2 text-sm"
                aria-label="Otvoriť menu"
              >
                ☰
              </summary>
              <div className="absolute right-0 mt-2 w-56 rounded-xl border border-black/10 bg-[var(--background)] shadow-lg p-2 flex flex-col text-sm">
                <Link className="rounded-lg px-3 py-2 hover:text-[var(--accent)]" href="/">Domov</Link>
                <Link className="rounded-lg px-3 py-2 hover:text-[var(--accent)]" href="/dogs">Psy</Link>
                <Link className="rounded-lg px-3 py-2 text-[var(--accent)] font-semibold" href="/litters">
                  Aktuálny vrh
                </Link>
                <Link className="rounded-lg px-3 py-2 hover:text-[var(--accent)]" href="/about">O nás</Link>
                <Link className="rounded-lg px-3 py-2 hover:text-[var(--accent)]" href="/contact">Kontakt</Link>
              </div>
            </details>
          </div>
        </header>

        {/* OBSAH */}
        <main className="flex-1 mx-auto max-w-6xl w-full px-4 py-10">
          {children}
        </main>

        {/* PÄTIČKA */}
        <footer className="border-t border-black/10">
          <div className="mx-auto max-w-6xl px-4 py-6 text-sm/relaxed text-[color:rgba(0,0,0,0.6)] dark:text-[color:rgba(255,255,255,0.6)]">
            © {new Date().getFullYear()} Adam Macko
          </div>
        </footer>
      </body>
    </html>
  );
}
