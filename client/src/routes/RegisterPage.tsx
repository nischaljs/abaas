import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="bg-amber-100 min-h-screen flex items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="w-96 max-w-full rounded-2xl bg-amber-200 shadow-xl flex flex-col p-6 gap-4">
        <h5 className="font-bold text-center text-3xl opacity-90">Register</h5>

        <div className="flex flex-col gap-1">
          <label htmlFor="username" className="text-lg font-medium">Username</label>
          <input 
            type="text" 
            name="username" 
            id="username" 
            className="bg-amber-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400" 
            placeholder="Enter a username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-lg font-medium">Email</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            className="bg-amber-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400" 
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        
        <div className="flex flex-col gap-1 relative">
          <label htmlFor="password" className="text-lg font-medium">Password</label>
          <input 
            type={showPassword ? "text" : "password"} 
            name="password" 
            id="password" 
            className="bg-amber-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 pr-10" 
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
          <div 
            className="absolute right-3 top-[58%] transform -translate-y-1/2 text-2xl text-gray-600 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>
        
        <button type="submit" className="w-full bg-amber-400 hover:bg-amber-500 text-white text-lg font-semibold rounded-lg py-3 cursor-pointer">
          Register
        </button>
        <p className="text-center text-gray-700 mt-3">Already have an account? <span onClick={()=>navigate("/login")} className="text-amber-600 hover:underline cursor-pointer">Login</span></p>
      </form>
    </div>
  );
};

export default RegisterPage;