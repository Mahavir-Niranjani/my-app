import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Select,
  MenuItem,
  Divider,
  Card,
  CardContent,
} from "@mui/material";

const FlightSearchResults = () => {
  // Mock flight data
  const flights = [
    {
      airline: "IndiGo",
      time: "7:05 PM – 8:55 PM",
      duration: "1 hr 50 min",
      stops: "Nonstop",
      emissions: "79 kg CO2e",
      emissionChange: "-16%",
      price: "₹14,757",
      message: "Avoids as much CO2e as 913 trees absorb in a day",
    },
    {
      airline: "Air India Express",
      time: "9:35 PM – 11:20 PM",
      duration: "1 hr 45 min",
      stops: "Nonstop",
      emissions: "109 kg CO2e",
      emissionChange: "+16%",
      price: "₹14,759",
    },
    {
      airline: "IndiGo",
      time: "11:35 AM – 6:25 PM",
      duration: "6 hr 50 min",
      stops: "1 stop (GOI)",
      emissions: "111 kg CO2e",
      emissionChange: "+18%",
      price: "₹15,774",
    },
  ];

  const [sort, setSort] = useState("best");

  return (
    <Box sx={{ p: 3, bgcolor: "background.default", minHeight: "100vh" }}>
      {/* Filters Section */}
      <Box sx={{ mb: 3 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={3}>
            <Typography variant="h6">Sort by:</Typography>
            <Select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              sx={{ minWidth: 120 }}
            >
              <MenuItem value="best">Best</MenuItem>
              <MenuItem value="cheapest">Cheapest</MenuItem>
              <MenuItem value="duration">Duration</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Button variant="outlined" sx={{ mx: 1 }}>
              Stops
            </Button>
            <Button variant="outlined" sx={{ mx: 1 }}>
              Airlines
            </Button>
            <Button variant="outlined" sx={{ mx: 1 }}>
              Price
            </Button>
            <Button variant="outlined" sx={{ mx: 1 }}>
              Duration
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Divider />

      {/* Flight Results */}
      <Box sx={{ mt: 3 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Top departing flights
        </Typography>
        <Grid container spacing={2}>
          {flights.map((flight, index) => (
            <Grid item xs={12} key={index}>
              <Card variant="outlined">
                <CardContent>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} md={3}>
                      <Typography variant="h6">{flight.airline}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {flight.time}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <Typography variant="body1">{flight.duration}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {flight.stops}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <Typography variant="body1">
                        {flight.emissions}
                      </Typography>
                      <Typography variant="body2" color="success.main">
                        {flight.emissionChange} emissions
                      </Typography>
                      {flight.message && (
                        <Typography variant="caption" color="text.secondary">
                          {flight.message}
                        </Typography>
                      )}
                    </Grid>
                    <Grid item xs={12} md={3} textAlign="right">
                      <Typography variant="h6" color="primary">
                        {flight.price}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default FlightSearchResults;
