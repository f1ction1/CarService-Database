import { useState, useEffect } from "react";
import TableWorkItem from "./TableWorkItem";

export default function TableWorks({onClickClientfunc}) {
    const [works, setWorks] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/work/getAll").then(value => value.json().then(value => setWorks(value)));
    }, []);
    console.log("Works: ", works);
    return (
        <div className="table-responsive">
            <table>
                <thead>
                    <tr>
                        <th>Id клієнта</th>
                        <th>Oпис роботи</th>
                        <th>Дата</th>
                        <th>Ціна</th>
                    </tr>
                </thead>
                <tbody>
                    {works.length == 0 && <tr><td>Trying to fetch data...</td></tr>}
                    {works.length > 0 && works.map((work, index) => <TableWorkItem work={work} key={work.workId} index={index} onClickClientfunc={onClickClientfunc}/>)}
                </tbody>
            </table>
        </div>
    );
}