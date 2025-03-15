import { useState } from "react"


const LoginPage = () => {
    const [formData, setFormData ] = useState({
        email: "",
        password:""
    })
  return (
    <div className="bg-amber-100 w-100% h-100% flex items-center justify-between">
        <form >
            <h5 className="">Login Form</h5>
        </form>
    </div>
  )
}

export default LoginPage