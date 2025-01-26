

export default function TableClientItem({client, index, onClickClientfunc}) {
    return (
        <>{client === undefined ? null : (
            <tr className={index % 2 === 0 ? "evenRow clientItem-tr" : "oddRow clientItem-tr"} onClick={() => onClickClientfunc(client.id)}>
                <td>{client.id}</td>
                <td>{client.firstName}</td>
                <td>{client.lastName}</td>
                <td>{client.phone || "null"}</td>
                <td>{client.numberOfWorks}</td>
            </tr>
        )}
        </>
    );
}

/*
<div className='table-row'>
                <div className="table-id">{client.id}</div>
                <div className="table-firstName">{client.firstName}</div>
                <div className="table-lastName">{client.lastName}</div>
                <div className="table-numberOfWorks">{client.numberOfWorks}</div>
                <div className="table-phone">{client.phone}</div>
            </div>
 */