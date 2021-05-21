import {useEffect,useState} from 'react'


const notq = (id,data) => {
    console.log('hi')
    console.log(id)
    console.log(data)

    return ( 
        <div>
            s
            {data.name}
        </div>
     );
}
 
export default notq;

notq.getInitialProps = async({query:{id}})=>{

    const res = await fetch(`.netlify/functions/customer?id=${id}`)
    const {data} = res.json() 
    return{props:{data,id}}
}