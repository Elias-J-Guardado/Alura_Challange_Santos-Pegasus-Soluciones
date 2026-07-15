function Cargando() {
    return (
        <div className="d-flex align-items-center gap-2 mb-3">
            <div className="spinner-grow spinner-grow-sm text-secondary" role="status" style={{width: "6px", height: "6px"}}/>
            <small className="text-muted">pegasus-agent está pensando...</small>
        </div>
    );
}

export {Cargando}