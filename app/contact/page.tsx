export default function ContactPage() {
  return (
    <section className="max-w-3xl space-y-6">
      <h1 className="text-2xl md:text-3xl font-semibold">Kontakt</h1>
      <p>📍 Adresa: </p>
      <p>✉️ Email: <a className="underline" href="mailto:info@canecorso.chs"></a></p>
      <p>📞 Tel.: </p>

      {/* Google mapa */}
      <div className="rounded-xl overflow-hidden border">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83260.7849940453!2d21.84479483113004!3d49.29724630736631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473c1c607a47e3d7%3A0x400f7d1c69740c0!2s068%2001%20Medzilaborce!5e0!3m2!1ssk!2ssk!4v1757263553056!5m2!1ssk!2ssk"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
