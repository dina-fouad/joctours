import { Box, Typography, Button, IconButton, TextField } from "@mui/material";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import { LocationOn, Phone, Email } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation("common");

  const quickLinks = [
    { key: "home", label: t("nav.home") },
    { key: "about", label: t("nav.about") },
    { key: "programs", label: t("nav.programs") },
    { key: "contact", label: t("nav.contact") }
  ];

  const socialIcons = [Facebook, Instagram, Twitter, YouTube];

  const handleQuickLinkClick = (key) => {
    if (key === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (key === "programs") {
      const section = document.getElementById("program-section");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else if (key === "contact") {
      window.location.href = "/contact";
    } else if (key === "about") {
      window.location.href = "/about";
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "#1b4d5c",
        color: "#fff",
        pt: 14,
        px: { xs: 3, md: 12 },
        overflow: "hidden",
      }}
    >
      {/* Wave Top */}
      <Box
        sx={{
          position: "absolute",
          top: -1,
          left: 0,
          width: "100%",
          overflow: "hidden",
          lineHeight: 0,
        }}
      >
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ width: "100%", height: 80, display: "block" }}
        >
          <path d="M0,0 C300,50 1000,0 1200,120 L1200,0 L0,0 Z" fill="#eef3f5" />
        </svg>
      </Box>

      {/* Decorative Circles */}
      <Box
        sx={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.05)",
          top: "10%",
          left: "-100px",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.05)",
          bottom: "-150px",
          right: "-150px",
        }}
      />

      {/* Footer Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          flexWrap: { xs: "wrap", md: "nowrap" },
          justifyContent: "space-between",
          gap: { xs: 6, md: 0 },
          mb: 8,
        }}
      >
        {/* 1️⃣ About Company */}
        <Box sx={{ flex: 1, width: { xs: "100%", md: "auto" } }}>
          <Typography
            sx={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: { xs: 28, md: 32 },
              fontWeight: 700,
              color: "#00FFE0",
              mb: 2,
            }}
          >
            {t("companyName")}
          </Typography>
          <Typography sx={{ opacity: 0.8, mb: 2 }}>
            {t("aboutDescription")}
          </Typography>
          <Button
            variant="outlined"
            sx={{
              color: "#00FFE0",
              borderColor: "#00FFE0",
              "&:hover": { background: "#00FFE0", color: "#1b4d5c" },
              textTransform: "none",
              mt: 1,
            }}
          >
            {t("readMore")}
          </Button>
        </Box>

        {/* 2️⃣ Quick Links */}
        <Box sx={{ flex: 1, width: { xs: "100%", md: "auto" } }}>
          <Typography sx={{ fontWeight: 700, mb: 2 }}>{t("quickLinks")}</Typography>
          {quickLinks.map((link, i) => (
            <Button
              key={i}
              onClick={() => handleQuickLinkClick(link.key)}
              sx={{
                display: "block",
                color: "#fff",
                textTransform: "none",
                mb: 1,
                "&:hover": { color: "#00FFE0" },
              }}
            >
              {link.label}
            </Button>
          ))}
        </Box>

        {/* 3️⃣ Contact */}
        <Box sx={{ flex: 1, width: { xs: "100%", md: "auto" } }}>
          <Typography sx={{ fontWeight: 700, mb: 2 }}>{t("contactUs")}</Typography>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1, gap: 1 }}>
            <LocationOn sx={{ color: "#00FFE0" }} />
            <Typography>{t("address")}</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1, gap: 1 }}>
            <Phone sx={{ color: "#00FFE0" }} />
            <Typography>{t("phone")}</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2, gap: 1 }}>
            <Email sx={{ color: "#00FFE0" }} />
            <Typography>{t("email")}</Typography>
          </Box>
          <Button
            variant="outlined"
            sx={{
              color: "#00FFE0",
              borderColor: "#00FFE0",
              "&:hover": { background: "#00FFE0", color: "#1b4d5c" },
              textTransform: "none",
              mt: 1,
            }}
          >
            {t("bookNow")}
          </Button>
        </Box>

        {/* 4️⃣ Follow & Newsletter */}
        <Box sx={{ flex: 1, width: { xs: "100%", md: "auto" } }}>
          <Typography sx={{ fontWeight: 700, mb: 2 }}>{t("followUs")}</Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
            {socialIcons.map((Icon, i) => (
              <IconButton
                key={i}
                sx={{
                  color: "#fff",
                  border: "1px solid #00FFE0",
                  "&:hover": { background: "#00FFE0", color: "#1b4d5c" },
                }}
              >
                <Icon />
              </IconButton>
            ))}
          </Box>
          <Typography sx={{ fontWeight: 700, mb: 1 }}>{t("newsletter")}</Typography>
          <Box sx={{ display: "flex", gap: 1, flexDirection: { xs: "column", sm: "row" } }}>
            <TextField
              placeholder={t("enterEmail")}
              variant="outlined"
              size="small"
              sx={{
                flex: 1,
                background: "#fff",
                borderRadius: 1,
                "& .MuiOutlinedInput-root": {
                  borderRadius: 1,
                  paddingRight: 1,
                  "& fieldset": { border: "none" },
                },
              }}
            />
            <Button
              variant="contained"
              sx={{
                background: "#00FFE0",
                color: "#1b4d5c",
                "&:hover": { background: "#1da9cc", color: "#fff" },
                textTransform: "none",
                width: { xs: "100%", sm: "auto" },
              }}
            >
              {t("subscribe")}
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Divider */}
      <Box sx={{ height: "1px", backgroundColor: "rgba(255,255,255,0.2)", mb: 2 }} />

      {/* Copyright */}
      <Typography sx={{ textAlign: "center", fontSize: 14, opacity: 0.7 }}>
        © {new Date().getFullYear()} {t("companyName")}. {t("allRightsReserved")}
      </Typography>
    </Box>
  );
}
