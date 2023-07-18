import { useState, useContext } from 'react';
import { DispatchContext } from './TasksContext';
import AWS from 'aws-sdk';


let nextId = 2;


AWS.config.update({
  accesKeyId: procces.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccesKey: procces.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  region:'us-east-1',
  sessionToken: procces.env.REACT_APP_AWS_SESSION_TOKEN
 });
 
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
