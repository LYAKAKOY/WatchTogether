import Sidebar from "./Sidebar";
import UserInfo from "./UserInfo";
import FriendList from "./FriendList";
import YourRooms from "./YourRooms";
import RoomsList from "./RoomsList";

const Profile = () => {
  return (
    <>
      <Sidebar />
      <section className="h-full w-[calc(98% - 60px)] max-w-[1540px] mx-auto my-[20px] absolute left-[70px] right-[10px]">
        <div className="flex lg:flex-row flex-col justify-between w-full gap-[20px]">
          <div className="flex lg:flex-col sm:flex-row flex-col gap-[20px] lg:w-1/3 w-full">
            <UserInfo />
            <FriendList />
          </div>

          <div className="flex flex-col gap-[20px] lg:w-2/3 w-full">
            <RoomsList />
            <YourRooms />
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
