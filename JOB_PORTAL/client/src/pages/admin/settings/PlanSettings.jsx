import React, { useState } from "react";
import { Link } from "react-router-dom";
import NewPlanForm from "../../../components/admin/settings/NewPlanForm";
import ExistingItemDetailElement from "../../../components/admin/settings/ExistingItemDetailElement";

export default function PlanSettings() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="my-5 text-2xl font-semibold">Existing Plans</h1>
        <Link
          to={"/admin/settings"}
          className="bg-ascent text-primary rounded-md p-2 hover:bg-hover"
        >
          Back
        </Link>
      </div>

      <ExistingItemDetailElement name={"Premium 1 Month"} price={"Rs.199/-"} />
      <ExistingItemDetailElement name={"Premium 3 Month"} price={"Rs.549/-"} />
      <ExistingItemDetailElement name={"Premium 6 Month"} price={"Rs.999/-"} />
      <button
        className="p-2 my-2 bg-ascent text-primary rounded-md hover:bg-hover"
        onClick={() => setShowForm(true)}
      >
        Create New Plan
      </button>
      {showForm && (
        <div>
          <NewPlanForm />
        </div>
      )}
    </div>
  );
}
