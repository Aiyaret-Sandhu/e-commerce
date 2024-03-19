import { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import myContext from '../../context/data/myContext';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, fireDB } from '../../fireabase/FirebaseConfig';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import Loader from '../../components/loader/Loader';
import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaSignature } from "react-icons/fa";
import logo from './logo.png';

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const signup = async () => {
        setLoading(true)
        if (name === "" || email === "" || password === "") {
            return toast.error("All fields are required")
        }

        try {
            const users = await createUserWithEmailAndPassword(auth, email, password);

            // console.log(users)

            const user = {
                name: name,
                uid: users.user.uid,
                email: users.user.email,
                time : Timestamp.now()
            }
            const userRef = collection(fireDB, "users")
            await addDoc(userRef, user);
            toast.success("Account Creation Successful", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              })
            setName("");
            setEmail("");
            setPassword("");
            setLoading(false)
            
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    return (
        <div className='  flex items-center justify-center w-full h-screen bg-gray-100'>
            {loading && <Loader/>}
            <div className=' flex overflow-hidden bg-white w-[50rem] h-[550px] md:h-[100%] flex-row md:flex-col-reverse rounded-xl shadow-lg '>
                
                <div  className="flex-1 flex items-center justify-center">
                    <div className='flex flex-col gap-8'>
                    <div className='flex justify-center'>
                        <img src={logo} alt="" className='w-64' /> 
                    </div>
                    <div className='flex items-center justify-center space-x-4 -mt-4 text-4xl '>
                        <h1 className='font-semibold'> Sign-up</h1>
                        <FaSignature />
                    </div>
                    <div className='flex items-center space-x-4 border-b-[1px] border-black py-2'>
                        <FaUser />
                        <input type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            name='name'
                            className='flex items-center space-x-4 w-[30rem]  px-4 py-2'
                            placeholder='Name'
                        />
                    </div>

                    <div className='flex items-center space-x-4 border-b-[1px] border-black py-2'>
                        <MdEmail />
                        <input type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            name='email'
                            className=' flex items-center space-x-4 w-[30rem] px-4 py-2'
                            placeholder='Email'
                        />
                    </div>
                    <div className='flex items-center space-x-4 border-b-[1px] border-black py-2'>
                        <FaLock />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='flex items-center space-x-4 w-[30rem] px-4 py-2'
                            placeholder='Password'
                        />
                    </div>
                    <div className=' flex justify-center mb-3'>
                        <button
                            onClick={signup}
                            className='text-3xl bg-black w-fit py-3 px-8 text-white text-base rounded-md'>
                            Submit
                        </button>
                    </div>
                    <div>
                        <h2 className='text-black text-lg'> Have an account : <Link className=' font-bold underline' to={'/login'}>Login</Link></h2>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Signup