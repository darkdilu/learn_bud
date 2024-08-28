import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
export const rating = (number) => {
  if (number >= 1 && number <= 1.5) {
    return (
      <div className="flex justify-center">
        <IoIosStar />
      </div>
    );
  } else if (number >= 1.5 && number <= 2) {
    return (
      <div className="flex justify-center">
        <IoIosStar />
        <IoIosStarHalf />
      </div>
    );
  } else if (number >= 2 && number <= 2.5) {
    return (
      <div className="flex justify-center">
        <IoIosStar />
        <IoIosStar />
      </div>
    );
  } else if (number >= 2.5 && number <= 3) {
    return (
      <div className="flex justify-center">
        <IoIosStar />
        <IoIosStar />
        <IoIosStarHalf />
      </div>
    );
  } else if (number >= 3 && number <= 3.5) {
    return (
      <div className="flex justify-center">
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
      </div>
    );
  } else if (number >= 3.5 && number <= 4) {
    return (
      <div className="flex justify-center">
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStarHalf />
      </div>
    );
  } else if (number >= 4 && number <= 4.5) {
    return (
      <div className="flex justify-center">
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
      </div>
    );
  } else if (number >= 4.5 && number <= 5) {
    return (
      <div className="flex justify-center">
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStarHalf />
      </div>
    );
  } else if (number >= 5) {
    return (
      <div className="flex justify-center">
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
      </div>
    );
  }
};
