function Mensaje({ rol, texto, fuentes = [] }) {
    const esUsuario = rol === "usuario";

    return (
        <div className={`d-flex flex-column mb-3 ${esUsuario ? "align-items-end" : "align items-start"}"`}>
            <small className="text-muted text-uppercase" style={{ fontSize: "0.7rem" }}>
                {esUsuario ? "vos" : "pegasus-agent"}
            </small>
            <div
                className={`p-2 px-3 rounded-3 ${esUsuario ? "bg-warning text-dark" : "bg-dark text-white border border-secondary"
                    }`}
                style={{ maxWidth: "80%" }}
            >
                {texto}
            </div>
            {fuentes.length > 0&& (
                <div className="d-flex flex-wrap grap-1 mt-1">
                    {fuentes.map((f) => (
                        <span key={f} className="badge bg-secondary-subtle text-warning border border-warning-subtle">
                            → {f}
                        </span>
                    ))}
                </div>
            )}
        </div>
    )
}

export { Mensaje }