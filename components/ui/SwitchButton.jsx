import { useState } from "react"
import { TrendingDownSvg, TrendingUpSvg } from "../svg/AllSvg"


function SwitchButton({trending = "false", size}) {

  const [active, setActive] = useState(false)
  const [activeNormal, setActiveNormal] = useState(false)

  const handleClickTrending = () => {
    if(active){
      setActive(!active)
    }else{
      setActive(true)
    }
  }

  const handleClickNormal = () => {
    if(activeNormal){
      setActiveNormal(!activeNormal)
    }else{
      setActiveNormal(true)
    }
  }

  // se debe recibir por props el active o el evento
  // tambien se debe recibir el tamaño del mismo ej. small normal etc

  return (
    <>
    {
      trending ? 
      <div className={`relative ${size === "normal" ? "h-[22px] w-10" :"h-[18px] w-[31px]"} rounded-xl flex items-start ${active && trending ? "bg-green-400" : "bg-[#52469C]"} transition-all ease-in-out`}>
      {/* cuando cambien a activo se le cambia al estilo de color del div ..(`...${active ? "bg-green-400" : "bg-slate-400"} `) */}
      <button className={`absolute ${size === "normal" ? "h-5 w-5" :"h-4 w-4"} bg-slate-100 rounded-full ${active ? "left-0" : "right-[1px]"} ml-[2px] mt-[1px] flex items-center justify-center`} onClick={() => handleClickTrending()}>
        {!active ? <TrendingDownSvg /> : <TrendingUpSvg />}
      </button>
      {/* cuando cambien a activo se le agrega al estilo del boton ..(`...${active ? "right-0" : ""} `) */}
    </div>
      
       :
       <div className={`relative ${size === "normal" ? "h-[22px] w-10" :"h-[18px] w-[31px]"} rounded-xl flex items-start ${!activeNormal ? "bg-green-400" : "bg-gray-400"} transition-all ease-in-out`}>
       {/* cuando cambien a activo se le cambia al estilo de color del div ..(`...${activeNormal ? "bg-green-400" : "bg-slate-400"} `) */}
       <button className={`absolute ${size === "normal" ? "h-5 w-5" :"h-4 w-4"} bg-slate-100 rounded-full ${activeNormal ? "left-0" : "right-[1px]"} ml-[2px] mt-[1px] flex items-center justify-center transition-all ease-in-out`} onClick={() => handleClickNormal()}>
       </button>
       {/* cuando cambien a activo se le agrega al estilo del boton ..(`...${active ? "right-0" : ""} `) */}
     </div>
    

    }
    </>
  )
}

export default SwitchButton
