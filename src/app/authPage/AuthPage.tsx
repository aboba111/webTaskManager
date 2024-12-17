import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {selectToken} from "../../store/slice/authSlice";
import {Outlet, useNavigate} from "react-router-dom";
import {RoutesEnum} from "../routes/routes";

export const AuthPage: React.FC = () =>{
    const token = useSelector(selectToken);
    const navigate = useNavigate();
    useEffect(() =>{
        if(!token){
            //navigate(RoutesEnum.Login);
        }
    }, [])
    return (
        <>
        <header> </header>
        <Outlet/>
        </>
    );
};