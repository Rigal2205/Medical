import {useState} from 'react'
import {useNavigate} from 'react-router'
import './CSS/Login.css'
import { Link } from 'react-router-dom'



const Login=()=>{
    const navigate=useNavigate()
    const [user,setUsers]=useState({
        username:'',password:''
    })

        let name,value

    const handleOnchange=(e)=>{
        name=e.target.name
        value=e.target.value
        setUsers({...user,[name]:value})
    }

    const handleSubmit=async (e)=>{
        e.preventDefault()
        const res=await fetch('http://localhost:3002/Login', 
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify
            ({
            username:user.username,
            password:user.password,
            })
       })
       if(res.status===500)
       {
         alert('Wrong email or password')
         
       }
       else if(res.status===401)
       {
         alert("Data Not Found")
         
       }
       else
       {
        alert("Login Successfully")
         navigate('/Home')
         setUsers({
           username:'',password:''
          })
        }
      }
        
       
        

    return(
      <>
      <section className="vh-100" style={{backgroundColor: "#8fc4b7"}}>
<div className="container h-100">
  <div className="row d-flex justify-content-center align-items-center h-100">
    <div className="col-lg-12 col-xl-11">
      <div className="card text-black" style={{borderRadius: '25px'}}>
        <div className="card-body p-md-5">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

              <form className="mx-1 mx-md-4">

                <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fas fa-user fa-lg me-3 fa-fw mb-4"></i>
                  <div className="form-outline flex-fill mb-0">
                    <input type="text" id="form3Example1c" className="form-control" name="username" value={user.username} onChange={handleOnchange}/>
                    <label className="form-label" for="form3Example1c" >Your Name</label>
                  </div>
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fas fa-lock fa-lg me-3 fa-fw mb-4"></i>
                  <div className="form-outline flex-fill mb-0">
                    <input type="password" id="form3Example4c" className="form-control" name="password" value={user.password} onChange={handleOnchange} />
                    <label className="form-label" for="form3Example4c" >Password</label>
                  </div>
                </div>
                
                <div className="text-center text-lg-start mt-4 pt-2">
            <button type="button" className="btn btn-primary btn-lg"
              style={{paddingleft: "2.5rem", paddingright: "2.5rem",backgroundColor:"lightblue", color:"black"}} onClick={handleSubmit}>Login</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/"
                className="link-danger">Register</Link></p>
          </div>

              </form>

            </div>
            <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                className="img-fluid" alt="Sample image"/>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
      </>
  )


}

export default Login;