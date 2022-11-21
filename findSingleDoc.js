const {client} = require("./dbCon");

const findSingleDoc=async ()=>{
    try {
        const database = client.db("bdbazar");
        const users = database.collection("customer");
        const query = {name: "Shahadul Islam"};

        const result = await users.findOne(query);
        console.log(result);
    }catch (error) {
        console.log(error);
    }finally {
        await client.close();
    }
}
findSingleDoc();