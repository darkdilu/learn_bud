import React from "react";
import ConversationElt from "./ConversationElt";
import { useSelector } from "react-redux";

export default function Conversation({ data }) {
  return (
    <div className="py-2 flex flex-col gap-2 overflow-auto">
      {data?.length > 0 &&
        data.map((item) => <ConversationElt key={item._id} data={item} />)}

      {data.length < 1 && <h1>No chat History</h1>}
    </div>
  );
}
