import * as React from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import SearchIcon from "../assets/SearchIcon.svg";

export default function MaterialSearch() {
  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
      noValidate
      autoComplete="off"
    >
      <FormControl
        variant="outlined"
        className="!min-w-[559px] !w-full !h-[60px] bg-[#4747470A] rounded-lg"
      >
        <InputLabel
          htmlFor="search-input"
          className="text-base font-normal leading-7 !text-[#666666]"
        >
          Pesquisar produto...
        </InputLabel>
        <OutlinedInput
          id="search-input"
          className="!text-[#666666]"
          label="Pesquisar produto..."
          endAdornment={
            <InputAdornment position="end">
              <img src={SearchIcon} alt="Buscar" className="w-6 h-6" />
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
}
