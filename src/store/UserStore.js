import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'

export const useUserStore = create(
    persist(
    (set, get)=>({
        isLoggedIn:false,
        user: null,
        setUserLoggedIn: (payload)=>{
            set({isLoggedIn:true, user:payload})
        },
        setUserLoggedOut: ()=>{
            set({isLoggedIn:false, user: null})
        }
    }),

    {
        name: 'user-storage', // name of the item in the storage (must be unique)
        storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    },

    ) // persist ends

);