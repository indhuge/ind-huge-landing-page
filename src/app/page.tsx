import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

type Params = { uid: "landing_page" };

export default async function Page({ params }: { params: Params }) {
	const client = createClient();
	const page = await client
		.getByUID("landing_page", "landing_page")
		.catch(() => notFound());

	return (
		
		<>	
			{/*Script Hubspot*/}
			<script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/43688574.js"/>

			<SliceZone slices={page.data.slices} components={components} />
		</>
	);
}

export async function generateMetadata({
	params,
}: {
	params: Params;
}): Promise<Metadata> {
	const client = createClient();
	const page = await client
		.getByUID("landing_page", "landing_page")
		.catch(() => notFound());

	return {
		title: page.data.meta_title,
		description: page.data.meta_description,
	};
}

export async function generateStaticParams() {
	const client = createClient();
	const pages = await client.getAllByType("landing_page");

	return pages.map((page) => {
		return { uid: page.uid };
	});
}