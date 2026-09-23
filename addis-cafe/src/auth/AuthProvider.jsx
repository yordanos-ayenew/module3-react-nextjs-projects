import { useState } from "react";
import AuthContext from "./AuthContext";

function AuthProvider({children}){
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    function login(phone){
        setLoading(true);
        return new Promise((resolve)=>{
            setTimeout(()=>{
                setUser({phone});
                setLoading(false);
                resolve();
            }, 500);
        });
    }
    function logout(){
        setUser(null);
    }
    return(
        <AuthContext.Provider
           value={{user, loading, login, logout}}
        >
            {children}
           </AuthContext.Provider>
    );
}
export default AuthProvider;