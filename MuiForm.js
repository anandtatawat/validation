import React from "react";

import classes from "./MuiForm.module.css";
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import { TextField,Button } from "@mui/material";
import { Schema } from "./FormHelper";


function MuiForm() {
const {register ,handleSubmit,formState: { errors }} = useForm({resolver: yupResolver(Schema)})
     
const onSubmit = (data) => console.log(data)

return(

    <div className={classes.form_container}>


        <div className={classes.heading}>
               <h1>Registration Form</h1>
        </div>
<form onSubmit={handleSubmit(onSubmit)}>

<div className={classes.row}>
<TextField 
label="Name" 
{...register("name")} 
error ={!!errors?.name}
helperText={errors?.name?.message}
variant="outline"
sx={{width:250}}
size="small" />


<TextField 
label="Email" 
{...register("email")}
error ={!!errors?.email}
helperText={errors?.email?.message}
variant="outlined"
sx={{width:250}}
size="small"/>
 
 </div>


<div className={classes.row}>
 <TextField 
label="Phone Number"  
{...register("phone")}
error={!!errors?.phone}
helperText={errors?.phone?.message}
variant="outlined"
sx={{width:250}}
size="small"
/>

<TextField 
label="password"  
{...register("password")}
error={!!errors?.password}
helperText={errors?.password?.message}
variant="outlined"
sx={{width:250}}
size="small"
/>
</div>

<div className={classes.row}>
<TextField 
label="Confirm Password"  
{...register("confirmPassword")}
error={!!errors?.confirmPassword}
helperText={errors?.confirmPassword?.message}
variant="outlined"
type="password"
sx={{width:250}}
size="small"
/>

<Button>onSubmit</Button>
</div>
</form>
</div>

);
}

export default MuiForm ;