// server/api/dana.post.ts
import { GoogleGenerativeAI } from "@google/generative-ai";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { message } = body;
    
    if (!message) {
      throw createError({ statusCode: 400, statusMessage: 'پیامی دریافت نشد' });
    }

    const config = useRuntimeConfig();
    
    // اطمینان از وجود کلید API
    if (!config.googleApiKey) {
      console.error("API Key is missing in runtimeConfig!");
      throw createError({ statusCode: 500, statusMessage: 'تنظیمات API ناقص است' });
    }

    const genAI = new GoogleGenerativeAI(config.googleApiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(message);
    const response = await result.response;
    
    return { reply: response.text() };
    
  } catch (error: any) {
    console.error("خطای کامل دانا:", error); // این خطا در ترمینال VS Code نمایش داده می‌شود
    throw createError({ 
      statusCode: 500, 
      statusMessage: error.message || 'خطای ناشناخته در دانا' 
    });
  }
});