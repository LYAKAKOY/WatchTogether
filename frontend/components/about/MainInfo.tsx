import Image from "next/image";
import Footer from "../Footer";
import AnotherPage from "./AnotherPage";
import FromMain from "./FromMain";
import { Prompt } from "next/font/google";

type MainInfoProps = {
  array: Array<{ text?: string; title?: string; tip?: string; href?: string }>;
  title: string;
  subtitle: string;
  href: string;
};

type AboutCardProps = {
  title?: string;
  text?: string;
};

const prompt = Prompt({ subsets: ["latin"], weight: "500" });

const AboutCard = ({ title, text }: AboutCardProps) => {
  return (
    <div className="w-full rounded-[12px]">
      <h2 className="text-[24px] font-semibold mb-[10px]">{title}</h2>
      <p className={`text-[16px] `}>{text}</p>
    </div>
  );
};

const MainInfo = ({ title, subtitle, array, href }: MainInfoProps) => {
  return (
    <div className="bg-primary">
      <div className="sm:w-[55%] w-[96%] mx-auto h-full pt-[90px] rounded-[12px] py-6 px-2 bg-primary">
        <FromMain title={title} />
        <h2 className="sm:text-[32px] text-[24px] font-semibold">{title}</h2>
        <p className="text-profileText">{subtitle}</p>
        <div className="flex items-center gap-[10px] my-[20px]">
          <div className="w-[40px] h-[40px] bg-input rounded-full"></div>
          <p>WatchTogether</p>
        </div>
        <div className="flex flex-col gap-[20px]">
          {array.map((item, id) => (
            <AboutCard key={id} {...item} />
          ))}
        </div>
        <div className="w-full sm:h-[400px] h-[300px] mt-[40px] relative flex justify-center items-center">
          <Image
            className="w-full h-full object-cover rounded-[12px]"
            src="/background.png"
            alt="background png"
            width={2000}
            height={900}
            priority
          />
          <h2 className={`absolute sm:text-[48px] text-[32px] opacity-[0.4] ${prompt.className}`}>
            WatchTogether
          </h2>
        </div>
        <AnotherPage currentHref={href} />
      </div>
      <Footer />
    </div>
  );
};

export default MainInfo;
