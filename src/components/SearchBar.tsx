import { Search } from "@mui/icons-material";
import { Box, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchTerm(query);
    onSearch(query);
  };
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <TextField
        value={searchTerm}
        onChange={handleSearchChange}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <Search></Search>
              </InputAdornment>
            ),
            style: {
              borderRadius: "50px",
              height: "40px",
              boxSizing: "border-box",
              backgroundColor: "#fff",
            },
          },
        }}
        variant="outlined"
      />
    </Box>
  );
}
