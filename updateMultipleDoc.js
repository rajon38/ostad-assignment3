const {client} = require("./dbCon");

const updateMultipleDoc=async ()=>{
    try {
        const database = client.db("bdbazar");
        const users = database.collection("customer");

        const filter = { };
        const updateDoc = {
            $set: {
                isEmploed: true
            },
        };

        const result = await users.updateMany(filter, updateDoc);
        console.log(`Updated ${result.modifiedCount} documents`);
    }catch (error) {
        console.log(error);
    }finally {
        await client.close();
    }
}
updateMultipleDoc();