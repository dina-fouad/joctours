import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  Grow,
  Card,
} from "@mui/material";
import { AppBar, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// ===== Icons =====
import MenuIcon from "@mui/icons-material/Menu";
import PublicIcon from "@mui/icons-material/Public";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import TourIcon from "@mui/icons-material/CardTravel";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupsIcon from "@mui/icons-material/Groups";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

export default function AboutUs() {
  const { t, i18n } = useTranslation("common");
  const isMobile = useMediaQuery("(max-width:600px)");
  const [anchorEl, setAnchorEl] = useState(null);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
  };

  const navItems = [
    { key: "home", icon: <HomeIcon />, path: "/" },
    { key: "about", icon: <InfoIcon />, path: "/about" },
    { key: "programs", icon: <TourIcon />, path: "/programs" },
    { key: "contact", icon: <ContactMailIcon />, path: "/contact" },
  ];

  return (
    <Box sx={{ bgcolor: "#f7fbfc", color: "#08323c" }}>
      {/* ===== NAVBAR ===== */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(0,0,0,0.05)",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 8 } }}>
          {isMobile && (
            <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
              <MenuIcon sx={{ color: "#0e3a47" }} />
            </IconButton>
          )}

          {!isMobile && (
            <Box sx={{ display: "flex", gap: 5 }}>
              {navItems.map((item) => (
                <Button
                  key={item.key}
                  component={Link}
                  to={item.path}
                  sx={{
                    color: "#0e3a47",
                    fontWeight: 600,
                    letterSpacing: 0.5,
                    textTransform: "none",
                    "&:hover": { color: "#c9a24d" },
                  }}
                >
                  {t(`nav.${item.key}`)}
                </Button>
              ))}
            </Box>
          )}

          <IconButton onClick={toggleLanguage}>
            <PublicIcon sx={{ color: "#0e3a47" }} />
          </IconButton>

          {isMobile && (
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
              TransitionComponent={Grow}
            >
              {navItems.map((item) => (
                <MenuItem
                  key={item.key}
                  component={Link}
                  to={item.path}
                  onClick={() => setAnchorEl(null)}
                >
                  {item.icon}
                  <Box ml={1}>{t(`nav.${item.key}`)}</Box>
                </MenuItem>
              ))}
            </Menu>
          )}
        </Toolbar>
      </AppBar>

      {/* ===== HERO ===== */}
      <Box
        sx={{
          minHeight: { xs: 520, md: 680 },
          position: "relative",
          display: "flex",
          alignItems: "center",
          px: { xs: 3, md: 12 },
        }}
      >
        {/* Decorative circles */}
        <Box
          sx={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle,#eaf6fa,transparent)",
            top: -150,
            left: -150,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle,#e3f2f6,transparent)",
            bottom: -150,
            right: -100,
          }}
        />

        <Box sx={{ maxWidth: 650, position: "relative" }}>
          <Typography
            sx={{
              color: "#c9a24d",
              letterSpacing: 4,
              fontWeight: 600,
              mb: 2,
            }}
          >
            LUXURY TRAVEL EXPERIENCE
          </Typography>

          <Typography
            variant={isMobile ? "h4" : "h2"}
            fontWeight={900}
            mb={3}
            lineHeight={1.2}
          >
            Crafted Journeys
            <br />
            For Those Who Expect More
          </Typography>

          <Typography
            sx={{
              color: "#6b8a93",
              fontSize: { xs: 15, md: 18 },
              mb: 5,
              lineHeight: 1.9,
            }}
          >
            We design refined travel experiences where every detail is
            intentional, every moment curated, and every journey unforgettable.
          </Typography>

          <Button
            sx={{
              px: 6,
              py: 1.6,
              fontWeight: 700,
              borderRadius: 6,
              color: "#0e3a47",
              background:
                "linear-gradient(90deg,#c9a24d,#e6c77a)",
              boxShadow: "0 15px 40px rgba(201,162,77,0.35)",
              "&:hover": {
                background:
                  "linear-gradient(90deg,#b8953f,#d6b765)",
              },
            }}
          >
            Our Philosophy
          </Button>
        </Box>
      </Box>

      {/* ===== PHILOSOPHY ===== */}
      <Box sx={{ py: 14, px: { xs: 3, md: 14 }, bgcolor: "#ffffff" }}>
        <Typography variant="h4" fontWeight={800} mb={4}>
          Our Philosophy
        </Typography>
        <Typography
          sx={{
            maxWidth: 900,
            fontSize: 17,
            lineHeight: 2,
            color: "#5f7f89",
          }}
        >
          True luxury is not excess — it is precision. We believe that exceptional
          travel is defined by seamless organization, cultural depth, and
          personal attention. Every journey we create reflects our commitment to
          excellence.
        </Typography>
      </Box>

      {/* ===== VALUES ===== */}
      <Box
        sx={{
          py: 14,
          px: { xs: 3, md: 14 },
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(4,1fr)" },
          gap: 4,
        }}
      >
        {[
          { icon: <WorkspacePremiumIcon />, title: "Refined Quality" },
          { icon: <EmojiEventsIcon />, title: "Excellence" },
          { icon: <GroupsIcon />, title: "Expert Team" },
          { icon: <PublicOutlinedIcon />, title: "Global Vision" },
        ].map((item, i) => (
          <Card
            key={i}
            sx={{
              bgcolor: "rgba(255,255,255,0.75)",
              backdropFilter: "blur(16px)",
              p: 5,
              borderRadius: 5,
              textAlign: "center",
              boxShadow: "0 30px 60px rgba(8,50,60,0.08)",
            }}
          >
            <IconButton
              sx={{
                mb: 3,
                bgcolor: "#f1e2b8",
                color: "#0e3a47",
              }}
            >
              {item.icon}
            </IconButton>
            <Typography fontWeight={700} fontSize={17}>
              {item.title}
            </Typography>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
