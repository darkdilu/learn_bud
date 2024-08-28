import React, { useState } from "react";
import { BsUpload } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useUploadLogoMutation } from "../../../../slices/employerApiSlice";
import { setLogo } from "../../../../slices/employerCompanyProfileSlice";
import Loading from "../../../Loading";

export default function LogoUpload() {
  const { logo } = useSelector((state) => state.employerCompanyProfile);
  const [uploadLogo, { isLoading }] = useUploadLogoMutation();
  const dispatch = useDispatch();

  async function handleUpload(e) {
    const formdata = new FormData();
    formdata.append("logo", e.target.files[0]);
    const file = formdata.get("logo");
    if (file.size > 500000) {
      toast.error("Image is too large. should be below 500kb");
      return null;
    }
    try {
      const res = await uploadLogo(formdata).unwrap();
      if (res.msg === "success") {
        dispatch(setLogo(res.url));
      } else {
        toast.error(res.msg);
      }
    } catch (err) {
      toast.error(err?.data?.msg || err?.error);
    }
  }

  return (
    <div className=" flex justify-start items-center gap-3 my-4">
      <label className=" flex flex-col p-4 gap-2 items-center border border-dashed border-gray-400 hover:border-gray-700 rounded-lg cursor-pointer">
        <input
          type="file"
          className="hidden"
          onChange={handleUpload}
          accept="image/*"
        />
        <div className="text-xl">
          <BsUpload />
        </div>
        <p>Upload</p>
      </label>
      <div>
        {logo ? (
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <img src={logo} className="object-contain"></img>
          </div>
        ) : (
          <p className="text-gray-400 text-sm">
            Upload the logo of your company. preffered dimension 330px x 330px
          </p>
        )}
      </div>
      {isLoading && <Loading />}
    </div>
  );
}
