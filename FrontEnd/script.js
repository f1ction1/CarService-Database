async function getClients()
{
    let clientsRequest = await fetch("https://localhost:7217/clients");
    if(clientsRequest.ok) {
        let jsonClients = await clientsRequest.json();
        return jsonClients;
    } else {
        console.log("Error in getClients");
    }
}

async function main() {
    const clients = await getClients();
    console.log(clients);
} main();