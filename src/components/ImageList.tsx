import React from "react";
import ImageShow from "./ImageShow";

interface ResultsProps {
  results: {
    id: string;
    urls: {
      regular: string;
    };
  }[];
}
const ImageList = ({ results }: ResultsProps) => {
  const renderedList = results.map((result) => {
    return (
      <div key={result.id} className="mb-2">
        <ImageShow result={result.urls.regular}  />
      </div>
    );
  });

  return <div className="image-list columns-4 mx-10">{renderedList}</div>;
};

export default ImageList;
