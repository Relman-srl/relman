"use client";

/**
 * Interruttore tema chiaro/scuro.
 * Finché l'utente non sceglie, il sito segue il tema di sistema (CSS).
 * Alla prima scelta scriviamo data-theme sull'<html> e lo ricordiamo.
 */
export default function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const sysDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const now = root.getAttribute("data-theme") ?? (sysDark ? "dark" : "light");
    const next = now === "dark" ? "light" : "dark";

    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("relman-theme", next);
    } catch {
      /* storage non disponibile: il tema resta valido per questa visita */
    }
  }

  return (
    <button
      type="button"
      className="theme-btn"
      onClick={toggle}
      aria-label="Cambia tema chiaro o scuro"
    >
      <svg className="sun" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="4.2" />
        <path d="M12 2.5v2.4M12 19.1v2.4M4.2 4.2l1.7 1.7M18.1 18.1l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.2 19.8l1.7-1.7M18.1 5.9l1.7-1.7" />
      </svg>
      <svg className="moon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.5 14.3A8.6 8.6 0 0 1 9.7 3.5a8.6 8.6 0 1 0 10.8 10.8z" />
      </svg>
    </button>
  );
}
