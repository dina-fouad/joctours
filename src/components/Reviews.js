import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";

export default function Reviews() {
  const images = [
    "/images/reviews/r1.png",
    "/images/reviews/r2.png",
    "/images/reviews/r3.png",
    "/images/reviews/r1.png",
    "/images/reviews/r2.png",
  ];

  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerHeight = window.innerHeight / 2;
      if (window.scrollY > triggerHeight) setShowCTA(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      sx={{
        py: 3,
        px: { xs: 2, md: 6 },
        backgroundColor: "#eef3f5",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* Decorative circles */}
      <Box
        sx={{
          position: "absolute",
          width: { xs: 260, md: 520 },
          height: { xs: 260, md: 520 },
          borderRadius: "50%",
          background: "rgba(27,77,92,0.08)",
          top: "25%",
          right: { xs: "-90px", md: "-180px" },
          transform: "translateY(-50%)",
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: { xs: 260, md: 520 },
          height: { xs: 260, md: 520 },
          borderRadius: "50%",
          background: "rgba(27,77,92,0.08)",
          top: "80%",
          left: { xs: "-90px", md: "-180px" },
          transform: "translateY(-50%)",
          pointerEvents: "none",
        }}
      />

      {/* Titles */}
      <Typography
        sx={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: { xs: 20, md: 26 },
          color: "#7b7b7b",
          position: "relative",
          zIndex: 1,
        }}
      >
        Testimonial
      </Typography>

      <Typography
        sx={{
          fontWeight: 700,
          fontSize: { xs: 24, md: 38 },
          color: "#1b4d5c",
          mb: 6,
          position: "relative",
          zIndex: 1,
        }}
      >
        What Client Say About Us
      </Typography>

      {/* Slider container */}
      <Box
        sx={{
          maxWidth: 1300,
          mx: "auto",
          position: "relative",
          zIndex: 1,
          px: { xs: 1, md: 12 },
        }}
      >
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          centeredSlides
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          breakpoints={{
            900: {
              slidesPerView: Math.min(3, images.length),
            },
          }}
          style={{
            padding: "30px 0 100px",
          }}
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              {({ isActive }) => (
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  {/* Quote icon half above the image */}
                  {isActive && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: { xs: -15, md: -23 },
                        left: "90%",
                        width: { xs: 25, md: 38 },
                        height: { xs: 25, md: 38 },
                        borderRadius: "50%",
                        backgroundColor: "#1b4d5c",
                        color: "#fff",
                        fontSize: { xs: 16, md: 26 },
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 3,
                        transform: "translateX(-50%)",
                      }}
                    >
                      “
                    </Box>
                  )}

                  <Box
                    sx={{
                      position: "relative",
                      width: { xs: "100%", md: 700 },
                      transform: isActive ? "scale(1)" : "scale(0.95)",
                      opacity: isActive ? 1 : 0.45,
                      transition: "0.45s ease",
                      boxShadow: isActive
                        ? { xs: "0 15px 35px rgba(0,0,0,0.2)", md: "0 30px 70px rgba(0,0,0,0.25)" }
                        : { xs: "0 5px 15px rgba(0,0,0,0.08)", md: "0 10px 30px rgba(0,0,0,0.08)" },
                      borderRadius: 4,
                      backgroundColor: "#fff",
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      component="img"
                      src={img}
                      alt={`Review ${i + 1}`}
                      sx={{
                        width: "100%",
                        display: "block",
                      }}
                    />
                  </Box>
                </Box>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* TripAdvisor CTA */}
        <Box
          sx={{
            mt: 6,
            display: "flex",
            justifyContent: "center",
            position: "relative",
            zIndex: 1,
            opacity: showCTA ? 1 : 0,
            transform: showCTA ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.8s ease",
          }}
        >
          <Box
            component="a"
            href="https://www.tripadvisor.com/Attraction_Review-g293986-d11698785-Reviews-Jordan_Classical_tours-Amman_Amman_Governorate.html"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1.5,
              px: { xs: 3, md: 4 },
              py: { xs: 1, md: 1.5 },
              borderRadius: 50,
              textDecoration: "none",
              fontWeight: 600,
              fontSize: { xs: 12, md: "inherit" },
              color: "#1b4d5c",
              border: "2px solid #1b4d5c",
              transition: "0.3s ease",
              backgroundColor: "#fff",
              "&:hover": {
                backgroundColor: "#1b4d5c",
                color: "#fff",
              },
            }}
          >
            <Box
              component="span"
              sx={{ width: { xs: 18, md: 24 }, height: { xs: 18, md: 24 }, display: "inline-block" }}
              dangerouslySetInnerHTML={{
                __html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#34E07D"><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm0 372c-90.5 0-164-73.5-164-164S165.5 92 256 92s164 73.5 164 164-73.5 164-164 164zm0-272a108 108 0 100 216 108 108 0 000-216zm0 192a84 84 0 110-168 84 84 0 010 168zm0-144a60 60 0 100 120 60 60 0 000-120z"/></svg>`,
              }}
            />
            <Box sx={{ fontSize: { xs: 12, md: "inherit" } }}>Rated by travelers on TripAdvisor</Box>
          </Box>
        </Box>
      </Box>

      {/* Pagination styling */}
      <style>
        {`
          .swiper-pagination {
            bottom: 10px !important; 
          }

          .swiper-pagination-bullet {
            background: #b0c4cc;
            opacity: 1;
          }

          .swiper-pagination-bullet-active {
            background: #1b4d5c;
          }
        `}
      </style>
    </Box>
  );
}
