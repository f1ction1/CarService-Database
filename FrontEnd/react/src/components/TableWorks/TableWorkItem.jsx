export default function TableWorkItem({work, index, onClickClientfunc}) {
    return (
        <tr className={index % 2 === 0 ? "evenRow" : "oddRow"}>
            <td className="onClickIdWork" onClick={() => onClickClientfunc(work.clientId)}>{work.clientId}</td>
            <td>{work.description}</td>
            <td>{new Date(work.date).toLocaleDateString("en-GB")}</td>
            <td>{work.price}</td>
        </tr>
    );
}