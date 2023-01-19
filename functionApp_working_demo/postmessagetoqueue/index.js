const { QueueClient } = require("@azure/storage-queue");
const { DefaultAzureCredential } = require('@azure/identity');
const { v1: uuidv1 } = require("uuid");

async function main() {

    const queueName = "function-queue"
    const connString = "DefaultEndpointsProtocol=http;AccountName=devstoreaccount1;AccountKey=Eby8vdM02xNOcqFlqUwJPLlmEtlCDXJ1OUzFT50uSRZ6IFsuFq2UVErCz4I6tq/K1SZFPTOtr/KBHBeksoGMGw==;BlobEndpoint=http://127.0.0.1:10000/devstoreaccount1;QueueEndpoint=http://127.0.0.1:10001/devstoreaccount1;TableEndpoint=http://127.0.0.1:10002/devstoreaccount1;"
    const queueClient = new QueueClient(connString, queueName);
    await queueClient.sendMessage("First message");
    await queueClient.sendMessage("Second message");
    const sendMessageResponse = await queueClient.sendMessage("Third message");
    
    console.log("Messages added, requestId:", sendMessageResponse.requestId);
}

main().then(() => console.log("\nDone")).catch((ex) => console.log(ex.message));