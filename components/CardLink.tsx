import Link from "next/link";
import { FC, ReactNode, useEffect, useState } from "react";

const CardLink: FC<{
	title: string;
	date: string | null | undefined;
	children: ReactNode;
	location: ReactNode;
	image: string | null | undefined;
	href: string;
}> = ({ title, children, date, location, image, href }) => {
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);
	if (mounted)
		return (
			<Link
				href={href}
				className="overflow-hidden p-1 w-full bg-gray-800 rounded-lg shadow-md duration-300 sm:w-1/2 md:w-1/3 filter brightness-100 hover:before:scale-x-0 hover:brightness-125"
			>
				{image && (
					<img
						className="block w-full h-1/2 bg-center bg-cover rounded-md"
						src={image}
					/>
				)}
				<div className="p-6">
					<div className="flex justify-between items-center mb-4">
						{date && (
							<span className="text-sm font-medium text-gray-500 uppercase">
								{date}
							</span>
						)}
						{location && (
							<span className="text-sm font-medium text-gray-700">
								{location}
							</span>
						)}
					</div>
					<h4 className="mb-2 text-2xl font-bold text-gray-400">{title}</h4>
					<div className="text-white">{children}</div>
				</div>
			</Link>
		);
	return <> </>;
};

export default CardLink;
