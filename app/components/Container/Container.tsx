interface Container{
    children:React.ReactNode;
}

const Container:React.FC<Container> = ({children}) => {
    return (
        <div className="flex flex-col gap-[80px] w-full max-w-[1440px] mx-auto justify-center mb-[16px]">
            {children}
        </div>
    )
}

export default Container;