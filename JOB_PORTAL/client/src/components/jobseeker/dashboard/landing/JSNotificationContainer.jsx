import React from "react";
import { useSocketContext } from "../../../../context/SocketContext";
import JSNotificationElt from "./JSNotificationElt";

export default function JSNotificationContainer() {
  const { jobNotification } = useSocketContext();
  return (
    <div className="bg-background2 p-3 rounded-lg my-4">
      <h1 className="text-xl my-3">Recent Notifications</h1>
      <div className="flex flex-col gap-3">
        {jobNotification.length > 0 &&
          jobNotification
            .slice(0, 6)
            .map((x) => (
              <JSNotificationElt key={x.date} name={x.name} action={x.action} />
            ))}
      </div>
    </div>
  );
}
