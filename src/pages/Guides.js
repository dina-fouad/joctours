import { useTranslation } from "react-i18next";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  useMediaQuery,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import MessageIcon from "@mui/icons-material/Message";
import PublicIcon from "@mui/icons-material/Public";

export default function GuidesGrid() {
  const { t } = useTranslation("guides");
  const guidesObject = t("guides", { returnObjects: true }) || {};
  const guides = Object.values(guidesObject);
  const isMobile = useMediaQuery("(max-width:600px)");

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
          mb: 8,
        }}
      >
        {t("title")}
      </Typography>

      {/* Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "repeat(1, 1fr)"
            : "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 6,
          justifyItems: "center",
        }}
      >
        {guides.map((guide) => (
          <Card
            key={guide.id}
            sx={{
              position: "relative",
              overflow: "visible",
              width: 280,
              minHeight: 250,
              pt: 8,
              borderRadius: 4,
              backgroundColor: "#ffffff",
              boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
              transition: "all 0.3s ease",
              display: "flex",
              flexDirection: "column",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 20px 45px rgba(0,0,0,0.2)",
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
                border: "4px solid #fff",
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

              {/* Rating */}
              <Box display="flex" justifyContent="center" mb={1}>
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} sx={{ color: "#f5b50a" }} />
                ))}
              </Box>

              {/* Bio */}
              <Typography sx={{ fontSize: 14, color: "#555", mb: 2 }}>
                {guide.bio}
              </Typography>

              {/* Languages */}
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

            {/* Message Button Bottom */}
            <Box
              sx={{
                pb: 2,
                display: "flex",
                justifyContent: "center", 
              }}
            >
              <Button
                startIcon={<MessageIcon />}
                sx={{
                  px: 3, // عرض الزر
                  py: 0.6, // بادنج عمودي صغير
                  borderRadius: 3,
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: 14,
                  backgroundColor: "#1b4d5c",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#163f4c",
                  },
                }}
              >
                Message
              </Button>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
