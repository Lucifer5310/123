const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, { useUnifiedTopology: true });

function auth(){
    //alert("Функция чето фурычит")
    document.location.href = "main.html";
    mongoClient.connect(function(err, client){
      
        const db = client.db("Company");
        const collection = db.collection("Alkashka");
              
            if(err){ 
                document.getElementById("correct").style.display = "block";
                return alert(err);
            }
    
            let loginValue = document.forms["auth"].elements["login"].value;
            let passValue = document.forms["auth"].elements["password"].value;
            let usuerValue = collection.find( { login: loginValue } );

            if (passValue == usuerValue.password) {
                document.location.href = "main.html";
            }   
            else {
                document.getElementById("correct").style.display = "block";
            }

            client.close();
    });
}
