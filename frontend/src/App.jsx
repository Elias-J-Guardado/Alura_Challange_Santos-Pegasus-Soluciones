

function App() {

  return (
    <>
      <div className="d-flex flex-column vh-100 bg-black text-white">
        <header className="d-flex align-items-center gap-2 px-4 py-3 border-buttom border-secondary bg-dark ">
            <div 
            className="d-flex align-items-center justify-content-center fw-bold text-dark rounded">
                SP
            </div>
            <span className="fw-semibold" style={{fontSize: "0.9rem"}}>
                pegasus-agent <span className="text-muted fw-normal">/ base-conocimiento-interna</span>
            </span>
        </header>

        <div className="flex-grow-1 overflow-auto p-4">
          <div className="mx-auto" style={{maxWidth: "680px"}}>

          </div>

        </div>
          
      </div> 
    </>
  )
}

export default App
