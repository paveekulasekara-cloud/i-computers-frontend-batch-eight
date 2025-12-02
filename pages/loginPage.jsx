import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    async function login(){
        console.log("Login button clicked")
        console.log("Email:", email);
        console.log("Password:", password)

        try{
            const res = await axios.post(import.meta.env.VITE_BACKEND_URL +"/users/login",{
                email: email,
                password: password,
            })

                console.log(res)

                localStorage.setItem("token", res.data.token)

                if(res.data.role == "admin"){

                    //window.location.href = "/admin";
                    navigate("/admin")

                }else {

                    //window.location.href = "/"
                    navigate("/")

                }

                //alert("Login successfull! Welcome back.")

                toast.success("Login successful! Welcome back.")

        } catch (err){
            //alert("Login failed! Please check your credentials and try again.")
            toast.error("Login failed! Please check your credentials and try again.")
            
            console.log("Error during login:")
            console.log(err);
        }
    }

    return(
        <div className="w-full h-screen bg-[url('/bg.jpg')] bg-center bg-cover bg-no-repeat flex">

            <div className="w-[50%] h-full flex justify-center items-center flex-col p-[50px]">

                <img 
                    src="/logo.png" 
                    alt="logo" 
                    className="w-[200px] h-[200px] mb-5 object-cover"
                />

                <h1 className="text-[50px] text-cyan text-shadow-accent text-shadow-2xs text-center font-bold">
                    Plug In. Level Up.
                </h1>

                <p className="text-[30px] text-primary italic">
                    Next-gen tech for next-gen users
                </p>
                
            </div>

            <div className="w-[50%] h-full flex justify-center items-center">

                <div className="w-[450px] h-[600px] backdrop-blur-lg shadow-2xl rounded-2xl flex flex-col justify-center items-center">

                    <h1 className="text-[40px] font-bold mb-5 text-accent text-shadow-white ">
                        Login
                    </h1>

                    <input 
                        onChange={
                            (e)=>{
                                setEmail(e.target.value)
                            }
                        }
                        type="email" 
                        placeholder="your email" 
                        className="w-[350px] h-[50px] mb-5 rounded-lg border border-accent p-2.5 text-[20px] focus:outline-none focus:ring-2 focus:ring-cyan"
                    />

                    <input 
                         onChange={
                            (e)=>{
                                setPassword(e.target.value)
                            }
                        }
                        type="password" 
                        placeholder="your password" 
                        className="w-[350px] h-[50px]  rounded-lg border border-accent p-2.5 text-[20px] focus:outline-none focus:ring-2 focus:ring-cyan"
                    />

                    <p className="text-black not-italic w-[350px] text-right mb-5">
                        Forget your password?
                        <Link to="/forgot-password" className="text-cyan italic">
                            Reset it here
                        </Link>
                    </p>
                    <button onClick={login} className="w-[350px] h-[50px] bg-accent text-white font-bold text-[20px] rounded-lg border-2 border-accent hover:bg-transparent hover:text-accent">
                        Login
                    </button>

                    <p className="text-black not-italic">
                        Don't have an account? 
                        <Link to="/register" className="text-cyan italic">
                        Register here
                        </Link>
                    </p>

                </div>
                
            </div>
        </div>
    )
}