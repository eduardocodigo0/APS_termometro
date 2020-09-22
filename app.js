//Variaveis globais
const express = require('express')
const app = express()
const path = require('path');

const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://admin:D3m0n10_666@cluster0.sx8ja.mongodb.net/aps?retryWrites=true&w=majority";


//Middlewares
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'))

//Rotas
app.get('/', (req, res) => {

  MongoClient.connect(uri, (err, db) =>{

    if(!err){

        let dbo = db.db('aps');
        

    dbo.collection("temperatura").find()
        .sort({_id:-1})
        .limit(1)
        .toArray((err, result) =>{

            if(!err){
                //console.log(result);
                let dados = undefined;
                result.forEach((item) =>{
                    console.log(item.temperatura);
                    dados = item;
                    return dados;
                });


                db.close();
                res.render('index.ejs', {dados: dados});
            }

        });

    }

});


    

  
})

//Iniciando Sercer
const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`Server Rodando na porta: ${port}`);
})

