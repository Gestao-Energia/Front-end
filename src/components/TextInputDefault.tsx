import {
  Box,
  OutlinedInput,
  OutlinedInputProps,
  Typography,
} from "@mui/material";

type TextInputProps = {
  label: string;
  placeholder: string;
} & OutlinedInputProps;

export default function TextInputDefault({
  label,
  placeholder,
  ...props
}: TextInputProps) {
  return (
    <Box textAlign={"center"} width={"100%"}>
      <Typography variant="body1" mb={1}>
        {label}
      </Typography>
      <OutlinedInput
        {...props}
        placeholder={placeholder}
        sx={{
          borderRadius: "10px",
          background: "#FFF",
          border: "none !important",
          width: "100%",
          "& fieldset": { border: "none" },
        }}
      />
    </Box>
  );
}
