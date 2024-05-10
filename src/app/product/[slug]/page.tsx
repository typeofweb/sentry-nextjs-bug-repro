import { notFound } from "next/navigation";
import { type Metadata } from "next/types";

export const generateMetadata = async ({
	params,
	searchParams,
}: {
	params: { slug: string };
	searchParams: { id?: string };
}): Promise<Metadata> => {
	const data = await fetch("https://freetestapi.com/api/v1/posts/" + searchParams['id']);
  const json = await data.json();
	const selectedVariant = json.title
	if (!selectedVariant) {
		return notFound();
	}

	return {
		title: `${selectedVariant} ${params.slug}`
	} satisfies Metadata;
};

export default async function SingleProductPage({
}: {
	params: { slug: string };
	searchParams: { variant?: string };
}) {
	return <div>
		See Sentry console for error
	</div>
}
