import React from "react";
import Image from "next/image";

function Logo(props: any) {
  const { renderDefault, title } = props;

  return (
    <div className="flex items-center space-x-2">
      <img
        src="../../public/pfp"
        alt=""
        width={48}
        height={48}
        className="object-cover rounded-full"
      />
      {renderDefault && <>{renderDefault(props)}</>}
      Logo
    </div>
  );
}

export default Logo;
