/* eslint-disable jsx-a11y/alt-text */
import SignupForm from "components/Login-Logout-Signup/SignupForm";
import Logo from "../images/DanimLogo.svg";

function Signup() {
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className="mb-[40.17px] text-center">
        <img
          src={Logo}
          className="ml-[0.65rem] w-[181px] h-[178px] !bg-transparent"
        />
        <div className="inline-block text-base text-[#40d8d8]">
          Danim에 오신걸 환영합니다!
        </div>
        <SignupForm />
      </div>
    </div>
  );
}

export default Signup;
