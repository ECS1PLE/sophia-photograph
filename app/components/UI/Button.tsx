import { bethEllen } from "@/app/fonts/fonts";

interface Button {
    children: React.ReactNode;
}

const Button:React.FC<Button> = ({children}) => {
    return (
        <div className="flex max-w-[355px] w-full h-[53px] border-[1px] border-[#000000] justify-center mx-auto cursor-pointer">
            <p className={`${bethEllen.className} text-[23px] m-[0px]`}>{children}</p>
        </div>
    )
}

export default Button;