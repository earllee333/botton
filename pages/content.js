import {useEffect,useState} from 'react'
import Link from 'next/link'
import {Button,Card} from'semantic-ui-react'


export default function cc(){
    const[notes,setNotes]=useState(null)
    
    useEffect(() => {
       fetch('/.netlify/functions/shisha')
         .then(res=>res.json())
         .then(pokemon=>{
             reserve()
             setNotes(pokemon)
         })
    },[])

    return(
    <div className="notes-container">
        <h1>Content</h1>
        <div className="grid wrapper">
            {notes&& notes.map(data => (
                <div id='icon' key={data._id}>
                    <Card>
                        <Card.Content>
                            <Card.Header>
                                <Link href={`/${data._id}`}>
                                    <a>{data.name}</a>
                                </Link>
                            </Card.Header>
                        </Card.Content>
                        <Card.Content extra>
                            <Link href={`/${data._id}`}>
                                <Button primary>View</Button>
                            </Link>
                            <Link href={`/${data._id}/edit`}>
                                <Button primary>Edit</Button>
                            </Link>
                        </Card.Content>
                    </Card>
                    <div className="time">
                    <p>{data.createdAt}</p>
                    </div>
                </div>))}
        </div>
        
    </div>
    )
}