import { useState } from "react"
import userServices from "../../services/user";
import toast from "react-hot-toast";

const Register = ({ setModalType }) => {
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      role: "676ff501899b29c34cd3beb5",
      name: name,
      email: email,
      password: password,
    }

    try {
      const response = await userServices.register(data);
  
      if (response.success) {
        toast.success('Your admin!')
        setModalType('login')
      } else {
        console.error("Register failed:", response.message);
      }
    } catch (error) {
      console.error("An error occurred:", error.message);
    }
  };

  return (
    <div className="p-3">
      {/* Text */}
      <div className="text-2xl font-bold text-white text-start mb-2" style={{ fontFamily: "'Lucida Handwriting', cursive" }}>Register</div>
    
      {/* Form */}
      <form className="flex flex-col mb-5" onSubmit={handleSubmit}>
        <div className="p-4">
          <label htmlFor="name" className="input-label">Name</label>
          <input type="name" id="name" className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg block w-full p-2.5" placeholder="Enter your name..." value={name} onChange={(e) => {setName(e.target.value)}} />
        </div>

        <div className="p-4">
          <label htmlFor="email" className="input-label">Email</label>
          <input type="email" id="email" className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg block w-full p-2.5" placeholder="Enter your email..." value={email} onChange={(e) => {setEmail(e.target.value)}} />
        </div>
    
        <div className="p-4">
          <label htmlFor="password" className="input-label">Password</label>
          <input type="password" id="password" className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg block w-full p-2.5" placeholder="Enter your password..." value={password} onChange={(e) => {setPassword(e.target.value)}} />
        </div>
    
        <div className="p-4">
          <button type="submit" className="text-white bg-yellow-500 hover:bg-yellow-600 cursor-pointer duration-300 mt-2 py-2 px-8 rounded-full relative z-10 w-full">Register</button>
        </div>
      </form>
    
      {/* Change Form */}
      <div className="flex gap-4 justify-center items-center p-5 border border-gray-500 rounded-lg max-w-[450px] w-full">
        <p>Do you have an account?</p>
        <span className="text-blue-400" onClick={() => setModalType('login')}>Register</span>
      </div>
    </div>
  )
}

export default Register