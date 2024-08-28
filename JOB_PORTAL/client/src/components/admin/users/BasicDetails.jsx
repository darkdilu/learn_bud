import React from "react";
import { RxAvatar } from "react-icons/rx";
import DetailElement from "../DetailElement";

export default function BasicDetails({ user }) {
  return (
    <section className="bg-secondary p-3 rounded-lg">
      <div className="flex justify-between items-center">
        <div>
          <h4 className="form-title mb-3 text-lg font-semibold">
            {"Basic Details"}
          </h4>
          <DetailElement
            title={"Email"}
            content={user?.email || "example@gmail.com"}
          />
          <DetailElement
            title={"Phone"}
            content={user?.phone || "9999999999"}
          />
          <DetailElement title={"Address"} content={user?.address || "India"} />
          <DetailElement title={"Age"} content={user?.age || "23"} />
          <DetailElement
            title={"D.O.B"}
            content={user?.dateOfBirth || "23/10/1997"}
          />
        </div>
        <div className="text-8xl p-2 border border-primary">
          <RxAvatar />
        </div>
      </div>
    </section>
  );
}
