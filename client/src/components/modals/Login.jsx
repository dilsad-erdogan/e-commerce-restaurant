import { useState } from "react"
import GoogleIcon from "/google.png"

const Login = ({ setModalType }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  }

  return (
    <div className="p-3">
      {/* Text */}
      <div className="text-2xl font-bold text-white text-start mb-2" style={{ fontFamily: "'Lucida Handwriting', cursive" }}>Login</div>

      {/* Form */}
      <form className="flex flex-col mb-5" onSubmit={handleSubmit}>
        <div className="p-4">
          <label htmlFor="email" className="input-label">Email</label>
          <input type="email" id="email" className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg block w-full p-2.5" placeholder="Enter your email..." value={email} onChange={(e) => {setEmail(e.target.value)}} />
        </div>

        <div className="p-4">
          <label htmlFor="password" className="input-label">Password</label>
          <input type="password" id="password" className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg block w-full p-2.5" placeholder="Enter your password..." value={password} onChange={(e) => {setPassword(e.target.value)}} />
        </div>

        <div className="p-4">
          <button type="submit" className="text-white bg-yellow-500 hover:bg-yellow-600 cursor-pointer duration-300 mt-2 py-2 px-8 rounded-full relative z-10 w-full">Login</button>
        </div>
      </form>

      {/* Or */}
      <div className="flex items-center w-full mb-5">
        <div className="border-t border-white w-full"></div>
        <span className="mx-4 text-gray-300">OR</span>
        <div className="border-t border-white w-full"></div>
      </div>

      {/* Login Google */}
      <div className="flex justify-center items-center p-4 gap-5">
        <img src={GoogleIcon} alt="GoogleIcon" className="max-h-6" />
        <p className="text-blue-400">Log in with Google</p>
      </div>

      {/* Change Form */}
      <div className="flex gap-4 justify-center items-center p-5 border border-gray-500 rounded-lg max-w-[450px] w-full">
        <p>Don&apos;t have an account?</p>
        <span className="text-blue-400" onClick={() => setModalType('register')}>Sign Up</span>
      </div>
    </div>
  )
}

export default Login