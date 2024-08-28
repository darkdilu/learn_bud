import React, { useEffect, useState } from "react";
import LogoUpload from "./LogoUpload";
import { useDispatch, useSelector } from "react-redux";
import {
  setAbout,
  setCompanyAddress,
  setCompanyContact,
  setCompanyEmail,
  setCompanyName,
  setCountry,
  setFacebook,
  setFounded,
  setIndustry,
  setLinkedin,
  setLogo,
  setSize,
  setState,
  setTwitter,
  setWebsite,
} from "../../../../slices/employerCompanyProfileSlice";
import {
  useGetCompanyProfileQuery,
  useUpdateCompanyProfileMutation,
} from "../../../../slices/employerApiSlice";
import Loading from "../../../Loading";
import { toast } from "react-toastify";
import FormInput from "../../../FormInput";
import FormSelect from "../../../FormSelect";

export default function ProfileForm() {
  const {
    companyName,
    companyEmail,
    companyContact,
    founded,
    size,
    industry,
    website,
    facebook,
    twitter,
    linkedin,
    country,
    state,
    companyAddress,
    about,
  } = useSelector((state) => state.employerCompanyProfile);
  const dispatch = useDispatch();
  const [updateCompanyProfile, { isLoading }] =
    useUpdateCompanyProfileMutation();
  const {
    data,
    isLoading: loadingDetails,
    isSuccess,
  } = useGetCompanyProfileQuery();

  useEffect(() => {
    if (data) {
      dispatch(setCompanyName(data.companyName));
      dispatch(setCompanyEmail(data.companyEmail));
      dispatch(setCompanyContact(data.companyContact));
      dispatch(setLogo(data.logo));
      dispatch(setSize(data.size));
      dispatch(setIndustry(data.industry));
      dispatch(setWebsite(data.website));
      dispatch(setFacebook(data.facebook));
      dispatch(setTwitter(data.twitter));
      dispatch(setLinkedin(data.linkedin));
      dispatch(setCountry(data.country));
      dispatch(setState(data.state));
      dispatch(setCompanyAddress(data.companyAddress));
      dispatch(setAbout(data.about));
      if (data.founded) {
        const formatedDate = new Date(data.founded);
        const dateToShow = formatedDate.toISOString().split("T")[0];
        dispatch(setFounded(dateToShow));
      } else {
        dispatch(setFounded(""));
      }
    }
  }, [loadingDetails]);
  const handleSave = async () => {
    try {
      const formattedAbout = about.replace(/\n/g, "<br>");
      const res = await updateCompanyProfile({
        companyName,
        companyEmail,
        companyContact,
        founded,
        size,
        industry,
        website,
        facebook,
        twitter,
        linkedin,
        country,
        state,
        companyAddress,
        about: formattedAbout,
      }).unwrap();
      if (res.msg === "company details added successfully") {
        toast.success("Details successfully added");
      } else {
        toast.error(res.msg);
      }
    } catch (err) {
      toast.error(err?.data?.msg || err?.error);
    }
  };
  return loadingDetails ? (
    <Loading />
  ) : (
    <div className="my-4">
      <LogoUpload />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <FormInput
          title={"Company name"}
          type={"text"}
          value={companyName}
          onchange={(e) => dispatch(setCompanyName(e.target.value))}
          placeholder={"Enter company name"}
        />
        <FormInput
          title={"Company Email"}
          type={"email"}
          value={companyEmail}
          onchange={(e) => dispatch(setCompanyEmail(e.target.value))}
          placeholder={"email@email.com"}
        />
        <FormInput
          title={"Company contact"}
          type={"text"}
          value={companyContact}
          onchange={(e) => dispatch(setCompanyContact(e.target.value))}
          placeholder={"+91xxxxxxxxx"}
        />
        <FormInput
          title={"Founded on"}
          type={"date"}
          value={founded}
          onchange={(e) => dispatch(setFounded(e.target.value))}
        />
        <FormSelect
          title={"Company Size"}
          list={["10-50", "50-100", "100-200", "200-400", "400-800", ">800"]}
          value={size}
          onchange={(e) => dispatch(setSize(e.target.value))}
        />
        <FormSelect
          title={"Industry Type"}
          list={[
            "Information Technology & Telecommunications",
            "Finance & Insurance",
            "Healthcare & Pharmaceuticals",
            "Education & Training",
            "Engineering & Manufacturing",
            "Construction & Real Estate",
            "Retail, Wholesale & E-commerce",
            "Hospitality, Travel & Tourism",
            "Media, Entertainment & Arts",
            "Government, Non-Profit & Public Services",
          ]}
          value={industry}
          onchange={(e) => dispatch(setIndustry(e.target.value))}
        />
        <FormInput
          title={"Company Website"}
          type={"text"}
          value={website}
          onchange={(e) => dispatch(setWebsite(e.target.value))}
          placeholder={"www.company.com"}
        />
        <FormInput
          title={"Facebook"}
          type={"text"}
          value={facebook}
          onchange={(e) => dispatch(setFacebook(e.target.value))}
          placeholder={"facebook url"}
        />
        <FormInput
          title={"Twitter"}
          type={"text"}
          value={twitter}
          onchange={(e) => dispatch(setTwitter(e.target.value))}
          placeholder={"twitter url"}
        />
        <FormInput
          title={"Linkedin"}
          type={"text"}
          value={linkedin}
          onchange={(e) => dispatch(setLinkedin(e.target.value))}
          placeholder={"linkedin url"}
        />
        <FormInput
          title={"Country"}
          type={"text"}
          value={country}
          onchange={(e) => dispatch(setCountry(e.target.value))}
          placeholder={"INDIA"}
        />
        <FormInput
          title={"STATE"}
          type={"text"}
          value={state}
          onchange={(e) => dispatch(setState(e.target.value))}
          placeholder={"KERALA"}
        />
      </div>
      <div className="form-row">
        <label className="form-label">Address</label>
        <div className="flex items-center">
          <textarea
            className="w-full py-1 px-3 rounded-lg bg-background2 border border-gray-300 text-gray-900"
            placeholder={"address"}
            rows={4}
            value={companyAddress}
            onChange={(e) => dispatch(setCompanyAddress(e.target.value))}
          />
        </div>
      </div>
      <div className="form-row">
        <label className="form-label">About</label>
        <div className="flex items-center">
          <textarea
            className="w-full py-1 px-3 rounded-lg bg-background2 border border-gray-300 text-gray-900"
            placeholder={"about"}
            rows={6}
            value={about}
            onChange={(e) => dispatch(setAbout(e.target.value))}
          />
        </div>
      </div>
      <button
        className="p-3 rounded-lg bg-ascent text-secondary hover:bg-hover"
        onClick={handleSave}
        disabled={isLoading}
      >
        Save
      </button>
      {isLoading && <Loading />}
    </div>
  );
}
