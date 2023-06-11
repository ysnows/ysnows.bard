import {Bard} from "googlebard";
import {result} from "./enconvo.js";


const args = process.argv.slice(2);
const {$option} = JSON.parse(args[0]);
console.log($option.text);

let cookies = `__Secure-1PSID=WwiZu_MTinPnWs8CLduao28QFippa8UrB3R1ZJjLRC2N9zz4Q5f3K2irMn9rohnysFbO1w.`;
let bot = new Bard(cookies, {
    inMemory: false,
    savePath: "./conversations.json",
    proxy: {
        host: '127.0.0.1',
        port: '7890',
        protocol: "http",
    },
});

let conversationId = "some_random_id"; // optional: to make it remember the conversation
// let response = await bot.ask("how to implement md5 in kotlin?", conversationId); // conversationId is optional
console.log("begin...");


await bot.askStream(
    (res) => {
        // invoke "add"
        result("add", [res])
        console.log(res);
    }, // returns the response
    $option.text,
    conversationId,
);

process.exit()
// other code

