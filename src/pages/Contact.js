import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import { AppBar, Toolbar, ListItemIcon as MUIListItemIcon, Grow } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  Home as HomeIcon,
  Info as InfoIcon,
  CardTravel as TourIcon,
  ContactMail as ContactMailIcon,
  Public as PublicIcon,
  Facebook,
  Instagram,
  Twitter,
  YouTube,
  LocationOn,
  Phone,
  Email,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";

export default function ContactPage() {
  const { t, i18n } = useTranslation("common");
  const isMobile = useMediaQuery("(max-width:600px)");

  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
  };

  const navItems = [
    { key: "home", icon: <HomeIcon />, path: "/" },
    { key: "about", icon: <InfoIcon />, path: "/about" },
    { key: "programs", icon: <TourIcon />, path: "/programs" },
    { key: "contact", icon: <ContactMailIcon />, path: "/contact" },
  ];

  const socialIcons = [Facebook, Instagram, Twitter, YouTube];

  return (
    <>
      {/* ===== NAVBAR (ثابت وصحيح) ===== */}
      <AppBar
        position="fixed"
        elevation={1}
        sx={{
          bgcolor: "#fff",
          zIndex: 1200,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 1, md: 6 } }}>
          {isMobile && (
            <IconButton onClick={handleMenuOpen} size="large">
              <MenuIcon />
            </IconButton>
          )}

          {!isMobile && (
            <Box sx={{ display: "flex", gap: 4 }}>
              {navItems.map((item) => (
                <Button
                  key={item.key}
                  component={Link}
                  to={item.path}
                  sx={{
                    color: "#1b4d5c",
                    fontWeight: 600,
                    textTransform: "none",
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: -6,
                      left: 0,
                      width: 0,
                      height: 3,
                      bgcolor: "#1da9cc",
                      transition: "0.3s",
                    },
                    "&:hover::after": { width: "100%" },
                  }}
                >
                  {t(`nav.${item.key}`)}
                </Button>
              ))}
            </Box>
          )}

          <IconButton onClick={toggleLanguage} size="large">
            <PublicIcon />
          </IconButton>

          {isMobile && (
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              TransitionComponent={Grow}
            >
              {navItems.map((item) => (
                <MenuItem
                  key={item.key}
                  component={Link}
                  to={item.path}
                  onClick={handleMenuClose}
                >
                  <MUIListItemIcon>{item.icon}</MUIListItemIcon>
                  {t(`nav.${item.key}`)}
                </MenuItem>
              ))}
            </Menu>
          )}
        </Toolbar>
      </AppBar>

      {/* ===== Spacer لتعويض ارتفاع الناف بار ===== */}
      <Toolbar />

      {/* ===== PAGE CONTENT ===== */}
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "#f5f5f5",
          position: "relative",
          overflow: "hidden",
          px: { xs: 3, md: 12 },
          py: 8,
        }}
      >
        {/* دوائر خلفية */}
        <Box sx={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: "rgba(29,169,204,0.1)", top: "-50px", left: "-50px" }} />
        <Box sx={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: "rgba(0,255,224,0.08)", bottom: "-100px", right: "-100px" }} />

        {/* العنوان */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant={isMobile ? "h4" : "h2"} fontWeight="bold" color="#1b4d5c">
            {t("contact.title", "Contact Us")}
          </Typography>
          <Typography sx={{ mt: 2, color: "#555" }}>
            {t("contact.subtitle", "We would love to hear from you")}
          </Typography>
        </Box>

        {/* النموذج + المعلومات */}
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 8 }}>
          {/* form */}
          <Box flex={1}>
            <Typography variant="h5" fontWeight={700} mb={3}>
              Get in Touch
            </Typography>
            <TextField fullWidth label="Your Name" sx={{ mb: 2 }} />
            <TextField fullWidth label="Your Email" sx={{ mb: 2 }} />
            <TextField fullWidth multiline rows={4} label="Message" />
            <Button
              variant="contained"
              sx={{ mt: 2, bgcolor: "#1b4d5c" }}
            >
              Send Message
            </Button>
          </Box>

          {/* info */}
          <Box flex={1}>
            <Typography variant="h5" fontWeight={700} mb={3}>
              Contact Info
            </Typography>

            <Box display="flex" gap={1} mb={2}>
              <LocationOn />
              <Typography>عمان، جبل الحسين، مجمع عادل القاسم</Typography>
            </Box>
            <Box display="flex" gap={1} mb={2}>
              <Phone />
              <Typography>+962 79 801 7138</Typography>
            </Box>
            <Box display="flex" gap={1} mb={3}>
              <Email />
              <Typography>info@company.com</Typography>
            </Box>

            <Box display="flex" gap={2}>
              {socialIcons.map((Icon, i) => (
                <IconButton key={i}>
                  <Icon />
                </IconButton>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
