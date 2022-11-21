const {client} =require("./dbCon");

const CreateMultipleDoc=async()=>{
    try {
        const database = client.db("bdbazar");
        const users = database.collection("customer");

        const docs = [
            {
                name: "Shahadul Islam",
                address: "Feni",
                phone: "01410000000"
            },
            {
                name: "Maherul Islam",
                address: "Gazipur",
                phone: "01210000000"
            },
            {
                name: "Majharul Islam",
                address: "Rangpur",
                phone: "01510000000"
            },
            {
                name: "Toriqul Islam",
                address: "Sylet",
                phone: "01610000000"
            },
            {
                name: "Wahidul Islam",
                address: "Feni",
                phone: "01710000000"
            },
            {
                name: "Shifatul Islam",
                address: "Chittagong",
                phone: "01810000000"
            }
        ];
        const option = {ordered: true};

        const result = await users.insertMany(docs,option);
        console.log(`${result.insertedCount} documents are inserted`);
    }catch (error) {
        console.log(error);
    }finally {
        await client.close();
    }
}
CreateMultipleDoc();