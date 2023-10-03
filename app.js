import React, { useState } from "react"
import './style.css'

 const App =() =>{
   
     const [formData,setFormData] =  useState({
          name:'',
          email:'',
          password:'',
          cpassword:''
     })
     const [error,setErrors] = useState({})

     const handelChange = (e)=>{
           const {name,value} = e.target
           setFormData({
               ...formData,
               [name] : value
           })
     }

     // const handelSubmt  
     const handelSubmit = (e)=>{
           e.preventDefault()
           if(valiDateForm()){
               console.log("form Data is Valid" ,formData);
           }
     }
     
// valiDateForm  
const valiDateForm = ()=>{
      let valid = true
      const newErrors = {}

      if(!formData.name.trim()){
           newErrors.name = "name is Required"
           valid  = false
      }
   
       const emailPartten  =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
       
      if(!emailPartten.test(formData.email.trim())){
          newErrors.email = "email is Required"
          valid  = false
     }
     // password 
     if(formData.password.length < 6 || formData.password.length > 15){
           newErrors.password = "Password Must be 6 - 15 character long"
           valid  = false
     }
//     c passowrd
 if(formData.password !== formData.cpassword){
     newErrors.cpassword = "Password Not Match"
     valid  = false
 }

      setErrors(newErrors)
}
     return(<>
          <div className="container">
               <form className="form"  onSubmit={handelSubmit}>

                    <div className="form-control">
                         <label>Name</label>
                         <input type="text" name="name" placeholder="name ...." 
                         value={formData.name}
                          onChange={handelChange}
                         />
                         {error.name && <span className="error">{error.name}</span>}
                    </div>

                    <div className="form-control">
                         <label>Email</label>
                         <input type="email" name="email" placeholder="email ...." 
                         value={formData.email}
                         onChange={handelChange}/>
                          {error.email && <span className="error">{error.email}</span>}

                    </div>

                    <div className="form-control">
                         <label>Password</label>
                         <input type="password" name="password" placeholder="password ...."
                         value={formData.password}  onChange={handelChange}/>
                           {error.password && <span className="error">{error.password}</span>}

                    </div>

                    <div className="form-control">
                         <label>Confirm Password</label>
                         <input type="password" name="cpassword" placeholder="cpassword ...." 
                         value={formData.cpassword} onChange={handelChange}/>
                         {error.cpassword && <span className="error">{error.cpassword}</span>}
                    </div>

                 <button type="submit">Submit</button>
               </form>

          </div>
     </>)

     }

export default App
