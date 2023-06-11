import {Bard} from "googlebard";
import {result} from "./enconvo.js";


const args = process.argv.slice(2);
const {$option} = JSON.parse(args[0]);

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

let response = ""
await bot.askStream(
    async (res) => {
        // invoke "add"
        const end = {
            "type": "text",
            "value": response,
        }
        let resp = await result("stream", [res])
        console.log(resp)
        response += res
    }, // returns the response
    $option.text,
    conversationId,
);

// response = await bot.ask($option.text, conversationId)
// console.log(response);

const end = {
    "type": "text",
    "value": response,
}

// await result("result", [end])

console.log("begin")
let resp = await result("result", [response])
console.log(resp+"kkk")



process.exit()
// other code

