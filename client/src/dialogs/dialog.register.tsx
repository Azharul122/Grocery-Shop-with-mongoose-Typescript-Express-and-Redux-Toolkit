import React, { useState } from 'react'
import { ErrorOption, SubmitHandler, useForm } from 'react-hook-form'
import { LiaGithub, LiaGoogle } from 'react-icons/lia'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../redux/hooks';
import { useRegisterMutation } from '../redux/features/auth/authApi';
import { verifyToken } from '../utils/VerifyToken';
import { setUser } from '../redux/features/auth/authSlice';
import toast from 'react-hot-toast';

interface RegisterModalProps {
  isOpen: boolean;
  onClose?: () => void;
  openLogin: () => void;
}

type Inputs = {
  fullName: string
  email: string
  password: string
}

const RegisterModal = ({ isOpen, onClose, openLogin }: RegisterModalProps) => {
  if (!isOpen) return null; // If the modal isn't open, return null (not rendered)

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const dispatch = useAppDispatch();
  const [registertion] = useRegisterMutation();
  const [loading, SetLoading] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    SetLoading(true)
    const registerData = {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
    };

    const result = await registertion(registerData);

    if (result.data) {
      const user = verifyToken(result.data.data.accessToken);
      dispatch(setUser({ user, token: result.data.data.accessToken }));
      toast.success(result.data.message);

      // Call onClose to close the modal
      onClose();

      // Navigate to the previous page
      navigate(from);
    }

    if (result.error) {
      toast.error(result.error.data.issues[0].message);
    }
    SetLoading(false)
  };


  const catchFormError = (error: ErrorOption) => {
    switch (error.type) {
      case "required":
        return "This field is required"
      case "minLength":
        return "Must be 8 chatacters or more"
      case "maxLength":
        return "Must be less than 21 chatacters"
      case "pattern":
        return "Invalid formate"
    }
  }

  return (


    <dialog open className='p-5 rounded border  w-[300px] max-w-sm fixed inset-0 flex items-center justify-center'>
      <form className='flex flex-col gap-4 pt-3 ' onSubmit={handleSubmit(onSubmit)}>
        {/* 1st row */}

        {/* fullname */}
        <div className="flex flex-col gap-1 ">
          <p>Name</p>
          {/* required */}

          <div className="relative ">
            <input {...register("fullName", { required: true, minLength: 4, maxLength: 30 })} className='px-3 py-1 border focus:outline-gray-300 w-[250px]' type="text" placeholder='ex: John Doe' />
            {
              errors.fullName && (
                <div className="absolute text-red-500 -bottom-4 right-0 text-xs">
                  {
                    catchFormError(errors.fullName)
                  }
                </div>
              )}
          </div>

        </div>
        {/* email */}
        <div className="flex flex-col gap-1 w-auto">
          <p>Email</p>
          {/* required */}

          <div className="relative">
            <input {...register("email", { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })} className='px-3 py-1 border focus:outline-gray-300  duration-500 w-full ' type="email" placeholder='ex: example@email.com' />
            {
              errors.email && (
                <div className="absolute text-red-500 -bottom-4 right-0 text-xs">
                  {catchFormError(errors.email)}
                </div>
              )}
          </div>

        </div>

        <div className="flex flex-col gap-1">
          <p>Password</p>
          {/* required */}

          <div className="relative">
            <input className='px-3 py-1 border focus:outline-gray-300  duration-500 w-full ' {...register("password", { required: true, minLength: 8, maxLength: 32 })} type="password" placeholder='Password' />
            {
              errors.password && (
                <div className="absolute text-red-500 -bottom-4 right-0 text-xs">
                  {
                    catchFormError(errors.password)
                  }
                </div>
              )}
          </div>

        </div>
        <Link to={"/reset-password"} className='text-sm '>Forgotten password?  <span className='text-green-500'>Reset</span></Link>
        <button className='border py-1' type="submit">Sign Up</button>

        <div className="mt-3">
          <button onClick={openLogin} className="text-sm">
            Already have an account? <span className="text-green-500">Login Now</span>
          </button>
        </div>
      </form>

    </dialog>

  )
}

export default RegisterModal