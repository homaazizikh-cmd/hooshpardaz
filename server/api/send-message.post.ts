// server/api/send-message.post.ts
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const config = useRuntimeConfig();

  const { name, phone, message } = body;
  
  // متن پیام ارسالی به تلگرام
  const text = `
📩 **پیام جدید از سایت هوش‌پرداز**
👤 نام: ${name}
📞 شماره: ${phone}
💬 پیام: ${message}
`;

  try {
    await $fetch(`https://api.telegram.org/bot${config.telegramToken}/sendMessage`, {
      method: 'POST',
      body: {
        chat_id: config.telegramChatId,
        text: text,
        parse_mode: 'Markdown'
      }
    });
    return { success: true };
  } catch (error) {
    throw createError({ statusCode: 500, statusMessage: 'خطا در ارسال پیام به تلگرام' });
  }
});