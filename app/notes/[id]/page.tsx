async function getNote(noteID: string) {
  // dynamic route - wont automatically cache every request
  // incremental static regeneration by adding the revalidate option
  // this tells next to regenerate the page on the server if it's older than a certain number of seconds
  // if you want pre-rendered pages you can export a function called generateStaticParams
  const res = await fetch(
    `https://sample-nextjs-pocketbase.fly.dev/api/collections/notes/records/${noteID}`,
    { next: { revalidate: 10 } }
  );
  const data = await res.json();
  return data;
}

export default async function NotePage({ params }: any) {
  const note = await getNote(params.id);

  return (
    <div>
      <h1>notes/{note.id}</h1>
      <div>
        <h3>{note.title}</h3>
        <h5>{note.content}</h5>
        <p>{note.created}</p>
      </div>
    </div>
  );
}
