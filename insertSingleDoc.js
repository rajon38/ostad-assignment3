const { client } = require("./dbCon");


const createDoc=async()=>{
    try {
        const database = client.db("bdbazar");
        const users = database.collection("customer");
        const doc = {
            name: "Rashedul Islam",
            address: "Dhaka",
            phone: "01310000000"
        }
        const result = await users.insertOne(doc);
        console.log(`A document was inserted with the id: ${result.insertedId}`);
    } catch (error) {

        console.log(error);

    }finally{

        await client.close();

    }
}
createDoc();