import React from 'react'

export default function Person({listePersonne,afficherContenu}) {
    
  return (
    <div>

      {afficherContenu ? listePersonne.map(perso => {
                    return <div>
                        <img src={perso.image} width="200px" />
                        <h1>{perso.fullName}</h1>
                        <h6>{perso.bio}</h6>
                        <h5>{perso.profession}</h5>
                    </div>
                }) :  listePersonne.map(perso => {
                    return <div>
                        
                        <h1>{perso.fullName}</h1>
                        
                    </div>
                })}
   
    </div>
  )
}
