import React, { useState } from "react";
import { useSendMessageMutation } from "../slices/JPMessagesApiSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import { setUserInfo } from "../slices/allUsersSlice";
import { useGetUserInfoQuery } from "../slices/authApiSlice";

export default function MessageForm({ data }) {
  const [sendMessage, { isLoading }] = useSendMessageMutation();
  const {
    data: userData,
    refetch,
    isLoading: loadingfetch,
  } = useGetUserInfoQuery();
  const [message, setMessage] = useState("");
  const { type, EInfo, JSInfo } = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleSend() {
    const receiverType = data?.companyName ? "employer" : "jobseeker";
    const senderId = type === "employer" ? EInfo._id : JSInfo._id;
    try {
      const res = await sendMessage({
        senderId,
        receiverId: data._id,
        senderType: type,
        receiverType,
        message,
      }).unwrap();
      if (res.msg === "success") {
        await refetch();
        if (type === "employer") {
          dispatch(setUserInfo(userData));
          navigate("/employer/dashboard/messages");
        } else {
          dispatch(setUserInfo(userData));
          navigate("/jobseeker/dashboard/messages");
        }

        toast.success("message sent");
      } else {
        toast.error(res.msg);
      }
    } catch (err) {
      toast.error(err?.data?.msg || err?.error);
    }
  }
  return (
    <div className="flex flex-col gap-3 my-5 py-5 w-full">
      <h1 className="text-xl">Send a Message</h1>
      <div className="form-row">
        <div className="flex items-center">
          <textarea
            className="w-full py-1 px-3 rounded-lg bg-secondary border border-gray-300 text-gray-900"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={"Type your message...."}
            rows={7}
          />
        </div>
      </div>
      <button
        onClick={handleSend}
        className="px-3 py-2 bg-ascent text-secondary hover:bg-hover rounded-lg w-full"
      >
        {isLoading ? <Loading /> : "Send Message"}
      </button>
    </div>
  );
}
