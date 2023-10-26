import React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

export default function Loader() {
    return (
        <Stack
        sx={{ display: "flex", justifyContent: "center", padding: "40px" }}
        spacing={2}
        direction="row"
      >
        <CircularProgress
          color="secondary"
          className="loading-catalogs"
          size="6rem"
        />
      </Stack>
    )
}