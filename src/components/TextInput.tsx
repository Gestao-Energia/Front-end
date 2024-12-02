import { Box, OutlinedInput, OutlinedInputProps, Typography } from "@mui/material";

type TextInputProps = {
  label: string;
  placeholder: string;
} & OutlinedInputProps;

export default function TextInput({ label, placeholder, ...props }: TextInputProps) {
  return (
    <Box textAlign={"left"} width={'100%'}>
      <Typography variant="body1" mb={1}>{label}</Typography>
      <OutlinedInput
        {...props}
        placeholder={placeholder}
        sx={{
          borderRadius: "46px",
          boxShadow: "0px 2px 6px 0px #13124212",
          border: "none !important",
          width: '100%',
          "& fieldset": { border: "none" },
        }}
      />
    </Box>
  );
}
