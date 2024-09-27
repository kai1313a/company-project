import { ObjectId } from "mongodb";
import { connectDB } from "../../util/database.js";
import DeTail from "../../component/detailcompo.js"

export default async function ListPageServer(props) {
    
    const client = await connectDB;
    const db = client.db("teamproject")

    let result = await db.collection('list').findOne({_id: new ObjectId(props.params.id)});

    
    return(
        <div>
            <DeTail data={result}/>
        </div>
    )
}


export async function generateStaticParams() {
    const posts = await fetch('https://.../posts').then((res) => res.json())
   
    return posts.map((post) => ({
      slug: post.slug,
    }))
  }
