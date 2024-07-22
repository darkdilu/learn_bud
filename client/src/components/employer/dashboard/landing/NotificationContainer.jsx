import React from "react";
import NotificationElt from "./NotificationElt";
import { useSocketContext } from "../../../../context/SocketContext";

export default function NotificationContainer() {
  const { jobNotification } = useSocketContext();
  return (
    <div className="bg-background2 p-3 rounded-lg my-4">
      <h1 className="text-xl my-3">Recent Notifications</h1>
      <div className="flex flex-col gap-3">
        {jobNotification.length > 0 &&
          jobNotification
            .slice(0, 6)
            .map((item) => (
              <NotificationElt key={item.date} name={item.name} post={""} />
            ))}
      </div>
    </div>
  );
}
