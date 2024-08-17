const authorize = (req , res , next) => {
    const {user} = req.query
    if(user === 'Mr_Ab'){
        req.query = {name : "Abdullah" , id : 1}
    }
    else{
        res.status(401).send("Unauthorized");
     }
     }
     module.exports = authorize