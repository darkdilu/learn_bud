import React from "react";
import DetailElement from "../DetailElement";

export default function ExtraDetails({ user }) {
  return (
    <section className="bg-secondary p-3 rounded-lg mt-3">
      <h4 className="form-title mb-3 text-lg font-semibold">
        {"Other Details"}
      </h4>
      <DetailElement title={"Education"} content={user?.education || "BTECH"} />
      <DetailElement
        title={"Skills"}
        content={
          user?.skills || (
            <ul>
              <li className="pb-2">React</li>
              <li className="pb-2">Node</li>
              <li className="pb-2">MongoDB</li>
            </ul>
          )
        }
      />
      <DetailElement
        title={"Languages"}
        content={
          user?.languages || (
            <ul>
              <li className="pb-2">English</li>
              <li className="pb-2">Malayalam</li>
              <li className="pb-2">Hindi</li>
            </ul>
          )
        }
      />
      <DetailElement
        title={"Experience"}
        content={
          user?.experience || (
            <ul>
              <li className="pb-2">Web Developer - 2yrs</li>
              <li className="pb-2">Intern- 6 months</li>
            </ul>
          )
        }
      />
      <DetailElement
        title={"Current CTC"}
        content={user?.currentCTC || "5 LPA"}
      />
      <DetailElement
        title={"Expected CTC"}
        content={user?.expectedCTC || "6 LPA"}
      />
    </section>
  );
}
