const dishes = [
  { name: "Costilla lenta", detail: "Glaseado de miel ahumada y verduras de mercado" },
  { name: "Lubina a la brasa", detail: "Aceite verde, limon tostado y sal de roca" },
  { name: "Arroz del fuego", detail: "Setas, fondo oscuro y alioli suave de ajo negro" },
];

export default function App() {
  return (
    <main className="min-h-screen bg-stone-950 text-stone-50">
      <section className="hero-plane relative isolate flex min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(19,11,5,0.92)_0%,rgba(19,11,5,0.72)_38%,rgba(19,11,5,0.20)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-stone-950 to-transparent" />

        <nav className="fade-down absolute left-0 right-0 top-0 z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-7 sm:px-10">
          <a className="font-serif text-2xl tracking-[0.22em] text-amber-100" href="#inicio">
            BRASA NORTE
          </a>
          <a
            className="hidden border border-amber-100/40 px-5 py-2 text-sm uppercase tracking-[0.22em] text-amber-100 transition hover:bg-amber-100 hover:text-stone-950 sm:inline-flex"
            href="#reservas"
          >
            Reservar
          </a>
        </nav>

        <div id="inicio" className="relative z-10 mx-auto flex w-full max-w-7xl items-center px-6 pb-20 pt-28 sm:px-10">
          <div className="max-w-3xl">
            <p className="fade-up text-sm uppercase tracking-[0.45em] text-amber-200/80">Restaurante de fuego vivo</p>
            <h1 className="fade-up mt-6 font-serif text-6xl leading-[0.92] tracking-tight text-amber-50 sm:text-7xl lg:text-8xl">
              Brasa Norte
            </h1>
            <p className="fade-up mt-8 max-w-xl text-lg leading-8 text-stone-200 sm:text-xl">
              Cocina honesta, producto local y brasas encendidas cada noche para una mesa lenta, calida y memorable.
            </p>
            <div className="fade-up mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                className="bg-amber-100 px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.25em] text-stone-950 transition hover:bg-white"
                href="#reservas"
              >
                Reservar mesa
              </a>
              <a
                className="px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.25em] text-amber-100 underline decoration-amber-100/40 underline-offset-8 transition hover:text-white"
                href="#menu"
              >
                Ver menu
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="mx-auto grid max-w-7xl gap-12 px-6 py-24 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:py-32">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-amber-300/80">Temporada actual</p>
          <h2 className="mt-5 font-serif text-4xl leading-tight text-amber-50 sm:text-5xl">Un menu corto, pensado para el humo.</h2>
        </div>
        <div className="divide-y divide-amber-100/15">
          {dishes.map((dish) => (
            <article className="group py-8 first:pt-0" key={dish.name}>
              <h3 className="font-serif text-3xl text-stone-100 transition group-hover:text-amber-200">{dish.name}</h3>
              <p className="mt-3 max-w-2xl text-stone-400">{dish.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-amber-50 px-6 py-24 text-stone-950 sm:px-10 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-4xl leading-tight sm:text-6xl">Mesa, fuego y sobremesa.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-700">
            Abrimos de martes a domingo para cenas y comidas de fin de semana. Cada servicio se cocina al momento.
          </p>
        </div>
      </section>

      <section id="reservas" className="mx-auto grid max-w-7xl gap-12 px-6 py-24 sm:px-10 lg:grid-cols-2 lg:py-32">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-amber-300/80">Reservas</p>
          <h2 className="mt-5 font-serif text-4xl leading-tight text-amber-50 sm:text-5xl">Te guardamos sitio junto a la brasa.</h2>
        </div>
        <form className="space-y-5" action="mailto:reservas@brasanorte.example" method="post" encType="text/plain">
          <label className="block">
            <span className="text-sm uppercase tracking-[0.22em] text-stone-400">Nombre</span>
            <input className="mt-3 w-full border border-amber-100/20 bg-transparent px-4 py-4 text-stone-50 outline-none transition focus:border-amber-200" name="nombre" required />
          </label>
          <label className="block">
            <span className="text-sm uppercase tracking-[0.22em] text-stone-400">Fecha y hora</span>
            <input className="mt-3 w-full border border-amber-100/20 bg-transparent px-4 py-4 text-stone-50 outline-none transition focus:border-amber-200" name="fecha" required />
          </label>
          <button className="w-full bg-amber-100 px-7 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-stone-950 transition hover:bg-white" type="submit">
            Solicitar reserva
          </button>
        </form>
      </section>
    </main>
  );
}
