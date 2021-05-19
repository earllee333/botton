import {useEffect,useState} from 'react'
import Link from 'next/link'
import {Button,Card} from'semantic-ui-react'


export default function cc({query:{id}}){
    const[notes,setNotes]=useState(null)
    
    useEffect(() => {
       fetch('/.netlify/functions/mario')
         .then(res=>res.json())
         .then(data=>{
             data.reverse()
             setNotes(data)
         })
    },[])

    return(
    <div>
        {id}
    </div>
    )
}