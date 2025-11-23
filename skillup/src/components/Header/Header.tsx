import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Menu from "../Menu/Menu";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import logo from '../../assets/geral/logo.png';
import { useAuth } from "../../hooks/useAuth";

export default function Header() {
  const { user, logout } = useAuth();

  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="text-[var(--cor-texto-primaria)] shadow-md relative overflow-hidden bg-[var(--cor-fundo)]">
      <div className="hidden lg:block px-6 lg:px-28 py-4">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-1">
              <img src={logo} alt="LevelUp Logo" className="h-19" />
              <span className="font-bold text-lg">
                The LevelUp
              </span>
            </Link>

            <div className="flex">
              <Menu />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-1 px-2 py-1 text-sm font-bold uppercase hover:opacity-80 transition-opacity whitespace-nowrap"
              >
                <span>IDIOMA:</span>
                <span>PT</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform ${showDropdown ? 'rotate-180' : ''}`}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              {showDropdown && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                  <button className="block w-full text-left px-4 py-2 hover: text-[var(--cor-texto-primaria)] font-bold text-sm">
                    PORTUGUÊS
                  </button>
                </div>
              )}
            </div>

            {/* User area: if user exists show name + role + logout; otherwise show link to /auth */}
            {user ? (
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="font-semibold text-sm">{user.nome}</div>
                  <div className="text-xs text-[var(--cor-texto-primaria)]/70 -mt-0.5">{user.role}</div>
                </div>

                <button
                  onClick={() => logout()}
                  className="px-3 py-1.5 border-2 border-[var(--cor-texto-primaria)] rounded-lg font-bold uppercase text-sm hover:opacity-80 transition-opacity"
                >
                  Sair
                </button>
              </div>
            ) : (
              <Link
                to="/auth"
                className="flex items-center gap-1 px-3 py-1.5 border-2 border-[var(--cor-texto-primaria)] rounded-lg font-bold uppercase text-sm "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                  <polyline points="10 17 15 12 10 7" />
                  <line x1="15" x2="3" y1="12" y2="12" />
                </svg>
                <span>ENTRAR</span>
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="lg:hidden relative z-10 px-6 py-6">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="LevelUp Logo" className="h-12" />
              <span className="font-bold text-base">
                LevelUp
              </span>
            </Link>

            <div className="flex">
              <Menu />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-1 px-2 py-1 text-sm font-bold uppercase hover:opacity-80 transition-opacity whitespace-nowrap"
              >
                <span>IDIOMA:</span>
                <span>PT</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform ${showDropdown ? 'rotate-180' : ''}`}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              {showDropdown && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-[var(--cor-texto-primaria)] font-bold text-base">
                    PORTUGUÊS
                  </button>
                </div>
              )}
            </div>

            {user ? (
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="font-semibold text-sm">{user.nome}</div>
                  <div className="text-xs text-[var(--cor-texto-primaria)]/70 -mt-0.5">{user.role}</div>
                </div>

                <button
                  onClick={() => logout()}
                  className="px-3 py-1.5 border-2 border-[var(--cor-texto-primaria)] rounded-lg font-bold uppercase text-sm hover:opacity-80 transition-opacity"
                >
                  Sair
                </button>
              </div>
            ) : (
              <Link
                to="/auth"
                className="flex items-center gap-1 px-3 py-1.5 border-2 border-[var(--cor-texto-primaria)] rounded-lg font-bold uppercase text-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                  <polyline points="10 17 15 12 10 7" />
                  <line x1="15" x2="3" y1="12" y2="12" />
                </svg>
                <span>ENTRAR</span>
              </Link>
            )}
          </div>
        </div>

        <div className="text-center py-4">
          <p className="font-bold text-3xl text-[var(--cor-texto-primaria)] mb-6">
            Aprenda mais rápido com as<br />melhores aulas de idiomas.
          </p>

          <div className="flex flex-col gap-3 justify-center items-center max-w-md mx-auto">
            <Link to="/carreira" className="w-full">
              <button className="w-full px-8 py-3 bg-[var(--cor-destaque)] text-white font-bold rounded-full hover:opacity-90 transition-opacity text-base">
                COMECE AGORA
              </button>
            </Link>

            <Link to="/auth" className="w-full">
              <button className="w-full px-8 py-3 bg-white text-[var(--cor-destaque)] font-bold rounded-full hover:bg-gray-100 transition-colors text-base">
                JÁ TENHO UMA CONTA
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}