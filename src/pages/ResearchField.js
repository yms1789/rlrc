import React from "react";
import JooSangWoo from "../components/JooSangWoo";
import RhoJunSuk from "../components/RhoJunSuk";
import ParkJuHyun from "../components/ParkJuHyun";
import JeonSangMin from "../components/JeonSangMin";
import KimHaeKyoung from "../components/KimHaeKyoung";
import JungHoYoul from "../components/JungHoYoul";
import KangMiSook from "../components/KangMiSook";
import KangSeokWon from "../components/KangSeokWon";
const professorComponent = {
  Joo: <JooSangWoo />,
  Rho: <RhoJunSuk />,
  Park: <ParkJuHyun />,
  Jeon: <JeonSangMin />,
  Kyoung: <KimHaeKyoung />,
  Youl: <JungHoYoul />,
  Sook: <KangMiSook />,
  Won: <KangSeokWon />,
};
function ResearchField(props) {
  let professor;
  if (props.location.state) {
    professor =
      props &&
      Object.values(props.location.state)
        .slice(0, Object.values(props.location.state).length - 1)
        .join("");
  } else {
    professor = "Joo";
  }

  return <div>{professorComponent[professor]}</div>;
}

export default ResearchField;
