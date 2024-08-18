export default function Page({ params }: { params: { id: string } }) {
	return <div>Professeur {params.id}</div>;
}
