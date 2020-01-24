
import { serve } from "https://deno.land/std/http/server.ts";
import { Application } from "https://deno.land/x/oak/mod.ts";



const myBooks = [
    { ID: '1', Book_Name: 'Computer Architecture', Category: 'Computers', Price: 125.60 },
    { ID: '2', Book_Name: 'Asp.Net 4 Blue Book', Category: 'Programming', Price: 56.00 },
    { ID: '3', Book_Name: 'Popular Science', Category: 'Science', Price: 210.40 }
]


const app = new Application();

app.use(ctx => {
  ctx.response.body = myBooks;
});

await app.listen("127.0.0.1:8000");