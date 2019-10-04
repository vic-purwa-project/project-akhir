const db = require('../database')

module.exports = {
    login: (req, res) => {
        
        
        db.query(`select * from users where username = '${req.query.username}'` , (err, result) => {
            console.log(req.query);
            if(err) throw err
            if(result.lenght > 0){
                if(req.query.password === result[0].password){
                    res.send({
                        status: '200',
                        result: result[0]
                    })
                }else{
                    res.send({
                        status: '401',
                        message: 'Wrong Password!'
                    })
                }
            }else{
                let hasil = {
                    status:'404',
                    message: 'User Not Found!'
                }
                res.send(hasil)
            }
        })
    }
}