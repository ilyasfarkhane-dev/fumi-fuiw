import React from "react";
import Link from "next/link";

interface ActionButtonProps {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

export default function ActionButton({ label, href, icon }: ActionButtonProps) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 bg-[#0b787f] hover:bg-[#256d46] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 font-arabic text-lg"
    >
      {icon}
      {label}
    </Link>
  );
} 