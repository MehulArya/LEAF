import { createContext , useContext , useState } from "react"

const Auth = createContext()

export function Authdata ({childrens}){

    const [user,setUser] = useState(null)

    function login(data){

    }

    function signup(data){

    }

    function logout(){
     setUser(null)
    }

    return (
    <Auth.Provider value={{login ,signup ,logout}}>
    {childrens}
    </Auth.Provider>
    );
} 



export const useAuth=()=>{
return useContext(Auth)
}

