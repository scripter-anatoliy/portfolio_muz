export const SITE_NAME = "Селиванова Татьяна";

export const SITE_TITLE_TEMPLATE = `%s | ${SITE_NAME}`;

export const SITE_DEFAULT_TITLE =
  "Музыкальный руководитель в детском саду | Развитие через музыку и творчество";

export const SITE_DEFAULT_DESCRIPTION =
  "Музыкальный руководитель в детском саду: развитие творчества и ритма через игры и праздники. Современные методики и индивидуальный подход!";

export const SITE_KEYWORDS = [
  "музыкальный руководитель",
  "музрук",
  "детский сад",
  "музыкальные занятия",
  "дошкольное образование",
  "музыка для детей",
  "развитие ритма",
  "детские праздники",
  "музыкальное творчество",
  "педагог по музыке",
];

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://selivanchiki.ru"
).replace(/\/$/, "");

export const YM_ID = process.env.NEXT_PUBLIC_YM_ID || "100913405";
