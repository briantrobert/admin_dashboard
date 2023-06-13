function SwitchButton({children,size}) {

  // se debe recibir por props el active o el evento
  // tambien se debe recibir el tamaño del mismo ej. small normal etc

  return (
    <div className={`relative ${size === "normal" ? "h-[22px] w-10" :"h-[18px] w-[31px]"} rounded-xl bg-slate-400 flex items-start`}>
      {/* cuando cambien a activo se le cambia al estilo de color del div ..(`...${active ? "bg-green-400" : "bg-slate-400"} `) */}
      <button className={`absolute ${size === "normal" ? "h-5 w-5" :"h-4 w-4"} bg-slate-100 rounded-full top-[1px] ml-[2px]`}>
        {children}
      </button>
      {/* cuando cambien a activo se le agrega al estilo del boton ..(`...${active ? "right-0" : ""} `) */}
    </div>
  )
}

export default SwitchButton
