import { createContext  } from "react"
import { auth,email,password } from "../auth/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

  export  const AuthContext=createContext();

const AuthContextProvider = ({children}) => {

    const createUser=async(email,password)=>{
        //yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
      try {
        await  createUserWithEmailAndPassword(auth, email, password)
  
    }catch(error){
        console.log(error);
    }}
    const values={createUser}
  return (
    <AuthContext.Provider value={values}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider