import { useState, useContext } from 'react';
import { DispatchContext } from './TasksContext';

let nextId = 3;

export default function AddCliente() {
  const dispatch = useContext(DispatchContext)
  const [text, setText] = useState('');
  return (
    <> 
    <h2 > Datos de Clientes </h2>
      Nombres : 
      <input
        placeholder=""
        type='text'
      />
      <br></br>
      email : 
       <input
        placeholder=""    
        type='text'
      />
      <br></br>
      Numero Contacto : 
       <input
        placeholder=""
        type='text'  
      />
      <br></br>
      Tipo Identficacion : 
       <input
        placeholder=""
        type='text'
      />
      <br></br>
      Identificacion : 
       <input
        placeholder=""
        type='text'
      />
      
      <br></br>
      <br></br>
      
    </>
  );
}
