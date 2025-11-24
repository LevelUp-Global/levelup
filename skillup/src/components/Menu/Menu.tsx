
import { NavLink } from "react-router-dom";

const navLinks = [
  { path: '/', label: 'HOME' },
  { path: '/integrantes', label: 'INTEGRANTES' },
  { path: '/faq', label: 'FAQ' },
  { path: '/carreira', label: 'CARREIRAS' },
  { path: '/planos', label: 'PLANOS' },
  { path: '/sobre', label: 'SOBRE' },
];

export default function Menu() {
  const baseLinkClasses = `
    inline-block py-1 px-2 sm:py-2 sm:px-3 lg:px-5
    text-xs sm:text-sm lg:text-base font-bold text-[var(--cor-texto-primaria)]
    transition-all duration-300 ease-in-out
    hover:opacity-80 
  `;

  const activeLinkClasses = `
    font-bold text-[var(--cor-texto-primaria)] border-b-2 border-[var(--cor-texto-primaria)]
  `;

  return (
    <nav
      aria-label="Menu principal"
      className="flex justify-center items-center"
    >
      <ul
        className="
          flex flex-wrap items-center justify-center
          gap-0.5 sm:gap-1 lg:gap-3
          text-center
        "
      >
        {navLinks.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `${baseLinkClasses} ${isActive ? activeLinkClasses : ""}`
              }
              end={link.path === '/'}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}