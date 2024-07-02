import { useForm } from "react-hook-form";
import { Link,useNavigate } from "react-router-dom";
import email_icon from "./assets/email.png";
import password_icon from "./assets/password.png";
import username_icon from "./assets/person.png";
import { useState,useEffect } from "react";

const SignInPage = (props) => {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const [Exits , setExits ] = useState(null)

  const onSubmit = async (data) => {
    try{
    let r = await fetch(`http://localhost:3000/${props.btn}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await r.json();
    console.log(res);
    
    if (res.validity) {
      // use context wale ko  change  kardo
      navigate(`/profile/${res.username}`);
    }else{
      setExits(()=>res.message)
    }
  }catch{
    console.log("Error")
  }
  };

  // remove exist error when username errors appear, to prevent displaying the error while user enters the new username
  useEffect(() => {
    setExits(()=>null)
  
  }, [errors.username?.message])
  
  return (
    <>
      <div className="h-lvh bg-sky-400 ">
        <div className="w-96 flex flex-col m-auto h-full justify-center bg-white pb-5">
          {/* Sign-up/Sign-in & Underline  */}
          <div className="flex flex-col items-center gap-5 w-full mt-6">
            <div className="text-sky-500 text-5xl font-semibold">{props.btn}</div>
            <div className="w-16 h-2 bg-sky-500"></div>
          </div>
          <div className="mt-8 flex flex-col gap-6 ">


            <form onSubmit={handleSubmit(onSubmit)}>
              {isSubmitting && <div className="text-center">Loading...</div>}
              <div className="mt-12 flex flex-col gap-3">


                {/* Username  */}
                <div className="flex items-center m-auto w-56 h-9 bg-zinc-300 rounded-md">
                  <div className="m-1">
                    <img src={username_icon} alt="UserIcon" />
                  </div>
                  <input 
                    type="text"
                    {...register("username", {
                      required: {value:true,message:"Required"},
                      minLength: {
                        value: 4,
                        message: "Username should be greater than 3",
                      },
                      maxLength: {
                        value: 12,
                        message: "username should be smaller than 12",
                      },
                    })}
                    className="rounded-md  bg-transparent focus:outline-none"
                    placeholder="Username"
                  />
                </div>
                <p className="text-center text-red-600 m-0">
                  {errors.username?errors.username.message:Exits}</p>


                {/* Email  */}
                {props.btn=="sign-up" && (<><div className="flex items-center m-auto w-56 h-9 bg-zinc-300 rounded-md">
                  <div className="m-1">
                    <img src={email_icon} alt="PasswordIcon" />
                  </div>
                  <input
                    type="email"
                    {...register("email", {
                      required: { value: true, message: "Required" },
                    })}
                    className="rounded-md bg-transparent focus:outline-none"
                    placeholder="Email" />
                </div><p className="text-center text-red-600 m-0">{errors.email?.message}</p></>)
                }


                {/* Password  */}
                <div className="flex items-center m-auto w-56 h-9 bg-zinc-300 rounded-md">
                  <div className="m-1">
                    <img src={password_icon} alt="PasswordIcon" />
                  </div>
                  <input 
                    type="text"
                    {...register("password", {
                      required: {value:true,message:"Required"},
                      minLength: {
                        value: 4,
                        message: "password should be greater than 3",
                      },
                      maxLength: {
                        value: 12,
                        message: "password should be smaller than 12",
                      },
                    })}
                    className="rounded-md bg-transparent focus:outline-none"
                    placeholder={
                      props.btn == "sign-in" ? "Password" : "Create Password"
                    }
                  />
                </div>
                <p className="text-center text-red-600 m-0">{errors.password?.message}</p>


                {/* Sign-in/Sign-up  */}
                <div className="flex justify-center mt-6">
                  <div className=" flex  justify-center items-center w-40 mx-2 h-10 text-white bg-sky-400 rounded-full text-lg font-semibold cursor-pointer">
                    <button
                      disabled={isSubmitting}
                      type="submit"
                      className="px-10 py-2"
                    >
                      {props.btn}
                    </button>
                  </div>
                  <div className=" flex  justify-center items-center w-40 mx-2 h-10 text-white bg-sky-400 rounded-full text-lg font-semibold cursor-pointer">
                      <Link to={`/${props.btnlink}`} className="px-10 py-2">{props.btnlink}</Link>
                    </div>
                </div>
                <div className="flex md:justify-between flex-col ">
                  <div className="text-center">
                    <input type="checkbox"  /> Remember ME
                  </div>
                  <div className="text-center">
                    <a href="#">Forgot your password?</a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
