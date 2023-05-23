import React from "react";
interface ResultProps {
  result: string;
}
const ImageShow = ({ result }: ResultProps) => {
  return (
    <div className="w-full">
      <img src={result} alt="result" />
    </div>
  );
};

export default ImageShow;
