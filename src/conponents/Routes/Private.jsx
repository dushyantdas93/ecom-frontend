import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/auth'
import { Outlet } from "react-router-dom"
import axios from "axios"
import Spinner from '../Spinner.jsx'

const Private = () => {
    const [ok, setOk] = useState(false)
    const [auth, setAuth] = useAuth()
    
    useEffect(() => {
        const authChech = async () => {
            const res = await axios.get(
              "http://localhost:8080/api/v1/auth/dashboard");
            if (res.data.ok) {
                setOk(true)
            } else {
                setOk(false)
            }
        }
        if(auth?.token) authChech()
    },[auth?.token])
  return ok ? <Outlet/> : <Spinner path=""/>
}

export default Private