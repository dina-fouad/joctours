import { useState, useEffect } from "react";
import { Box, CircularProgress, useMediaQuery, keyframes } from "@mui/material";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";

export default function Loading({ onFinish }) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  // عند تحميل الفيديو
  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  // إذا الصورة والفيديو جاهزين، أنهِ اللودنج بعد 1.2 ثانية
  useEffect(() => {
    if (videoLoaded && imageLoaded) {
      const timeout = setTimeout(() => {
        if (onFinish) onFinish();
      }, 1200);
      return () => clearTimeout(timeout);
    }
  }, [videoLoaded, imageLoaded, onFinish]);

  // حركة دوران الطائرة حول الشعار
  const rotateOrbit = keyframes`
    0% { transform: translate(-50%, -50%) rotate(0deg); }
    100% { transform: translate(-50%, -50%) rotate(360deg); }
  `;
  const orbitRadius = isMobile ? 85 : 130;

  // preload الصورة والفيديو لتحسين السرعة
  useEffect(() => {
    const img = new Image();
    img.src = "/images/logo.webp";
    img.onload = () => setImageLoaded(true);

    const video = document.createElement("video");
    video.src = "/videos/video.mp4";
    video.preload = "auto";
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #1b4d5c, #1da9cc)",
        overflow: "hidden",
      }}
    >
      {/* فيديو الخلفية مخفي */}
      <video
        src="/videos/video.mp4"
        autoPlay
        muted
        onCanPlay={handleVideoLoaded}
        style={{ display: "none" }}
      />

      {/* شعار اللودنج يظهر فورًا */}
      <img
        src="/images/logo.webp"
        alt="Logo"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: isMobile ? 130 : 180,
          height: isMobile ? 130 : 180,
          zIndex: 1,
          opacity: imageLoaded ? 1 : 0,
          transition: "opacity 0.2s ease-in",
        }}
      />

      {/* صندوق دوران الطائرة حول الشعار */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: orbitRadius * 2,
          height: orbitRadius * 2,
          animation: `${rotateOrbit} 3.5s linear infinite`,
        }}
      >
        <AirplanemodeActiveIcon
          sx={{
            fontSize: isMobile ? 30 : 45,
            color: "#0ae5ec",
            position: "absolute",
            top: -18,
            left: "50%",
            transform: `translateX(-50%) rotate(90deg)`,
          }}
        />
      </Box>

      {/* مؤشر التحميل يظهر إذا الفيديو أو الصورة لم يُحمّل بعد */}
      {!(videoLoaded && imageLoaded) && (
        <CircularProgress
          sx={{
            position: "absolute",
            bottom: isMobile ? 20 : 50,
            color: "#00FFE0",
          }}
        />
      )}
    </Box>
  );
}
