import { createContext  } from "react"
import { auth,email,password } from "../auth/Firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

  export  const AuthContext=createContext();

const AuthContextProvider = ({children}) => {

    const createUser=async(email,password)=>{
        //yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
      try {
 let userCredential = await  createUserWithEmailAndPassword(auth, email, password)
  
    }catch(error){
        console.log(error.message);
    }};
    const signIn=async()=>{
      //yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
    try {
           await  signInWithEmailAndPassword(auth, email, password)

  }catch(error){
      console.log(error.message);
  }};
    const values={createUser}
  return (
    <AuthContext.Provider value={values}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;