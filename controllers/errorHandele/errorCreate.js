module.exports = (data,statusCode)=>{
    const error = new Error();
    error.statusCode = statusCode;
    error.data = data;
    throw error;
}