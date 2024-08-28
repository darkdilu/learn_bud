import React from "react";

import CategoryCard from "./CategoryCard";
import { jobCategory } from "../../../utils/jobcategory";

export default function JobCategorySection() {
  return (
    <section className="mt-10">
      <div className="text-center">
        <h1 className="text-3xl font-semibold mb-3">Popular Job Categories</h1>
        <p className="opacity-50">2020 jobs live-200 added today</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10">
        {jobCategory.map((item) => {
          return (
            <div key={item.id}>
              <CategoryCard
                category={item.category}
                icon={item.icon}
                open={item.open}
              />
              ;
            </div>
          );
        })}
      </div>
    </section>
  );
}
