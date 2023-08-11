const mongoose=require('mongoose')
const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const cors=require('cors')
const bcrypt=require('bcrypt')
const user = require('./Register')
const adata = require('./Addmed')
const add = require('./Address')
const url='mongodb+srv://test:GRNESVBQY8mZQNJd@cluster0.fcxppaa.mongodb.net/?retryWrites=true&w=majority'

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cors())
app.use(bodyParser.json()) 

mongoose.connect(url).then(()=>{
    console.log('Connected to mongoose')
}).catch((e)=>{
    console.log("Oh no !! error",e)
})



app.listen(3002,()=>{
  console.log('app listening on port 3002')
})


app.get('/product/get',(req,res)=>{
  user.findOne((err,data)=>{
    if(err){
      res.status(505).send(err);
    }
    else{
      res.status(200).send(data);
    }
  })
})


app.post('/Register',async (req,res)=>{
  const {username,password}=req.body
  const HashPassword=await bcrypt.hash(password,12)
  const User=new user({
    username,
        password:HashPassword
    })
    const uname=await user.findOne({username});

     if(!uname)
    {
                 
      User.save().then(()=>{
                      console.log('user added ')
                      return res.status(200).json({msg:'user added'}) 
                  }).catch((e)=>{
                      console.log('Error adding a user ',e)
                      return res.status(400).json({msg:'Error adding a user'}) 
                  }) 
    }
    else{
        console.log("user already exists")
        return res.status(501).json({msg:"User already exists"})
} 
})

app.post('/Address',async(req,res)=>{
  const {fname,lname,city,pin,address,email}=req.body;

  const adata=new add({
    fname,
    lname,
    city,
    pin,
    address,
    email
  })

  adata.save().then(()=>{
      console.log('New data added ')
  }).catch((e)=>{
      console.log('Error adding a user ',e)
  })
})

// app.post('/Addmed',async(req,res)=>{
//     const {id,name,category,price,description,urlToImage}=req.body;

//     const sdata=new adata({
//         id,
//         name,
//         category,
//         price,
//         description,
//         urlToImage
//     })

//     sdata.save().then(()=>{
//         console.log('New data added ')
//     }).catch((e)=>{
//         console.log('Error adding a user ',e)
//     })
// })

app.post('/Login',async(req,res)=>{
    const {username,password}=req.body;
    const User=await user.findOne({username});
    if(User===null){
            console.log(res.msg)
        return res.status(401).json({msg:'Enter Data'}) 
    }

    if(!User)
    {
            console.log(res.msg)
        return res.status(400).json({msg:'Data not found'})    
    }

    const validPassword=await bcrypt.compare(password,User.password);
    if(validPassword)
    {
            console.log("validPassword")   
            return (res.status(200).json(User))
    
        }
    else
    {
            console.log(res.msg)
        console.log("Invalid") 
        return res.status(500).json({msg:"Not done"}) 
           
    }
})

app.get('/Profile',async(req,res)=>{
  const pname=await user.find();
  res.json(pname)
})

app.get('/Resaddmed',async(req,res)=>{
  const alluser=await adata.find();
  res.json(alluser)
})

// app.get('/Resaddmed',async(req,res)=>{
//         const sdata=new adata({
//                 aname,
//         aprice,
//         adescription,
//         aurl
//     })

//     try{
//             const allUser=await sdata.find();
//             // res.send({status:"ok",rdata: allUser}); 
//             res.json(allUser);
//         } catch(error){
//                 console.log(error);
//             }
//         })
        
    // app.get('/Resaddmed',(req,res)=>{
    //     adata.find({}).then((data)=>{
    //         console.log(data);
    //         res.send({status: 200,data: data})
    //         if(res.status==200){
    //             console.log("data send")
    //         }
    //         else{
    //             console.log("Not send")
    //         }
            
    //     }).catch((e)=>{
    //         console.log(e)
    //         res.send(err)
    //     })

    // })    

    // adata.find({}).then((data)=>{
    //             console.log(data);
                
    // }).catch((e)=>{
    //             console.log(e)
               
    //         })

    const data = [
      {
        "id":"001",
        "name": "Ranitidine",
        "category": "babycare",
        "price":41.00 ,
        "description": "Ranitidine is a medicine that reduces the amount of acid your stomach makes. It was used for indigestion, heartburn and acid reflux, gastro-oesophageal reflux disease (GORD – this is when you keep getting acid reflux), and to prevent and treat stomach ulcers.",
        "urlToImage": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSFZZbOE9ZsvNGnjZP27U3bKUNvFQiNYRaO4eah36-r3Awxm7u5fL-GghEVr9ROHp7DMMaZsmo1s_RACDirOr-D2b1GyrASznXX0hq59kw7IOz9iIGGs2qcazQ&usqp=CAE"
      },
      {
        "id":"002",
        "name": "Pantoprazole",
        "category": "health",
        "price":89.25,
        "description": "Pantoprazole is used to allow the esophagus to heal and prevent further damage to the esophagus in adults with GERD. It is also used to treat conditions where the stomach produces too much acid, such as Zollinger-Ellison syndrome in adults. Pantoprazole is in a class of medications called proton-pump inhibitors.",
        "urlToImage": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS58NpvapDbIJXCbblx1NIM2X-vVjQcj3zk06eONhguCcWe23-j-TD9cOlkPmMqez_cfDzb00Fa83zrmZPW_jrEXIZxpE_FVXsnnvhJJ4YRmRFBXWNJHVxrJQ&usqp=CAE"
      },
      {
        "id":"003",
        "name": "Paracetamol",
        "category": "babycare",
        "price":15.29,
        "description": "Paracetamol is a commonly used medicine that can help treat pain and reduce a high temperature (fever). It's typically used to relieve mild or moderate pain, such as headaches, toothache or sprains, and reduce fevers caused by illnesses such as colds and flu.",
        "urlToImage": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQVd90CUFQP4gIVnPUWxQU10HkCQU4_Lp6BzfndOg7hcTBDDiRuyJbFIaOOqljIZUUoNFMf3P-935G50Yc7Ja79zHvFV6vp4w&usqp=CAE"
      },
      {
        "id":"004",
        "name": "Aspirin",
        "category": "health",
        "price":699.00,
        "description": "Aspirin is in a group of medications called salicylates. It works by stopping the production of certain natural substances that cause fever, pain, swelling, and blood clots. Aspirin is also available in combination with other medications such as antacids, pain relievers, and cough and cold medications.",
        "urlToImage": "https://5.imimg.com/data5/SELLER/Default/2021/6/TC/WG/WV/15667609/aspirin-tablet-500x500.jpeg"
      },
      {
        "id":"005",
        "name": "Furosemide",
        "category": "babycare",
        "price":11.00,
        "description": "Furosemide is used alone or in combination with other medications to treat high blood pressure. Furosemide is used to treat edema (fluid retention; excess fluid held in body tissues) caused by various medical problems, including heart, kidney, and liver disease.",
        "urlToImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4dSgTB983ooZCP5vQAdNs1ME1YvyzUgASIw&usqp=CAU"
      },
      {
        "id":"006",
        "name": "Cabergoline",
        "category": "ayurveda",
        "price":175.10,
        "description": "Cabergoline is used to treat different types of medical problems that occur when too much of the hormone prolactin is produced. It can be used to treat certain menstrual problems, fertility problems in men and women, and pituitary prolactinomas (tumors of the pituitary gland).",
        "urlToImage": "https://ecommerce.genericartmedicine.com/upload/products/product-photo-1089.jpg"
      },
      {
        "id":"007",
        "name": "Ondansetron",
        "category": "personalcare",
        "price":450.00,
        "description": "Ondansetron is used to prevent nausea and vomiting that is caused by cancer medicines (chemotherapy) or radiation therapy. It is also used to prevent nausea and vomiting that may occur after surgery. Ondansetron works in the stomach to block the signals to the brain that cause nausea and vomiting.",
        "urlToImage": "https://5.imimg.com/data5/SELLER/Default/2023/2/SX/SE/XN/148927032/260-250x250.jpg"
      },
      {
        "id":"008",
        "name": "Loperamide",
        "category": "womencare",
        "price":18.64,
        "description": "Loperamide is used to control and relieve the symptoms of acute diarrhea. It is also used to treat chronic diarrhea in patients with inflammatory bowel disease. Loperamide helps stop diarrhea by slowing down the movements of the intestines.",
        "urlToImage": "https://wellonapharma.com/admincms/product_img/product_resize_img/Loperamide%20Hydrochloride%20Tablets_26-01-2017-13:03:27.jpg"
      },
      {
        "id":"009",
        "name": "Metronidazole",
        "category": "health",
        "price":13.00,
        "description": "Metronidazole belongs to the class of medicines known as antibiotics. It works by killing bacteria or preventing their growth. However, this medicine will not work for colds, flu, or other virus infections. This medicine is available only with your doctor's prescription.",
        "urlToImage": "https://cpimg.tistatic.com/08264292/b/4/Flagyl-200-mg-Metronidazole-Tablets-IP-.jpg"
      },
      {
        "id":"010",
        "name": "Ciprofloxacin",
        "category": "personalcare",
        "price":171.50,
        "description": "Ciprofloxacin belongs to the class of drugs known as quinolone antibiotics. It works by killing bacteria or preventing their growth. However, this medicine will not work for colds, flu, or other virus infections. This medicine is available only with your doctor's prescription.",
        "urlToImage": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcThdxsDGgwogf0ruMrOJOVe4I3G1RYb_kDL2ztdRk0LOmTwe6rT5_2wg3ELwijOofhL8izh4TyIhHeXNGwUzxYfELfSAbsBfg&usqp=CAE"
      },
      {
        "id":"011",
        "name": "Ketoconazole",
        "category": "womencare",
        "price":190.00,
        "description": "Ketoconazole is a drug used in the management and treatment of fungal infections. It is in the imidazole antifungal class of medications. This activity describes the indications, actions, and contraindications of ketoconazole as a valuable agent in treating fungal infections.",
        "urlToImage": "https://5.imimg.com/data5/CW/YF/DZ/SELLER-9666337/ketoconazole-ip-2-.jpeg"
      },
      {
        "id":"012",
        "name": "labetalol",
        "category": "health",
        "price":159.00,
        "description": "This medicine is a beta-blocker. It works by affecting the response to nerve impulses in certain parts of the body, like the heart. As a result, the heart beats slower and decreases the blood pressure.",
        "urlToImage": "https://cpimg.tistatic.com/06266086/b/4/Labetalol-Hydrochloride-IP-100mg-LABETALOL-100.jpg"
      },
      {
        "id":"013",
        "name": "Mifepristone",
        "category": "ayurveda",
        "price":370.00,
        "description": "Mifepristone is a 19-nor steroid with a bulky p-(dimethylamino) phenyl substituent above the plane of the molecule at the 11β-position responsible for inducing or stabilizing an inactive receptor conformation and a hydrophobic 1-propynyl substituent below the plane of the molecule at the 17α-position that increases its progesterone receptor binding affinity.",
        "urlToImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGkwpr8OSZ8Ijt0Q-zgovvwmNbZHORSPmh5g&usqp=CAU"
      },
      {
        "id":"014",
        "name": "Dinoprostone",
        "category": "personalcare",
        "price":235.00,
        "description": "Dinoprostone works by causing the cervix to thin and dilate (open) and the uterus to contract (cramp) the way it does during labor. Dinoprostone may also be used for other purposes as determined by your doctor. Dinoprostone is to be administered only by or under the immediate care of your doctor.",
        "urlToImage": "https://5.imimg.com/data5/SELLER/Default/2022/1/VC/OD/HO/111882134/dinoprostone-gel-500x500.jpg"
      },
      {
        "id":"015",
        "name": "Azithromycin",
        "category": "ayurveda",
        "price":117.70,
        "description": "Azithromycin is an antimicrobial medication used to treat and manage bacterial infections, including community-acquired pneumonia and sexually transmitted diseases. It is in the macrolide class of antimicrobials.",
        "urlToImage": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSGv810n7panD30Qf343H78WaoZxrrSkkDdmMk5QxdzeLTNRvljSjmvH7pKj_JAIjCLmdVxamI79pmDwRviy6TswNCwPGK7Ytd7LAtvuGOGtj4mN2lEcpf0&usqp=CAE "
      }
    ]


      app.get('/api/data', (req, res) => {
        const category = req.query.s;
        const productId = req.query.id;
        const subcategory = req.query.sub;
        const target_gender = req.query.g;
      
        if (category && productId && subcategory && target_gender) {
          // If all parameters are provided, return the matching item
          const filteredData = data.filter(
            (item) =>
              item.category === category &&
              item.product_id.toString() === productId &&
              item.subcategory === subcategory &&
              item.target_gender === target_gender
          );
          if (filteredData.length > 0) {
            res.json(filteredData[0]); // Return the first matching item
          } else {
            res.status(404).json({ error: "Item not found" });
          }
        } else if (category && productId && subcategory) {
          // If 's', 'id', and 'sub' parameters are provided, return matching item
          const filteredData = data.filter(
            (item) =>
              item.category === category &&
              item.product_id.toString() === productId &&
              item.subcategory === subcategory
          );
          if (filteredData.length > 0) {
            res.json(filteredData[0]); // Return the first matching item
          } else {
            res.status(404).json({ error: "Item not found" });
          }
        } else if (category && productId && target_gender) {
          // If 's', 'id', and 'g' parameters are provided, return matching item
          const target_genders = Array.isArray(target_gender) ? target_gender : [target_gender];
          const filteredData = data.filter(
            (item) =>
              item.category === category &&
              item.product_id.toString() === productId &&
              target_genders.includes(item.target_gender)
          );
          if (filteredData.length > 0) {
            res.json(filteredData[0]); // Return the first matching item
          } else {
            res.status(404).json({ error: "Item not found" });
          }
        } else if (category && subcategory && target_gender) {
          // If 's', 'sub', and 'g' parameters are provided, filter the data based on all three
          const target_genders = Array.isArray(target_gender) ? target_gender : [target_gender];
          const filteredData = data.filter(
            (item) =>
              item.category === category &&
              item.subcategory === subcategory &&
              target_genders.includes(item.target_gender)
          );
          res.json(filteredData);
        } else if (productId && subcategory && target_gender) {
          // If 'id', 'sub', and 'g' parameters are provided, filter the data based on all three
          const target_genders = Array.isArray(target_gender) ? target_gender : [target_gender];
          const filteredData = data.filter(
            (item) =>
              item.product_id.toString() === productId &&
              item.subcategory === subcategory &&
              target_genders.includes(item.target_gender)
          );
          res.json(filteredData);
        } else if (category && productId) {
          // If 's' and 'id' parameters are provided, return matching item
          const filteredData = data.filter(
            (item) =>
              item.category === category &&
              item.product_id.toString() === productId
          );
          if (filteredData.length > 0) {
            res.json(filteredData[0]); // Return the first matching item
          } else {
            res.status(404).json({ error: "Item not found" });
          }
        } else if (category && subcategory) {
          // If 's' and 'sub' parameters are provided, filter the data based on both
          const filteredData = data.filter(
            (item) =>
              item.category === category &&
              item.subcategory === subcategory
          );
          res.json(filteredData);
        } else if (category && target_gender) {
          // If 's' and 'g' parameters are provided, filter the data based on both
          const target_genders = Array.isArray(target_gender) ? target_gender : [target_gender];
          const filteredData = data.filter(
            (item) =>
              item.category === category &&
              target_genders.includes(item.target_gender)
          );
          res.json(filteredData);
        } else if (productId && subcategory) {
          // If 'id' and 'sub' parameters are provided, filter the data based on both
          const filteredData = data.filter(
            (item) =>
              item.product_id.toString() === productId &&
              item.subcategory === subcategory
          );
          res.json(filteredData);
        } else if (subcategory && target_gender) {
          // If 'sub' and 'g' parameters are provided, filter the data based on both
          const target_genders = Array.isArray(target_gender) ? target_gender : [target_gender];
          const filteredData = data.filter(
            (item) =>
              item.subcategory === subcategory &&
              target_genders.includes(item.target_gender)
          );
          res.json(filteredData);
        } else if (subcategory) {
          // If only 'sub' parameter is provided, filter the data based on the 's' query parameter
          const filteredData = data.filter((item) => item.subcategory === subcategory);
          res.json(filteredData);
        } else if (target_gender) {
          // If only 'sub' parameter is provided, filter the data based on the 's' query parameter
          const filteredData = data.filter((item) => item.target_gender === target_gender);
          res.json(filteredData);
        } else if (category) {
          // If only 's' parameter is provided, filter the data based on the 's' query parameter
          const filteredData = data.filter((item) => item.category === category);
          res.json(filteredData);
        } else if (productId) {
          // If only 'id' parameter is provided, filter the data based on the 'id' query parameter
          const filteredData = data.filter((item) => item.product_id.toString() === productId);
          if (filteredData.length > 0) {
            res.json(filteredData[0]); // Return the first matching item
          } else {
            res.status(404).json({ error: "Item not found" });
          }
        } else {
          // If neither 's' nor 'id' parameters are provided, return all data
          res.json(data);
        }
      });