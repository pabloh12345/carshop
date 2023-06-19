import { useState, useContext } from 'react';
import { DispatchContext } from './TasksContext';

let nextId = 3;

export default function AddCliente() {
  const dispatch = useContext(DispatchContext)
  const [text, setText] = useState('');
  return (
    <> 
    <h2 > Datos de Vehiculo </h2>
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
      Inforacion estado  : 
       <input
        placeholder=""
        type='text'
      />
      
      <br></br>
      <br></br>
      
    </>
  );
}

