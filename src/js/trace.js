const log4js = require("log4js");
log4js.configure({
    appenders: { log: { type: "file", filename: "file-log.log" } },
    categories: { default: { appenders: ["log"], level: "info" } }
});

const logger = log4js.getLogger("TRECERT");

var console = document.getElementById('console');

function trace()
{
    logger.info("Button tracert clicked.");
    
    var address = document.getElementById('trace-address').value;
    var hope = document.getElementById('hope').value;

    if(address != "" && hope != ""){
        logger.info("The request is being executed. Addres: "+ address +". Hope: "+ hope +".");
        tracert();
    } else {
        console.innerText = "Адрес трасcировки не указан!";
        logger.error("Host address not specified.");
    }
}

function tracert(){
    var address = document.getElementById('trace-address').value;
    var hope = document.getElementById('hope').value;

    console.innerText = ">traceroute -m " + hope + " " + address + "\n\n Выполняется запрос...";
    const { exec } = require("child_process");
    exec("traceroute -I -m " + hope + " " + address + " || (gnome-terminal --command=\"sudo apt install ./src/traceroute_2.1.0-2_amd64.deb\" & echo для установки пакета traceroute введите пароль!)", (error, stdout, stderr) => {
        if(error){
            console.innerText = error.message;
            logger.error(error.message);
        }
        if(stderr){
            console.innerText = stderr;
            logger.error(stderr);
        }
        if(stdout){
            console.innerText = ">traceroute -m " + hope + " " + address +"\n" + stdout;
            logger.info("Request completed.");
        }
    });
}

function log(){
    logger.info("Page loaded.");
}

window.onload = log();

