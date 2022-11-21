const {client} = require("./dbCon");

const deleteSingleDoc=async()=>{
    try {
        const database = client.db("bdbazar");
        const users = database.collection("customer");
        const query = { name: "Shahadul Islam"};

        const result = await users.deleteOne(query);

        if (result.deletedCount === 1){
            console.log("Successfully deleted one document.");
        }else {
            console.log("No documents matched the query. Deleted 0 documents");
        }
    }catch (error) {
        console.log(error);
    }finally {
        await client.close();
    }
}
deleteSingleDoc();