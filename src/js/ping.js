const log4js = require("log4js");
log4js.configure({
appenders: { log: { type: "file", filename: "file-log.log" } },
categories: { default: { appenders: ["log"], level: "info" } }
});

const logger = log4js.getLogger("PING");

var console = document.getElementById('console');

function ping()
{
    logger.info("Button ping clicked.");

    var inputPing = document.getElementById('ping').value;

    if(inputPing != ""){
        logger.info("The request is being executed. Addres: "+ inputPing +".");
        pinging();
    } else {
        console.innerText = "Адрес хоста не указан!";
        logger.error("Host address not specified.");
    }
}

function pinging(){
        var inputPing = document.getElementById('ping').value;

        console.innerText = ">ping " + inputPing + "\n\n Выполняется запрос...";
        const { exec } = require("child_process");

        exec("chcp 65001 & ping -c 4 " + inputPing, (error, stdout, stderr) => {
            if(error){
                console.innerText = error.message;
                logger.error(error.message);
            }
            if(stderr){
                console.innerText = stderr;
                logger.error(stderr);
            }
            if(stdout){
                console.innerText = ">ping " + inputPing +"\n" + stdout;
                logger.info("Request completed.");
            }
        });
}

function log(){
    logger.info("Page loaded.");
}

window.onload = log();

