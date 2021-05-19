import {useState,useEffect}from 'react'
import{useRouter} from 'next/router';
import{Confirm,Button,Loader} from 'semantic-ui-react';

const Note = async({query:{id}}) => {
    const [myData,seMyData] = useState(null)
    useEffect(async()=>{
        console.log('Effect call')
        const res = await fetch('/.netlify/functions/customer')
        const data = await res.json()
        setMyData(data)
        console.log('Data= ',JSON.stringify(data))
    },[])
    
    if (!myData.name){
        return ( <div><h2>Lodaing</h2></div>)
    }
    return ( 
        
     <div>
         {myData.name&&<div>{myData.name}</div>}
         {!myData.name&& <div>Nothing</div>}
     </div>
    )
}
 
export default Note;

