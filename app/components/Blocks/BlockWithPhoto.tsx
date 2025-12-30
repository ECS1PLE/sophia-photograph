import { bethEllen, bigshotOne } from "@/app/fonts/fonts";

interface BlockWithPhotoProps {
  imageSrc: string;
  bethText: string;
  bigshotText: string;
}

const BlockWithPhoto: React.FC<BlockWithPhotoProps> = ({
  imageSrc,
  bethText,
  bigshotText,
}) => {
  return (
        <div
        className="relative text-center flex flex-col h-[646px] sm:h-[646px] justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imageSrc})` }}
        >
        <div className="flex flex-col relative z-10 gap-[12px]">
            <p className={`${bethEllen.className} w-auto text-[20px] sm:text-[28px] text-[#C42525] m-[0px] leading-none`}>
                {bethText}
            </p>
            <h3 className={`${bigshotOne.className} text-[40px] sm:text-[64px] text-[#C42525] m-[0px] leading-none`}>
                {bigshotText}
            </h3>
        </div>
    </div>
  );
};

export default BlockWithPhoto;
