import React, { useState } from "react";
import { Link } from "react-router-dom";
import ExistingItemDetailElement from "../../../components/admin/settings/ExistingItemDetailElement";
import NewAdForm from "../../../components/admin/settings/NewAdForm";

export default function AdvertisementSettings() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="my-5 text-2xl font-semibold">Existing Ads</h1>
        <Link
          to={"/admin/settings"}
          className="bg-ascent text-primary rounded-md p-2 hover:bg-hover"
        >
          Back
        </Link>
      </div>
      <ExistingItemDetailElement
        name={"Advertisement 1"}
        img
        location={"splash screen"}
      />
      <ExistingItemDetailElement
        name={"Advertisement 2"}
        img
        location={"About page"}
      />
      <button
        className="p-2 my-2 bg-ascent text-primary rounded-md hover:bg-hover"
        onClick={() => setShowForm(true)}
      >
        Add New Advertisement
      </button>
      {showForm && <NewAdForm />}
    </div>
  );
}
