import { useState, useContext } from 'react';
import { DispatchContext } from './TasksContext';
import AWS from 'aws-sdk';


let nextId = 3;

AWS.config.update({
  accesKeyId: procces.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccesKey: procces.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  region:'us-east-1',
  sessionToken: procces.env.REACT_APP_AWS_SESSION_TOKEN
 });
 
 
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

