import React, { useEffect, useState } from "react";
import MessageSearch from "./MessageSearch";
import Conversation from "./Conversation";
import { useDispatch, useSelector } from "react-redux";
import { setEmlist, setJsList } from "../../../slices/JPMessagesSlice";

export default function JPmessageSideBar() {
  const { type, userInfo } = useSelector((state) => state.allUsers);
  const { emList, jsList, showSide } = useSelector((state) => state.jpMessages);
  const [list, setList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      if (type === "employer") {
        dispatch(setEmlist(userInfo?.emconnections));
        setList(userInfo?.emconnections);
      }
      if (type === "jobseeker") {
        dispatch(setJsList(userInfo?.jsconnections));
        setList(userInfo?.jsconnections);
      }
    }
  }, [userInfo]);

  useEffect(() => {
    if (type === "employer") {
      const filtered = userInfo?.emconnections.filter((item) =>
        item.jsId
          ? item.jsId.fullName.toLowerCase().includes(searchTerm.toLowerCase())
          : item.emId.companyName
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
      );
      setList(filtered);
    }
    if (type === "jobseeker") {
      const filtered = userInfo?.jsconnections.filter((item) =>
        item.jsId
          ? item.jsId.fullName.toLowerCase().includes(searchTerm.toLowerCase())
          : item.emId.companyName
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
      );
      setList(filtered);
    }
  }, [searchTerm]);
  return (
    <div
      className={`border-r-2 p-4 md:px-7 flex flex-col w-full md:w-fit ${
        showSide ? "block" : "hidden md:block"
      }`}
    >
      <MessageSearch value={searchTerm} onChange={setSearchTerm} />
      <div className="divider divider-primary"></div>
      <Conversation data={list} />
    </div>
  );
}
