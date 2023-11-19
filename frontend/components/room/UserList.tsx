"use client";

import { roomFriendsArray } from "@/constants";
import { useState } from "react";

const UserList = () => {
  const [roomFriends, setRoomFriends] = useState<String[]>([]);

  function handleOnDrag(e: React.DragEvent<HTMLDivElement>) {
    e.dataTransfer.setData(
      "text/plain",
      `${e.currentTarget?.lastChild?.textContent}`
    );
    e.dataTransfer.setData("id", `${e.currentTarget.id}`);
    e.dataTransfer.setDragImage(e.currentTarget, 0, 0);
  }

  function handleOnDrop(e: React.DragEvent<HTMLDivElement>) {
    const text = e.dataTransfer.getData("text/plain");
    const id = e.dataTransfer.getData("id");
    document.getElementById(`${id}`)?.remove();
    setRoomFriends([...roomFriends, text]);
  }

  function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
  }

  return (
    <div className="flex sm:flex-row flex-col justify-between w-full gap-[20px]">
      <div
        className="sm:w-1/2 w-full min-h-[300px] bg-primary rounded-[12px] border-solid 
      border-[1px] border-bordercolor border-opacity-[0.1] p-4 sm:mb-[20px] mb-[0px]"
      >
        <h2 className="text-[24px] font-medium mb-[20px]">Ваши друзья</h2>
        <div className="flex items-center flex-wrap gap-[15px]">
          {roomFriendsArray.map((item, id) => (
            <div
              key={id}
              id={`${id}`}
              className="rounded-[8px] flex items-center gap-[10px] bg-input py-2 px-4 cursor-pointer"
              draggable
              onDragStart={(e) => handleOnDrag(e)}
            >
              <p>{item.nickname}</p>
            </div>
          ))}
        </div>
      </div>
      <div
        className="sm:w-1/2 w-full min-h-[300px] bg-primary rounded-[12px] border-solid border-[1px]
         border-bordercolor border-opacity-[0.1] p-4 mb-[20px]"
        onDrop={handleOnDrop}
        onDragOver={handleDragOver}
      >
        <div className="w-full flex md:flex-row flex-col sm:items-center sm:justify-between mb-[20px]">
          <h2 className="text-[24px] font-medium">Пользователи комнаты</h2>
          <p className="text-profileText">{roomFriends.length}/12</p>
        </div>
        <div className="flex items-center flex-wrap gap-[15px]">
          {roomFriends.map((roomFriend, index) => (
            <div className="py-2 px-4 bg-input rounded-[8px]" key={index}>
              {roomFriend}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserList;
