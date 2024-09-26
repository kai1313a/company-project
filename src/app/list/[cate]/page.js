import { ObjectId } from "mongodb";
import { connectDB } from "../../util/database.js";
import ListCompo from "../../component/listcompo.js"

export default async function ListPageServer(props) {
    
    const client = await connectDB;
    const db = client.db("teamproject")

    let result = await db.collection('list').findOne({category: props.params.cate})
    
    return(
        <div>
            <ListCompo data={result}/>
        </div>
    )
}

