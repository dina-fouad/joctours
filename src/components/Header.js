import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation("common");

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ru" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <Link to="/">{t("nav.home")}</Link>
        <Link to="/about">{t("nav.about")}</Link>
        <Link to="/tours">{t("nav.tours")}</Link>
        <Link to="/contact">{t("nav.contact")}</Link>
      </nav>

      <button onClick={toggleLanguage} style={styles.btn}>
        {t("lang")}
      </button>
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "16px 40px",
    background: "#222",
    alignItems: "center"
  },
  nav: {
    display: "flex",
    gap: "20px"
  },
  btn: {
    padding: "6px 12px",
    cursor: "pointer"
  }
};
