import { useTranslation } from "react-i18next";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import Masonry from '@mui/lab/Masonry';

export default function Tours() {
  const { t } = useTranslation("tours");

  // جلب بيانات الجولات من i18n
  const tours = Object.values(t("data", { returnObjects: true }) || []);

  return (
    <div style={{ padding: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        {t("title", "Tours")}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {t("subtitle", "Explore our available tours")}
      </Typography>

      <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={3}>
        {tours.map((tour, index) => (
          <Card key={index} style={{ breakInside: 'avoid', overflow: 'hidden' }}>
            {/* صورة لكل جولة */}
            <div
              style={{
                height: 180,
                backgroundColor: "#eee",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                color: "#555",
              }}
            >
              IMAGE
            </div>

            <CardContent>
              <Typography variant="h6">{tour.title}</Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {tour.description}
              </Typography>
              <Typography variant="body2">
                {tour.duration} | {tour.price}
              </Typography>
            </CardContent>

            <CardActions>
              <Button size="small" variant="contained" color="primary">
                {t("viewMore", "View More")}
              </Button>
            </CardActions>
          </Card>
        ))}
      </Masonry>
    </div>
  );
}
