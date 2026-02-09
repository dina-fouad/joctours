
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
        elevation={1}
        sx={{
          bgcolor: "#1b4d5c",
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
              "&:hover": { color: "#00FFE0" },
            }}
          >
            {t("back", "Back")}
          </Button>

          <IconButton onClick={toggleLanguage} sx={{ color: "#00FFE0" }}>
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
          position: "relative",
        }}
      >
        {/* ===== CONTACT FORM ===== */}
        <Box flex={1}>
          <Typography variant="h5" fontWeight={700} mb={4}>
            {t("contact.formTitle", "Get in Touch")}
          </Typography>
          <TextField fullWidth label={t("contact.name", "Your Name")} sx={{ mb: 2 }} />
          <TextField fullWidth label={t("contact.email", "Your Email")} sx={{ mb: 2 }} />
          <TextField
            fullWidth
            multiline
            rows={4}
            label={t("contact.message", "Message")}
          />
          <Button
            variant="contained"
            sx={{
              mt: 2,
              bgcolor: "#1b4d5c",
              "&:hover": { bgcolor: "#00FFE0", color: "#1b4d5c" },
            }}
          >
            {t("contact.send", "Send Message")}
          </Button>
        </Box>

        {/* ===== CONTACT INFO + MAP ===== */}
        <Box flex={1}>
          <Typography variant="h5" fontWeight={700} mb={4}>
            {t("contact.info", "Contact Info")}
          </Typography>

          <Box display="flex" alignItems="center" gap={1} mb={2}>
            <LocationOn sx={{ color: "#00FFE0" }} />
            <Typography>عمان - جبل الحسين - مجمع عادل القاسم</Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={1} mb={2}>
            <Phone sx={{ color: "#00FFE0" }} />
            <Typography>+962 79 801 7138</Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={1} mb={3}>
            <Email sx={{ color: "#00FFE0" }} />
            <Typography>info@company.com</Typography>
          </Box>

          <Box display="flex" gap={2} mb={4}>
            {socialIcons.map((Icon, i) => (
              <IconButton
                key={i}
                sx={{
                  color: "#fff",
                  bgcolor: "#1b4d5c",
                  "&:hover": { bgcolor: "#00FFE0", color: "#1b4d5c" },
                }}
              >
                <Icon />
              </IconButton>
            ))}
          </Box>

          {/* ===== MAP ===== */}
          <Box sx={{ width: "100%", height: { xs: 250, md: 400 } }}>
            <iframe
              title="company-location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3420.1234567890!2d35.888888!3d31.945366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151c666f3f123456%3A0xabcdef123456789!2sAmman%20-%20Jabal%20Al%20Hussein!5e0!3m2!1sen!2sjo!4v1699000000000!5m2!1sen!2sjo"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: 8 }}
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
