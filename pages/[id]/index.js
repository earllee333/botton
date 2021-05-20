import {useState,useEffect}from 'react'
import{useRouter} from 'next/router';
import{Confirm,Button,Loader} from 'semantic-ui-react';

const Note = () => {
    const [myData,setMyData] = useState(null)
    useEffect(async({query:{id}})=>{
        console.log('Effect call')
        const res = await fetch('/.netlify/functions/customer')
        const data = await res.json()
        setMyData(data)
        console.log('Data= ',JSON.stringify(data))
    },[])
    
    if (!myData){
        return ( <div><h2>Lodaing</h2></div>)
    }
    return ( 
        
     <div>
         <h1>hi</h1>
     </div>
    )
}
 
export default Note;

