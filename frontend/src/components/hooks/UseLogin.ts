import { useState } from 'react'
import { useAuthContext } from '../context/AuthContext';

function UseLogin() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const {setAuthUser} = useAuthContext();

    const login = async(email:string, password:string)=>{
        if(!email || !password){
            setError("Email and Password are required");
            return;
        }
        setLoading(true);
        setError(null);
        try {
            const res = await fetch("http://localhost:8000/user/login",{
                method:"POST",
                credentials:"include",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify({email,password})
            });
            const data = await res.json();

            if(data.error){
                throw new Error(data.error);
            }
            localStorage.setItem("user",JSON.stringify(data));
            setAuthUser(data);
        } catch (error: unknown) {
            if(error instanceof Error){
                setError(error.message || "Something went wrong");
            }else{
                setError("An unexpected error occurred");
            }
        }finally{
            setLoading(false);
        }
    }
    return {loading, error, login};
}

export default UseLogin