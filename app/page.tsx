import Image from "next/image";



export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold">
        hello world
      </h1>

      <Image 
      src="/2.jpg.jpeg" 
      alt="logo" 
      width={100}
      height={200}
      />
     
    </div>
  );
}
