const {client} = require("./dbCon");

const findMultipleDoc=async ()=>{
    try {
        const database = client.db("bdbazar");
        const users = database.collection("customer");

        const query = { }

        const cursor = users.find(query);

        if ((await cursor.EstimatedDocumentCount) === 0) {
            console.log("No documents found!");
        }else{
            const users = await cursor.toArray();
            await users.forEach(user=>console.log(user));
        }

    }catch (error) {
        console.log(error);
    }finally {
        await client.close();
    }
}
findMultipleDoc();