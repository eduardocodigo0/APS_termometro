const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://admin:D3m0n10_666@cluster0.sx8ja.mongodb.net/aps?retryWrites=true&w=majority";


async function ultima_temperatura(){
    let dados = null;
    MongoClient.connect(uri, (err, db) =>{

        if(!err){

            let dbo = db.db('aps');
            

        dbo.collection("temperatura").find()
            .sort({_id:-1})
            .limit(1)
            .toArray((err, result) =>{

                if(!err){
                    //console.log(result);
                    result.forEach((item) =>{
                        console.log(item.temperatura);
                        dados = item;
                        return dados;
                    });
                    db.close();
                }

            });

        }

    });

    

};


module.exports = {
    ultima_temperatura,
}