import React from "react";
import Image from "next/image";
import Link from "next/link";
import Selector from "@/components/dropDownSearch";

export default function Discover() {
  return (
	<div className="bg-black h-screen ">
		<div className="h-min w-min m-4">
			<Selector />
		</div>
	</div>
  );
}