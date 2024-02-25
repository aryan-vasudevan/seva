import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

const Selector = () => {
  const [countries, setCountries] = useState<any[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
	fetch("https://restcountries.com/v2/all?fields=name")
	  .then((res) => res.json())
	  .then((data) => {
		setCountries(data);
	  });
  }, []);
  return (
	<div className="w-72 font-medium h-80">
	  <div
		onClick={() => setOpen(!open)}
		className={`bg-white w-full p-2 flex items-center justify-between rounded ${"text-black"
		}`}
	  >
		{selected
		  ? selected?.length > 25
			? selected?.substring(0, 25) + "..."
			: selected
		  : "Select Country"}
		<BiChevronDown size={20} className={`${open && "rotate-180"}`} />
	  </div>
	  <ul
		className={`bg-white mt-2 overflow-y-auto ${
		  open ? "max-h-60" : "max-h-0"
		} `}
	  >
		<div className="flex items-center px-2 sticky top-0 bg-black">
		  <input
			type="text"
			value={inputValue}
			onChange={(e) => setInputValue(e.target.value.toLowerCase())}
			placeholder="Enter country name"
			className="text-black p-2 outline-none "
		  />
		</div>
		{countries && Array.isArray(countries) && countries.map((country: any) => (
		  <li
			key={country.name}
			className={`p-2 text-sm bg-black hover:text-theme-blue
			${
			  country?.name?.toLowerCase() === selected?.toLowerCase() &&
			  "bg-sky-600"
			}
			${
			  country.name.toLowerCase().startsWith(inputValue)
				? "block"
				: "hidden"
			}`}
			onClick={() => {
			  if (country?.name?.toLowerCase() !== selected.toLowerCase()) {
				setSelected(country?.name);
				setOpen(false);
				setInputValue("");
			  }
			}}
		  >
			{country.name}
		  </li>
		))}
	  </ul>
	</div>
  );
};

export default Selector;