import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import myContext from '../../context/data/myContext'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../fireabase/FirebaseConfig';
import { toast } from 'react-toastify';
import Loader from '../../components/loader/Loader';
import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Login() {
    const context = useContext(myContext)
    const {loading, setLoading} = context;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const login = async () => {
        setLoading(true)
        try {
            const result = await signInWithEmailAndPassword(auth,email,password);
            toast.success("Login successful", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              })
            localStorage.setItem('user', JSON.stringify(result))
            navigate('/deploy/')
            setLoading(false)
            
        } catch (error) {
            console.log(error)
            setLoading(loading)
        }

    }
   
    return (
        <div className='  flex items-center justify-center w-full h-screen bg-gray-100'>
            {loading && <Loader/>}
            <div  className=' flex overflow-hidden bg-white w-[50rem] h-[550px] md:h-[100%] flex-row md:flex-col-reverse rounded-xl shadow-lg '>
                <div  className="flex-1 flex items-center justify-center">
                <div className='flex flex-col gap-8'>
                    <div className='flex items-center space-x-4 py-2 text-4xl '>
                        
                        <h1 className='font-semibold'>Login</h1>
                        <FaUser />
                        
                    </div>
                    <div className='flex items-center space-x-4 border-b-[1px] border-black py-2'>
                        <MdEmail  className='text-xl'/>
                        <input type="email"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                            name='email'
                            className=' flex items-center space-x-4 w-[30rem] px-4 py-2'
                            placeholder='Email'
                        />
                    </div>
                    <div className='flex items-center space-x-4 border-b-[1px] border-black py-2'>
                        <FaLock  className='text-xl'/>
                        <input
                            type="password"
                            value={password}
                            onChange={(e)=> setPassword(e.target.value)}
                            className=' flex items-center space-x-4 w-[30rem] px-4 py-2'
                            placeholder='Password'
                        />
                    </div>
                    <div  className=' flex justify-center mb-3'>
                        <button
                        onClick={login}
                            className='text-3xl bg-black w-fit py-3 px-8 text-white text-base rounded-md mt-8'>
                            Login
                        </button>
                    </div>
                    <div>
                        <h2 className='text-black text-lg'> Don&apos;t have an account ?  <Link className=' font-bold underline' to={'/signup'}>Signup</Link></h2>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Login