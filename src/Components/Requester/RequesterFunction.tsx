import React from "react";

const Function = ({
  title,
  src,
  alt,
}: {
  title: string;
  src: any;
  alt: string;
}) => (
  <div className="requester-function w-full flex justify-center flex-col rounded-xl py-6 ml-10 cursor-pointer">
    <p className="requester-function__title text-center font-montserrat px-10">
      {title}
    </p>

    <img
      alt={alt}
      className="w-32 mx-auto mt-4"
      src={src}
    />
  </div>
);

export default Function;
