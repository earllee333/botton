exports.handler=async (req,res)=>{
    console.log('mario')
    const data = {name:'mario',age:25}
    const{query:{id},method} = req
    console.log(req.params)
    console.log(query)
    console.log(method)
    console.log(id)
    return{
        statusCode:200,
        body:JSON.stringify(data)
    }
}