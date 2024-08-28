import React from "react";
import ProfessionalDetailListing from "./ProfessionalDetailListing";
import ExtraDetails from "./ExtraDetails";
import ContactDetails from "./ContactDetails";
import SocialMedia from "../../../SocialMedia";
import Skills from "./Skills";
import MessageForm from "../../../MessageForm";

export default function CandidateDetails({ data }) {
  return (
    <div className="flex lg:flex-row flex-col gap-3 w-full my-4">
      <div className="bg-background2 w-full rounded-lg p-3 lg:px-10">
        <h1 className="my-4 text-xl">Description</h1>
        <p className="text-gray-500 leading-9">{data.about}</p>
        <h1 className="my-4 text-xl">Education</h1>
        {data.education.length > 0 &&
          data.education.map((x) => (
            <ProfessionalDetailListing
              key={x._id}
              education
              heading={x.programme}
              subheading={x.institution}
              desc={x.courses}
              year={`${x.started.toString().slice(0, 7)} - ${
                x.ended && x.ended.toString().slice(0, 7)
              }`}
            />
          ))}
        <h1 className="my-4 text-xl">Work Experience</h1>
        {data.work.length > 0 &&
          data.work.map((x) => (
            <ProfessionalDetailListing
              key={x._id}
              work
              heading={x.jobTitle}
              subheading={x.company}
              desc={x.acheivements}
              year={`${x.started.toString().slice(0, 7)} - ${
                x.ended && x.ended.toString().slice(0, 7)
              }`}
            />
          ))}
        <h1 className="my-4 text-xl">Certificates</h1>
        {data.certificates.length > 0 &&
          data.certificates.map((x) => (
            <ProfessionalDetailListing
              key={x._id}
              certificates
              heading={x.certificate}
              subheading={""}
              desc={x.description}
              year={`${x.started.toString().slice(0, 7)} - ${
                x.ended && x.ended.toString().slice(0, 7)
              }`}
            />
          ))}
        <h1 className="my-4 text-xl">Projects</h1>
        {data.projects.length > 0 &&
          data.projects.map((x) => (
            <ProfessionalDetailListing
              key={x._id}
              projects
              heading={x.project}
              subheading={""}
              desc={x.description}
              year={`${x.started.toString().slice(0, 7)} - ${
                x.ended && x.ended.toString().slice(0, 7)
              }`}
            />
          ))}
      </div>
      <div className="bg-background1 w-full lg:w-1/4 rounded-lg p-3 lg:px-8">
        <ExtraDetails data={data} />
        <ContactDetails data={data} />
        <SocialMedia candidate data={data} />
        <Skills skills={data.skills} />
        <MessageForm data={data} />
      </div>
    </div>
  );
}
