import Image from "next/image";
import Link from "next/link";

const Contacts = () => {
  return (
    <div className="mt-[20px]">
      <p>
        Мы всегда рады помочь! Если у вас возникли вопросы, предложения или
        нужна помощь, не стесняйтесь обращаться к нам:
      </p>
      <h2 className="sm:text-[32px] text-[24px] font-semibold mt-[20px] mb-[10px]">
        Социальные сети
      </h2>
      <div className="flex flex-row gap-[15px]">
        <div className="w-[40px] h-[40px]">
          <Link href="#">
            <Image
              width={40}
              height={40}
              src="./telegram-icon.svg"
              alt="telegram icon"
            />
          </Link>
        </div>
        <div className="w-[40px] h-[40px]">
          <Link href="#">
            <Image
              width={40}
              height={40}
              src="./telegram-icon.svg"
              alt="telegram icon"
            />
          </Link>
        </div>
      </div>
      <h2 className="sm:text-[32px] text-[24px] font-semibold mt-[20px] mb-[10px]">
        Почта поддержки
      </h2>
      <Link href="#">support@gmail.com</Link>
    </div>
  );
};

export default Contacts;
