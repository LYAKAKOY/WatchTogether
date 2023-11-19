import Image from "next/image";

type FromMainProps = {
  title: string;
};

const FromMain = ({ title }: FromMainProps) => {
  return (
    <div className="flex flex-wrap gap-[4px] items-center mb-[20px]">
      <a href="/">
        <Image
          width={25}
          height={25}
          src="/about/home-page.svg"
          alt="home page icon"
        />
      </a>
      <div className="flex gap-[4px]">
        <Image width={15} height={15} src="/about/navigation-arrow.svg" alt="arrow icon" />
        <p className="text-profileText sm:text-[16px] text-[14px]">О сервисе</p>
      </div>
      <div className="flex gap-[4px]">
        <Image width={15} height={15} src="/about/navigation-arrow.svg" alt="arrow icon" />
        <p className="text-profileText sm:text-[16px] text-[14px]">{title}</p>
      </div>
    </div>
  );
};

export default FromMain;
