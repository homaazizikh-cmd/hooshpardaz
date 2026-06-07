// server/api/dana.post.ts
import { GoogleGenerativeAI } from "@google/generative-ai";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { message } = body;
  const config = useRuntimeConfig();

  // لاگ کردن کلید برای اطمینان (فقط برای تست - بعداً پاکش کن)
  // console.log("API Key exists:", !!config.googleApiKey); 

  const genAI = new GoogleGenerativeAI(config.googleApiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  try {
    const result = await model.generateContent(message);
    const response = await result.response;
    return { reply: response.text() };
  } catch (error) {
    // این خط کلید حل معماست
    console.error("Gemini API Error details:", error); 
    return { error: "خطا در برقراری ارتباط: " + error.message };
  }
});