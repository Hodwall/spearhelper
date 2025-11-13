import { useContext } from "react";
import { AppContext } from "../App";
import en from "../lang/en.json";
import es from "../lang/es.json";

type Translations = { [key: string]: string};

const useTranslations = () => {
  const { lang } = useContext(AppContext);
  const translations: Translations = lang === "es" ? es : en;

  const getTranslation = (id: string) => {
    return translations[id];
  }

  return getTranslation;
}

export default useTranslations;