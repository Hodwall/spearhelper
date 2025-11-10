import es from "../lang/es.json";
import en from "../lang/en.json";

type Translations = { [key: string]: string};

const useTranslations = (language: "es" | "en") => {
  const translations: Translations = language === "es" ? es : en;

  const getTranslation = (id: string) => {
    return translations[id];
  }

  return getTranslation;
}

export default useTranslations;