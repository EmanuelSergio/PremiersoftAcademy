
    // Imprimindo mensagens
    console.log("Console básico");
    console.info("Console de informação");
    console.warn("Console de warnig");
    console.error("Erro");

    // Agrupando mensagens
    console.group("Grupo de logs");
    console.log("Log 1");
    console.log("Log 2");
    console.groupEnd();

    // Medindo tempo
    console.time("Timer");
    // ... código ...
    console.timeEnd("Timer");

    // Criando tabelas
    console.table(["Item 1", "Item 2", "Item 3"]);