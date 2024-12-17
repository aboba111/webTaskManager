import React, {FormEvent} from 'react';
import {test} from "../../../store/slice/userSlice";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../store";
import {Controller, FormProvider, useForm} from "react-hook-form";
import {Input} from "antd";

type ProfileForm = {
    about : string;
    hobby : string;
}


export const ProfilePage: React.FC = () =>{
    const dispatch = useDispatch<AppDispatch>();
    const handleClick= async ()=>{
        const resultAction = await dispatch(test());
    }
    const method = useForm<ProfileForm>()
    const onSubmit = (data: ProfileForm)=>{
       // event.preventDefault();
        console.log(data)
       // return method.handleSubmit((data)=>{ console.log(data)})
    }

    return (
        <div  >
            <button onClick={handleClick}>отправить запрос</button>
            <FormProvider {...method}>
                <form onSubmit={method.handleSubmit(onSubmit)} className="form-container">
                    <div>
                        <label htmlFor="additionalInfo">About</label>
                        <Controller
                            name="about"
                            control={method.control}
                        render={({field}) => <Input {...field}/>}
                        />
                    </div>
                    <div>
                        <label htmlFor="name">Name</label>
                        <Controller
                            render={({field}) => {
                        return (
                        <Input.TextArea {...field} style={{ width: '100%', height: '40px' }} />

                        )
                        }} name="about" control={method.control}/>
                        <button type="submit">
                            save
                        </button>
                    </div>
                </form>
            </FormProvider>
        </div>

    )

}