import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  icon: string;
  name: string;
  http: string;
  className?: string;
}

function SocialLink({ icon, name, http, className }: Props) {
  return (
    <div
      className={`flex items-center justify-center px-9 py-4 bg-glass backdrop-blur-md rounded-md border-glass ${className}`}
    >
      <Link href={http}>
        <Image src={icon} width={30} height={30} alt={`icon for ${name}`} />
      </Link>
    </div>
  );
}

export default SocialLink;
