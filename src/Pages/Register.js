import Circles from "../components/Circles"
import FormRegister from "../components/FormRegister"
import Img from "../images/register.png"

export default function Register(){
    return(
        <div>
             <div className="flex w-full h-screen">
        <Circles/>
        <div className="w-full flex items-center justify-center lg:w-1/2">
          <FormRegister />
        </div>
        <div className="hidden lg:flex h-full items-center justify-center w-full">
        <div className="justify-center items-center w-85 h-85">
            <img src={Img} className="mx-5 ml-8 mt-8" />
          </div>
        </div>
      </div>
        </div>
    )
}