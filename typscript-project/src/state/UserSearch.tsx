import { useState } from "react";

const users=[
    {name:'Sarah',age:20},
    {name:'Alex',age:20},
    {name:'Michael',age:20},]
const UserSearch:React.FC = () =>{
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [usersList, setUsersList]=useState<{name:string,age:number}[] | undefined>(users);

    const onHandleChange=(e:React.ChangeEvent<HTMLInputElement>) =>{
        setSearchTerm(e.target.value);
    }
    const onHandleClick = (e:React.MouseEvent) =>{
        e.preventDefault();
        const filterdUsers=users.filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setUsersList(filterdUsers)
    }
    return <div>
        User Search
        <input value={searchTerm} onChange={onHandleChange} />
        <button onClick={onHandleClick}>Search</button>
        <ul>
            {usersList &&usersList.map((user) => <li key={user.name}> <p>{user.name}: {user.age}</p></li>)}
        </ul>
    </div>
}
export default UserSearch;