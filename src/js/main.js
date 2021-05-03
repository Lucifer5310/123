function systeminfo ()
{
    const log4js = require("log4js");
    log4js.configure({
    appenders: { log: { type: "file", filename: "file-log.log" } },
    categories: { default: { appenders: ["log"], level: "info" } }
    });

    const logger = log4js.getLogger("MAIN");
    logger.info("Page loaded.");

    var console = document.getElementById('console');

    const { exec } = require("child_process");
    exec("chcp 65001 & lscpu", (error, stdout, stderr) => {
        if(error){
            console.innerText = error.message;
            logger.error(error.message);
        }
        if(stderr){
            console.innerText = stderr;
            logger.error(stderr);
        }
        if(stdout){
            console.innerText = "Информация о системе:\n" + stdout;
            logger.info("Showed info about device.");
        }
    });
}
window.onload = systeminfo();
