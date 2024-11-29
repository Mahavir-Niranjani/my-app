import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  MenuItem,
  InputAdornment,
  Typography,
  Container,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import FlightSearchResults from "./FlightSearchResult";

const FlightSearch = () => {
  const [departureLocation, setDepartureLocation] = useState("");
  const [destinationLocation, setDestinationLocation] = useState("");
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);

  // Location options for simplicity
  const locations = [
    "New York",
    "Los Angeles",
    "Chicago",
    "San Francisco",
    "Miami",
  ];

  const handleSubmit = () => {
    alert(
      `Searching flights from ${departureLocation} to ${destinationLocation}`
    );
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" gutterBottom>
        Book Your Flight
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            select
            label="Departure"
            value={departureLocation}
            onChange={(e) => setDepartureLocation(e.target.value)}
            fullWidth
            variant="outlined"
          >
            {locations.map((location, index) => (
              <MenuItem key={index} value={location}>
                {location}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <TextField
            select
            label="Destination"
            value={destinationLocation}
            onChange={(e) => setDestinationLocation(e.target.value)}
            fullWidth
            variant="outlined"
          >
            {locations.map((location, index) => (
              <MenuItem key={index} value={location}>
                {location}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Departure Date"
              value={departureDate}
              onChange={(newValue) => setDepartureDate(newValue)}
              renderInput={(props) => <TextField {...props} fullWidth />}
            />
          </LocalizationProvider>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Return Date"
              value={returnDate}
              onChange={(newValue) => setReturnDate(newValue)}
              renderInput={(props) => <TextField {...props} fullWidth />}
            />
          </LocalizationProvider>
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <Button
            variant="contained"
            fullWidth
            color="primary"
            onClick={handleSubmit}
          >
            Search Flights
          </Button>
        </Grid>
      </Grid>
      <FlightSearchResults/>
    </Container>

  );
};

export default FlightSearch;
