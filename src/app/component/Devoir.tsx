import React from "react";

const Devoir = ({
  name,
  url,
  date,
}: {
  name: string;
  url: string;
  date: string;
}) => {
  return (
    <div className="justify-between flex items-center">
      <a
        href={`/${url}.pdf`}
        className="text-secondary font-bold text-sm my-4 hover:translate-x-5 duration-300"
        target="_blank"
      >
        {name}
      </a>
      <span className="text-gray-600 text-sm">Date: {date}</span>
    </div>
  );
};

export default Devoir;
