import Sidebar from "../profile/Sidebar";
import Media from "./Media";
import Chat from "./Chat";
import UserList from "./UserList";

const Room = () => {
  return (
    <>
      <Sidebar />
      <section className="h-full w-[calc(98% - 60px)] max-w-[1540px] mx-auto my-[20px] absolute left-[70px] right-[10px]">
        <div className="flex lg:flex-row flex-col justify-between w-full gap-[20px] mb-[20px]">
          <Media />
          <Chat />
        </div>
        <UserList />
      </section>
    </>
  );
};

export default Room;
