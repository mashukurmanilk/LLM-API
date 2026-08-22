// const GoogleGenAI = require("@google/genai");
import "dotenv/config";
import * as readLine from 'readline/promises';
import {GoogleGenAI} from "@google/genai";

console.log("API key exists:", !!process.env.GEMINI_API_KEY);
console.log("API key length:", process.env.GEMINI_API_KEY?.length);

const apikey = process.env.GEMINI_API_KEY;

if(!apikey){
    throw new Error("GEMINI_API_KEY is not defined in the environment variables.");
}

const client=new GoogleGenAI({ apiKey:apikey});

const rl=readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function main(){
    const userInput=await rl.question("How can I help you today? ");
    if(!userInput.trim()){
        console.log("Please provide a valid input.");
        rl.close();
        return;
    }
    try{
        const response=await client.models.generateContent({
            model:"gemini-3.6-flash",
            contents:"Explain what a callback function is in JavaScript in simple terms.",
        })
        console.log("Full respose:\n", response);
        console.log("\n \nGenerated content:\n", response.text);
        console.log(response.text);
    } catch (error) {
        console.error("Error generating content:", error);
    }
    finally{
        rl.close();
    }
}

main()

