import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { TbArrowZigZag } from "react-icons/tb";


const Protected = () => {
  // yetkisi varmı state'i
const [isAuth,setIsAuth] = useState();
  // kullanıcını oturum verilerini al
useEffect(()=> {
  // bu method kullanıcı oturumunu izler 
  onAuthStateChanged (auth, (user) => {
setIsAuth(user ? true : false );
  })
},[])


  //eğer kullanıcının oturumu kapalıysa logine yönlendir.
  if(isAuth === false) {
    return <Navigate  to="/" replace/>
  }

  //oturum açıksa auth route'unu bileşenini ekrana bas
  return  <Outlet/>
  
}

export default Protected;

//Navigate Bileşeni 
//Bir bileşenin return satırında yönlendirme yapmamız 
//gerekiyorsa useNavigate kullandığımızda hata verdiği için bu tarz 
// yönlendirmelerinde Navigate bileşenini kullanırız.
