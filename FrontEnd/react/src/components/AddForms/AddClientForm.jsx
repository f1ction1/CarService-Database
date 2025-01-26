import "./AddClientForm.css"
import {addClient} from "../../http.js"

export default function AddClientForm() {
    async function handleSubmitClient(event) {
        event.preventDefault();
        const fd = new FormData(event.target);
        const data = Object.fromEntries(fd.entries());
        console.log(data);
        try {
            await addClient(data);
            location.reload();
        } catch (error) {

        }
    }

    return (
        <>
            <div className="button-add m-2">
                <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addModal">Додати клієнта</button>
            </div>

            <div className="modal fade" id="addModal" tabIndex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
                <div className="modal-dialog addClient-content">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="addModalLabel">Додати клієнта</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        
                        <form onSubmit={handleSubmitClient} className="addClientForm">
                            <div className="mb-3">
                                <label htmlFor="inputFirstName" className="form-label">Ім'я</label>
                                <input type="text" name="firstName" className="form-control" id="inputFirstName" aria-describedby="nameHelp"/>
                                <div id="nameHelp" className="form-text">Не може бути більше 100 символів</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputLastName" className="form-label">Прізвище</label>
                                <input type="text" name="lastName" className="form-control" id="inputLastName" aria-describedby="nameHelp"/>
                                <div id="nameHelp" className="form-text">Не може бути більше 100 символів</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputEmail" className="form-label">Email</label>
                                <input type="email" name="email" className="form-control" id="inputEmail"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputPhoneNumber" className="form-label">Телефон</label>
                                <input type="phone" name="phone" className="form-control" id="inputPhoneNumber"/>
                            </div> 
                            <div className="modal-footer addModalFooter">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Назад</button>
                                <button type="submit" className="btn btn-primary">Додати</button>
                            </div>       
                        </form>
                    </div>
                    </div>
                </div>
            </div>

            
        </>
        
    );
}