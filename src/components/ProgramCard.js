import React, { useEffect } from "react";
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
  useMediaQuery,
} from "@mui/material";

import { keyframes } from "@mui/system";

import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";

import HomeIcon from "@mui/icons-material/Home";
import PublicIcon from "@mui/icons-material/Public";

// ======= حركة الصورة Hero =======
const zoomFade = keyframes`
  0% { transform: scale(1) translateY(0); opacity: 1; }
  50% { transform: scale(1.05) translateY(-10px); opacity: 0.95; }
  100% { transform: scale(1) translateY(0); opacity: 1; }
`;

// ======= انيميشن دخول العناصر =======
const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
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

  const program = t(programKey, { returnObjects: true });

  if (!program || !program.title) {
    return (
      <Box sx={{ py: 10, textAlign: "center" }}>
        <Typography variant="h5">{t("programNotFound", "Program not found")}</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ bgcolor: "#fff" }}>
      {/* ===== NAVBAR ===== */}
    <AppBar
  position="sticky" // أو "fixed" لو تريدها دائمًا بدون اختفاء عند التمرير
  elevation={0}
  sx={{
    bgcolor: "rgba(255,255,255,0.15)", // شفاف
    backdropFilter: "blur(12px)",      // تأثير الزجاج
    height: isMobile ? 40 : 50,
    transition: "height 0.3s ease",
  }}
>
  <Toolbar
    sx={{
      justifyContent: "space-between",
      px: { xs: 1, md: 6 },
      minHeight: "inherit",
    }}
  >
    <Button
      component={Link}
      to="/"
      startIcon={<HomeIcon fontSize="small" />}
      sx={{
        color: "#1b4d5c",
        fontWeight: 700,
        textTransform: "none",
        fontSize: { xs: 12, md: 14 },
      }}
    >
      Back
    </Button>

    <IconButton
      onClick={toggleLanguage}
      sx={{
        color: "#1b4d5c",
        fontSize: { xs: 20, md: 28 },
      }}
      size="large"
    >
      <PublicIcon fontSize="inherit" />
    </IconButton>
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
            animation: `${fadeInUp} 0.8s ease-out`,
          }}
        >
          <Typography variant="h5" fontWeight={900} sx={{ textShadow: "2px 2px 12px rgba(0,0,0,0.5)" }} mb={1}>
            {t(`hero.title`, { defaultValue: program.title })}
          </Typography>
          <Typography variant="body1" sx={{ textShadow: "1px 1px 8px rgba(0,0,0,0.5)" }} mb={2}>
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
        {/* Info Bar */}
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
            animation: `${fadeInUp} 0.8s ease-out`,
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

        {/* Cities Visited */}
        <Typography
          variant="h5"
          fontWeight={800}
          mb={2}
          color="#1b4d5c"
          letterSpacing={0.5}
          sx={{ animation: `${fadeInUp} 0.8s ease-out 0.1s forwards`, opacity: 0 }}
        >
          {t("citiesVisited", { defaultValue: "Cities Visited" })}
        </Typography>
        <Box
          mb={4}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            animation: `${fadeInUp} 0.8s ease-out 0.2s forwards`,
            opacity: 0,
          }}
        >
          {program.cities?.map((city, idx) => (
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
                animation: `${fadeInUp} 0.8s ease-out ${0.2 + idx * 0.1}s forwards`,
                opacity: 0,
              }}
            />
          ))}
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Program Timeline */}
        <Typography
          variant="h5"
          fontWeight={900}
          mb={4}
          color="#1b4d5c"
          letterSpacing={1}
          sx={{ animation: `${fadeInUp} 0.8s ease-out 0.3s forwards`, opacity: 0 }}
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
              animation: `${fadeInUp} 0.8s ease-out ${0.4 + index * 0.1}s forwards`,
              opacity: 0,
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
            <Typography fontWeight={700} mb={1} color="#1b4d5c" fontSize={{ xs: 14, md: 18 }}>
              {day.day} — {day.title}
            </Typography>
            <Typography color="text.secondary" fontSize={{ xs: 12, md: 16 }} lineHeight={1.6}>
              {day.description}
            </Typography>
          </Box>
        ))}

        {/* Not Included */}
        <Typography
          variant="subtitle2"
          fontWeight={600}
          mb={1}
          color="#a0a0a0"
          sx={{ animation: `${fadeInUp} 0.8s ease-out 0.5s forwards`, opacity: 0 }}
        >
          {t("notIncludedTitle", { defaultValue: "Not Included in the Tour Price" })}
        </Typography>
        <List sx={{ mb: 8 }}>
          {program.notIncluded?.map((item, idx) => (
            <ListItem
              key={item}
              disableGutters
              sx={{
                py: 0.5,
                animation: `${fadeInUp} 0.8s ease-out ${0.5 + idx * 0.1}s forwards`,
                opacity: 0,
              }}
            >
              <ListItemIcon sx={{ minWidth: 28 }}>
                <CancelOutlinedIcon sx={{ color: "#c62828", fontSize: { xs: 16, md: 18 } }} />
              </ListItemIcon>
              <ListItemText
                primary={item}
                primaryTypographyProps={{ fontSize: { xs: 12, md: 14 }, color: "#666" }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}
