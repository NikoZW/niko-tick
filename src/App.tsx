function App() {
  return (
    <div className="flex justify-center items-center font-roboto bg-[#f1d4b3] min-h-screen flex-col ">
      <h1 className="text-[120px] font-bold text-black/5 uppercase absolute left-1/2 -translate-x-1/2 tracking-widest">
        Niko Tick
      </h1>


      <main className="relative w-243 h-159 bg-white rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.08)]
       grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden">
        <header className="col-[1/3] row-[1/2] bg-[#fbf5ed] border-b border-black/8">
        </header>
        <ul>
        </ul>
        <section className="col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/8" >
        </section>
      </main>

      <footer className="flex justify-between w-243 items-center text-[11px] opacity-30 mt-3">
        <small className="text-[11px]">&copy; 2026. Copyright by Niko.</small>
        <p>Verison<b>1.5</b></p>
      </footer>
    </div>
  )
}
export default App
