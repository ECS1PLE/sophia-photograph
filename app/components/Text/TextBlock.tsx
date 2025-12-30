interface textBlock{
    children: React.ReactNode;
    fontType: string;
}

const TextBlock:React.FC<textBlock> = ({children, fontType}) => {
    return <p className={`${fontType} w-full max-w-[580px] text-center mx-auto text-[23px] m-[0px]`}>{children}</p>
}

export default TextBlock;