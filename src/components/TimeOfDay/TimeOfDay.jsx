import React from "react";
import BtnUserConfig from "../../components/userInfo/BtnUserConfig";

export default function UserInfo() {
  const userBar = localStorage.getItem("Usuario Logado");
  const horarios = new Date().getHours();
  let saudacao = "";

  if (horarios === 0 || horarios <= 12) {
    saudacao = "Bom dia";
  } else if (horarios >= 12 || horarios <= 18) {
    saudacao = "Boa tarde";
  } else {
    saudacao = "Boa noite";
  }

  console.log(horarios);
  return (
    <>
      <div
        style={{
          backgroundColor: "",
          textAlign: "right",
          paddingRight: "20px",
          margin: "12px",
          marginBottom: "12px",
          fontSize: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "8px",
          }}
        >
          <span>{saudacao},</span>
          <BtnUserConfig>{userBar}</BtnUserConfig>
        </div>
      </div>
    </>
  );
}
