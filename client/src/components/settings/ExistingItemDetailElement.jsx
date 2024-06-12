import React from "react";
import { Link } from "react-router-dom";

export default function ExistingItemDetailElement({
  name,
  price,
  img,
  type,
  location,
  detaillink,
}) {
  return (
    <div className="flex justify-between items-center bg-secondary rounded-md p-2 my-2">
      <p className="text-lg font-semibold">{name}</p>
      {price && <p className="text-lg font-semibold">{price}</p>}
      {img && (
        <a
          href="https://www.littlethings.info/wp-content/uploads/2014/04/dummy-image-green-e1398449160839.jpg"
          target="blank"
          className="text-lg underline"
        >
          View
        </a>
      )}
      {location && <p className="text-lg">{`@${location}`}</p>}
      {type && <p className="text-lg">{type}</p>}

      <div className="flex justify-center items-center gap-2">
        {detaillink && (
          <Link
            to={`/admin/settings/${detaillink}`}
            className="p-2 bg-ascent text-primary rounded-md hover:bg-hover"
          >
            Details
          </Link>
        )}

        <button className="p-2 bg-ascent text-primary rounded-md hover:bg-hover">
          Edit
        </button>
        <button className="p-2 bg-red-500 text-primary rounded-md hover:bg-red-400">
          Delete
        </button>
      </div>
    </div>
  );
}
