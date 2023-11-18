import { friendsArray } from "@/constants";
import Image from "next/image";

type FriendImageProps = {
  src: string;
  alt: string;
  id: number;
};

const FriendImage = ({ src, alt, id }: FriendImageProps) => {
  if (id < 4) {
    return (
      <a
        href="#"
        className="ease duration-300 hover:bg-[#282828] bg-input p-2 rounded-[8px] 
          w-full h-[60px] flex items-center gap-[10px]"
      >
        <Image
          width={220}
          height={220}
          src={src}
          alt={alt}
          className="h-[50px] w-[50px] rounded-full object-cover"
        />
        <p className="font-normal">Zhuravl228</p>
      </a>
    );
  }
};

const FriendList = () => {
  return (
    <div
      className="lg:max-w-[500px] max-w-none lg:w-full sm:w-1/2 w-full h-[400px] bg-primary rounded-[12px] sm:p-8 p-4
            border-solid border-[1px] border-bordercolor border-opacity-[0.1]"
    >
      <a className="xs:text-[24px] text-[18px] font-medium" href="#">
        Друзья
      </a>
      <div className="md:mt-[20px] mt-[10px] md:grid md:grid-cols-2 flex flex-wrap gap-[20px] w-full">
        {friendsArray.map((item, id) => (
          <FriendImage key={id} {...item} id={id} />
        ))}
      </div>
    </div>
  );
};

export default FriendList;
