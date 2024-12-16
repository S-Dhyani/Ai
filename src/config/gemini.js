import { GoogleGenerativeAI }from "@google/generative-ai";
const apiKey="AIzaSyBwhaKze_FqSCcsahEu_ezj8Ib1QbPgqwQ";

async function runChat(query){

    
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const prompt = query;
    
   
    const result = await model.generateContent(prompt);
    const ans= result.response.text()
  console.log(ans)
  return ans
}
export default runChat;