import TableClientItem from "./TableClientItem";
import "./TableClients.css"
import { useState, useEffect } from "react";
import AddClientForm from "../AddForms/AddClientForm"

export default function TableClients({onClickClientfunc}) {
    //clients START
    const [clients, setClients] = useState([]);
    useEffect(() => {
    fetch("http://localhost:5000/client/getAll").then(value => value.json().then(value => {setClients(value); console.log(value)}));
    }, []);
    
    //clients END
    return (
        <>
        <AddClientForm />
        <div className="table-responsive">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Ім'я</th>
                        <th>Прізвище</th>
                        <th>Телефон</th>
                        <th>К-сть робіт</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.length == 0 && <tr><td>Trying to fetch data...</td></tr>}
                    {clients.length > 0 && clients.map((client, index) => <TableClientItem client={client} key={client.id} index={index} onClickClientfunc={onClickClientfunc}/>)}
                </tbody>
            </table>
        </div>
        </>
    );
}