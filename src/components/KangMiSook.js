import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import prevArrow from "../../static/prevArrow.png";
import nextArrow from "../../static/nextArrow.png";
import image1 from "../../static/images/kangmisook1.png";
const PreviousBtn = (props) => {
  const { className, onClick, currentSlide } = props;
  return (
    <>
      {currentSlide !== 0 && (
        <Div className={className} onClick={onClick}>
          <PrevIcon src={prevArrow} />
        </Div>
      )}
    </>
  );
};
const NextBtn = (props) => {
  const { className, onClick, slideCount, currentSlide } = props;
  console.log(props);
  return (
    <>
      {currentSlide !== slideCount - 1 && (
        <DivPre className={className} onClick={onClick}>
          <NextIcon src={nextArrow} />
        </DivPre>
      )}
    </>
  );
};
function KangMiSook() {
  const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
  };
  return (
    <Body>
      <Container>
        <Name>Misook Kang</Name>
        <Text>RESEARCH FIELD</Text>
        <Title>Energy material development</Title>
      </Container>
      <StyledSlider
        {...settings}
        style={{
          position: "absolute",
          top: "500px",
          left: "200px",
          width: "1508px",
          height: "480px",
          opacity: 1,
          backgroundColor: "white",
        }}
      >
        <Content>
          <SmallTitleNonImage style={{ width: "830px", top: "150px" }}>
            Stable and efficient electrocatalysts for oxygen evolution reaction
            (OER) and
            <br /> hydrogen evolution reaction (HER)
          </SmallTitleNonImage>
          <ListNonImage style={{ width: "1051px", top: "180px" }}>
            <ListContent style={{ listStyle: "none" }}>
              Development of highly active and stable bifunctional
              electrocatalysts with high inherent activity, abundant exposed
              <br />
              active sites, rapid mass transfer, and strong structure stability
              for overall water splitting reactions.
            </ListContent>
          </ListNonImage>
        </Content>
        <Content>
          <SmallTitleNonImage style={{ top: "145px", width: "1100px" }}>
            Rational design of efficient electrochemical oxygen reduction
            reaction (ORR) catalysts for fuel cells
          </SmallTitleNonImage>
          <ListNonImage style={{ top: "157px" }}>
            <ListContent style={{ width: "950px" }}>
              Design of high performance and durable electrocatalysts for fuel
              cell devices in hydrogen powered vehicles
            </ListContent>
            <ListContent>
              Transition metal alloy based electrocatalysts
            </ListContent>
            <ListContent>
              Low platinum (Pt) or Pt-free electrocatalysts
            </ListContent>
          </ListNonImage>
        </Content>
        <Content>
          <SmallTitleNonImage style={{ top: "145px", width: "1100px" }}>
            Developing large-scale, high-efficient and low-cost lithium-ion
            batteries for automobiles
          </SmallTitleNonImage>
          <ListNonImage style={{ top: "157px" }}>
            <ListContent style={{ width: "950px" }}>
              Nickel rich cathode materials
            </ListContent>
            <ListContent>
              Anode materials for lithium ion secondary battery
            </ListContent>
            <ListContent>
              Cathode materials for sodium ion secondary battery
            </ListContent>
          </ListNonImage>
        </Content>
        <Content>
          <Image
            src={image1}
            style={{ width: "1200px", height: "260px" }}
          ></Image>
        </Content>
      </StyledSlider>
    </Body>
  );
}

const Body = styled.main`
  top: 0px;
  left: 0px;
  width: 1920px;
  height: 1149px;
  /* UI Properties */
  background: #f0f0f0 0% 0% no-repeat padding-box;
  opacity: 1;
`;
const Container = styled.div`
  position: absolute;
  top: 196px;
  left: -68px;
  width: 643px;
  height: 160px;

  /* UI Properties */
  background: #447bf7 0% 0% no-repeat padding-box;
  border-radius: 80px;
  opacity: 1;
`;
const Name = styled.div`
  /* Layout Properties */
  position: absolute;
  top: 60px;
  left: 280px;
  width: 260px;
  height: 47px;
  /* UI Properties */
  text-align: left;
  font: normal normal bold 40px/47px Roboto;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`;
const Text = styled.div`
  /* Layout Properties */
  position: absolute;
  top: 30px;
  left: 703px;
  width: 190px;
  height: 24px;
  /* UI Properties */
  text-align: left;
  font: normal normal medium Roboto;
  font-size: 25px;
  letter-spacing: 0px;
  color: #818181;
  opacity: 0.69;
`;
const Title = styled.div`
  /* Layout Properties */
  position: absolute;
  top: 80px;
  left: 700px;
  width: 967px;
  height: 58px;
  /* UI Properties */
  text-align: left;
  font: normal normal bold 50px/58px Roboto;
  letter-spacing: 0px;
  color: #447bf7;
  opacity: 1;
`;

const Div = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 16px;
  z-index: 99;
  text-align: right;
  line-height: 30px;
`;
const DivPre = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  left: 16px;
  z-index: 99;
  text-align: left;
  line-height: 30px;
`;
const StyledSlider = styled(Slider)`
  height: 260px;
  width: 100%;
  position: relative;
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
  .slick-slide div {
    //슬라이더  컨텐츠
    cursor: pointer;
  }
`;

const PrevIcon = styled.img`
  position: relative;
  width: 51px;
  left: 50px;
  height: 51px;
  background: 0% 0% no-repeat padding-box;
  border-radius: 100px;
  opacity: 1;
`;
const NextIcon = styled.img`
  position: absolute;
  left: 1410px;
  width: 51px;
  height: 51px;
  background: 0% 0% no-repeat padding-box;
  border-radius: 100px;
  opacity: 1;
`;

const Content = styled.div`
  width: 1508px;
  height: 480px;
  /* UI Properties */
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
`;
const Image = styled.img`
  /* Layout Properties */
  position: relative;
  top: 140px;
  left: 121px;
  width: 404px;
  height: 213px;
  /* UI Properties */
  opacity: 1;
`;

const SmallTitle = styled.h2`
  position: relative;
  top: -100px;
  left: 580px;
  width: 768px;
  height: 25px;
  /* UI Properties */
  text-align: left;
  letter-spacing: var(--unnamed-character-spacing-0);
  font-size: 22px/36px;
  font-family: Roboto;
  text-align: left;
  letter-spacing: 0px;
  color: #1a1a1a;
  opacity: 1;
`;
const SmallTitleNonImage = styled.h2`
  position: relative;
  top: 196px;
  left: 228px;
  width: 768px;
  height: 25px;
  /* UI Properties */
  text-align: left;
  letter-spacing: var(--unnamed-character-spacing-0);
  font-size: 22px/36px;
  font-family: Roboto;
  text-align: left;
  letter-spacing: 0px;
  color: #1a1a1a;
  opacity: 1;
`;

const List = styled.div`
  position: relative;
  top: -80px;
  left: 580px;
  width: 796px;
  height: 199px;
  text-align: left;
`;
const ListNonImage = styled.div`
  position: relative;
  top: 205px;
  left: 228px;
  width: 796px;
  height: 199px;
  text-align: left;
`;

const ListContent = styled.li`
  font: normal normal normal 20px/36px Roboto;
  letter-spacing: 0px;
  color: #606060;
  opacity: 1;
`;
export default KangMiSook;
