import React from "react";
import SettingOption from "../../../components/admin/settings/SettingOption";

export default function Settings() {
  return (
    <div>
      <h1 className="my-5 text-2xl font-semibold">Settings</h1>
      <SettingOption name={"Payment Settings"} link={"payment"} />
      <SettingOption name={"Notification Settings"} link={"notification"} />
      <SettingOption name={"Advertisement Settings"} link={"advertisement"} />
      <SettingOption name={"Plan Settings"} link={"plan"} />
    </div>
  );
}
