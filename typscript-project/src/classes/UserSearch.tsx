import { Component } from "react";

interface User{
    name:string,
    age:number
}
interface UserSearchProps{
    users:User[]
}

interface UserSearchState{
    name:string,
    user:User | undefined
}
class UserSearch extends Component<UserSearchProps>{
    state:UserSearchState = {
        name: '',
        user: undefined
    }
    onHandleClick= (e:React.MouseEvent) =>{
        e.preventDefault();
        const foundUser=this.props.users.find((user) => user.name.toLowerCase().includes(this.state.name.toLowerCase()));
        this.setState({user:foundUser})
    }
   render() {
    const {name,user}=this.state
       return  <div>
       User Search
       <input value={name} onChange={e => this.setState({name:e.target.value})} />
       <button onClick={this.onHandleClick}>Search</button>
       <ul>
           {user && <li>{user.name}: {user.age}</li>}
       </ul>
   </div>
   }
}

export default UserSearch