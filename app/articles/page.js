import prisma from "@/lib/bd"

export default async function articles() {

    const articles = await prisma.article.findMany();
    return <div>
        liste des articles:

        <ul>
            { articles.map((article) => ( <li key={article.id}>
                    { article.name }
            </li> )) }
        </ul>

    </div>
}