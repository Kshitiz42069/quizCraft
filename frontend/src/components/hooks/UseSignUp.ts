import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

function UseSignUp() {
    const [loading,setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const {setAuthUser} = useAuthContext();

    const signup = async (email:string,fullname:string,password:string,confirmPassword:string)=>{
        if(!email || !fullname || !password || !confirmPassword){
            setError("All field are required");
            return;
        }
        if(password !== confirmPassword){
            setError("Passwords do not match");
            return;
        }
        setLoading(true);
        setError(null);
        try {
            const res = await fetch("http://localhost:8000/user/signup",{
                method:"POST",
                credentials:"include",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify({email,fullname,password,confirmPassword})
            });
            const data = await res.json();

            if(data.error){
                throw new Error(data.error);
            }
            localStorage.setItem("user",JSON.stringify(data));
            console.log(data);
            setAuthUser(data);
        } catch (error:unknown) {
            if(error instanceof Error){
                setError(error.message || "Something went wrong");
            }else{
                setError("An unexpected error occured");
            }
        }
        finally{
            setLoading(false);
        }
    }
    return {loading, error, signup};
}

export default UseSignUp