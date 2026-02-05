import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";


export default function Programmes() {
  const { t } = useTranslation("programs");

  
  const programKeys = [
    "petra_wonders",
    "wadi_rum_adventure",
    "dead_sea_relax",
    "amman_city_tour",
    "aqaba_escape",
    "jerash_history",
    "ajloun_nature",
    "religious_sites",
    "dana_biosphere",
    "desert_castles",
  ];

 
  const programs = programKeys.map((key) => ({
    key,
    ...t(key, { returnObjects: true }),
  }));

  return (
  
    <Box sx={{ position: "relative", py: 10, px: { xs: 2, md: 10 } }}>
      {/* الخلفية */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "50vh",
          backgroundImage: "url('/images/programmes/cover2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -2,
        }}
      />

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "50vh",
          bgcolor: "rgba(255, 255, 255, 0.63)",
          zIndex: -1,
        }}
      />

      {/* العناوين */}
      <Box textAlign="left" mb={6}>
        <Typography
          sx={{
            fontFamily: "'Dancing Script', cursive",
            color: "#7b7b7b",
            fontSize: 26,
          }}
        >
          {t("topTitle")}
        </Typography>

        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { xs: 28, md: 38 },
            color: "#1b4d5c",
          }}
        >
          {t("title")}
        </Typography>
      </Box>

      {/* الكاردز */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(5, 1fr)",
          },
          gap: 3,
        }}
      >
        {programs.map((program) => (
          <Card
            key={program.key}
            component={Link}
            to={`/program/${program.key}`}
            sx={{
              textDecoration: "none",
              color: "inherit",
              borderRadius: 4,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              minHeight: 400,
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "translateY(-10px) scale(1.03)",
                boxShadow: "0 10px 15px #d0edf4",
              },
            }}
          >
            <CardMedia
              component="img"
              height="240"
              image={program.image}
              alt={program.title}
              sx={{
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            />

            <CardContent
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography fontWeight={600} mb={1}>
                  {program.title}
                </Typography>

                <Typography fontWeight={700} color="#1b4d5c" mb={2}>
                  {program.price}
                  <Typography component="span" color="text.secondary">
                    {" "}
                    / Person
                  </Typography>
                </Typography>
              </Box>

              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="body2" color="text.secondary">
                  ⏱ {program.days} Days
                </Typography>

                <Button
                  size="small"
                  sx={{
                    color: "#1da9cc",
                    fontWeight: 600,
                    bgcolor: "#ffffff",
                    "&:hover": { bgcolor: "#d0edf4" },
                  }}
                >
                  Book Now →
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  
  
  );
}
