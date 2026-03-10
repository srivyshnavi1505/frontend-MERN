import {useState} from 'react'
import { UserContext } from './UserContext'

function UserContextProvider({children}){
    const [user,setUser] = useState({
        name: '',
        age: 0,
        email: ''
    });

    // generic updater merges provided fields with current user
    const updateUser = (updates) => {
        setUser(prev => ({...prev,...updates}));
    };

    return (
        <UserContext.Provider value={{user, updateUser}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider



//function to modify the userStateb by updating a property
//consume this context in components A,B and update from both 