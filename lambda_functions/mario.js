exports.handler=async ()=>{
    console.log('mario')
    const data = {name:'mario',age:25}

    return{
        statusCode:200,
        body:JSON.stringify(data)
    }
}