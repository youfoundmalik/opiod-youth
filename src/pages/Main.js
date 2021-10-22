import React from "react";
import Nav from "../components/Nav/Nav";
import "./Main.scss";
import ThreeInOne from "../components/pictureAndText/ThreeInOne";
import Section from "../components/common/section/Section";
import Heading from "../components/common/Heading";
import InnerDiv from "../components/common/innerDiv/InnerDiv";
import DoubleImg from "../components/doubleRoundImg/DoubleImg";
import ParagraphBox from "../components/common/ParagraphBox";
import SidebySide from "../components/sideByside/SideBySide";

import Graphics from "../images/Graphics";
import Slider from "../components/slider/Slider";

const Main = () => {
  const welcome = [
    {
      heading: "Opioids don’t have to be scary!",
      mainImg: [Graphics.svg[0]],
      imgWidth: "70%",
      maxwidth: "55%",
      align: "center",
      justify: "",
      innerjustify: "",
    },
    {
      message:
        "There may be a time when your healthcare provider prescribes you opioids. Opioids are sometimes needed for children and youth. Know the information, so you can be informed when talking to your healthcare provider about opioids.",
      bubble:
        "Be sure to tell your healthcare provider about any previous history of opioid use and if you are currently using any substances or medicines that are not prescribed to you. This will help your healthcare provider provide the best and safest care for you.",
    },
    {
      size: "auto",
      spacing: "2% 12%",
      background: "#F2F2F2",
    },
  ];
  const what = [
    {
      heading: "What Are Opioids?",
      mainImg: [Graphics.svg[1]],
      imgWidth: "70%",
      maxwidth: "55%",
      align: "center",
      justify: "",
      innerjustify: "",
    },
    {
      message:
        "Opioids are a type of medication used to help reduce pain. Opioids can be prescribed for children, youth, and adults",
    },
  ];
  const how = [
    {
      heading: "How do they work?",
      mainImg: [Graphics.svg[2]],
      imgWidth: "40%",
      maxwidth: "55%",
      align: "center",
    },
    {
      message:
        "Opioids are strong pain relief medications. They work by attaching to receptors in your brain that reduce your feelings of pain and make you feel better.",
    },
    {
      mainImg: [Graphics.svg[3]],
      imgWidth: "45%",
      maxwidth: "55%",
      align: "center",
      h1Display: "none",
    },
    {
      size: "100%",
      align: "left",
      background: "#D8EBF4",
      spacing: "3% 0",
    },
  ];
  const when = [
    {
      message:
        "Opioids are prescribed when people are in a lot of pain and other painkillers, like acetaminophen (Tylenol®) or ibuprofen (Advil®), aren’t enough.",
    },
  ];
  const footer = [
    {
      heading: "Useful Links",
      subheading: "Find out more about opioids from these helpful resources:",
    },
    {
      text1: "ARCHE Systematic Review",
      link2:
        "https://trekk.ca/resources?utf8=%E2%9C%93&tag_id=D010147&external_resource_type=Quick_glance",
      text2: "TREKK Bottom Line Recommendations",
      link3:
        "https://www.google.com/url?q=https://www.canada.ca/en/health-canada/services/opioids.html&sa=D&source=docs&ust=1634759298037000&usg=AOvVaw37bkCsZ5xgKUmM5wV4drUb",
      text3: "Health Canada",
    },
    {
      size: "auto",
      spacing: "3% 16%",
      background: "#F2F2F2",
    },
    {
      message1:
        "PRODUCTION OF THIS MATERIAL WAS LED BY DR. MICHELE DYSON WITH ASSISTANCE FROM KELSEY WRIGHT AND ZAHRA SAIDHERSI",
      message2: "THIS MATERIAL WAS DEVELOPED WITH SUPPORT FROM:",
    },
    {
      maxwidth: "80%",
      imageOne: `${Graphics.png[0]}`,
      linkOne:
        "https://www.ualberta.ca/pediatrics/pediatric-research/affiliated-research-units/alberta-research-centre-for-health-evidence-arche/index.html",
      imageTwo: `${Graphics.png[1]}`,
      linkTwo: "https://www.ualberta.ca/research/our-research/index.html",
    },
    {
      maxwidth: "80%",
      imageOne: `${Graphics.png[2]}`,
      linkOne: "Trekk Logo: https://trekk.ca/",
      imageTwo: `${Graphics.png[3]}`,
      linkTwo: "https://www.antigravitydesignco.com/",
    },
    {
      size: "100%",
      spacing: "5% 0",
      background: "#F2F2F2",
    },
  ];

  return (
    <>
      <Nav />
      <div className="bodyArea">
        <Section id="welcome">
          <ThreeInOne {...welcome[0]}>
            <ParagraphBox size="85%">
              <p>{welcome[1].message}</p>
            </ParagraphBox>
            <ParagraphBox {...welcome[2]}>
              <p>{welcome[1].bubble}</p>
            </ParagraphBox>
          </ThreeInOne>
        </Section>
        <Section id="what">
          <ThreeInOne {...what[0]}>
            <ParagraphBox size="60%">
              <p>{what[1].message}</p>
            </ParagraphBox>
          </ThreeInOne>
        </Section>
        <Section id="how">
          <ThreeInOne {...how[0]}>
            <ParagraphBox size="60%" align="left">
              <p>{how[1].message}</p>
            </ParagraphBox>
          </ThreeInOne>
          <ThreeInOne {...how[2]}>
            <ParagraphBox {...how[3]}>
              <p className="primary">
                Some common opioids you may have heard of include:
              </p>
              <li>Morphine</li>
              <li>Codeine (like Tylenol #3®)</li>
              <li>Oxycodone (like Percocet®)</li>
            </ParagraphBox>
          </ThreeInOne>
        </Section>
        <Section id="when">
          <Heading>When are they used?</Heading>
          <InnerDiv maxwidth="90%">
            <SidebySide
              maxwidth="70%"
              imageOne={Graphics.svg[4]}
              sideTwo={<p>{when[0].message}</p>}
            />
            <div className="layer2__">
              <ParagraphBox align="left">
                <p>
                  Opioids are most often used for a short time when a person has
                  intense pain. Examples of when opioids are used for young
                  people include:
                </p>
                <li>If you break a large bone (fractures)</li>
                <li>After surgery</li>
                <li>If you have appendicitis</li>
              </ParagraphBox>
              <Slider />
            </div>
          </InnerDiv>
        </Section>
        <Section id="links">
          <InnerDiv>
            <Heading>{footer[0].heading}</Heading>
            <p>{footer[0].subheading}</p>
          </InnerDiv>
          <InnerDiv maxwidth="28%">
            <p className="yellow-background">{footer[1].text1}</p>
            <p className="yellow-background">
              <a target="_blank" href={footer[1].link2}>
                {footer[1].text2}
              </a>
            </p>
            <p className="yellow-background">
              <a target="_blank" href={footer[1].link3}>
                {footer[1].text3}
              </a>
            </p>
          </InnerDiv>
          <InnerDiv maxwidth="50%">
            <ParagraphBox {...footer[2]}>
              <p>{footer[3].message1}</p>
            </ParagraphBox>
            <DoubleImg {...footer[4]} />
            <ParagraphBox {...footer[6]}>
              <p>{footer[3].message2}</p>
            </ParagraphBox>
            <DoubleImg {...footer[5]} />
          </InnerDiv>
          <div className="sectionTwo">
            <InnerDiv maxwidth="50%">
              <p className="link">
                Please feel free to distribute this infographic to your
                networks. Modifications of this work may not represent findings
                from this review. For any questions about modifications of this
                material, please contact{" "}
                <a href="mailto:mdyson@ualberta.ca">mdyson@ualberta.ca.</a>
              </p>
              <p>
                This infographic and the associated review were supported by the
                Emergency Strategic Clinical Network (ESCN) and the Maternal
                Newborn Child & Youth Strategic Clinical Network (MNCY) through
                Alberta Health Services.
              </p>
              <a
                target="_blank"
                href="https://www.albertahealthservices.ca/scns/page9682.aspx"
              >
                <img src={Graphics.png[4]} alt="graphic" />
              </a>
            </InnerDiv>
          </div>
        </Section>
        <section className="footer">
          <InnerDiv maxwidth="68%">
            <p>
              Ahrari, M, Ail, S, Hartling L, Dong K, Drendel AL, Klassen TP,
              Schreiner K, Dyson MP. Nonmedical opioid use following short-term
              therapeutic exposure in children: a systematic review. Pediatrics
              [accepted].
            </p>
          </InnerDiv>
        </section>
      </div>
    </>
  );
};

export default Main;
