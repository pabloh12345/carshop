import { useState, useContext } from 'react';
import { DispatchContext } from './TasksContext';

let nextId = 2;

export default function AddTask() {
  const dispatch = useContext(DispatchContext)
  const [text, setText] = useState('');
  return (
    <> 
    <h2 > Servicios del Vehiculo </h2>
      Marca : 
      <input
        placeholder=""
        type='text'
      />
      <br></br>
      Modelo : 
       <input
        placeholder=""    
        type='text'
      />
      <br></br>
      Numero Placa : 
       <input
        placeholder=""
        type='text'  
      />
      <br></br>
      Nivel Gasolina : 
       <input
        placeholder=""
        type='text'
      />
      <br></br>
      Informacion de estado : 
       <input
        placeholder=""
        type='text'
      />
      
      <br></br>
      <br></br>
      <button
        onClick={() => {
          setText('');
          dispatch({
            type: 'added',
            id: nextId++,
            text: text,

          })
        }}>
        Siguiente 
      </button>
    </>
  );
}
