import { connectDB } from "../../util/database.js";
import ListCompo from "../../component/listcompo.js"

export default async function ListPageServer(props) {
    
    const client = await connectDB;
    const db = client.db("teamproject")

    let result = await db.collection('list').find({category: props.params.cate}).toArray();

    
    return(
        <div>
            <ListCompo data={result}/>
        </div>
    )
}

