import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  useMediaQuery,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useSwipeable } from "react-swipeable";

export default function Tours() {
  const { t } = useTranslation("tours");
  const tours = Object.values(t("data", { returnObjects: true }) || []);

  const isMobile = useMediaQuery("(max-width:600px)");

  const itemsPerPage = isMobile ? 1 : 5; // كارد واحد على الموبايل
  const totalPages = Math.ceil(tours.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);
  const [animating, setAnimating] = useState(false);

  const visibleTours = tours.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  const handlePrev = () => {
    if (currentPage > 0) {
      setAnimating(true);
      setTimeout(() => {
        setCurrentPage((prev) => prev - 1);
        setAnimating(false);
      }, 300);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setAnimating(true);
      setTimeout(() => {
        setCurrentPage((prev) => prev + 1);
        setAnimating(false);
      }, 300);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const handleOpenModal = (tour) => {
    setSelectedTour(tour);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedTour(null);
  };

  return (
    <Box sx={{ position: "relative", py: isMobile ? 6 : 12 }}>
      {/* الخلفية */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "55%",
          backgroundImage: "url(/images/cover.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
          "&::after": {
            content: '""',
            position: "absolute",
            inset: 0,
            backgroundColor: "white",
            opacity: 0.8,
          },
        }}
      />

      {/* المحتوى */}
      <Box sx={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <Typography
          sx={{
            fontFamily: "'Dancing Script', cursive",
            color: "#6b6b6b",
            fontSize: { xs: "20px", md: "26px" },
            mb: 1,
          }}
        >
          {t("topTitle")}
        </Typography>

        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { xs: "24px", md: "36px" },
            color: "#175260",
            mb: { xs: 4, md: 8 },
          }}
        >
          {t("title")}
        </Typography>

        {/* الكروت */}
        <Box
          {...(isMobile ? swipeHandlers : {})}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: isMobile ? 2 : 3,
            flexWrap: "nowrap",
            mb: 4,
            transition: "transform 0.3s ease, opacity 0.3s ease",
            transform: animating ? "translateX(-20px)" : "translateX(0)",
            opacity: animating ? 0.5 : 1,
          }}
        >
          <IconButton onClick={handlePrev} sx={{ opacity: 0.5 }}>
            <ArrowBackIosNewIcon sx={{ fontSize: isMobile ? 25 : 35 }} />
          </IconButton>

          {visibleTours.map((tour, index) => (
            <Card
              key={tour.id}
              sx={{
                width: isMobile ? 260 : 260, // تكبير الكارد على الموبايل
                borderRadius: "20px",
                overflow: "hidden",
                transform: `rotate(${
                  isMobile
                    ? (index - Math.floor(itemsPerPage / 2)) * 2.5
                    : (index - 2) * 6
                }deg)`,
                transition: "0.4s",
                "&:hover": {
                  transform: "rotate(0deg) scale(1.05)",
                },
              }}
            >
              <CardMedia
                component="img"
                height={isMobile ? 300 : 320} // تكبير صورة الكارد على الموبايل
                image={tour.image}
                alt={tour.title}
                sx={{ cursor: "pointer" }}
                onClick={() => handleOpenModal(tour)}
              />

              <CardContent sx={{ textAlign: "center" }}>
                <Typography
                  fontWeight={600}
                  fontSize={isMobile ? "18px" : "17px"} // تكبير العنوان على الموبايل
                  sx={{ color: "#175260" }}
                >
                  {tour.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "14px", // تكبير صغير لنص Read More
                    color: "#6aa6b6",
                    cursor: "pointer",
                  }}
                  onClick={() => handleOpenModal(tour)}
                >
                  {t("readMore")}
                </Typography>
              </CardContent>
            </Card>
          ))}

          <IconButton onClick={handleNext} sx={{ opacity: 0.5 }}>
            <ArrowForwardIosIcon sx={{ fontSize: isMobile ? 25 : 35 }} />
          </IconButton>
        </Box>

        {/* النقاط */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          {Array.from({ length: totalPages }).map((_, i) => (
            <Box
              key={i}
              onClick={() => setCurrentPage(i)}
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: i === currentPage ? "#1da9cc" : "#ccc",
                cursor: "pointer",
              }}
            />
          ))}
        </Box>
      </Box>

      {/* المودال */}
      {selectedTour && (
        <Dialog
          open={openModal}
          onClose={handleCloseModal}
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle>{selectedTour.title}</DialogTitle>
          <DialogContent>
            <CardMedia
              component="img"
              height="260"
              image={selectedTour.image}
              alt={selectedTour.title}
              sx={{ mb: 2, borderRadius: "12px" }}
            />
            <DialogContentText>{selectedTour.description}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseModal}>Close</Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
}
