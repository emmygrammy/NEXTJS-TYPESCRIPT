import Link from "next/link";

interface ProductPageProps {
    searchParams: {
        category?: string;
        sort?: string;
    };
}

const products = [
    {
        id: "1",
        name: "React course",
        category: "react",
    },
    {
        id: "2",
        name: "JavaScript course",
        category: "javascript",
    },
    {
        id: "3",
        name: "Python course",
        category: "python",
    },

    {
        id: "4",
        name: "Java course",
        category: "java",
    },
    {
        id: "5",
        name: "C# course",
        category: "csharp",
    },

]


export default async function ProductPage({searchParams}: ProductPageProps) {
    const {category, sort} = await searchParams;
    let filteredProducts = products;
    if(category) {
        filteredProducts = products.filter(product => product.category === category);
    }
    if(sort === 'asc') {
        filteredProducts = [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name));
    } 
    return (
        <div>
            <h1 className="text-3xl font-bold">productPage</h1>
            
            <div className="flex gap-4 bg-blue-500 text-white underline rounded-md">
                <Link href="/products">all products</Link>
                <Link href="/products?category=react">react products</Link>
                <Link href="/products?category=java">java products</Link>
                <Link href="/products?category=csharp">csharp products</Link>
                <Link href="/products?category=python">python products</Link>
                <Link href="/products?category=javascript">javascript products</Link>
                <Link href="/products?sort=asc">asc sort</Link>
                <Link href="/products?sort=desc">desc sort</Link>

             </div>

             <p>Showing <b>{filteredProducts.length} products</b>
             |sorted by {sort || 'name'}
             </p>
             <ul>
                {filteredProducts.map(product => (
                    <li key={product.id}>{product.name}</li>
                ))}
             </ul>



        </div>
    );
}