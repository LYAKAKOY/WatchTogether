const YourRooms = () => {
  return (
    <div
      className="w-full h-[400px] bg-primary rounded-[12px] sm:p-8 p-4 mb-[20px]
  border-solid border-[1px] border-bordercolor border-opacity-[0.1]"
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
  );
};

export default YourRooms;
