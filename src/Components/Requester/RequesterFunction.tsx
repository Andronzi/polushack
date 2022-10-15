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
  <div className="requester-function">
    <p>{title}</p>

    <img
      alt={alt}
      src={src}
    />
  </div>
);

export default Function;
