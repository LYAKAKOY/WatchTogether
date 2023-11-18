const UserInfo = () => {
  return (
    <div
      className="lg:w-full lg:max-w-[500px] max-w-none sm:w-1/2 w-full h-[400px] bg-primary 
            rounded-[12px] flex flex-col justify-center items-center text-center
            border-solid border-[1px] border-bordercolor border-opacity-[0.1]"
    >
      <div className="w-[150px] h-[150px] rounded-full bg-input"></div>
      <div className="my-[15px]">
        <h2 className="text-[24px] font-medium">PAnanasik038</h2>
        <p className="text-[16px] text-gray-400">обычный пользователь</p>
      </div>
      <button className="bg-input text-white py-2 px-4 rounded-[8px]">
        Изменить профиль
      </button>
    </div>
  );
};

export default UserInfo;
