import {useState,useEffect}from 'react'
import{useRouter} from 'next/router';
import{Confirm,Button,Loader} from 'semantic-ui-react';

const Note = ({note}) => {
    console.log(note)
    
    
    return ( 
        
     <div>
         <h1>hi</h1>
         {note.name}
     </div>
    )
}
 
export default Note;

Note.getInitialProps = async ({query:{id}})=>{
    const res = await fetch('/.netlify/functions/customer')
    const {data}= await res.json();
    return{note:data}
}

