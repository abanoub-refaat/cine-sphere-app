import React from "react";

interface Props {
  backgourndImage?: string;
  categoryName: string;
}

function Category({ backgourndImage = "bg-dark", categoryName }: Props) {
  return (
    <div
      className={`flex justify-center items-center text-white font-bold py-10 px-14 rounded-2xl ${backgourndImage} bg-cover bg-center`}
    >
      {categoryName}
    </div>
  );
}

export default Category;
