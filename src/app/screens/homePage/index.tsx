import { Container } from "@mui/material";
import Categories from "./Categories";
import CheckInstagram from "./CheckInstagram";
import ChickenAfisha from "./ChickenAfisha";
import DeliciousRecipe from "./DeliciousRecipe";
import LeanMore from "./LeanMore";
import Process from "./Process";
import Simple from "./Simple";

export function HomePage() {
  return (
    <div className="home-page">
      <Container>
        <ChickenAfisha />
        <Categories />
        <Simple />
        <LeanMore />
        <Process />
        <CheckInstagram />
        <DeliciousRecipe />
      </Container>
    </div>
  );
}

/** 42-qatorga moment qoyilishi kerak **/
