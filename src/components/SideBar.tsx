import { NavLink } from "react-router-dom";
import { Avatar, Stack, Typography } from "@mui/material";
import logo from "../assets/logo.png";
import ProFileImage from "../assets/DefaultProfileImage.png";

export default function SideBar() {
  const navOptions = [
    { route: "/dashboard", label: "Dashboard" },
    { route: "/register", label: "Cadastro de novos usuarios" },
    { route: "/accessControl", label: "Controle de acesso" },
    { route: "/report", label: "Relatorio de consumo" },
    { route: "/monitoring", label: "Monitoramento de secretaria" },
    { route: "/profile", label: "Perfil" },
    { route: "/upload", label: "Upload" },
  ];

  return (
    <aside
      style={{
        backgroundColor: "#2C3E50",
        display: "flex",
        flexDirection: "column",
        padding: "57px 0px 0px 47px",
        height: "calc(100vh - 57px)",
        width: 250,
        color: "#FFF",
      }}
    >
      <img
        src={logo}
        alt="Logo"
        style={{ width: 88, height: 35, marginBottom: 24 }}
      />

      <section className="user-info">
        <Avatar
          variant="rounded"
          src={ProFileImage}
          sx={{ width: 72, height: 81, marginBottom: 7 }}
        />

        <div className="information">
          <Typography
            variant="h2"
            sx={{ marginBottom: "5px", color: "#FFF", fontSize: 35 }}
          >
            Samantha
          </Typography>
          <Typography variant="body1" sx={{ color: "#c5c5c5" }}>
            samantha@email.com
          </Typography>
        </div>
      </section>

      <Stack
        direction={"column"}
        gap={{ xs: 4, sm: 2, md: 2 }}
        mt={{ xs: 4, sm: 2, md: 5 }}
      >
        {navOptions.map((option) => (
          <NavLink
            key={option.route}
            to={option.route}
            style={({ isActive }) => {
              return {
                color: isActive ? "#FFF" : "#c5c5c5",
                textDecoration: "none",
              };
            }}
          >
            <Typography variant="h6">{option.label}</Typography>
          </NavLink>
        ))}
      </Stack>
    </aside>
  );
}
