import { useState } from "react";

const Guest:React.FC = () =>{
    const [name, setName] = useState<string>('');
    const [guests, setGuests] = useState<string[]>([]);

    const onHandleChange = (e:React.ChangeEvent<HTMLInputElement> ) =>{
        setName(e.target.value );
    }

    const onHandleClick = (e:React.MouseEvent) => {
        e.preventDefault();
        setGuests((prevGuests) => [...prevGuests, name]);
        setName('');

    }

    return (<div>  
        <h3>Guest List</h3> 
        <input type="text"  placeholder="Enter Guest Name" onChange={onHandleChange} value={name}/>
        <button onClick={onHandleClick}>Add Guest</button>

        <ul>
            {guests.map((guest) => <li key={guest}>{guest}</li>)}
        </ul>
        </div>)
}

export default Guest;