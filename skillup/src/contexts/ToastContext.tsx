
import React, { createContext, useCallback, useContext, useState } from "react";

type ToastKind = "success" | "error" | "info";

type Toast = {
  id: string;
  kind: ToastKind;
  message: string;
};

type ToastContextType = {
  success: (msg: string) => void;
  error: (msg: string) => void;
  info: (msg: string) => void;
};

const ToastContext = createContext<ToastContextType>({
  success: () => {},
  error: () => {},
  info: () => {},
});

export function useToast() {
  return useContext(ToastContext);
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const push = useCallback((kind: ToastKind, message: string) => {
    const id = Math.random().toString(36).slice(2, 9);
    const t: Toast = { id, kind, message };
    setToasts((s) => [t, ...s]);
    // auto remove
    setTimeout(() => {
      setToasts((s) => s.filter((x) => x.id !== id));
    }, 4500);
  }, []);

  const api = {
    success: (msg: string) => push("success", msg),
    error: (msg: string) => push("error", msg),
    info: (msg: string) => push("info", msg),
  };

  return (
    <ToastContext.Provider value={api}>
      {children}
      <div className="fixed top-6 right-6 z-[9999] flex flex-col gap-3">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={
              "max-w-sm w-full rounded-lg shadow-lg p-3 text-sm font-medium " +
              (t.kind === "success"
                ? "bg-green-50 text-green-800 border border-green-100"
                : t.kind === "error"
                ? "bg-red-50 text-red-800 border border-red-100"
                : "bg-blue-50 text-blue-800 border border-blue-100")
            }
            role="status"
            aria-live="polite"
          >
            {t.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}