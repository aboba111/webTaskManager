import React, {FormEvent} from 'react';
import {test} from "../../../store/slice/userSlice";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../store";
import {Controller, FormProvider, useForm} from "react-hook-form";
import {Input, Upload, UploadProps} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import {setImage} from "../../../store/slice/userSlice";

type ProfileForm = {
    about : string;
    hobby : string;
    imageId: string;
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

    const handleUploadImage: UploadProps['onChange']  = (info) =>{
        if (info.file.status === 'uploading') {
           // setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            const  formData = new FormData();
            // @ts-ignore
            formData.append('file', info.file)
            //formData.append()
            // @ts-ignore
            dispatch(setImage({formData})).then((payload)=>{method.setValue('imageId',payload.id)})
        }
    }


    return (
        <div  >
            <Upload
                name="avatar"
                listType="picture-circle"
                className="avatar-uploader"
                showUploadList={false}
                action="https://localhost:8080/profile/image"
                //beforeUpload={beforeUpload}
                onChange={handleUploadImage}
            >
                <button style={{border: 0, background: 'none'}} type="button"><PlusOutlined/>
                    <div style={{marginTop: 8}}>Upload</div>
                </button>
            </Upload>
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