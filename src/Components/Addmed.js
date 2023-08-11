import React from "react";
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Addmed=()=>{

    const navigate=useNavigate()
    const [sdata,setsdata]=useState({
        id:'',
        name:'',
        category:'',
        price:'',
        description:'',
        urlToImage:''
    })
    
    
    
    
    let name,value
    const handleOnchange=(e)=>{
    name=e.target.name
    value=e.target.value
    
    setsdata({...sdata,[name]:value})
    }

    
    // useEffect(()=>{
    //     fetch("http://localhost:3002/Resaddmed",{
    //       method:"GET",
    //     })
    //     .then((res)=>res.json())
    //     .then((data)=>{
    //       console.log(data);
    //       setsdata({...sdata,data})
          
    //     })
    //   },[]);

    const handleSubmit=async(e)=>{
        e.preventDefault()
        
            axios.post('http://localhost:3002/Addmed',sdata)
            .then(res=>console.log(res))
            setsdata({
                id:'',
                name:'',
                category:'',
                price:'',
                description:'',
                urlToImage:''
            
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            setsdata(data.data);
        })    

      navigate('/Home') 
    }
    return(
        <>
        <h1>Addmed</h1>
        <section className="vh-100">
            <form>
            <div>
            <label>Id:</label><input type="number" name="id" value={sdata.id} onChange={handleOnchange} />
            <label>Name:</label><input type="text" name="name" value={sdata.name} onChange={handleOnchange} />
            <label>category:</label><input type="text" name="category" value={sdata.category} onChange={handleOnchange} />
            <label>price:</label><input type="number" name="price" value={sdata.price} onChange={handleOnchange} />
            <label>Description:</label><input type="textbox" name="description" value={sdata.description} onChange={handleOnchange} />
            <label>Url:</label><input type="text" name="urlToImage" value={sdata.urlToImage} onChange={handleOnchange}/>
            </div>
            <div className="text-center text-lg-start mt-4 pt-2">
            <button type="button" className="btn btn-primary btn-lg"
              style={{paddingleft: "2.5rem", paddingright: "2.5rem",backgroundColor:"lightblue", color:"black"}} onClick={handleSubmit}>Register</button>
            {/* <p className="small fw-bold mt-2 pt-1 mb-0">If already have an account? <Link to="/Login"
                className="link-danger">Login</Link></p> */}
          </div>
                </form>
        </section>

        
        <div className='item'>
        <div className='container my-5'>
          
          <div className='row'>
          {/* {data.map((element)=>{
              
              return <div className='col-md-4' key={element.aurl}>
            <Medicaldata name={element.aname!==0?element.aname.slice(0,45):""} price={element.aprice!==0?element.aprice:""} description={element.adescription!==0?element.adescription.slice(0,88):""} imageUrl={element.aurl}/> 
        </div>
         })
          } */}
          </div>

      </div>
        </div>
        </>
    )
}

// export default Addmed;

// import React from "react";
// import { useState} from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { useEffect } from "react";
// import Medicaldata from "./Medicaldata"

// const Addmed=()=>{

//     const navigate=useNavigate()
//     const [sdata,setsdata]=useState({
//     aname:'',
//     aprice:'',
//     adescription:'',
//     aurl:''
//     })
    
    
    
    
//     let name,value
//     const handleOnchange=(e)=>{
//     name=e.target.name
//     value=e.target.value
    
//     setsdata({...sdata,[name]:value})
//     }

//     useEffect(()=>{
//         fetch("http://localhost:3002/Resaddmed",{
//           method:"GET",
//         })
//         .then((res)=>res.json())
//         .then((rdata)=>{
//           console.log(rdata,"userData");
//         //   setsdata(rdata);
//         })
//       },[]);

//     const handleSubmit=async(e)=>{
//         e.preventDefault()
        
//             axios.post('http://localhost:3002/Addmed',sdata)
//             .then(res=>console.log(res))
//             setsdata({
//                 aname:'',
//                 aprice:'',
//                 adescription:'',
//                 aurl:''
            
//         })
//         // .then((res)=>res.json())
//         // .then((data)=>{
//         //     console.log(data);
//         //     setsdata(data.data);
//         // })    

//       navigate('/Home') 
//     }
//     return(
//         <>
//         <h1>Addmed</h1>
//         <section className="vh-100">
//             <form>
//             <div>
//             <label>Name:</label><input type="text" name="aname" value={sdata.aname} onChange={handleOnchange} />
//             <label>price:</label><input type="number" name="aprice" value={sdata.aprice} onChange={handleOnchange} />
//             <label>Description:</label><input type="textbox" name="adescription" value={sdata.adescription} onChange={handleOnchange} />
//             <label>Url:</label><input type="text" name="aurl" value={sdata.aurl} onChange={handleOnchange}/>
//             </div>
//             <div className="text-center text-lg-start mt-4 pt-2">
//             <button type="button" className="btn btn-primary btn-lg"
//               style={{paddingleft: "2.5rem", paddingright: "2.5rem",backgroundColor:"lightblue", color:"black"}} onClick={handleSubmit}>Register</button>
//             <p className="small fw-bold mt-2 pt-1 mb-0">If already have an account? <Link to="/Login"
//                 className="link-danger">Login</Link></p>
//           </div>
//                 </form>
//         </section>

        
//         <div className='item'>
//         <div className='container my-5'>
          
//           <div className='row'>
//           {/* {data.map((element)=>{
              
//               return <div className='col-md-4' key={element.url}>
//             <Medicaldata name={element.aname!==0?element.aname.slice(0,45):""} price={element.aprice!==0?element.aprice:""} description={element.adescription!==0?element.adescription.slice(0,88):""} imageUrl={element.aurl}/> */}
//         {/* </div> */}
//           {/* }) */}
//           {/* } */}
//           </div>

//       </div>
//         </div>
//         </>
//     )
// }

export default Addmed;