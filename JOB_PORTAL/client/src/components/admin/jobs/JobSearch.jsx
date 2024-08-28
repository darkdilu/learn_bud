import React from "react";

export default function JobSearch() {
  return (
    <section className=" rounded-lg w-full bg-secondary pt-8 pb-12 md:pt-12 md:pb-16 px-3 md:px-8">
      <form className="m-0 rounded-none shadow-none p-0 max-w-full w-full">
        <h4 className="form-title mb-8 text-2xl font-semibold">Search</h4>
        <div className="form-center grid gap-4">
          <div className="form-row">
            <label htmlFor="job" className="form-label">
              Job
            </label>
            <input type="text" id="job" className="form-input" />
          </div>
          <div className="form-row">
            <label htmlFor="company" className="form-label">
              Company
            </label>
            <input type="text" id="company" className="form-input" />
          </div>
          <div className="form-row">
            <label htmlFor="status" className="form-label">
              Status
            </label>
            <select id="status" className="form-select">
              <option value={""}>ALL</option>
              <option value={"recruiting"}>RECRUTING</option>
              <option value={"expired"}>EXPIRED</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-ascent text-primary px-2 py-2 hover:bg-hover mt-4 text-center flex items-center justify-center"
          >
            Search
          </button>
          <button className="bg-ascent text-primary px-2 py-2 hover:bg-hover mt-4 text-center flex items-center justify-center">
            Reset
          </button>
        </div>
      </form>
    </section>
  );
}
