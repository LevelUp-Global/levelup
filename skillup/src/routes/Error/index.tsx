import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Error() {
  useEffect(() => {
    document.title = "404 - Página não encontrada";
  }, []);

  return (
    <>

      <main
        className="
          flex flex-col items-center justify-center
          min-h-screen bg-[var(--cor-primaria-clara)]
          text-center text-[var(--cor-texto-primaria)]
          "
      >
        <section className="max-w-xl bg-[var(--cor-primaria-clara)] backdrop-blur-sm p-10 rounded-2xl shadow-lg">
          <h1
            className="
              text-[8rem] md:text-[10rem] font-extrabold
              leading-none text-[var(--cor-texto-primaria)] drop-shadow-lg
            "
          >
            404
          </h1>
          <h2
            className="
              mt-4 text-3xl md:text-4xl font-bold
              text-[var(--cor-texto-primaria)] drop-shadow
            "
          >
            Página Não Encontrada
          </h2>
          <p className="mt-6 text-base md:text-lg text-[var(--cor-texto-secundario)]">
            Oops! A página que você procura não existe ou foi movida.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/"
              className="
                inline-block px-8 py-3 bg-[var(--cor-primaria-clara)] text-[var(--cor-primaria)] 
                font-semibold rounded-[var(--raio-borda-nav)]
              "
            >
              Voltar à Página Inicial
            </Link>
          </div>
        </section>
      </main>

    </>
  );
}