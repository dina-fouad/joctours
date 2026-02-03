import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  ListItemIcon,
  Grow,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PublicIcon from "@mui/icons-material/Public";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import TourIcon from "@mui/icons-material/CardTravel";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function Header() {
  const { t, i18n } = useTranslation("common");
  const isMobile = useMediaQuery("(max-width:600px)");

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const navItems = [
    { key: "home", icon: <HomeIcon />, path: "/" },
    { key: "about", icon: <InfoIcon />, path: "/about" },
    { key: "tours", icon: <TourIcon />, path: "/tours" },
    { key: "contact", icon: <ContactMailIcon />, path: "/contact" },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        height: isMobile ? "55vh" : "80vh",
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
          inset: 0,
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
        sx={{ background: "transparent", px: isMobile ? 2 : 6, zIndex: 2 }}
      >
        <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
          {/* أيقونة الهامبرغر في الموبايل */}
          {isMobile && (
            <IconButton color="inherit" onClick={handleMenuOpen} size="large">
              <MenuIcon sx={{ fontSize: "2rem" }} />
            </IconButton>
          )}

          {/* روابط الناف بار للشاشات الكبيرة */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 4, alignItems: "center" }}>
              {navItems.map((item) => (
                <Button
                  key={item.key}
                  component={Link}
                  to={item.path}
                  sx={{
                    color: "#fff",
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    textTransform: "none",
                    padding: "6px 12px",
                    position: "relative",
                    textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
                    "&:hover": {
                      background: "rgba(255,255,255,0.1)",
                      borderRadius: 2,
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: 0,
                      height: 3,
                      background: "#1da9cc",
                      transition: "width 0.3s ease",
                      borderRadius: 2,
                    },
                    "&:hover::after": {
                      width: "100%",
                    },
                  }}
                >
                  {t(`nav.${item.key}`)}
                </Button>
              ))}
            </Box>
          )}

          {/* أيقونة تغيير اللغة */}
          <IconButton
            onClick={toggleLanguage}
            sx={{
              color: "#fff",
              fontSize: isMobile ? "2rem" : "2.5rem",
              ml: isMobile ? 0 : 2,
            }}
            size="large"
          >
            <PublicIcon sx={{ fontSize: isMobile ? 36 : 44 }} />
          </IconButton>

          {/* قائمة الموبايل */}
          {isMobile && (
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: "top", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              TransitionComponent={Grow}
              PaperProps={{
                sx: {
                  backgroundColor: "rgba(0,0,0,0.6)",
                  backdropFilter: "blur(12px)",
                  borderRadius: 3,
                  minWidth: 220,
                  p: 0,
                  boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                  top: 0,
                  left: 0,
                },
              }}
              MenuListProps={{
                disablePadding: true,
              }}
            >
              {navItems.map((item) => (
                <MenuItem
                  key={item.key}
                  component={Link}
                  to={item.path}
                  onClick={handleMenuClose}
                  sx={{
                    fontSize: "1.15rem",
                    color: "#fff",
                    py: 2,
                    px: 3,
                    borderRadius: 2,
                    position: "relative",
                    textShadow: "0 1px 3px rgba(0,0,0,0.7)",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.1)",
                      transform: "translateX(5px)",
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: 0,
                      height: 3,
                      background: "#1da9cc",
                      transition: "width 0.3s ease",
                      borderRadius: 2,
                    },
                    "&:hover::after": { width: "100%" },
                  }}
                >
                  <ListItemIcon sx={{ color: "#fff", minWidth: 30 }}>
                    {item.icon}
                  </ListItemIcon>
                  {t(`nav.${item.key}`)}
                </MenuItem>
              ))}
            </Menu>
          )}
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
          textShadow:
            "0 2px 8px rgba(0,0,0,0.6), 0 0 18px rgba(0,176,255,0.45)",
        }}
      >
        <Typography variant={isMobile ? "h4" : "h2"} fontWeight="bold">
          {t("hero.title", "Discover The World")}
        </Typography>

        <Typography
          variant={isMobile ? "body1" : "h6"}
          sx={{ maxWidth: 600, my: 3 }}
        >
          {t("hero.subtitle", "Unforgettable journeys crafted just for you")}
        </Typography>

        <Button
          component="a"
          href="https://wa.me/962798017138?text=Здравствуйте,%20я%20хотел(а)%20бы%20получить%20информацию%20и%20задать%20несколько%20вопросов."
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          sx={{
            background: "linear-gradient(90deg, #1da9cc 0%, #00FFE0 100%)",
            color: "#fff",
            fontWeight: "bold",
            fontSize: isMobile ? "0.9rem" : "1.1rem",
            px: isMobile ? 3 : 5,
            py: isMobile ? 1 : 1.5,
            borderRadius: 5,
            boxShadow: "0 4px 15px rgba(0,176,255,0.4)",
            "&:hover": {
              background: "linear-gradient(90deg, #1da9cc 0%, #00CFCF 100%)",
            },
          }}
        >
          {t("hero.cta", "Explore Tours")}
        </Button>
      </Box>

      {/* 🌊 Wave Separator */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          lineHeight: 0,
          zIndex: 1,
        }}
      >
       <svg
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 1200 120"
  preserveAspectRatio="none"
  style={{ display: "block", width: "100%", minHeight: "80px" }}
>
  <defs>
    <pattern
      id="imgPattern"
      patternUnits="userSpaceOnUse"
      width="1000"
      height="120"
    >
      <image
        x="0"
        y="0"
        width="1200"
        height="120"
        xlinkHref="/images/cover.png"
        preserveAspectRatio="xMidYMid slice"
      />
      {/* طبقة بيضاء شفافة لتخفيف الصورة */}
      <rect
        x="0"
        y="0"
        width="1200"
        height="120"
        fill="white"
        opacity="0.8"  // اضبطي الرقم حسب درجة البهتان المطلوبة
      />
    </pattern>
  </defs>

  <path
    d="M0,8 C300,108 900,8 1200,88 L1200,120 L0,120 Z"
    fill="#d0ebff"
  />

  <path
    d="M0,0 C300,100 900,0 1200,80 L1200,120 L0,120 Z"
    fill="url(#imgPattern)"
    style={{
      filter: `
        drop-shadow(0 3px 6px rgba(0,0,0,0.12))
        drop-shadow(0 4px 10px rgba(8, 58, 81, 0.37))
      `,
    }}
  />
</svg>

      </Box>
    </Box>
  );
}
