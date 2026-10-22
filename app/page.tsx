import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { site, comingSoon, servizi, legale } from "@/content/site";

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="wrap row">
          <Link className="logo" href="/" aria-label={site.nome}>
            <span>{site.nome}</span>
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main>
        <div className="wrap">
          <p className="eyebrow">{comingSoon.eyebrow}</p>

          <h1>
            {comingSoon.titoloPrima}
            <em>{comingSoon.titoloEvidenziato}</em>
            {comingSoon.titoloDopo}
          </h1>

          <p className="lede">{comingSoon.descrizione}</p>

          <div className="wip">
            <span className="pulse" aria-hidden="true" />
            {comingSoon.cantiere}
          </div>

          <p className="contact">
            {comingSoon.contattoPrima}
            <a href={`mailto:${site.email}`}>{site.email}</a>
            {comingSoon.contattoDopo}
          </p>

          <div className="svc-list">
            {servizi.map((s) => (
              <div key={s.sigla} className={`svc-item ${s.classe}`}>
                <div className="sig">{s.sigla}</div>
                <p className="name">{s.nome}</p>
                <p>{s.descrizione}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="site-footer">
        <div className="wrap row">
          <div>
            <Link className="logo" href="/" style={{ width: "104px", height: "39px" }} aria-label={site.nome}>
              <span>{site.nome}</span>
            </Link>
            <p style={{ marginTop: "12px" }}>{site.sottotitolo}</p>
          </div>
          <div className="legal">
            {legale.righe.map((r) => (
              <div key={r}>{r}</div>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
