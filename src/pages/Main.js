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
import Split from "../components/common/splitSection/Split";

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
  const whenAre = [
    {
      message:
        "Opioids are prescribed when people are in a lot of pain and other painkillers, like acetaminophen (Tylenol®) or ibuprofen (Advil®), aren’t enough.",
    },
  ];
  const managing = [];
  const safe = [
    {
      id: 1,
      image: [Graphics.svg[11]],
      message: "Take your medication exactly as prescribed. ",
    },
    {
      id: 2,
      image: [Graphics.svg[12]],
      message: "Ask your doctor or pharmacist any questions you have!",
    },
    {
      id: 3,
      image: [Graphics.svg[13]],
      message: "Don’t share your medications.",
    },
    {
      id: 4,
      image: [Graphics.svg[14]],
      message:
        "Keep your medication in a safe and secure location or have your parents store it for you. ",
    },
    {
      id: 5,
      image: [Graphics.svg[15]],
      message: "Make sure your pills remain in their original packaging.",
    },
    {
      id: 6,
      image: [Graphics.svg[16]],
      message: "Follow appropriate disposal procedures.",
    },
  ];
  const whatDo = [
    {
      heading: "What do I do with any pills that remain?",
    },
    {
      size: "auto",
      spacing: "0 18%",
      align: "center",
      height: "200px",
      alignI: "center",
    },
    {
      message:
        "You or your parent/guardian can return unused medication to any pharmacy. Just put the pills in an unmarked and closed plastic bag andthey will dispose of it.",
      image: [Graphics.svg[17]],
    },
    {
      message:
        "If you are throwing them out in the trash, you should take your pills out of the packaging and remove any labels with your name on them.",
      image: [Graphics.svg[18]],
    },
    {
      message:
        "Do NOT flush your medications down a toilet or sink – it’s not good for the environment!",
      image: [Graphics.svg[19]],
    },
  ];
  const effects = [
    {
      heading: "Side Effects",
      subheading:
        "If you experience side effects, make sure you or a parent/guardian contact your doctor.",
      warnings:
        "Make sure to immediately seek help from a healthcare professional or call 911 in the rare case that you experience the following symptoms: ",
    },
    {
      size: "auto",
      spacing: "3% 15%",
      align: "center",
      height: "auto",
      alignI: "center",
    },
    [
      {
        id: 1,
        image: [Graphics.svg[22]],
        message: "Allergic reaction (i.e. rashes, swollen tongue or hives) ",
      },
      {
        id: 2,
        image: [Graphics.svg[23]],
        message: "Slower breathing or harder to breathe",
      },
      {
        id: 3,
        image: [Graphics.svg[24]],
        message: "If someone can't wake you up",
      }
    ],
  ];
  const crisis = [
    {
      heading: "Opioid Crisis and Nonmedical Use",
      maxwidth: "60%",
      align: "center",
      justify: "",
      innerjustify: "",
      imgDisplay: "none",
    },
    {
      subheading:
        "Many young people may feel uncomfortable using opioids because of the opioid crisis and the deaths related to illegally produced toxic opioids such as fentanyl.",
      image: [Graphics.svg[29]],
      desc: "Nonmedical opioid use is when people use opioids without a prescription from a doctor.",
    },
  ];
  const misuse = [
    {
      heading: "Misusing Opioids",
      maxwidth: "65%",
      align: "center",
      imgDisplay: "none",
    },
    {
      subheading:
        "We do not know for sure if using prescription opioids for a short amount of time leads to nonmedical use later. And it is not clear what makes some people more likely than others to start using opioids in a harmful way. So, it is important to be careful when taking opioids. If you are worried about you or a loved one make sure to let your doctor know",
      image: [Graphics.svg[30]],
    },
  ];
  const whenTo = [
    {
      heading: "When to Seek Help",
      maxwidth: "60%",
      align: "center",
      imgDisplay: "none",
    },
    {
      subheading:
        "Here are some signs that you should reach out for help about your opioid use:",
      image: [Graphics.svg[31]],
    },
    {
      maxwidth: "90%",
      columns: "1fr 1fr",
      alignI: "flex-start",
      alignT: "left",
      gap: "50px",
      margin: "0",
    },
  ];
  const where = [];
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
        <Section id="whenAre">
          <Heading>When are they used?</Heading>
          <InnerDiv maxwidth="90%">
            <SidebySide
              maxwidth="70%"
              imageOne={Graphics.svg[4]}
              sideTwo={<p>{whenAre[0].message}</p>}
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
        <Section id="managing"></Section>
        <Section id="safe">
          <InnerDiv maxwidth="40%">
            <Heading>Be Safe!</Heading>
            <p>
              When used properly, opioids are a safe way to help manage pain.
              Here are important tips on how to use opioids safely.
            </p>
          </InnerDiv>
          <Split columns="1fr 1fr 1fr" maxwidth="55%" gap="70px">
            {safe.map(({ image, message, id }) => {
              return (
                <ThreeInOne
                  h1Display="none"
                  mainImg={image}
                  key={id}
                  maxwidth="100%"
                >
                  <p>{message}</p>
                </ThreeInOne>
              );
            })}
          </Split>
        </Section>
        <Section id="whatDo">
          <Heading>{whatDo[0].heading}</Heading>
          <InnerDiv maxwidth="60%">
            <Split columns="5fr 2fr" alignI="center">
              <div className="column1">
                <ParagraphBox {...whatDo[1]} background="#455A64">
                  <p className="white">{whatDo[2].message}</p>
                </ParagraphBox>
              </div>
              <div className="column2">
                <img
                  src={whatDo[2].image}
                  alt="graphics"
                  style={{ height: `${whatDo[1].height}` }}
                />
              </div>
            </Split>
            <Split columns="2fr 5fr" alignI="center">
              <div className="column1">
                <img
                  src={whatDo[3].image}
                  alt="graphics"
                  style={{ height: `${whatDo[1].height}` }}
                />
              </div>
              <div className="column2">
                <ParagraphBox {...whatDo[1]} background="#D8EBF4">
                  <p className="primary">{whatDo[3].message}</p>
                </ParagraphBox>
              </div>
            </Split>
            <Split columns="5fr 2fr" alignI="center">
              <div className="column1">
                <ParagraphBox {...whatDo[1]} background="#455A64">
                  <p className="white">{whatDo[4].message}</p>
                </ParagraphBox>
              </div>
              <div className="column2">
                <img
                  src={whatDo[4].image}
                  alt="graphics"
                  style={{ height: `${whatDo[1].height}` }}
                />
              </div>
            </Split>
          </InnerDiv>
        </Section>
        <Section id="effects">
          <InnerDiv maxwidth="30%">
            <Heading>{effects[0].heading}</Heading>
            <p className="white">{effects[0].subheading}</p>
          </InnerDiv>
          <ParagraphBox></ParagraphBox>
          <Split maxwidth="70%" columns="1fr 4fr" alignI="center" gap="20px">
            <div className="column1">
              <img src={Graphics.svg[20]} alt="graphics" />
            </div>
            <div className="column2">
              <ParagraphBox {...effects[1]} background="#263238">
                <p className="white">{effects[0].warnings}</p>
                <Split columns="1fr 1fr 1fr" gap="50px">
                {
                  effects[2].map(({id,image,message})=>{
                  return(
                    <ThreeInOne
                  h1Display="none"
                  mainImg={image}
                  key={id}
                  maxwidth="100%"
                >
                  <p className="white">{message}</p>
                </ThreeInOne>
                )
                })}
                </Split>
              </ParagraphBox>
            </div>
          </Split>
        </Section>
        <Section id="crisis">
          <ThreeInOne {...crisis[0]}>
            <p>{crisis[1].subheading}</p>
            <img src={crisis[1].image} alt="graphic" />
            <p className="primary">{crisis[1].desc}</p>
            <p>
              People start using opioids without a prescription or for a reason
              other than what the doctor intended for a number of reasons, but
              quickly find they need to take more to get the same effect.{" "}
              <span>This can be dangerous</span>
            </p>
          </ThreeInOne>
        </Section>
        <Section id="misuse">
          <ThreeInOne {...misuse[0]}>
            <p>{misuse[1].subheading}</p>
            <InnerDiv maxwidth="80%">
              <img src={misuse[1].image} alt="graphic" />
            </InnerDiv>
          </ThreeInOne>
        </Section>
        <Section id="whenTo">
          <ThreeInOne {...whenTo[0]}>
            <p>{whenTo[1].subheading}</p>
            <img src={whenTo[1].image} alt="graphic" />
            <Split {...whenTo[2]}>
              <div className="column1">
                <ParagraphBox>
                  <li>
                    <span>
                      If you start to take more pills than you were told to or
                      run out early
                    </span>
                  </li>
                  <li>
                    <span>
                      If you take opioids for longer than originally planned
                    </span>
                  </li>
                  <li>
                    <span>If you can’t seem to stop taking them</span>
                  </li>
                </ParagraphBox>
              </div>
              <div className="column2">
                <ParagraphBox>
                  <li>
                    <span>
                      If you start taking them for reasons other than pain; like
                      to help feel happier or to stop anxiety
                    </span>
                  </li>
                  <li>
                    <span>
                      If you start taking other people’s opioid medication
                    </span>
                  </li>
                </ParagraphBox>
              </div>
            </Split>
          </ThreeInOne>
        </Section>
        <Section id="where"></Section>
        <Section id="remember">
          <Heading>Remember</Heading>
          <InnerDiv maxwidth="60%">
            <ParagraphBox align="left" size="80%">
              <li>
                <span>Treating pain is important for your health!</span>
              </li>
              <li>
                <span>
                  Ask your doctor and pharmacist any questions you have.
                </span>
              </li>
              <li>
                <span>
                  Ask your doctor and pharmacist any questions you have.
                </span>
              </li>
              <li>
                <span>
                  <b>
                    Opioids are a strong medicine but can be safe if taken
                    correctly.
                  </b>
                </span>
              </li>
            </ParagraphBox>
            <img src={Graphics.svg[33]} alt="graphic" />
          </InnerDiv>
        </Section>
        <Section id="links">
          <InnerDiv>
            <Heading>{footer[0].heading}</Heading>
            <p>{footer[0].subheading}</p>
          </InnerDiv>
          <InnerDiv maxwidth="28%">
            <p className="color-background">{footer[1].text1}</p>
            <p className="color-background">
              <a target="_blank" href={footer[1].link2}>
                {footer[1].text2}
              </a>
            </p>
            <p className="color-background">
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
        <section id="footer">
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
