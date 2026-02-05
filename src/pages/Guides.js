import { useTranslation } from "react-i18next";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import MessageIcon from "@mui/icons-material/Message";
import PublicIcon from "@mui/icons-material/Public";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState, useRef } from "react";

export default function GuidesGrid() {
  const { t } = useTranslation("guides");
  const guidesObject = t("guides", { returnObjects: true }) || {};
  const guides = Object.values(guidesObject);
  const isMobile = useMediaQuery("(max-width:600px)");

  const cardsToShow = isMobile ? 1 : 3;
  const [startIndex, setStartIndex] = useState(0);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) handleNext();
    if (distance < -50) handlePrev();
  };

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - cardsToShow, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + cardsToShow, guides.length - cardsToShow)
    );
  };

  const visibleGuides = guides.slice(startIndex, startIndex + cardsToShow);

  return (
    <Box
      py={{ xs: 8, md: 14 }}
      px={{ xs: 2, md: 10 }}
      sx={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ===== Ambient Glow (Integrated with body, responsive) ===== */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: { xs: 220, md: 520 },
            height: { xs: 220, md: 520 },
            borderRadius: "50%",
            background: "rgba(15,60,72,0.05)",
            top: "30%",
            left: "50%",
            transform: "translateX(-50%)",
            filter: { xs: "blur(60px)", md: "blur(120px)" },
          }}
        />

        <Box
          sx={{
            position: "absolute",
            width: { xs: 160, md: 420 },
            height: { xs: 160, md: 420 },
            borderRadius: "50%",
            background: "rgba(15,60,72,0.03)",
            bottom: { xs: "15%", md: "20%" },
            right: { xs: "5%", md: "10%" },
            filter: { xs: "blur(60px)", md: "blur(120px)" },
          }}
        />
      </Box>

      {/* ===== Titles ===== */}
      <Typography
        sx={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: { xs: 20, md: 26 },
          color: "#8a8a8a",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {t("topTitle")}
      </Typography>

      <Typography
        sx={{
          fontWeight: 600,
          fontSize: { xs: 26, md: 40 },
          color: "#0f3c48",
          mb: 6,
          textAlign: "center",
          letterSpacing: 0.4,
          position: "relative",
          zIndex: 1,
        }}
      >
        {t("title")}
      </Typography>

      {/* ===== Cards ===== */}
      <Box
        onTouchStart={isMobile ? handleTouchStart : undefined}
        onTouchMove={isMobile ? handleTouchMove : undefined}
        onTouchEnd={isMobile ? handleTouchEnd : undefined}
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          gap: { xs: 2.5, md: 4 },
          justifyContent: "center",
          mt: 12,
        }}
      >
        {visibleGuides.map((guide) => (
          <Card
            key={guide.id}
            sx={{
              position: "relative",
              overflow: "visible",
              width: 290,
              minHeight: 270,
              pt: 8,
              borderRadius: 3,
              backgroundColor: "rgba(255,255,255,0.92)",
              border: "1px solid rgba(15,60,72,0.12)",
              boxShadow: "0 20px 50px rgba(15,60,72,0.14)",
              transition: "all 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
              display: "flex",
              flexDirection: "column",
              "&:hover": {
                transform: "translateY(-10px)",
                boxShadow: "0 35px 80px rgba(15,60,72,0.22)",
              },
            }}
          >
            {/* Image */}
            <Box
              sx={{
                width: 130,
                height: 130,
                borderRadius: "50%",
                overflow: "hidden",
                position: "absolute",
                top: -65,
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "#fff",
                boxShadow: "0 12px 30px rgba(0,0,0,0.3)",
              }}
            >
              <CardMedia
                component="img"
                image={guide.image}
                alt={guide.name}
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>

            <CardContent sx={{ flexGrow: 1, pb: 1, textAlign: "center" }}>
              <Typography fontWeight={600} fontSize={19} mb={1}>
                {guide.name}
              </Typography>

              <Box display="flex" justifyContent="center" mb={1.5}>
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} sx={{ color: "#d4af37", fontSize: 18 }} />
                ))}
              </Box>

              <Typography sx={{ fontSize: 14, color: "#555", mb: 2 }}>
                {guide.bio}
              </Typography>

              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={0.6}
                sx={{ color: "#0f3c48" }}
              >
                <PublicIcon sx={{ fontSize: 16 }} />
                <Typography sx={{ fontSize: 13, fontWeight: 500 }}>
                  {guide.language}
                </Typography>
              </Box>
            </CardContent>

            <Box sx={{ pb: 2, display: "flex", justifyContent: "center" }}>
              <Button
                startIcon={<MessageIcon />}
                component="a"
                href={`https://wa.me/${guide.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                sx={{
                  px: 3.5,
                  py: 0.7,
                  borderRadius: 3,
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: 14,
                  background:
                    "linear-gradient(135deg, #0f3c48, #145a6a)",
                  color: "#fff",
                  boxShadow: "0 8px 20px rgba(15,60,72,0.35)",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #145a6a, #0f3c48)",
                  },
                }}
              >
                {t("message")}
              </Button>
            </Box>
          </Card>
        ))}
      </Box>

      {/* ===== Arrows ===== */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={5}
        mt={6}
        position="relative"
        zIndex={1}
      >
        <IconButton
          onClick={handlePrev}
          disabled={startIndex === 0}
          sx={{ color: "#0f3c48" }}
        >
          <ArrowBackIosIcon />
        </IconButton>

        <IconButton
          onClick={handleNext}
          disabled={startIndex + cardsToShow >= guides.length}
          sx={{ color: "#0f3c48" }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
