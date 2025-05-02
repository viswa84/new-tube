//TODO create a script to seed categories

import { db } from "@/db";
import { categories } from "@/db/schema";


const categoryNames = [
    "Cars and vehicles",
    "Comedy",
    "Education",
    "Gamming",
    "Entertainement",
    "Film and animation",
    "How-to and style",
    "Music",
    "News and Politics",
    "People and blogs",
    "Pets and technology",
    "Sports",
    "Travel and events",

];

 async function main (){
    console.log("Seeding categories ...");

    try{

        const values = categoryNames.map((name)=>({
            name,
            description:`Videos related to ${name.toLocaleLowerCase()}`,
        }));

        await db.insert(categories).values(values);

        console.log("Categores seed sucessfully!")

    }catch (error){
        console.log("Error seeding categories:",error);
        process.exit(1)
    }
 };

 main();
