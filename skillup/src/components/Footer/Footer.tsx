
export default function Footer() {
  const currentYear = new Date().getFullYear();
 
    return (
    <footer
    className="
        border-t border-gray-200 shadow-inner
        py-4 sm:py-6 lg:py-10 bg-[var(--cor-fundo)]
      "
      >
        
      <div
      className="
          max-w-7xl mx-auto px-3 sm:px-6 lg:px-8
          flex flex-col lg:flex-row items-center justify-between gap-3 sm:gap-4 lg:gap-2
          text-center lg:text-left"
        >

        <nav
          aria-label="Links institucionais"
          className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 text-xs sm:text-sm lg:text-base font-bold text-[var(--cor-texto-primaria)]"
        >
          <a href="/sobre" className="hover:opacity-80 transition-colors">
            Sobre
          </a>
          <span className="hidden lg:inline">|</span>
          <a href="/faq" className="hover:opacity-80 transition-colors">
            Termos
          </a>
          <span className="hidden lg:inline">|</span>
          <a href="/faq" className="hover:opacity-80 transition-colors">
            Privacidade
          </a>
          <span className="hidden lg:inline">|</span>
          <a href="/integrantes" className="hover:opacity-80 transition-colors">
            Trabalhe conosco
          </a>
        </nav>

        <p className="text-xs sm:text-sm lg:text-base font-bold text-[var(--cor-texto-primaria)] mt-2 lg:mt-0">
          © {currentYear} <strong>LevelUp</strong> | Global Solutions
        </p>

      </div>
    
    </footer>
  );
}