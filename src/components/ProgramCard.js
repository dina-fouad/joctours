import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  Box,
  Typography,
  CardMedia,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon as MUIListItemIcon,
  useMediaQuery,
  Grow,
} from "@mui/material";

import { keyframes } from "@mui/system";

import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";

import MenuIcon from "@mui/icons-material/Menu";
import PublicIcon from "@mui/icons-material/Public";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import TourIcon from "@mui/icons-material/CardTravel";
import ContactMailIcon from "@mui/icons-material/ContactMail";

// ======= حركة الصورة Hero =======
const zoomFade = keyframes`
  0% {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
  50% {
    transform: scale(1.05) translateY(-10px);
    opacity: 0.95;
  }
  100% {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
`;

export default function ProgramCard() {
  const { programKey } = useParams();
  const { t, i18n } = useTranslation(["programs"]);
  const isMobile = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  // ==== NAVBAR LABELS مباشرة داخل الكود ====
  const navLabels = {
    en: {
      home: "Home",
      about: "About Us",
      tours: "Tours",
      contact: "Contact",
    },
    ru: {
      home: "Главная",
      about: "О нас",
      tours: "Туры",
      contact: "Контакты",
    },
  };

  const navItems = [
    { key: "home", icon: <HomeIcon />, path: "/" },
    { key: "about", icon: <InfoIcon />, path: "/about" },
    { key: "tours", icon: <TourIcon />, path: "/tours" },
    { key: "contact", icon: <ContactMailIcon />, path: "/contact" },
  ];

  const program = t(programKey, { returnObjects: true });

  if (!program || !program.title) {
    return (
      <Box sx={{ py: 10, textAlign: "center" }}>
        <Typography variant="h5">{t("programNotFound", "Program not found")}</Typography>
      </Box>
    );
  }

  // ==== دالة لجلب النص المترجم من navLabels ====
  const getNavLabel = (key) => {
    const lang = i18n.language;
    return navLabels[lang]?.[key] || key;
  };

  return (
    <Box sx={{ bgcolor: "#fff" }}>
      {/* ===== NAVBAR ===== */}
      <AppBar position="sticky" color="default" elevation={1} sx={{ bgcolor: "#fff" }}>
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 1, md: 6 } }}>
          {isMobile && (
            <IconButton color="inherit" onClick={handleMenuOpen} size="large">
              <MenuIcon />
            </IconButton>
          )}

          {!isMobile && (
            <Box sx={{ display: "flex", gap: { xs: 1, md: 4 }, alignItems: "center" }}>
              {navItems.map((item) => (
                <Button
                  key={item.key}
                  component={Link}
                  to={item.path}
                  sx={{
                    color: "#1b4d5c",
                    fontSize: { xs: "0.85rem", md: "1rem" },
                    fontWeight: 600,
                    textTransform: "none",
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: -4,
                      left: 0,
                      width: 0,
                      height: 3,
                      bgcolor: "#1da9cc",
                      borderRadius: 2,
                      transition: "width 0.3s ease",
                    },
                    "&:hover::after": { width: "100%" },
                  }}
                >
                  {getNavLabel(item.key)}
                </Button>
              ))}
            </Box>
          )}

          <IconButton
            onClick={toggleLanguage}
            sx={{ color: "#1b4d5c", fontSize: isMobile ? 28 : 32 }}
            size="large"
          >
            <PublicIcon fontSize="inherit" />
          </IconButton>

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
                  backgroundColor: "rgba(255,255,255,0.95)",
                  backdropFilter: "blur(8px)",
                  borderRadius: 2,
                  minWidth: 180,
                  p: 1,
                },
              }}
            >
              {navItems.map((item) => (
                <MenuItem
                  key={item.key}
                  component={Link}
                  to={item.path}
                  onClick={handleMenuClose}
                  sx={{ fontWeight: 600, color: "#1b4d5c" }}
                >
                  <MUIListItemIcon sx={{ color: "#1b4d5c", minWidth: 30 }}>
                    {item.icon}
                  </MUIListItemIcon>
                  {getNavLabel(item.key)}
                </MenuItem>
              ))}
            </Menu>
          )}
        </Toolbar>
      </AppBar>

      {/* ===== HERO IMAGE & CONTENT ===== */}
      <Box
        sx={{
          position: "relative",
          height: { xs: 220, sm: 280, md: 480 },
          overflow: "hidden",
        }}
      >
        <CardMedia
          component="img"
          image={program.image}
          alt={program.title}
          sx={{
            height: "100%",
            objectFit: "cover",
            animation: `${zoomFade} 15s ease-in-out infinite`,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.5) 20%, rgba(0,0,0,0) 80%)",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            bottom: { xs: 20, md: 40 },
            left: { xs: 16, md: 80 },
            color: "#fff",
            maxWidth: { xs: "80%", md: 700 },
          }}
        >
          <Typography
            variant="h5"
            fontWeight={900}
            sx={{ textShadow: "2px 2px 12px rgba(0,0,0,0.5)" }}
            mb={1}
          >
            {t(`hero.title`, { defaultValue: program.title })}
          </Typography>
          <Typography
            variant="body1"
            sx={{ textShadow: "1px 1px 8px rgba(0,0,0,0.5)" }}
            mb={2}
          >
            {t(`hero.subtitle`, { defaultValue: program.subtitle })}
          </Typography>
          <Chip
            icon={<ScheduleOutlinedIcon />}
            label={t("hero.duration", { defaultValue: program.duration })}
            sx={{
              bgcolor: "#1da9cc",
              color: "#fff",
              fontWeight: 700,
              py: 0.5,
              px: 1.5,
              fontSize: { xs: 12, md: 16 },
            }}
          />
        </Box>
      </Box>

      {/* ===== INFO BAR, Cities, Program Timeline, Not Included ===== */}
      <Box sx={{ px: { xs: 2, md: 10 }, py: { xs: 4, md: 8 } }}>
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 2, md: 4 },
            p: { xs: 2, md: 4 },
            mb: 4,
            borderRadius: 4,
            bgcolor: "#f0f9fb",
          }}
        >
          <Box display="flex" alignItems="center" gap={1}>
            <ScheduleOutlinedIcon color="primary" />
            <Typography fontWeight={700} fontSize={{ xs: 14, md: 16 }}>
              {program.days} {t("days", { defaultValue: "Days" })}
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={1}>
            <PaymentsOutlinedIcon color="primary" />
            <Typography fontWeight={700} fontSize={{ xs: 14, md: 16 }}>
              {program.price} / Person
            </Typography>
          </Box>

          <Box sx={{ ml: { xs: 0, md: "auto" }, mt: { xs: 2, md: 0 } }}>
            <Button
              variant="contained"
              sx={{
                fontWeight: 700,
                py: { xs: 1, md: 2 },
                px: { xs: 3, md: 5 },
                borderRadius: 4,
                fontSize: { xs: 12, md: 14 },
                bgcolor: "#1da9cc",
                color: "#fff",
                width: { xs: "100%", md: "auto" },
                boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                "&:hover": { bgcolor: "#1593b2", transform: "translateY(-2px)" },
              }}
              onClick={() => alert("Booking functionality not implemented yet")}
            >
              {t("bookNow", { defaultValue: "Book Now" })}
            </Button>
          </Box>
        </Paper>

        {/* ===== Cities Visited ===== */}
        <Typography
          variant="h5"
          fontWeight={800}
          mb={2}
          color="#1b4d5c"
          letterSpacing={0.5}
        >
          {t("citiesVisited", { defaultValue: "Cities Visited" })}
        </Typography>
        <Box mb={4} sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {program.cities?.map((city) => (
            <Chip
              key={city}
              icon={<PlaceOutlinedIcon />}
              label={city}
              sx={{
                bgcolor: "#e6f7f9",
                color: "#1b4d5c",
                fontWeight: 600,
                py: 0.5,
                px: 1.5,
                fontSize: { xs: 12, md: 14 },
              }}
            />
          ))}
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* ===== Program Timeline ===== */}
        <Typography
          variant="h5"
          fontWeight={900}
          mb={4}
          color="#1b4d5c"
          letterSpacing={1}
        >
          {t("programTitle", { defaultValue: "Program" })}
        </Typography>

        {program.program?.map((day, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              pl: { xs: 4, md: 6 },
              mb: 4,
              py: 2,
              borderRadius: 4,
              bgcolor: "#f4fafc",
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                left: 0,
                top: 16,
                width: 12,
                height: 12,
                borderRadius: "50%",
                bgcolor: "#1da9cc",
                border: "2px solid #fff",
              }}
            />
            {index !== program.program.length - 1 && (
              <Box
                sx={{
                  position: "absolute",
                  left: 5,
                  top: 28,
                  width: 2,
                  height: "100%",
                  bgcolor: "#cce9f2",
                }}
              />
            )}
            <Typography
              fontWeight={700}
              mb={1}
              color="#1b4d5c"
              fontSize={{ xs: 14, md: 18 }}
            >
              {day.day} — {day.title}
            </Typography>
            <Typography
              color="text.secondary"
              fontSize={{ xs: 12, md: 16 }}
              lineHeight={1.6}
            >
              {day.description}
            </Typography>
          </Box>
        ))}

        {/* ===== Not Included ===== */}
        <Typography
          variant="subtitle2"
          fontWeight={600}
          mb={1}
          color="#a0a0a0"
        >
          {t("notIncludedTitle", {
            defaultValue: "Not Included in the Tour Price",
          })}
        </Typography>
        <List sx={{ mb: 8 }}>
          {program.notIncluded?.map((item) => (
            <ListItem key={item} disableGutters sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 28 }}>
                <CancelOutlinedIcon
                  sx={{ color: "#c62828", fontSize: { xs: 16, md: 18 } }}
                />
              </ListItemIcon>
              <ListItemText
                primary={item}
                primaryTypographyProps={{
                  fontSize: { xs: 12, md: 14 },
                  color: "#666",
                }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}
