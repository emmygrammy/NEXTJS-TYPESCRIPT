'use client';
import { useRouter } from "next/navigation";

export default function DashboardPage() {

    const router = useRouter();
    const handleClick = () => {
        router.push("/");
    }
  return (
    <div>
      <h1 className="text-3xl font-bold">dashboard</h1>
      <button 
      className="bg-blue-500 text-white px-4 py-2 rounded-md"
           onClick={handleClick}>
        go to hompage
      </button>
      
    </div>
  );
}