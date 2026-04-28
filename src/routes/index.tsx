import { createFileRoute } from "@tanstack/react-router";
import heroCoffee from "@/assets/hero-coffee.jpg";
import cinnamonRoll from "@/assets/cinnamon-roll.jpg";
import avocadoToast from "@/assets/avocado-toast.jpg";
import salmonPlate from "@/assets/salmon-plate.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FIKA Specialty Coffee & Brunch — Granada" },
      {
        name: "description",
        content:
          "Cafetería de especialidad y brunch en Granada. Café excepcional, rollos de canela artesanos, tostadas y un ambiente nórdico acogedor.",
      },
      { property: "og:title", content: "FIKA Specialty Coffee & Brunch" },
      {
        property: "og:description",
        content:
          "Cafetería de especialidad y brunch en Granada. Café, dulces y brunch en un espacio nórdico.",
      },
    ],
  }),
  component: Index,
});

const menu = [
  {
    name: "Rollo de canela",
    desc: "Nuestra obsesión nórdica. Masa enrollada a mano, mantequilla noruega y cardamomo.",
    price: "3,80 €",
    img: cinnamonRoll,
  },
  {
    name: "Tostada de aguacate & cecina",
    desc: "Pan de masa madre tostado, aguacate maduro, cecina de León y aceite de oliva virgen extra.",
    price: "7,50 €",
    img: avocadoToast,
  },
  {
    name: "Plato de salmón ahumado",
    desc: "Salmón curado en casa, alcaparras, eneldo fresco y tostas de centeno.",
    price: "9,90 €",
    img: salmonPlate,
  },
];

const reviews = [
  {
    name: "Yasim Zouini",
    text:
      "Sitio muy limpio y bonito. El café, de los mejores que he probado en mi vida. Sin duda muy buena experiencia, lo recomiendo.",
    when: "Hace 3 semanas",
  },
  {
    name: "Julieta Mamana",
    text:
      "Un café exquisito, el banana bread húmedo y delicioso, atención súper amable y un ambiente acogedor y relajante.",
    when: "Hace 6 meses",
  },
  {
    name: "Luisa",
    text:
      "Un descubrimiento. Los chicos son súper atentos, las tostadas increíbles y el café impresionante. Hasta el chai latte me sorprendió.",
    when: "Hace 4 meses",
  },
  {
    name: "Luis David García",
    text:
      "Muy buena cafetería con un ambiente tranquilo y nórdico. El rollo de canela, una locura. Merece la pena.",
    when: "Hace un año",
  },
];

function Star() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-accent" aria-hidden>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="font-display text-2xl tracking-tight text-primary-foreground mix-blend-difference">
            fika.
          </div>
          <nav className="hidden gap-8 text-sm text-primary-foreground mix-blend-difference md:flex">
            <a href="#menu" className="hover:opacity-70">Menú</a>
            <a href="#reseñas" className="hover:opacity-70">Reseñas</a>
            <a href="#visitanos" className="hover:opacity-70">Visítanos</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroCoffee}
          alt="Barista preparando un café de especialidad en FIKA"
          width={1600}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/40 via-espresso/20 to-background" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-6 pb-20 pt-40">
          <div className="fika-fade-up max-w-2xl">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-cream/90">
              Granada · Specialty coffee & brunch
            </p>
            <h1 className="text-5xl leading-[0.95] text-cream md:text-7xl lg:text-8xl">
              Un pequeño<br />
              <em className="italic text-accent">ritual</em> nórdico<br />
              en cada taza.
            </h1>
            <p className="mt-8 max-w-md text-base text-cream/85">
              Café de especialidad, brunch lento y bollería recién hecha.
              Pásate, quédate, tómate tu tiempo. Eso es <em className="not-italic font-medium">fika</em>.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#menu"
                className="rounded-full bg-cream px-7 py-3.5 text-sm font-medium text-espresso transition hover:bg-accent hover:text-accent-foreground"
              >
                Ver el menú
              </a>
              <a
                href="#visitanos"
                className="rounded-full border border-cream/40 px-7 py-3.5 text-sm font-medium text-cream transition hover:bg-cream/10"
              >
                Cómo llegar
              </a>
            </div>
            <div className="mt-12 flex items-center gap-3 text-cream/90">
              <div className="flex">{Array.from({ length: 5 }).map((_, i) => <Star key={i} />)}</div>
              <span className="text-sm">4,5 · 334 reseñas en Google</span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro / about strip */}
      <section className="border-y border-border bg-cream">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-accent">Qué es fika</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Una pausa que sabe a casa.</h2>
          </div>
          <p className="text-base leading-relaxed text-muted-foreground md:col-span-2">
            En sueco, <em>fika</em> es ese momento del día en el que paras, te
            sientas y disfrutas de un buen café acompañado de algo dulce. Eso es
            justo lo que servimos: granos tostados con mimo, brunch de temporada
            y un espacio sereno y luminoso en pleno corazón de Granada.
          </p>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-accent">Menú</p>
            <h2 className="mt-3 max-w-xl text-4xl md:text-6xl">Lo que más nos piden.</h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Carta corta, ingredientes locales y café de tueste propio. Cambia
            con la temporada — pregunta por las novedades del día.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {menu.map((item) => (
            <article key={item.name} className="group">
              <div className="aspect-[4/5] overflow-hidden rounded-md bg-muted">
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h3 className="text-xl">{item.name}</h3>
                <span className="font-display text-lg italic text-accent">{item.price}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section id="reseñas" className="bg-espresso text-cream">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-accent">Reseñas</p>
              <h2 className="mt-3 max-w-2xl text-4xl text-cream md:text-6xl">
                Lo que dicen los que ya<br /> han parado a tomar un café.
              </h2>
            </div>
            <div className="flex items-center gap-4 rounded-full border border-cream/20 px-5 py-3">
              <span className="font-display text-3xl text-accent">4,5</span>
              <div>
                <div className="flex">{Array.from({ length: 5 }).map((_, i) => <Star key={i} />)}</div>
                <p className="mt-1 text-xs text-cream/70">334 reseñas en Google</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {reviews.map((r) => (
              <figure
                key={r.name}
                className="rounded-lg border border-cream/10 bg-cream/5 p-8 backdrop-blur"
              >
                <div className="flex">{Array.from({ length: 5 }).map((_, i) => <Star key={i} />)}</div>
                <blockquote className="mt-5 font-display text-xl leading-snug text-cream md:text-2xl">
                  “{r.text}”
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-between text-sm text-cream/70">
                  <span className="font-medium text-cream">{r.name}</span>
                  <span>{r.when}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Visit */}
      <section id="visitanos" className="bg-cream">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-2 md:py-32">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-accent">Visítanos</p>
            <h2 className="mt-3 text-4xl md:text-6xl">Te esperamos<br /> en Granada.</h2>
            <p className="mt-6 max-w-md text-muted-foreground">
              Pasa a desayunar, a por el café de media mañana o a merendar.
              Sin reservas, sin prisa.
            </p>
            <a
              href="https://www.google.com/maps/search/FIKA+Specialty+Coffee+Granada"
              target="_blank"
              rel="noopener"
              className="mt-10 inline-flex rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition hover:bg-accent hover:text-accent-foreground"
            >
              Cómo llegar →
            </a>
          </div>

          <dl className="grid grid-cols-2 gap-x-6 gap-y-10 self-center">
            <div className="col-span-2 border-t border-border pt-6">
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Dirección</dt>
              <dd className="mt-2 font-display text-2xl">Granada, España</dd>
            </div>
            <div className="border-t border-border pt-6">
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Horario</dt>
              <dd className="mt-2 text-base">Lun – Vie<br /> 8:30 – 17:00</dd>
            </div>
            <div className="border-t border-border pt-6">
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Fin de semana</dt>
              <dd className="mt-2 text-base">Sáb – Dom<br /> 9:00 – 18:00</dd>
            </div>
            <div className="border-t border-border pt-6">
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Precio</dt>
              <dd className="mt-2 text-base">1 – 10 €</dd>
            </div>
            <div className="border-t border-border pt-6">
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Tipo</dt>
              <dd className="mt-2 text-base">Cafetería de especialidad</dd>
            </div>
          </dl>
        </div>
      </section>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 md:flex-row">
          <div className="font-display text-xl">fika.</div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} FIKA Specialty Coffee & Brunch · Granada
          </p>
        </div>
      </footer>
    </main>
  );
}
