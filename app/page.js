import Contador from "../components/Contador";
import Timeline from "../components/Timeline";

export default function Home() {
  return (
    <main>
      <Contador />
      <Timeline />
      <footer className="rodape">
        <p>vercel-deploy · Next.js publicado na Vercel</p>
      </footer>
    </main>
  );
}
