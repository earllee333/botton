import {useState,useEffect}from 'react'
import{useRouter} from 'next/router';
import{Confirm,Button,Loader} from 'semantic-ui-react';

const Note = ({note}) => {
    const[confirm,setConfirm]=useState(false);
    const[isDeleting,setIsDeleting]=useState(false)
    const router =useRouter()
    

    useEffect(() => {
        if(isDeleting){
            deleteNote()
        }
    },[isDeleting])


    const open = ()=>{setConfirm(true)};
    const close= ()=>{setConfirm(false)};
    
    const deleteNote = async ()=>{
        const noteId=router.query.id;
        try{
            const deleted = await fetch(`https://1992shisha.netlify.app/api/hh/${noteId}`,{
                method:"DELETE"
            })
            router.push('/content');

        }catch(error){
            console.log(error)
        }
    }
    
    
    const handleDelete = async ()=>{
        setIsDeleting(true);
        close()
    }
    return ( 
        <div className="note-container">
            {isDeleting ?
            <Loader active />
                :
                <>
                <h1>{note.name}</h1>
                <p>{note.email}</p>
                <p>{note.phone}</p>
                <p>{note.number}</p>
                <p>{note.createdAt}</p>
                <Button color="red" onClick={open}>
                    Delete
                </Button>
                </>
            }
            <Confirm
                open={confirm}
                onCancel={close}
                onConfirm={handleDelete}/>
        </div>
     );
}
 
export default Note;

Note.getInitialProps = async ({query:{id}})=>{
    const res = await fetch(`/.netlify/functions/shisha/${id}`)
    const {data}= await res.json();
    return{note:data}
}

