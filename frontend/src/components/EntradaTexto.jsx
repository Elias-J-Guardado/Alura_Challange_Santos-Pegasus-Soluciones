import { useState } from "react";

function EntradaTexto({onEnviar, deshabilitado}) {
    const [texto, setTexto] = useState("");

    function manejarEnvio() {
        if (!texto.trim()) return; 
        onEnviar(texto.trim());
        setTexto("")
    }

    return (
        <div className="d-flex gap-2 p-3 border-top border-secondary bg-black">
            <input type="text" 
            className="form-control bg-black text-white border-secondary"
            placeholder="Introduce tu pregunta..."
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && manejarEnvio()}
            disabled={deshabilitado}
            />
            <button className="btn btn-warning fw-bold" onClick={manejarEnvio} disabled={deshabilitado}>
                Enviar
            </button>
        </div>
    )
}

export {EntradaTexto}