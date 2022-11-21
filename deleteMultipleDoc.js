const {client} = require("./dbCon");

const deleteMultipleDoc=async()=>{
    try {
        const database = client.db("bdbazar");
        const users = database.collection("customer");
        const query = {};

        const result = await users.deleteMany(query);
        console.log("Deleted" + result.deletedCount + "Documents");
    }catch (error) {
        console.log(error);
    }finally {
        await client.close()
    }
}
deleteMultipleDoc();