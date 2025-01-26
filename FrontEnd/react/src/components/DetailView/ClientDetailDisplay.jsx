import "./ClientDetailDisplay.css";
import { useState, useEffect, use } from "react";
import {deleteClient} from "../../http.js"

export default function ClientDetailDisplay({selectedClientId}) {
    const [client, setOnClickClient] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if (selectedClientId !== null) {
          const fetchClient = async () => {
            try {
              const response = await fetch(`http://localhost:5000/client/get/${selectedClientId}`);
              const data = await response.json();
              setOnClickClient(data); 
              setIsLoading(false);
            } catch (error) {
              console.error('Error fetching client:', error);
            }
          };
          fetchClient();
        }
      }, []); 

      async function handleDeleteClient() {
        try {
            await deleteClient(selectedClientId);
            location.reload();
        } catch (error) {

        } 
      }

    return (
        <>
            {isLoading == true ? <p>Trying to get data...</p> : (
                <div className="detailClient">
                <h1 className="detail-header">Дані Клієнта</h1>
                
                <table className="detail-table">
                    <tbody>
                        <tr>
                            <th className="detail-th">ID</th>
                            <td>{client.id}</td>
                        </tr>
                        <tr>
                            <th className="detail-th">Ім'я</th>
                            <td>{client.firstName}</td>
                        </tr>
                        <tr>
                            <th className="detail-th">Прізвище</th>
                            <td>{client.lastName}</td>
                        </tr>
                        <tr>
                            <th className="detail-th">Телефон</th>
                            <td>{client.phone || "Not provided"}</td>
                        </tr>
                        <tr>
                            <th className="detail-th">Email</th>
                            <td>{client.email || "Not provided"}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="deleteClientContainer">
                    <button type="button" className="deleteClient btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal">Видалити клієнта</button>
                </div>
                <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="deleteModalLabel">Видалення</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Ви впевнені що хочете видалити цього клієнта і всю історію його робіт?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Ні</button>
                            <button onClick={handleDeleteClient} type="button" className="btn btn-primary">Так</button>
                        </div>
                        </div>
                    </div>
                </div>
                <h2 className="detail-header">Роботи</h2>
                {client.works.length === 0 && <p>В цього клієнта ще немає робіт</p>}
                {client.works.length > 0 && (
                    <table>
                    <thead>
                        <tr>
                            <th className="detail-th">Опис роботи</th>
                            <th className="detail-th">Дата</th>
                            <th className="detail-th">Ціна</th>
                        </tr>
                    </thead>
                    <tbody>
                        {client.works.map((work, index) => (
                            <tr key={index}>
                                <td>{work.description}</td>
                                <td>{new Date(work.date).toLocaleDateString("en-GB")}</td>
                                <td>{work.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                )}
                
            </div>
            )}
        </>
    );
}