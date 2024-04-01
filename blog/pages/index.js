import Link from "next/link"

import getPosts from "../lib/posts"

const Blog = ({ posts }) => {
    return <>
        <h1>Posts</h1>
        <ul>
            {posts.map(({ slug, title }) => (
                <li key={slug}>
                    <Link href={`/${slug}`}>
                        {title}
                    </Link>
                </li>
            ))}
        </ul>
    </>;
}

export async function getStaticProps() {
    return {
        props: {
            posts: await getPosts(),
        },
    }
}

export default Blog
