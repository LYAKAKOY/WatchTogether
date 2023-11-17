import { categoriesArray } from "@/constants";

const WatchSection = () => {
  return (
    <div className="w-[95%] mx-auto mt-[60px]">
      <div className="hashspan" id="watch"></div>
      <h2 className="sm:text-[48px] xs:text-[32px] text-[24px] font-medium text-center">
        Что можно смотреть?
      </h2>
      <div className="w-[95%] mx-auto flex md:flex-row flex-col gap-[15px] justify-center mt-[60px]">
        {categoriesArray.map((item) => (
          <div
            className="w-full flex mx-auto h-[450px] bg-primary rounded-[20px] relative z-0 bg-linear"
            key={item.title}
          >
            <div className="absolute bottom-[30px] left-[30px]">
              <h2 className="text-[28px] font-medium mb-[10px]">
                {item.title}
              </h2>
              <p className="text-gray-400 pr-[20px]">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchSection;
