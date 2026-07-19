import { useState } from "react";
import { Mensaje } from "./components/Mensaje";
import { Cargando } from "./components/Cargando";
import { EntradaTexto } from "./components/EntradaTexto";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

function App() {
  const [mensajes, setMensajes] = useState([]);
  const [cargando, setCargando] = useState(false);

  async function preguntar(pregunta) {
    setMensajes((prev) => [...prev, { rol: "usuario", texto: pregunta }]);
    setCargando(true);

    try {
      const res = await fetch(`${API_URL}/ask`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: pregunta }),
      });
      if (!res.ok) throw new Error("respuesta no ok");
      const data = await res.json();
      setMensajes((prev) => [...prev, { rol: "agente", texto: data.answer, fuentes: data.sources }]);
    } catch {
      setMensajes((prev) => [...prev, { rol: "agente", texto: "No se puede establecer conexión con el agente.", fuentes: [] }]);
    } finally {
      setCargando(false);
    }
  }

  return (
    <>
      <div className="d-flex flex-column vh-100 bg-black text-white">
        <header className="d-flex align-items-center gap-2 px-4 py-3 border-buttom border-secondary bg-dark ">
          <div
            className="d-flex align-items-center justify-content-center fw-bold text-dark rounded">
            SP
          </div>
          <span className="fw-semibold" style={{ fontSize: "0.9rem" }}>
            pegasus-agent <span className="text-muted fw-normal">/ base-conocimiento-interna</span>
          </span>
        </header>

        <div className="flex-grow-1 overflow-auto p-4">
          <div className="mx-auto" style={{ maxWidth: "680px" }}>
            {mensajes.length === 0 && (
              <p className="text-center mt-5 text-white" style={{ fontSize: "0.85rem" }}>
                Empieza a preguntar.
              </p>
            )}
            {mensajes.map((m, i) => (
              <Mensaje key={i} {...m} />
            ))}
            {cargando && <Cargando />}
          </div>
        </div>
        <EntradaTexto onEnviar={preguntar} deshabilitado={cargando} />
      </div>
    </>
  )
}

export default App
