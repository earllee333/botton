import {useState,useEffect}from 'react'
import{useRouter} from 'next/router';
import{Confirm,Button,Loader} from 'semantic-ui-react';

const Note = ({note}) => {
    
    
    
    return ( 
        
     <div>
         {note}
     </div>
    )
}
 
export default Note;

Note.getInitialProps = async ({query:{id}})=>{
    const res = await fetch(`/.netlify/functions/mario/${id}`)
    const {data}= await res.json();
    return{note:data}
}

