import React, { useState } from "react";
import { Link } from "react-router-dom";
import ExistingItemDetailElement from "../../../components/admin/settings/ExistingItemDetailElement";
import NewNotificationForm from "../../../components/admin/settings/NewNotificationForm";

function NotificationSettings() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="my-5 text-2xl font-semibold">Past Notifications</h1>
        <Link
          to={"/admin/settings"}
          className="bg-ascent text-primary rounded-md p-2 hover:bg-hover"
        >
          Back
        </Link>
      </div>
      <ExistingItemDetailElement
        name={"Notification 1"}
        type={"ALL"}
        detaillink={"notification/id"}
      />
      <ExistingItemDetailElement
        name={"Notification 2"}
        type={"COMPANY"}
        detaillink={"notification/id"}
      />
      <ExistingItemDetailElement
        name={"Notification 3"}
        type={"USERS"}
        detaillink={"notification/id"}
      />
      <button
        className="p-2 my-2 bg-ascent text-primary rounded-md hover:bg-hover"
        onClick={() => setShowForm(true)}
      >
        Create New Notification
      </button>
      {showForm && <NewNotificationForm />}
    </div>
  );
}

export default NotificationSettings;
