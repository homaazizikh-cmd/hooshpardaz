export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);

  // 1. چک کردن وجود توکن‌ها (مهم‌ترین بخش برای خطای 500)
  if (!config.telegramToken || !config.telegramChatId) {
    console.error("❌ ERROR: Telegram Token or Chat ID is missing in Vercel Settings!");
    throw createError({
      statusCode: 500,
      message: 'تنظیمات ربات در سرور یافت نشد. لطفاً Environment Variables را در Vercel چک کنید.'
    });
  }

  const { name, phone, message } = body;
  const text = `📩 پیام جدید از سایت\n👤 نام: ${name}\n📞 شماره: ${phone}\n💬 متن: ${message}`;

  try {
    const response: any = await $fetch(`https://api.telegram.org/bot${config.telegramToken}/sendMessage`, {
      method: 'POST',
      body: {
        chat_id: config.telegramChatId,
        text: text,
        parse_mode: 'Markdown'
      }
    });

    return { success: true };
    
  } catch (error: any) {
    // 2. لاگ کردن خطای واقعی تلگرام در کنسول ورسل
    console.error("❌ Telegram API Error:", error.data || error.message);
    
    throw createError({
      statusCode: 500,
      message: 'ارتباط با تلگرام با خطا مواجه شد. لطفاً لاگ‌های ورسل را چک کنید.'
    });
  }
});