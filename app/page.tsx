import Link from "next/link";

export default function Home() {
  return (
    <section className="space-y-12">
      {/* Hero sekcia */}
      <div className="relative overflow-hidden rounded-2xl bg-[var(--background)] text-center border p-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--foreground)]">
          Cane Corso – Chovná stanica
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300">
          Spojenie krásy, zdravia a vyrovnanej povahy. Objavte našich psov a
          šteniatka.
        </p>
        <div className="mt-6">
          <Link
            href="/dogs"
            className="inline-block bg-[var(--accent)] text-white font-semibold px-6 py-3 rounded-lg shadow hover:opacity-90 transition"
          >
            Naše psy →
          </Link>
        </div>
      </div>

      {/* Tri karty */}
      <div className="grid gap-6 md:grid-cols-3">
        <Link
          href="/dogs"
          className="rounded-2xl border p-6 hover:shadow-lg transition bg-[var(--background)]"
        >
          <h2 className="font-semibold text-xl mb-2">🐾 Psy</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Prezrite si našich chovných jedincov a fotky.
          </p>
        </Link>
        <Link
          href="/about"
          className="rounded-2xl border p-6 hover:shadow-lg transition bg-[var(--background)]"
        >
          <h2 className="font-semibold text-xl mb-2">ℹ️ O nás</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Kto sme, aká je naša filozofia a čo nás motivuje.
          </p>
        </Link>
        <Link
          href="/contact"
          className="rounded-2xl border p-6 hover:shadow-lg transition bg-[var(--background)]"
        >
          <h2 className="font-semibold text-xl mb-2">✉️ Kontakt</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Chcete šteniatko? Alebo sa len niečo spýtať?
          </p>
        </Link>
      </div>
    </section>
  );
}
