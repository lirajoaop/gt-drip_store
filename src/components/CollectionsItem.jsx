import React from "react";

export default function CollectionsItem({ collectionIcon, collectionTitle }) {
  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <div className="flex flex-wrap justify-center gap-6">
        <div className="w-[104px] h-[104px] rounded-[150px] flex items-center justify-center p-5 bg-white">
          {collectionIcon}
        </div>
      </div>
      <p className="text-sm font-bold tracking-[0.75px] text-[#474747]">
        {collectionTitle}
      </p>
    </div>
  );
}
