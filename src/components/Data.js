import Axios from "axios"
import { useEffect, useState } from 'react'

export default function Data() {

    const [data, setData] = useState([]);

    useEffect(() => {
        Axios.get("https://dummyjson.com/users")
        .then((res) => {
            if (res.status === 200) {
                setData(res.data.users);
            }
            else {
                Promise.reject();
            }
        })
        .catch((err) => {
            alert(err);
        })
    }, [])

    const FetchData = () => {
        return data.map((val) => {
            return (
                <tr className="">
                    <td className="">{val.id}</td>
                    <td className="info"><img src={val.image} alt="pfp.jpg" height={30}/></td>
                    <td>{val.firstName}</td>
                    <td>{val.lastName}</td>
                    <td>{val.gender}</td>
                    <td>{val.email}</td>
                    <td>{val.username}</td>
                    <td>{val.domain}</td>
                    <td>{val.ip}</td>
                    <td>{val.university}</td>
                </tr>
            )
        })
    }

    return (
        <div className="bg-dark">
            <div className="h2 text-light">Dummy Data</div>
            <table className="mx-auto bg-dark text-light">
                <tr className="">
                    <th className="small"><span>Sno</span></th> 
                    <th className="small">Profile Pic</th>
                    <th className="small">First Name</th>
                    <th className="small">Last Name</th>
                    <th className="small">Gender</th>
                    <th className="small">E-mail</th>
                    <th className="small">Username</th>
                    <th className="small">Domain</th>
                    <th className="small">IP</th>
                    <th className="small">University</th>
                </tr>
                {FetchData()}
            </table>
        </div>
    )
}