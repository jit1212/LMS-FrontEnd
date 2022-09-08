import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Protected = (props) => {
    const {Comp} = props
    const navigate = useNavigate()

    useEffect(()=>{
        let login = localStorage.getItem("login")
        if(!login){
            navigate("/")
        }
    },[])
  return (
    <>
    <Comp/>
    </>
  )
}

export default Protected