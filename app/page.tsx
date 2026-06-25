import Image from "next/image";

interface HomePageProps {
    id: number;
    title: string;
    body: string;
}


export default async function Home({ id, title, body }: HomePageProps) {
 const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, 
  { cache: "no-cache" }
 );
 const data = await res.json();
 console.log(data);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center">
        Blog post
      </h1>

      <Image 
      src="/2.jpg.jpeg" 
      alt="logo" 
      width={100}
      height={100}
      />
  <div>
    {data.slice(0, 5).map((item: HomePageProps) => (
      <div key={item.id}>
        <h2>{item.title}</h2>
        <p>{item.body}</p>
       
      </div>
    ))}
  </div>

     
    </div>
  );
}
