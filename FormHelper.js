import * as yup from "yup";

export const Schema = yup.object().shape({
    name:yup.string().min(3).max(15).required("Please enter your name"),
    email:yup.string().email().required(),
    password:yup.string().required().matches(
        /^(?=.*[A-za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\]d@$!%*#?&]{6,15}$/,
        "Must contain 6 to 15 Characters , OneUpperCase, OneLowerCase,One Number and one Special Character"),
    confirmPassword:yup
    .string()
    .required("confirm password is required field")
    .oneOf([yup.ref("password"),"Password and confirm password must match"]),
    phone : yup
    .string()
    .required()
    .matches(/^[0-9]+$/,"Must be only digits")
    .min(8)
    .max(10),
    });

    