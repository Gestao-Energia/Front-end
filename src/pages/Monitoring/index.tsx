import React from "react";
import card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { Box } from "@mui/material";
import stack from "@mui/material/Stack";
import { Gauge } from "@mui/x-charts/Gauge";

export default function Monitoring() {
  return (
    <Box>
      <Card sx={{ maxWidth: 205, maxHeight: 300 }}>
        <Typography sx={{ textAlign: "center" }}>Secretaria</Typography>

        <CardContent>
          <Gauge
            width={100}
            height={100}
            value={50}
            valueMin={10}
            valueMax={60}
          />
        </CardContent>
      </Card>
    </Box>
  );
}
