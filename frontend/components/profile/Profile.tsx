import { friendsArray, textArray } from "@/constants";
import Image from "next/image";
import Sidebar from "./Sidebar";
import ProfileCard from "./ProfileCard";

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

const Profile = () => {
  return (
    <>
      <Sidebar />
      <section className="h-full w-[calc(98% - 60px)] max-w-[1540px] mx-auto my-[20px] absolute left-[70px] right-[10px]">
        <div className="flex lg:flex-row flex-col justify-between w-full gap-[20px]">
          <div className="flex lg:flex-col sm:flex-row flex-col gap-[20px] lg:w-1/3 w-full">
            <div
              className="lg:w-full lg:max-w-[500px] max-w-none sm:w-1/2 w-full h-[400px] bg-primary 
            rounded-[12px] flex flex-col justify-center items-center text-center
            border-solid border-[1px] border-bordercolor border-opacity-[0.2]"
            >
              <div className="w-[150px] h-[150px] rounded-full bg-input"></div>
              <div className="my-[15px]">
                <h2 className="text-[24px] font-medium">PAnanasik038</h2>
                <p className="text-[16px] text-gray-400">
                  обычный пользователь
                </p>
              </div>
              <button className="bg-input text-white py-2 px-4 rounded-[8px]">
                Изменить профиль
              </button>
            </div>

            <div
              className="lg:max-w-[500px] max-w-none lg:w-full sm:w-1/2 w-full h-[400px] bg-primary rounded-[12px] sm:p-8 p-4
            border-solid border-[1px] border-bordercolor border-opacity-[0.2]"
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
          </div>

          <div className="flex flex-col gap-[20px] lg:w-2/3 w-full">
            <div
              className="w-full h-[400px] bg-primary rounded-[12px] sm:p-8 p-4
            border-solid border-[1px] border-bordercolor border-opacity-[0.2]"
            >
              <a className="xs:text-[24px] text-[18px] font-medium" href="#">
                Комнаты друзей
              </a>
              <div className="md:mt-[20px] mt-[10px] flex flex-wrap gap-[10px]">
                {textArray.map((item, id) => (
                  <ProfileCard key={id} {...item} id={id} />
                ))}
              </div>
            </div>

            <div
              className="w-full h-[400px] bg-primary rounded-[12px] sm:p-8 p-4 mb-[20px]
            border-solid border-[1px] border-bordercolor border-opacity-[0.2]"
            >
              <div className="flex w-full justify-between">
                <a className="xs:text-[24px] text-[18px] font-medium" href="#">
                  Ваши комнаты
                </a>
                <button
                  className="xs:p-2 p-1 xs:w-[50px] xs:h-[50px] w-[35px] h-[35px] xs:text-[24px] text-[18px] font-medium rounded-full bg-input 
            ease duration-300 hover:bg-subprimary"
                >
                  +
                </button>
              </div>
              <div className="md:mt-[20px] mt-[10px] flex flex-wrap gap-[10px]">
                <h2 className="text-profileText">Здесь пока пустовато...</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
