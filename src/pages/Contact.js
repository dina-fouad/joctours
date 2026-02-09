import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  AppBar,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PublicIcon from "@mui/icons-material/Public";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  YouTube,
  LocationOn,
  Phone,
  Email,
} from "@mui/icons-material";

export default function ContactPage() {
  const { t, i18n } = useTranslation("common");
  const isMobile = useMediaQuery("(max-width:600px)");
  const navigate = useNavigate();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
  };

  const socialIcons = [Facebook, Instagram, Twitter, YouTube];

  return (
    <Box sx={{ bgcolor: "#f5f5f5", minHeight: "100vh" }}>
      {/* ===== NAVBAR ===== */}
      <AppBar
        position="sticky"
        elevation={3}
        sx={{
          bgcolor: "rgba(27, 77, 92, 0.95)",
          backdropFilter: "blur(8px)",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 6 } }}>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate("/")}
            sx={{
              color: "#fff",
              fontWeight: 600,
              textTransform: "none",
              "&:hover": { color: "#00FFE0", transform: "translateY(-2px)" },
              transition: "0.3s",
            }}
          >
            {t("back", "Back")}
          </Button>

          <IconButton
            onClick={toggleLanguage}
            sx={{
              color: "#00FFE0",
              "&:hover": { transform: "scale(1.2)" },
              transition: "0.3s",
            }}
          >
            <PublicIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* ===== PAGE HEADER ===== */}
      <Box
        sx={{
          py: { xs: 8, md: 14 },
          textAlign: "center",
          background: "linear-gradient(180deg, #1b4d5c 0%, #0f2f38 100%)",
          color: "#fff",
          clipPath: "ellipse(100% 85% at 50% 0%)",
        }}
      >
        <Typography variant={isMobile ? "h4" : "h2"} fontWeight={800}>
          {t("contact.title", "Contact Us")}
        </Typography>
        <Typography sx={{ mt: 2, opacity: 0.85 }}>
          {t("contact.subtitle", "We would love to hear from you")}
        </Typography>
      </Box>

      {/* ===== CONTENT ===== */}
      <Box
        sx={{
          px: { xs: 3, md: 12 },
          py: 12,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 10,
          alignItems: "flex-start", // البوكسين يبدأان من الأعلى
        }}
      >
        {/* ===== CONTACT FORM ===== */}
        <Box
          flex={1}
          sx={{
            p: 4,
            borderRadius: 4,
            bgcolor: "linear-gradient(135deg, #ffffff 0%, #e6f7f8 100%)",
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            maxWidth: { xs: "100%", md: 450 }, // فورم أصغر على الكمبيوتر
            width: "100%", // يملأ العرض على الموبايل
            height: "auto", // ارتفاع تلقائي حسب المحتوى
          }}
        >
          <Typography variant="h5" fontWeight={700} mb={3}>
            {t("contact.formTitle", "Get in Touch")}
          </Typography>
          <TextField fullWidth label={t("contact.name", "Your Name")} sx={{ borderRadius: 2 }} />
          <TextField fullWidth label={t("contact.email", "Your Email")} sx={{ borderRadius: 2 }} />
          <TextField fullWidth multiline rows={4} label={t("contact.message", "Message")} sx={{ borderRadius: 2 }} />
          <Button
            variant="contained"
            sx={{
              mt: 2,
              bgcolor: "#1b4d5c",
              borderRadius: 3,
              boxShadow: "0px 6px 15px rgba(27, 77, 92, 0.3)",
              "&:hover": { bgcolor: "#00FFE0", color: "#1b4d5c", transform: "scale(1.05)" },
              transition: "0.3s",
            }}
          >
            {t("contact.send", "Send Message")}
          </Button>
        </Box>

        {/* ===== CONTACT INFO + MAP ===== */}
        <Box
          flex={1}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            width: "100%",
          }}
        >
          {/* INFO CARD */}
          <Box
            sx={{
              p: 4,
              borderRadius: 4,
              bgcolor: "linear-gradient(135deg, #ffffff 0%, #e6f7f8 100%)",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Typography variant="h5" fontWeight={700} mb={2}>
              {t("contact.info", "Contact Info")}
            </Typography>

            <Box display="flex" alignItems="center" gap={1} mb={1}>
              <LocationOn sx={{ color: "#00FFE0" }} />
              <Typography>عمان - جبل الحسين - مجمع عادل القاسم</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1} mb={1}>
              <Phone sx={{ color: "#00FFE0" }} />
              <Typography>+962 79 801 7138</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1} mb={1}>
              <Email sx={{ color: "#00FFE0" }} />
              <Typography>info@company.com</Typography>
            </Box>

            <Box display="flex" gap={2}>
              {socialIcons.map((Icon, i) => (
                <IconButton
                  key={i}
                  sx={{
                    color: "#fff",
                    bgcolor: "#1b4d5c",
                    borderRadius: "50%",
                    transition: "0.3s",
                    "&:hover": { bgcolor: "#00FFE0", transform: "scale(1.2)", color: "#1b4d5c" },
                  }}
                >
                  <Icon />
                </IconButton>
              ))}
            </Box>
          </Box>

          {/* MAP CARD */}
          <Box
            sx={{
              borderRadius: 4,
              overflow: "hidden",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              height: { xs: 250, md: 400 },
            }}
          >
            <iframe
              title="company-location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1271.830093584467!2d35.9143063!3d31.9695437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca671aadc3c63%3A0xb7c24f665fcf0a81!2sAdel%20Al%20Qasem%20Complex%2C%20Amman%2C%20Jordan!5e0!3m2!1sen!2sjo!4v1700000000000!5m2!1sen!2sjo
"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
