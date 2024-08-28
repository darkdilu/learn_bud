import React from "react";

function CompanySearch({ nameValue, nameChange, handleReset, handleSubmit }) {
  return (
    <section className=" rounded-lg w-full bg-secondary pt-8 pb-12 md:pt-12 md:pb-16 px-3 md:px-8">
      <form
        className="m-0 rounded-none shadow-none p-0 max-w-full w-full"
        onSubmit={handleSubmit}
      >
        <h4 className="form-title mb-8 text-2xl font-semibold">Search</h4>
        <div className="form-center grid gap-4">
          <div className="form-row">
            <label htmlFor="company" className="form-label">
              Company
            </label>
            <input
              type="text"
              id="company"
              value={nameValue}
              onChange={(e) => nameChange(e.target.value)}
              className="form-input"
            />
          </div>

          <button
            type="submit"
            className="bg-ascent text-primary px-2 py-2 hover:bg-hover mt-4 text-center flex items-center justify-center"
          >
            Search
          </button>
          <button
            type="button"
            className="bg-ascent text-primary px-2 py-2 hover:bg-hover mt-4 text-center flex items-center justify-center"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </form>
    </section>
  );
}

export default CompanySearch;
