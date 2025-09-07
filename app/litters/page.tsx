export const revalidate = 60;

export default function LittersPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl md:text-3xl font-semibold">Aktuálny vrh</h1>
      <p className="text-gray-700">Tu bude info o aktuálnom/plánovanom vrhu. (Placeholder)</p>
      <div className="rounded-xl border p-6 bg-white">
        <div className="text-sm text-gray-600">Zatiaľ žiadne dáta.</div>
      </div>
    </section>
  );
}
