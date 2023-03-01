import Person from './Components/Person';
import './App.css'
import React from 'react';
import { useState } from 'react';



export default function App() {
  const [afficherContenu, setAfficherContenu] = useState(false)
  const [listePersonne, setListePersonne] = useState([{
        fullName: "Taourirt Ferhat",
        bio: "ecrivain",
        image:"https://images.unsplash.com/photo-1544298621-a28c00544483?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVkZXJlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" ,
        profession: "Informaticien",
        bool: true
       
    }]);

    function displayContenu() {
      setAfficherContenu(!afficherContenu)
    }
   let timerId = setInterval(() => alert('date'), 2000);

  return (
    <div>
      {/* <form onSubmit={vrai}> */}
           
               <button onClick={displayContenu}>Click</button>
        {/* </form> */}
       
       <Person listePersonne={listePersonne} afficherContenu={afficherContenu}/>
    </div>
  )
}
