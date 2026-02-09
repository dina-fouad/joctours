import React from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Card,
  AppBar,
  Toolbar,
  useMediaQuery,
  Avatar,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PublicIcon from "@mui/icons-material/Public";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupsIcon from "@mui/icons-material/Groups";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function AboutUs() {
  const { t, i18n } = useTranslation("common");
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:600px)");

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
  };

  // ===== Team Data =====
  const team = [
    { name: "Alice Johnson", role: "CEO", img: "/images/team1.jpg" },
    { name: "Michael Smith", role: "Head of Operations", img: "/images/team2.jpg" },
    { name: "Sara Lee", role: "Travel Expert", img: "/images/team3.jpg" },
    { name: "David Brown", role: "Marketing Lead", img: "/images/team4.jpg" },
  ];

  // ===== Our Story Data =====
  const story = [
    {
      title: "The Beginning",
      desc: "Founded in 2010, our passion for luxury travel began with a simple mission: create unforgettable journeys.",
      img: "/images/story1.jpg",
    },
    {
      title: "First Luxury Tour",
      desc: "In 2012, we launched our first curated luxury tour, delivering a unique and personalized experience.",
      img: "/images/story2.jpg",
    },
    {
      title: "Global Expansion",
      desc: "By 2017, we expanded internationally, bringing our tailored travel experiences to clients worldwide.",
      img: "/images/story3.jpg",
    },
    {
      title: "Today",
      desc: "Now, we continue to craft extraordinary journeys, combining luxury, culture, and adventure for our clients.",
      img: "/images/story4.jpg",
    },
  ];

  return (
    <Box sx={{ bgcolor: "#eef3f5", color: "#1b4d5c", minHeight: "100vh" }}>
      {/* ===== NAVBAR ===== */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background: "rgba(27,77,92,0.9)",
          backdropFilter: "blur(12px)",
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

      {/* ===== HERO ===== */}
      <Box
        sx={{
          position: "relative",
          py: { xs: 10, md: 16 },
          px: { xs: 3, md: 12 },
          textAlign: "center",
          background: "linear-gradient(180deg, #1b4d5c 0%, #0f2f38 100%)",
          color: "#fff",
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: { xs: 34, md: 48 },
            color: "#00FFE0",
            mb: 2,
          }}
        >
          {t("companyName")}
        </Typography>

        <Typography variant={isMobile ? "h4" : "h2"} fontWeight={800} mb={3}>
          {t("aboutTitle", "Who We Are")}
        </Typography>

        <Typography
          sx={{
            maxWidth: 700,
            mx: "auto",
            opacity: 0.9,
            lineHeight: 1.9,
            fontSize: { xs: 15, md: 18 },
          }}
        >
          {t(
            "aboutLong",
            "We craft unforgettable travel experiences by blending luxury, culture, and personalized service. Every journey we design tells a story — your story."
          )}
        </Typography>
      </Box>

      {/* ===== VALUES ===== */}
      <Box
        sx={{
          py: 14,
          px: { xs: 3, md: 14 },
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(4,1fr)" },
          gap: 5,
        }}
      >
        {[
          {
            icon: <WorkspacePremiumIcon fontSize="large" />,
            title: t("value1", "Premium Quality"),
            desc: t("value1Desc", "Attention to every detail."),
          },
          {
            icon: <EmojiEventsIcon fontSize="large" />,
            title: t("value2", "Excellence"),
            desc: t("value2Desc", "High standards in every journey."),
          },
          {
            icon: <GroupsIcon fontSize="large" />,
            title: t("value3", "Expert Team"),
            desc: t("value3Desc", "Professionals who care."),
          },
          {
            icon: <PublicOutlinedIcon fontSize="large" />,
            title: t("value4", "Global Reach"),
            desc: t("value4Desc", "Destinations without limits."),
          },
        ].map((item, i) => (
          <Card
            key={i}
            sx={{
              p: 5,
              borderRadius: 5,
              textAlign: "center",
              background: "#fff",
              boxShadow: "0 20px 50px rgba(27,77,92,0.12)",
              "&:hover": {
                transform: "translateY(-10px)",
                boxShadow: "0 30px 70px rgba(27,77,92,0.2)",
              },
            }}
          >
            <IconButton
              sx={{
                mb: 2,
                color: "#00FFE0",
                background: "#1b4d5c",
                "&:hover": { background: "#163f4c" },
              }}
            >
              {item.icon}
            </IconButton>
            <Typography fontWeight={700} mb={1}>
              {item.title}
            </Typography>
            <Typography sx={{ opacity: 0.7, fontSize: 14 }}>
              {item.desc}
            </Typography>
          </Card>
        ))}
      </Box>

      {/* ===== TEAM ===== */}
      <Box sx={{ py: 14, px: { xs: 3, md: 12 } }}>
        <Typography
          variant="h4"
          fontWeight={700}
          textAlign="center"
          mb={8}
          color="#1b4d5c"
        >
          {t("ourTeam", "Meet Our Team")}
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2,1fr)", md: "repeat(4,1fr)" },
            gap: 6,
          }}
        >
          {team.map((member, i) => (
            <Card
              key={i}
              sx={{
                p: 3,
                textAlign: "center",
                borderRadius: 4,
                boxShadow: "0 10px 40px rgba(0,0,0,0.05)",
                "&:hover": { transform: "translateY(-5px)", boxShadow: "0 20px 60px rgba(0,0,0,0.1)" },
              }}
            >
              <Avatar
                src={member.img}
                sx={{ width: 100, height: 100, mx: "auto", mb: 2 }}
              />
              <Typography fontWeight={700}>{member.name}</Typography>
              <Typography sx={{ opacity: 0.7, fontSize: 14 }}>{member.role}</Typography>
            </Card>
          ))}
        </Box>
      </Box>

      {/* ===== OUR STORY WITH IMAGES ===== */}
      <Box sx={{ py: 14, px: { xs: 3, md: 12 }, background: "#f0f8fb" }}>
        <Typography
          variant="h4"
          fontWeight={700}
          textAlign="center"
          mb={10}
          color="#1b4d5c"
        >
          {t("ourStory", "Our Story")}
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2,1fr)" },
            gap: 8,
          }}
        >
          {story.map((item, i) => (
            <Card
              key={i}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                gap: 3,
                p: 3,
                borderRadius: 4,
                boxShadow: "0 10px 40px rgba(0,0,0,0.05)",
              }}
            >
              <Box
                component="img"
                src={item.img}
                alt={item.title}
                sx={{
                  width: { xs: "100%", md: 150 },
                  height: 120,
                  objectFit: "cover",
                  borderRadius: 2,
                }}
              />
              <Box>
                <Typography fontWeight={700} mb={1}>
                  {item.title}
                </Typography>
                <Typography sx={{ opacity: 0.8 }}>{item.desc}</Typography>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
