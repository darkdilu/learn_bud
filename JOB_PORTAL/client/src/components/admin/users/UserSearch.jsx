import React from "react";

export default function UserSearch() {
  return (
    <section className=" rounded-lg w-full bg-secondary pt-8 pb-12 md:pt-12 md:pb-16 px-3 md:px-8">
      <form className="m-0 rounded-none shadow-none p-0 max-w-full w-full">
        <h4 className="form-title mb-8 text-2xl font-semibold">Search</h4>
        <div className="form-center grid gap-4">
          <div className="form-row">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" id="name" className="form-input" />
          </div>
          <div className="form-row">
            <label htmlFor="location" className="form-label">
              Location
            </label>
            <input type="text" id="location" className="form-input" />
          </div>
          <div className="form-row">
            <label htmlFor="premium" className="form-label">
              Premium
            </label>
            <select id="premium" className="form-select">
              <option value={""}>ALL</option>
              <option value={true}>YES</option>
              <option value={false}>NO</option>
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
