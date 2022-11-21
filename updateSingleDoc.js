const {client} = require("./dbCon");

const updateSingleDoc=async ()=>{
    try {
        const database = client.db("bdbazar");
        const users = database.collection("customer");

        const filter = { name: "Shifatul Islam" };
        const options = { upsert: true };

        const updateDoc = {
            $set: {
                country: "Bangladesh"
            },
        };
        const result = await users.updateOne(filter, updateDoc, options);
        console.log(
            `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
        );
    }catch (error) {
        console.log(error)
    }finally {
        await client.close();
    }
}
updateSingleDoc();