interface BlogPageProps {
    params: {
        slug: string;
    };
}

const BlogData : Record<string, {title: string, content: string}> = {
    "next.js": {
        title: 'next.js',
        content: "This is next.js course",
    },
    "React.js": {
        title: 'React.js',
        content: "This is React.js course",
    },
    "node.js": {
        title: 'node.js',
        content: "This is node.js course",
    },
}

export default async function BlogPage({params}: BlogPageProps) {
    const {slug} = await params;
    const blog = BlogData[slug];
    if (!blog) {
        return <h1>404 Not Found</h1>;
    }
    return (
        <div>
            <h1 className="text-3xl font-bold">{blog.title}</h1>
            <p className="text-lg">{blog.content}</p>
            <p>
                url: {slug}
            </p>
        </div>
    );
}
