export async function addClient(client) {
    const response = await fetch(`http://localhost:5000/client/add`, {
        method: 'POST',
        body: JSON.stringify(client),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if(!response.ok) {
        throw new Error('Failed to add client.')
    }
    const data = await response.json();
    console.log(`Response POST message: ${data}`);
    return Number(data);
}

export async function deleteClient(id) {
    const response = await fetch(`http://localhost:5000/client/delete/${id}`, {
        method: 'DELETE'
    });

    if(!response.ok) {
        throw new Error('Failed to delete client.')
    }
}