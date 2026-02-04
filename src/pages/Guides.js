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
      Math.min(prev + cardsToShow, guides.length - cardsToShow),
    );
  };

  const visibleGuides = guides.slice(startIndex, startIndex + cardsToShow);

  return (
    <Box
      textAlign="center"
      py={8}
      px={{ xs: 2, md: 10 }}
      sx={{ backgroundColor: "#fff" }}
    >
      {/* Titles */}
      <Typography
        sx={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: 26,
          color: "#7b7b7b",
        }}
      >
        {t("topTitle")}
      </Typography>

      <Typography
        sx={{
          fontWeight: 700,
          fontSize: { xs: 26, md: 38 },
          color: "#1b4d5c",
          mb: 4,
        }}
      >
        {t("title")}
      </Typography>

      {/* Grid */}
      <Box
        onTouchStart={isMobile ? handleTouchStart : undefined}
        onTouchMove={isMobile ? handleTouchMove : undefined}
        onTouchEnd={isMobile ? handleTouchEnd : undefined}
        sx={{
          display: "flex",
          gap: 3,
          justifyContent: "center",
          flexWrap: "nowrap",
          overflow: "visible",
          mt: 12,
        }}
      >
        {visibleGuides.map((guide) => (
          <Card
            key={guide.id}
            sx={{
              position: "relative",
              overflow: "visible",
              width: 280,
              minHeight: 250,
              pt: 8,
              borderRadius: 4,

              /* خلفية زجاجية ناعمة */
              backgroundColor: "rgba(255, 255, 255, 0.75)",

              /* إطار خفيف جدًا بلون الصفحة */
              border: "1px solid rgba(27, 77, 92, 0.18)",

              /* تأثير الزجاج */
              backdropFilter: "blur(14px)",

              /* ظل ناعم */
              boxShadow: "0 12px 30px rgba(27, 77, 92, 0.12)",

              transition: "all 0.35s ease",
              display: "flex",
              flexDirection: "column",

              "&:hover": {
                transform: "translateY(-10px)",
                boxShadow: "0 25px 50px rgba(27, 77, 92, 0.25)",
                borderColor: "rgba(27, 77, 92, 0.35)",
              },
            }}
          >
            {/* Circular Image */}
            <Box
              sx={{
                width: 140,
                height: 140,
                borderRadius: "50%",
                overflow: "hidden",
                position: "absolute",
                top: -70,
                left: "50%",
                transform: "translateX(-50%)",
                border: "2px solid #fff",
                backgroundColor: "#fff",
                boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
              }}
            >
              <CardMedia
                component="img"
                image={guide.image}
                alt={guide.name}
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>

            {/* Content */}
            <CardContent sx={{ flexGrow: 1, pb: 1 }}>
              <Typography fontWeight={700} fontSize={20} mb={1}>
                {guide.name}
              </Typography>

              <Box display="flex" justifyContent="center" mb={1}>
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} sx={{ color: "#f5b50a" }} />
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
                sx={{ color: "#1b4d5c" }}
              >
                <PublicIcon sx={{ fontSize: 17 }} />
                <Typography sx={{ fontSize: 13, fontWeight: 600 }}>
                  {guide.language}
                </Typography>
              </Box>
            </CardContent>

            {/* Message Button */}
            <Box sx={{ pb: 2, display: "flex", justifyContent: "center" }}>
              <Button
                startIcon={<MessageIcon />}
                component="a"
                href={`https://wa.me/${guide.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                sx={{
                  px: 3,
                  py: 0.6,
                  borderRadius: 3,
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: 14,
                  backgroundColor: "#1b4d5c",
                  color: "#fff",
                  "&:hover": { backgroundColor: "#163f4c" },
                }}
              >
                {t("message")}
              </Button>
            </Box>
          </Card>
        ))}
      </Box>

      {/* Arrows */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={4}
        mt={4}
      >
        <IconButton
          onClick={handlePrev}
          disabled={startIndex === 0}
          sx={{ color: "#1b4d5c" }}
        >
          <ArrowBackIosIcon />
        </IconButton>

        <IconButton
          onClick={handleNext}
          disabled={startIndex + cardsToShow >= guides.length}
          sx={{ color: "#1b4d5c" }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
