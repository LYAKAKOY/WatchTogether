import { reveals } from "@/constants";
import Image from "next/image";

type RevealProps = {
  author: string;
  text: string;
};

const Reveal = ({ author, text }: RevealProps) => {
  const array = [0, 1, 2, 3, 4];

  return (
    <div className="bg-input rounded-[12px] min-h-[100px] w-full p-4">
      <div className="mb-[20px] flex gap-[4px]">
        {array.map((item) => (
          <Image
            width={20}
            height={20}
            src="/about/star.png"
            alt="star icon"
            key={item}
          />
        ))}
      </div>
      <p>{text}</p>
      <div className="flex gap-[10px] items-center mt-[10px]">
        <div className="w-[40px] h-[40px] bg-primary rounded-full"></div>
        <h2 className="text-[18px] font-semibold">{author}</h2>
      </div>
    </div>
  );
};

const Reveals = () => {
  return (
    <div className="mt-[20px]">
      <div className="flex flex-col gap-[20px] mt-[20px]">
        {reveals.map((item, id) => (
          <Reveal key={id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Reveals;
