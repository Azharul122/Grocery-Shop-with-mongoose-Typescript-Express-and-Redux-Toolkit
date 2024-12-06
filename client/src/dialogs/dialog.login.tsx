import React from "react";
import { ErrorOption, SubmitHandler, useForm } from "react-hook-form";
import { LiaTimesSolid } from "react-icons/lia";
import { Link, Navigate, useLocation } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { verifyToken } from "../utils/VerifyToken";
import { setUser } from "../redux/features/auth/authSlice";
import toast from "react-hot-toast";

interface LoginModalProps {
    isOpen: boolean;
    onClose?: () => void;
    openRegister: () => void;
}

type Inputs = {
    email: string;
    password: string;
};

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, openRegister }) => {
    if (!isOpen) return null;

    // Navigate orginal path
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const dispatch = useAppDispatch()

    const [login, { data, error }] = useLoginMutation()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        
        
        const userInfo = {
            email: data.email,
            password: data.password
        }

        const result = await login(userInfo)

        console.log(result)
        
        if (result.data) {
            const user = verifyToken(result.data.data)

            dispatch(setUser({ user, token: result.data.data }))
            Navigate(from)
            toast.success(result.data.message)
        }
        if (result.error) {
            toast.error(result.error.data.issues[0].message)
        }
    };

    const catchFormError = (error: ErrorOption) => {
        switch (error?.type) {
            case "required":
                return "This field is required";
            case "minLength":
                return "Must be at least 8 characters";
            case "maxLength":
                return "Must be less than 21 characters";
            case "pattern":
                return "Invalid format";
            default:
                return "Invalid input";
        }
    };

    return (
        <dialog open className="p-5 rounded border  max-w-sm fixed inset-0 flex items-center justify-center  ">
            <div className="">
                <form className="flex flex-col gap-4 pt-1" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex items-center justify-between">
                        <p className="text-xl">Login</p>
                        <LiaTimesSolid onClick={onClose} className="cursor-pointer" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <p>Email</p>
                        <div className="relative">
                            <input
                                aria-invalid={errors.email ? "true" : "false"}
                                {...register("email", {
                                    required: true,
                                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                })}
                                className="px-3 py-1 border focus:outline-gray-300 w-full"
                                type="email"
                                placeholder="ex: example@email.com"
                            />
                            {errors.email && (
                                <div className="absolute text-red-500 -bottom-4 right-0 text-xs">
                                    {catchFormError(errors.email)}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p>Password</p>
                        <div className="relative">
                            <input
                                aria-invalid={errors.password ? true : false}
                                {...register("password", { required: true, minLength: 8, maxLength: 20 })}
                                className="px-3 py-1 border focus:outline-gray-300 w-full"
                                type="password"
                                placeholder="Password"
                            />
                            {errors.password && (
                                <div className="absolute text-red-500 -bottom-4 right-0 text-xs">
                                    {catchFormError(errors.password)}
                                </div>
                            )}
                        </div>
                    </div>
                    <Link to="/reset-password" className="text-sm">
                        Forgotten password? <span className="text-green-500">Reset</span>
                    </Link>
                    <button className="border py-1" type="submit">
                        Login
                    </button>
                </form>
                <div className="mt-3">
                    <button onClick={openRegister} className="text-sm">
                        Don't have an account? <span className="text-green-500">Create Now</span>
                    </button>
                </div>
            </div>
        </dialog>
    );
};

export default LoginModal;
