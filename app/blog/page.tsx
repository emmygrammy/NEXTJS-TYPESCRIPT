import Link from "next/link";

const blog = [
    {
        slug: "next.js",
        title: 'next.js',
        content: 'This is next.js course',
    },
    {
        slug: "React.js",
        title: 'React.js',
        content: 'This is React.js course',
        
    },
    {
         slug: "node.js",
        title: 'node.js',
        content: 'This is node.js course',

    }
]

export default function BlogPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold">blogPage</h1>
            <ul>
                {blog.map((item) => (
                    <li
                     className="px-4 underline"
                     key={item.slug}>
                        <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                    </li>
                ))}
            </ul>
       </div>
    );
}

