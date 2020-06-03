import { Client } from "https://deno.land/x/postgres/mod.ts";
import { IBeer } from "./ibeer.ts"

const env = Deno.env.toObject();


const client = new Client({
    user: env.DB_USER,
    database: env.DB_DATABASE,
    hostname: env.DB_HOST,
    password: env.DB_PWD,
    port: parseInt(env.DB_PORT)
  });


  const getById = async (id: string): (Promise<IBeer | undefined> ) => {
    await client.connect();
    const result = await client.query({
        text: "SELECT id, name, brand, is_premium, image_url FROM beers WHERE id=$1;",
        args: [id]
    });
    if (result.rowCount === 1) {
      const row = result.rows[0];
      return {
        id: row[0],
        name: row[1],
        brand: row[2],
        isPremium: row[3],
        imageUrl: row[4]
      }
    }
    else {
        return undefined;
    }
  }

  const getAll = async() : (Promise<IBeer[] | undefined>) => {
    await client.connect();
    const result = await client.query({
      text: "SELECT id, name, brand, is_premium, image_url FROM beers"
    });
    const beers : IBeer[] = [];
    if (result.rowCount && result.rowCount > 0) {
      for (let row of result.rows) {
        beers.push({
          id: row[0],
          name: row[1],
          brand: row[2],
          isPremium: row[3],
          imageUrl: row[4]
        })
      }
    }
    console.log(result)
    return beers
  }


export {getById, getAll}  