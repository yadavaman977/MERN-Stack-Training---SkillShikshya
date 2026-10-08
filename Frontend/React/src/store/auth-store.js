import { create } from "zustand";

const mockUser = {
    name: "Aman Yadav",
    email: "aman@gmail.com",
    password: "12345678",
    token: "token123456"
}
export const useAuthstore = create((set) => ({
    
    user:null,
    token: null,
    login :(email, password)=>{
       if(!email || !password){
        alert("Please enter email and password")
        return false
       }
       if(email === mockUser.email && password === mockUser.password){
        set({user: mockUser, token: mockUser.token})
        localStorage.setItem('token', mockUser.token)
        return true
       }
       alert("Invalid email or password")
       return false
    },
    logout: ()=>{
        set({user: null, token: null})
        localStorage.removeItem('token')
    }
}))