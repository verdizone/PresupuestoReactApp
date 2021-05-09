import { useState, useEffect } from "react";
import ControlPresupuesto from "./components/ControlPresupuesto";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import Pregunta from "./components/Pregunta";



function App() {
  
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarPregunta, setMostrarPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [crearGasto, setCrearGasto] = useState(false);
  

  //useEffect que actualiza al restante
  useEffect(()=>{
    if(crearGasto){
      //Agrega el nuevo presupuesto
      setGastos([
        ...gastos,
        gasto
      ]);
      //Resta del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      // console.log('Restante: ', restante);
      // console.log('Gasto:', gasto.cantidad);
      // console.log('PresupuestoRestante: ', presupuestoRestante);
      setRestante(presupuestoRestante);
      
      //Una vez que se ejecuta el codigo se resetea a false
      setCrearGasto(false);
    }
  }, [gasto, crearGasto, gastos, restante]);
  

  //Cuando agreguemos un gasto se ejecutara la sig func

  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
      </header>

      <div className="contenido-principal contenido">

        {
          mostrarPregunta 
          ?
          ( 
          <Pregunta 
          setPresupuesto = {setPresupuesto}
          setRestante = {setRestante}
          setMostrarPregunta = {setMostrarPregunta}
          />
          )
          :
          ( 
          <div className="row">
            <div className="one-half column">
              <Formulario 
                setGasto={setGasto}
                setCrearGasto={setCrearGasto}
              />
            </div>
            <div className="one-half column">
              <Listado 
                gastos={gastos}
              />
              <ControlPresupuesto 
                presupuesto={presupuesto}
                restante={restante}
              />
            </div>
  
          </div>
          )
        }
        


      </div>
        
    
    </div>
  );
}

export default App;
