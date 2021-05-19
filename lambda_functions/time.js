module.exports.handler = async (event,context) =>{
    const unixTime=Math.floor(Date.now()/1000);
    const currentTimestamp = Date.now()
    new Date().getTime();
    const notTime = new Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',
day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(currentTimestamp)

    return{
        statusCode:200,
        body:`Time is ${notTime}`
    }
}