import { useContext } from "react";
import { AppContext } from "../../App";
import aos_logo from "../../assets/aos-logo.png";
import "./Footer.css";
import useTranslations from "../../hooks/useTranslations";
// import bg_texture from "../../assets/texture_paper_dark.jpg";

const Footer = () => {
  const translate = useTranslations();
  const ctx = useContext(AppContext);

  return (
    <div className="Footer">
      <div>
        <div>SPEARHELPER</div>
        <div
          className="footer__lang-selector"
          onClick={() => ctx?.setLang(ctx.lang === "es" ? "en" : "es")}
        >
          {ctx.lang === "es" ? "ES" : "EN"}
        </div>
      </div>
      <img src={aos_logo} />
      <div
        className="footer__set-selector"
        onClick={() => ctx?.setSpearheadSet(ctx.spearhead_set === 1 ? 2 : 1)}
      >
        {ctx.spearhead_set === 1 ? (
          <div className="footer__set-1">
            <span>{translate("fire")}</span>
            {translate("and")}
            <span>{translate("jade")}</span>
          </div>
        ) : (
          <div className="footer__set-2">
            <span>{translate("sand")}</span>
            {translate("and")}
            <span>{translate("bone")}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Footer;
