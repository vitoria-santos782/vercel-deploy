import Image from "next/image";
import { semestres } from "../data/semestres";

export default function Timeline() {
  return (
    <section className="timeline" aria-labelledby="titulo-timeline">
      <h2 id="titulo-timeline">Trabalhos de cada semestre</h2>

      <ol className="semestres">
        {semestres.map((s) => (
          <li className="semestre" key={s.periodo}>
            <header className="semestre-topo">
              <span className="periodo">{s.periodo}</span>
              <h3>{s.titulo}</h3>
            </header>

            <ul className="trabalhos">
              {s.trabalhos.map((t) => (
                <li className="trabalho" key={t.nome}>
                  <Image
                    src={t.foto}
                    alt={`Imagem do trabalho ${t.nome}`}
                    width={480}
                    height={300}
                    unoptimized
                  />
                  <div>
                    <p className="quando">{t.data}</p>
                    <h4>{t.nome}</h4>
                    <p>{t.texto}</p>
                    <p className="techs">{t.tecnologias.join(", ")}</p>
                  </div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
