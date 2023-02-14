import FormLogin from "../components/FormLogin"
import Logo from "../images/login.png";
import Circles from "../components/Circles";

export default function Login(){
    return(
        <div className="flex w-full h-screen">
        <Circles/>
        <div className="hidden lg:flex h-full items-center justify-center lg:w-1/2">
          <div className="justify-center items-center w-85 h-85">
            <img src={Logo} className="mx-5 ml-8 mt-8" />
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <FormLogin />
        </div>
      </div>
    )
}