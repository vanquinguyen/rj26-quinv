import React from "react";
import logo from "./logo.svg";
// import "./App.css";
import anh1 from "./images/teacher-3.jpg";
import background from "./images/ThuySy.jpg";
import 'https://kit.fontawesome.com/874851fd28.js'
import ItemUser from "./Features/ItemUser";
import ItemUserClass from "./Features/ItemUserClass";
import BaiTap1 from "./homeworks/Bt1Session2/BaiTap1";
import BaiTap2 from "./homeworks/Bt2Session2/BaiTap2";
import BaiTap3 from "./homeworks/Bt3Session2/BaiTap3";
import BlockUi3 from "./homeworks/block_ui_3-Session2/BlockUi3";
import '@fortawesome/fontawesome-free/css/all.min.css';
import BtnLike from "./homeworks/Session3/BtnLike";
import BtnRating from "./homeworks/Session3/BtnRating";
import Carosel from "./homeworks/Session3/Carosel";
import Bt1 from "./homeworks/Session5/basic2/Bt1";
import SimpleForm from "./homeworks/Session6/SimpleForm";
import Formik from "./homeworks/Session6/Formik";
import ListUser from "./homeworks/Session7/ListUser";
import Form from "./homeworks/Session7/FormUser";
import FormUser from "./homeworks/Session7/FormUser";
import Detail from "./homeworks/Session7/Detail";
import ReactRouter from "./homeworks/Session8/ReactRouter";
import Router from "./END/Router";
import Login from "./END/Login";


// function App() {
//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.tsx</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//     <div className="profile">
//       <div className="profile-img">
//         <div className="img1">
//           <img src={background} alt="" />
//         </div>
//         <h1>Van Qui</h1>
//         <p>Software Engineering</p>
//         <div className="logo">
        
//         </div>
//       </div>
//     </div>
//   );
// }


interface IUser {
  id : number,
  name: string,
  age: number,
  address: string
}

function App() {
  const user: IUser = {
    id : 1,
    name: "the",
    age: 25,
    address: "38 Yen Bai",
  };

  const arr: Array<number> = [1, 2, 3, 4]
  const listUser : Array<IUser> = [
    {
      id : 1,
      name: "Huy",
      age: 11,
      address: "38 Yen Bai",
    },
    {
      id : 2,
      name: "bit",
      age: 12,
      address: "38 Yen Bai",
    },
    {
      id : 3,
      name: "thanh",
      age: 15,
      address: "38 Yen Bai",
    }
  ]
  // return (
  //   // -------------------------------------

  //   <div className='m-auto w-50'>
  //     {/* <h1>{user.name}</h1> */}

  //     {/* output a array */}
  //     {
  //       // arr?.map((item: number) => {
  //       //   return <p key={item}>{item}</p> // JSX elm
  //       // })

  //     }
  //     {
  //       // //other way:
  //       // arr?.map((item: number) => <p key={item}>{item}</p>)
  //     }
  //     {
  //       // output a list array
  //       listUser?.map((user, index)=>{
  //         return(
  //           // <div key={user.id}> 
  //           //   <p>{user.name}</p>
  //           //   <p>{user.age}</p>
  //           //   <p>{user.address}</p>
  //           // </div>
  //           <ItemUserClass key={index} userProps={user} />
  //           // <h1>haha</h1>
  //         )
  //       })
  //     }
  //     <h1>háhdahsd</h1>
  //     <p>ádkasd</p>
  //   </div>
  // );    


  return (
    // <BaiTap1 title={"Clothing & Apparel"} name={"accessories"} product={"bags"} gen={"Kid's Fashion"} sex={"Mens"}/>
    // <BaiTap2 store="Young Shop" product="SamSung UHD TV 24inch" feedback="02" price="$599" />
    // <BaiTap3 type="Technology" name="Harman Kadon Onyx Studio Mini, Review and Experiences" time="Feb 21, 2021" author="drfurion"/>
    // <div className="block3" style={{display: "flex", gap: "10px", justifyContent: "center", marginTop: "30px"}}>
    //     <BlockUi3 name="Facebook" color="rgb(97, 156, 236)" icon="fa-brands fa-facebook-f" votes="5,000,000 Likes"/>
    //     <BlockUi3 name="Twitter" color="rgb(49, 200, 221)" icon="fa-brands fa-twitter" votes="40,000 Tweets"/>
    //     <BlockUi3 name="Google +" color="rgb(247, 129, 83)" icon="fa-brands fa-google-plus-g" votes="4,60,000 Plus"/>
    //     <BlockUi3 name="Pinterest" color="rgb(247, 83, 84)" icon="fa-brands fa-pinterest" votes="34,000 Pins"/>
    // </div>
    // <BtnLike/>
    // <BtnRating/>
    // <Carosel/>
    // <Bt1/>
    // <SimpleForm/>
    // <Formik/>
    // <ListUser/>
    // <FormUser/>
    // <Detail/>
    // <ReactRouter/>
    <Router/>
    // <Login/>
    );
}



export default App;
