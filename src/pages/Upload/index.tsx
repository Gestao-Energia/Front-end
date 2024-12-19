import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import UploadIcon from "../../assets/uploadLight.svg";
import { Button, Stack, Typography } from "@mui/material";
import { useUploadCsvFile } from "../../queries/useUploadCsvFile";
import { useAlert } from "../../hooks/useAlert";
import { useNavigate } from "react-router-dom";

export default function UploadFiles() {
  const uploadCsvQuery = useUploadCsvFile();
  const navigate = useNavigate();
  const { showAlert } = useAlert();
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setUploadedFile(acceptedFiles[0]);
    }
  }, []);

  const handleUpload = () => {
    if (uploadedFile) {
      uploadCsvQuery.mutateAsync(uploadedFile, {
        onSuccess: (props) => {
          showAlert({
            title: "Sucesso",
            severity: "success",
            message: props?.data,
          });
          navigate("/report");
        },
        onError: (props) => {
          showAlert({
            title: "Erro",
            severity: "error",
            message:
              props?.response?.data?.message ?? "Erro ao processar o arquivo.",
          });
        },
      });
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "text/csv": [".zip"] },
    maxFiles: 1,
  });

  return (
    <Stack
      direction={"column"}
      gap={4}
      style={{
        maxWidth: "700px",
        height: "300px",
        margin: "5rem auto",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" fontWeight={"700"}>
        Upload arquivo CSV
      </Typography>
      <div
        {...getRootProps()}
        style={{
          border: "2px dashed #6b6bff",
          borderRadius: "8px",
          padding: "20px",
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        <input {...getInputProps()} />
        {uploadedFile ? (
          <div>
            <p style={{ margin: "10px 0", fontWeight: "bold", color: "#333" }}>
              Arquivo enviado:
            </p>
            <p style={{ margin: "5px 0", color: "#6b6bff" }}>
              <strong>Nome:</strong> {uploadedFile.name}
            </p>
            <p style={{ margin: "5px 0", color: "#6b6bff" }}>
              <strong>Tamanho:</strong> {(uploadedFile.size / 1024).toFixed(2)}{" "}
              KB
            </p>
          </div>
        ) : (
          <>
            {isDragActive ? (
              <p>Solte o arquivo aqui...</p>
            ) : (
              <>
                <img src={UploadIcon} alt="Upload" />
                <p>Coloque seu arquivo aqui</p>
              </>
            )}
          </>
        )}
      </div>
      <Button
        variant="contained"
        onClick={handleUpload}
        disabled={!uploadedFile || uploadCsvQuery.isPending}
        sx={{
          background: "#2C3E50",
          borderRadius: "40px",
          color: "#FFF",
          fontSize: "18px",
          fontWeight: 700,
          padding: "20px 60px",
        }}
      >
        Enviar
      </Button>
    </Stack>
  );
}
