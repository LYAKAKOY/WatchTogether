import { Noto_Sans } from "next/font/google";
import PasswordInput from "../PasswordInput";

const notosans = Noto_Sans({ subsets: ["latin"], weight: "300" });

const LoginBlock = () => {
  return (
    <section
      className="absolute sm:w-1/2 w-[98%] sm:h-full h-[90%] bg-primary bg-opacity-[0.9] backdrop-filter backdrop-blur-xl 
    right-0 sm:left-auto left-0 sm:mx-0 mx-auto sm:top-0 top-[20px] sm:bottom-auto bottom-[20px] sm:my-0 my-auto
    sm:rounded-[0px] rounded-[12px]"
    >
      <div className="flex flex-col h-full w-full justify-center xs:p-8 p-4">
        <div className="mb-[40px]">
          <h2 className="font-semibold md:text-[48px] sm:text-[32px] text-[24px]">
            Вход
          </h2>
          <p
            className={`${notosans.className} text-gray-400 xs:text-[16px] text-[14px]`}
          >
            Войдите в свой аккаунт и отправьтесь в захватывающее путешествие по
            миру фильмов и видео вместе с нами!
          </p>
        </div>
        <form className="flex flex-col gap-[20px]">
          <input
            type="text"
            name=""
            id=""
            placeholder="Логин"
            className="bg-input text-gray-400 h-[60px] w-full rounded-[8px] px-[20px] focus:outline-none focus:outline-subprimary"
          />
          <PasswordInput placeholder="Пароль" id="password" />
          <div className="flex flex-col gap-[20px]">
            <button
              type="submit"
              className="w-full bg-subprimary p-4 rounded-[12px] mt-[40px]"
            >
              Войти
            </button>
            <div className="sm:text-[16px] sm:text-left text-[14px] text-center w-full">
              <div className="flex xs:flex-row flex-col gap-[5px]">
                <p className="text-gray-400">Забыли пароль?</p>
                <a
                  href="/registration"
                  className="text-link underline underline-offset-[6px] font-medium"
                >
                  Восстановить пароль
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginBlock;
