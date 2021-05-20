import {useEffect,useState} from 'react'
import Link from 'next/link'
import {Button,Card} from'semantic-ui-react'


export default function cc(){
    const[notes,setNotes]=useState(null)
    
    useEffect(() => {
       fetch('/.netlify/functions/customer')
         .then(res=>res.json())
         .then(data=>{
             data.reverse()
             setNotes(data)
         })
    },[])

    return(
    <div className="notes-container">
        <h1>Content</h1>
        {notes && 
        <div>
        {notes.name}    
        </div>}
        
    </div>
    )
}