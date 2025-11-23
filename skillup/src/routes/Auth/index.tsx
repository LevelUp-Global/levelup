import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useToast } from "../../contexts/ToastContext";

export default function AuthPage() {
  const { login, register, loading } = useAuth();
  const navigate = useNavigate();
  const toast = useToast();

  const [mode, setMode] = useState<"login" | "register">("login");

  // shared
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // register
  const [nome, setNome] = useState("");
  const [isProfessor, setIsProfessor] = useState(false);
  const [plano, setPlano] = useState("");
  const [especialidade, setEspecialidade] = useState("");

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const planoFromUrl = searchParams.get("plano");
    if (planoFromUrl) {
      setPlano(planoFromUrl);
    }
  }, [searchParams]);
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!email.trim() || !senha.trim()) {
      const msg = "Preencha e-mail e senha.";
      setError(msg);
      toast.error(msg);
      return;
    }

    try {
      await login(email.trim(), senha.trim(), isProfessor);
      toast.success("Login efetuado com sucesso!");
      navigate("/");
    } catch (err: any) {
      const msg = err?.message ?? "Erro ao fazer login";
      setError(msg);
      toast.error(msg);
    }
  }

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!nome.trim() || !email.trim() || !senha.trim()) {
      const msg = "Por favor preencha nome, e-mail e senha.";
      setError(msg);
      toast.error(msg);
      return;
    }

    try {
      await register({
        nome: nome.trim(),
        email: email.trim(),
        senha: senha.trim(),
        isProfessor,
        plano: !isProfessor ? plano : undefined,
        especialidade: isProfessor ? especialidade.trim() : undefined,
      });
      toast.success("Conta criada com sucesso!");
      navigate("/");
    } catch (err: any) {
      const msg = err?.message ?? "Erro ao cadastrar";
      setError(msg);
      toast.error(msg);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-[var(--cor-primaria-clara)]">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-extrabold text-[var(--cor-texto-primaria)]">
                {mode === "login" ? "Login" : "Criar Conta"}
              </h1>
              <p className="text-sm text-[var(--cor-texto-primaria)]/70 mt-1">
                {mode === "login"
                  ? "Bem-vindo de volta!"
                  : "Preencha os campos para se cadastrar."}
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setMode("login")}
                className={`px-4 py-2 rounded-md font-semibold text-sm ${
                  mode === "login"
                    ? "bg-[var(--cor-texto-primaria)] text-[var(--cor-texto-principal)]"
                    : "bg-[var(--cor-texto-primaria)]/5 text-[var(--cor-texto-primaria)]"
                }`}
              >
                Entrar
              </button>
              <button
                onClick={() => setMode("register")}
                className={`px-4 py-2 rounded-md font-semibold text-sm ${
                  mode === "register"
                    ? "bg-[var(--cor-texto-primaria)] text-[var(--cor-texto-principal)]"
                    : "bg-[var(--cor-texto-primaria)]/5 text-[var(--cor-texto-primaria)]"
                }`}
              >
                Cadastrar
              </button>
            </div>
          </div>

          {/* Error */}
          {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

          {/* Forms */}
          {mode === "login" ? (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[var(--cor-texto-primaria)] mb-2">E-mail</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-md focus:ring-0 focus:outline-none"
                  placeholder="Digite seu e-mail"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--cor-texto-primaria)] mb-2">Senha</label>
                <input
                  type="password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-md focus:ring-0 focus:outline-none"
                  placeholder="Digite a sua senha"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-[var(--cor-texto-primaria)]">
                  <input
                    type="checkbox"
                    checked={isProfessor}
                    onChange={() => setIsProfessor(!isProfessor)}
                    className="h-4 w-4"
                  />
                  Entrar como professor
                </label>

                <button
                  type="button"
                  onClick={() => setMode("register")}
                  className="text-sm underline text-[var(--cor-texto-primaria)]/70"
                >
                  Não possui uma conta?
                </button>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 py-3 rounded-md bg-[var(--cor-texto-primaria)] text-[var(--cor-texto-principal)] font-semibold hover:opacity-90 disabled:opacity-60"
              >
                {loading ? "Carregando..." : "Entrar"}
              </button>
            </form>
          ) : (
            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[var(--cor-texto-primaria)] mb-2">Nome Completo</label>
                <input
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-md focus:ring-0 focus:outline-none"
                  placeholder="Seu nome completo"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--cor-texto-primaria)] mb-2">E-mail</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-md focus:ring-0 focus:outline-none"
                  placeholder="seu.email@exemplo.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--cor-texto-primaria)] mb-2">Senha</label>
                <input
                  type="password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-md focus:ring-0 focus:outline-none"
                  placeholder="Mínimo 6 caracteres"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-[var(--cor-texto-primaria)]">
                  <input
                    type="checkbox"
                    checked={isProfessor}
                    onChange={() => setIsProfessor(!isProfessor)}
                    className="h-4 w-4"
                  />
                  Registrar como professor
                </label>

                <button
                  type="button"
                  onClick={() => setMode("login")}
                  className="text-sm underline text-[var(--cor-texto-primaria)]/70"
                >
                  Já possui uma conta?
                </button>
              </div>

              {isProfessor && (
                <div>
                  <label className="block text-sm font-medium text-[var(--cor-texto-primaria)] mb-2">Especialidade</label>
                  <input
                    type="text"
                    value={especialidade}
                    onChange={(e) => setEspecialidade(e.target.value)}
                    className="w-full p-3 border border-gray-200 rounded-md focus:ring-0 focus:outline-none"
                    placeholder="Ex: AWS, Data, IA..."
                  />
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 py-3 rounded-md bg-[var(--cor-texto-primaria)] text-[var(--cor-texto-principal)] font-semibold hover:opacity-90 disabled:opacity-60"
              >
                {loading ? "Criando..." : "Criar conta"}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}