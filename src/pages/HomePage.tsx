export default function HomePage() {
  return (
    <div className="flex flex-col gap-6 font-sans antialiased text-slate-900">
      
      <section className="bg-[#f4f6f8] p-10 rounded-lg border border-slate-200">
        <h1 className="text-4xl font-light text-slate-700 mb-2">
          Bienvenido a la Gestión de Inventario
        </h1>
        <p className="text-slate-600 text-lg">
          Consulta, registra y realiza cálculos sobre los productos del inventario.
        </p>
      </section>


      <div className="flex flex-col gap-4">
        <div className="relative overflow-hidden rounded-lg shadow-sm border border-slate-200 group">
          <img 
            src="https://picsum.photos/id/1080/800/300" 
            alt="Inventario Fresas" 
            className="w-full h-auto block transition-transform duration-500 group-hover:scale-105" 
          />

          <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
            <span className="text-white text-3xl drop-shadow-lg cursor-pointer pointer-events-auto">❮</span>
            <span className="text-white text-3xl drop-shadow-lg cursor-pointer pointer-events-auto">❯</span>
          </div>
        </div>

        </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        <div className="p-5 bg-white border border-slate-200 rounded shadow-sm">
          <h3 className="text-lg font-bold text-slate-700 mb-2">Listado de Productos</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Ahora se llena dinámicamente con personajes de Dragon Ball (con fotos).
          </p>
        </div>

        <div className="p-5 bg-white border border-slate-200 rounded shadow-sm">
          <h3 className="text-lg font-bold text-slate-700 mb-2">Registrar Producto</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Agrega nuevos productos (locales) al arreglo.
          </p>
        </div>

        <div className="p-5 bg-white border border-slate-200 rounded shadow-sm">
          <h3 className="text-lg font-bold text-slate-700 mb-2">Cálculos de Inventario</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Calcula valores comerciales básicos.
          </p>
        </div>

      </div>

      <div className="p-3 bg-[#d1ecf1] border border-[#bee5eb] rounded text-[#0c5460] text-sm">
        <p>
          Recuerda: Mantén actualizado el stock de productos.
        </p>
      </div>

    </div>
  );
}