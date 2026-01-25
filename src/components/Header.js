import { AppBar, Toolbar, Button, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation("common");

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "80vh",
        overflow: "hidden",
        m: 0,
        p: 0,
        backgroundColor: "#e0eee6",
      }}
    >
      {/* 🎥 Video Background */}
      <Box
        component="video"
        autoPlay
        loop
        muted
        playsInline
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src="/videos/video.mp4" type="video/mp4" />
      </Box>

      {/* 🧭 Navbar */}
      <AppBar
        position="absolute"
        elevation={0}
        sx={{
          background: "transparent",
          px: 4,
          zIndex: 2,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* 🌐 Nav Links */}
          <Box sx={{ display: "flex", gap: 3 }}>
            {["home", "about", "tours", "contact"].map((item) => (
              <Button
                key={item}
                component={Link}
                to={item === "home" ? "/" : `/${item}`}
                sx={{
                  color: "#fff",
                  fontWeight: 500,
                  fontSize: "1rem",
                  letterSpacing: "0.5px",
                  textTransform: "none",
                  textShadow: `
                    0 2px 6px rgba(0,0,0,0.6),
                    0 0 12px rgba(0,176,255,0.35)
                  `,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background: "transparent",
                    color: "#E1F5FE",
                    textShadow: `
                      0 2px 8px rgba(0,0,0,0.8),
                      0 0 22px rgba(0,176,255,0.8)
                    `,
                    transform: "translateY(-1px)",
                  },
                }}
              >
                {t(`nav.${item}`)}
              </Button>
            ))}
          </Box>

          {/* 🌍 Language Button */}
          <Button
            variant="outlined"
            onClick={toggleLanguage}
            sx={{
              borderColor: "#fff",
              color: "#fff",
              textShadow: "0 2px 6px rgba(0,0,0,0.6)",
              "&:hover": {
                background: "rgba(255,255,255,0.15)",
                borderColor: "#fff",
              },
            }}
          >
            {t("lang")}
          </Button>
        </Toolbar>
      </AppBar>

      {/* 🏔 Hero Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
          px: 2,
          textShadow: `
            0 2px 8px rgba(0,0,0,0.6),
            0 0 18px rgba(0,176,255,0.45)
          `,
        }}
      >
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          {t("hero.title", "Discover The World")}
        </Typography>

        <Typography variant="h6" sx={{ maxWidth: 600, mb: 4 }}>
          {t("hero.subtitle", "Unforgettable journeys crafted just for you")}
        </Typography>

        <Button
          component={Link}
          to="/tours"
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "#00B0FF",
            px: 5,
            py: 1.5,
            fontSize: "1rem",
            borderRadius: 3,
            boxShadow: "0 6px 20px rgba(0,0,0,0.35)",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "#0091EA",
              transform: "translateY(-2px)",
            },
          }}
        >
          {t("hero.cta", "Explore Tours")}
        </Button>
      </Box>

      {/* 🌊 Wave Separator متجاوب */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          overflow: "hidden",
          lineHeight: 0,
          zIndex: 1,
        }}
      >
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: "auto", minHeight: "220px" }}
        >
          <path
            d="M0,0 C300,100 900,0 1200,80 L1200,120 L0,120 Z"
            fill="#ffffff"
          />
        </svg>
      </Box>
    </Box>
  );
}
