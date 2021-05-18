import Link from 'next/link'
import {Button,Card} from'semantic-ui-react'

const Content = ({notes}) => {
    console.log(notes)
    return ( 
        <div className="notes-container">
            <h1>Content</h1>
            <div className="grid wrapper">
                {notes.map(note=>{
                    return(
                        <div id="icon" key={note._id}>
                            <Card>
                                <Card.Content>
                                    <Card.Header>
                                        <Link href={`/${note._id}`}>
                                        <a>{note.name}</a>
                                        </Link>
                                    </Card.Header>
                        
                                </Card.Content>
                                <Card.Content extra>
                                    <Link href={`/${note._id}`}>
                                        <Button primary>View</Button>
                                    </Link>
                                
                                </Card.Content>
                            </Card>
                            <div className="time">
                    <p >{note.createdAt}</p>
                    </div>
                        </div>
                    )
                })}
            </div>
        </div>
     );
}
 
export default Content;

Content.getInitialProps=async()=>{
    const res = await fetch('https://1992shisha.netlify.app/api/hh')
    const {data} = await res.json()
    return{notes:data}
}

