import React, { useEffect, useState } from "react";
import ConversationElt from "./ConversationElt";
import { useDispatch, useSelector } from "react-redux";
import { setEmlist, setJsList } from "../../../slices/JPMessagesSlice";

export default function Conversation() {
  const { userInfo, type } = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      if (type === "employer") {
        const newArray = userInfo.emconnections.map((item) => {
          return {
            pic: item.jsId ? item.jsId.profilePic : item.emId.logo,
            name: item.jsId ? item.jsId.fullName : item.emId.companyName,
          };
        });
        dispatch(setEmlist(newArray));
      }
      if (type === "jobseeker") {
        const newArray = userInfo.jsconnections.map((item) => {
          return {
            pic: item.jsId ? item.jsId.profilePic : item.emId.logo,
            name: item.jsId ? item.jsId.fullName : item.emId.companyName,
          };
        });
        dispatch(setJsList(newArray));
      }
    }
  }, [userInfo]);
  return (
    <div className="py-2 flex flex-col gap-2 overflow-auto">
      {type === "employer" &&
        userInfo?.emconnections.length > 0 &&
        userInfo.emconnections.map((item) => (
          <ConversationElt key={item._id} data={item} />
        ))}
      {type === "jobseeker" &&
        userInfo?.jsconnections.length > 0 &&
        userInfo.jsconnections.map((item) => (
          <ConversationElt key={item._id} data={item} />
        ))}

      {type === "employers" && userInfo?.emconnections.length < 1 && (
        <h1>No chat History</h1>
      )}
      {type === "jobseeker" && userInfo?.jsconnections.length < 1 && (
        <h1>No chat History</h1>
      )}
    </div>
  );
}
