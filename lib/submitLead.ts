export type LeadPayload = {
  name: string;
  contact: string;
  comment: string;
  plan?: string;
};

/**
 * Приём заявок пока не подключён к реальному каналу (сайт — статический
 * экспорт на GitHub Pages, без серверных API-роутов). Когда появится
 * Telegram-бот или форма-сервис (например Web3Forms), замените тело
 * этой функции на реальный fetch к выбранному сервису.
 */
export async function submitLead(payload: LeadPayload): Promise<void> {
  if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line no-console
    console.info("[submitLead] заявка (отправка пока не настроена):", payload);
  }
  await new Promise((resolve) => setTimeout(resolve, 500));
}
