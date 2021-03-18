exports.get404 = (req,res)=> {
    res.status(404).json({message:"not found 404"});
}
exports.getErrors = (error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({ message: message });
}