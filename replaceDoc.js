const {client} = require("./dbCon");

const replaceDoc=async ()=>{
    try {
        const database = client.db("bdbazar");
        const users = database.collection("customer");

        const query = { address: "Feni" };

        const replacement = {
            name: "Wahidul Islam",
            address: "Barishal",
            phone: "01710000000",
            isEmploed: true
        };
        const result = await users.replaceOne(query, replacement);
        console.log(`Modified ${result.modifiedCount} document(s)`);

    }catch (error) {
        console.log(error)
    }finally {
        await client.close();
    }
}
replaceDoc();