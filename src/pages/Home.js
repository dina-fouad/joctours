import { Box, keyframes } from "@mui/material";
import { useEffect, useRef, useState } from "react";

import Header from "../components/Header";
import Tours from "./Tours";
import Guides from "./Guides";
import Programmes from "./Programmes";
import Reviews from "../components/Reviews";

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default function Home() {
  // ===== Hook داخلي يدعم الموبايل =====
  const useScrollAnimation = () => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect(); // مرة واحدة فقط
          }
        },
        {
          threshold: 0.05, // 🔥 أقل threshold
          rootMargin: "0px 0px -100px 0px", // 🔥 مهم للموبايل
        }
      );

      if (ref.current) observer.observe(ref.current);

      return () => observer.disconnect();
    }, []);

    return [ref, visible];
  };
  // ==================================

  const [guidesRef, guidesVisible] = useScrollAnimation();
  const [programmesRef, programmesVisible] = useScrollAnimation();

  return (
    <Box>
      {/* Header بدون أنميشن */}
      <Box>
        <Header />
      </Box>

      {/* Tours بدون أنميشن (كما طلبت) */}
      <Tours />

      {/* Guides */}
      <Box
        ref={guidesRef}
        sx={{
          mb: 14,
          opacity: guidesVisible ? 1 : 0,
          animation: guidesVisible
            ? `${fadeUp} 0.9s ease-out forwards`
            : "none",
        }}
      >
        <Guides />
      </Box>

      {/* Programmes */}
      <Box
        ref={programmesRef}
        sx={{
          mb: 14,
          opacity: programmesVisible ? 1 : 0,
          animation: programmesVisible
            ? `${fadeUp} 0.9s ease-out forwards`
            : "none",
        }}
      >
        <Programmes />
      </Box>


    <Reviews />
    </Box>
  );
}
