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
  const welcome = {
    heading: "Opioids don’t have to be scary!",
    mainImg: [Graphics.svg[0]],
    message:
      "There may be a time when your healthcare provider prescribes you opioids. Opioids are sometimes needed for children and youth. Know the information, so you can be informed when talking to your healthcare provider about opioids.",
    bubble:
      "Be sure to tell your healthcare provider about any previous history of opioid use and if you are currently using any substances or medicines that are not prescribed to you. This will help your healthcare provider provide the best and safest care for you.",
  };

  const what = {
    heading: "What Are Opioids?",
    mainImg: [Graphics.svg[1]],
    message:
      "Opioids are a type of medication used to help reduce pain. Opioids can be prescribed for children, youth, and adults.",
  };

  const how = {
    heading: "How do they work?",
    mainImg1: [Graphics.svg[2]],
    message:
      "Opioids are strong pain relief medications. They work by attaching to receptors in your brain that reduce your feelings of pain and make you feel better.",
    mainImg2: [Graphics.svg[3]],
  };

  const whenAre = {
    message:
      "Opioids are prescribed when people are in a lot of pain and other painkillers, like acetaminophen (Tylenol®) or ibuprofen (Advil®), aren’t enough.",
  };
  const managing = {
    heading: "Managing Pain is Important!",
    message1:
      "If pain is not treated, it can harm your physical and mental health. Pain can make you feel afraid and anxious. Reducing pain helps improve your overall quality of life. ",
    message2:
      "When using prescribed opioids, you have to be careful, like you should with any medicine. Remember, sometimes opioids are the best way to manage your pain.",
    message3:
      "There may be other options, along with opioids, to help with your pain. The options available to you depend on your situation. You and your parent/guardian can talk with your doctor to know more about your options.",
  };

  const safe = [
    {
      id: 1,
      altclass: "one",
      image: [Graphics.svg[11]],
      message: "Take your medication exactly as prescribed. ",
    },
    {
      id: 2,
      altclass: "two",
      image: [Graphics.svg[12]],
      message: "Ask your doctor or pharmacist any questions you have.",
    },
    {
      id: 3,
      altclass: "three",
      image: [Graphics.svg[13]],
      message: "Don’t share your medications.",
    },
    {
      id: 4,
      altclass: "four",
      image: [Graphics.svg[14]],
      message:
        "Keep your medication in a safe and secure location or have your parents store it for you. ",
    },
    {
      id: 5,
      altclass: "five",
      image: [Graphics.svg[15]],
      message: "Make sure your pills remain in their original packaging.",
    },
    {
      id: 6,
      altclass: "six",
      image: [Graphics.svg[16]],
      message: "Follow appropriate disposal procedures.",
    },
  ];

  const whatDo = [
    {
      heading: "What do I do with any pills that remain?",
    },
    {
      message:
        "You or your parent/guardian can return unused medication to any pharmacy. Just put the pills in an unmarked and closed plastic bag and they will dispose of it.",
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
      },
    ],
  ];

  const crisis = {
    heading: "Opioid Crisis and Nonmedical Use",
    subheading:
      "Many young people may feel uncomfortable using opioids because of the opioid crisis and the deaths related to illegally produced toxic opioids such as fentanyl.",
    image: [Graphics.svg[29]],
    desc: "Nonmedical opioid use is when people use opioids without a prescription from a doctor.",
  };

  const misuse = {
    heading: "Misusing Opioids",
    subheading:
      "We do not know for sure if using prescription opioids for a short amount of time leads to nonmedical use later. And it is not clear what makes some people more likely than others to start using opioids in a harmful way. So, it is important to be careful when taking opioids. If you are worried about you or a loved one make sure to let your doctor know.",
    image: [Graphics.svg[30]],
  };

  const whenTo = {
    heading: "When to Seek Help",
    subheading:
      "Here are some signs that you should reach out for help about your opioid use:",
    image: [Graphics.svg[31]],
  };

  const where = {
    heading: "Where to Seek Help",
    subheading:
      "If you are experiencing signs of nonmedical opioid use, make sure to reach out and ask for help. ",
    heading2: "For a list of other resources click the following:",
  };

  const footer = [
    {
      heading: "Useful Links",
      subheading: "Find out more about opioids from these helpful resources:",
    },
    {
      text1: "ARCHE Systematic Review",
      link1: "https://doi.org/10.1542/peds.2021-051927",
      link2:
        "https://trekk.ca/resources?utf8=%E2%9C%93&tag_id=D010147&external_resource_type=Quick_glance",
      text2: "TREKK Bottom Line Recommendations",
      link3: "https://www.canada.ca/en/health-canada/services/opioids.html",
      text3: "Health Canada",
      link4:
        "https://www.canada.ca/en/health-canada/services/safe-disposal-prescription-drugs.html",
      text4: "Safe Disposal Information",
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
  ];

  const slide1 = [
    {
      img: `${Graphics.svg[5]}`,
      text: "After surgery",
    },
    {
      img: `${Graphics.svg[6]}`,
      text: "Severe fracture",
    },
    {
      img: `${Graphics.svg[7]}`,
      text: "With appendicitis",
    },
  ];

  const slide2 = [
    {
      img: `${Graphics.svg[21]}`,
      text: "Dizziness",
    },
    {
      img: `${Graphics.svg[22]}`,
      text: "Constipation",
    },
    {
      img: `${Graphics.svg[23]}`,
      text: "Nausea or vomiting",
    },
    {
      img: `${Graphics.svg[24]}`,
      text: "Drowsiness",
    },
  ];

  const slide3 = [
    {
      img: `${Graphics.svg[32]}`,
      text: "You can talk to a parent/guardian or another adult",
    },
    {
      img: `${Graphics.svg[36]}`,
      text: "You can call Kids Help Phone (1-800-668-6868), which provides free counselling 24 hours a day",
    },
    {
      img: `${Graphics.svg[35]}`,
      text: "You can talk to your doctor ",
    },
  ];

  return (
    <div className="body">
      <Nav />
      <div className="bodyArea">
        <Section id="welcome">
          <ThreeInOne
            altclass="welcome_3in1"
            heading={welcome.heading}
            mainImg={welcome.mainImg}
          >
            <ParagraphBox altclass="welcome_msg1">
              <p>{welcome.message}</p>
            </ParagraphBox>
            <ParagraphBox altclass="welcome_msg2">
              <p>{welcome.bubble}</p>
            </ParagraphBox>
          </ThreeInOne>
        </Section>

        <Section id="what">
          <ThreeInOne
            altclass="what_3in1"
            heading={what.heading}
            mainImg={what.mainImg}
          >
            <ParagraphBox altclass="what_msg">
              <p>{what.message}</p>
            </ParagraphBox>
          </ThreeInOne>
        </Section>

        <Section id="how">
          <ThreeInOne
            heading={how.heading}
            mainImg={how.mainImg1}
            altclass="section1"
          >
            <ParagraphBox altclass="para_transparent">
              <p>{how.message}</p>
            </ParagraphBox>
          </ThreeInOne>
          <ThreeInOne mainImg={how.mainImg2} altclass="section2">
            <ParagraphBox altclass="para_color">
              <p className="primary">
                Some common opioids you may have heard of include:
              </p>
              <div className="list">
                <li>Morphine</li>
                <li>Codeine (like Tylenol #3®)</li>
                <li>Oxycodone (like Percocet®)</li>
              </div>
            </ParagraphBox>
          </ThreeInOne>
        </Section>

        <Section id="whenAre">
          <Heading>When are they used?</Heading>
          <InnerDiv altclass="whenAre_inner">
            <SidebySide
              altclass="first"
              imageOne={Graphics.svg[4]}
              sideTwo={<p>{whenAre.message}</p>}
            />
            <div className="layer2__">
              <ParagraphBox>
                <p>
                  Opioids are most often used for a short time when a person has
                  intense pain. Examples of when opioids are used for young
                  people include:
                </p>
                <div className="list">
                  <li>If you break a large bone (fractures)</li>
                  <li>After surgery</li>
                  <li>If you have appendicitis</li>
                </div>
              </ParagraphBox>
              <Slider slide={slide1} />
            </div>
          </InnerDiv>
        </Section>

        <Section id="managing">
          <Heading>{managing.heading}</Heading>
          <InnerDiv>
            <div className="holder">
              <ParagraphBox altclass="para_one">
                <p>{managing.message1}</p>
              </ParagraphBox>
              <div className="image para_image1">
                <img src={Graphics.svg[8]} alt="graphics" />
              </div>
            </div>
            <div className="holder">
              <ParagraphBox altclass="para_two">
                <p>{managing.message2}</p>
              </ParagraphBox>
              <div className="image para_image2">
                <img src={Graphics.svg[9]} alt="graphics" />
              </div>
            </div>
            <div className="holder">
              <ParagraphBox altclass="para_three">
                <p>{managing.message3}</p>
              </ParagraphBox>
              <div className="image para_image3">
                <img src={Graphics.svg[10]} alt="graphics" />
              </div>
            </div>
          </InnerDiv>
        </Section>

        <Section id="safe">
          <InnerDiv altclass="safe_innerdiv">
            <Heading>Be Safe!</Heading>
            <p>
              When used properly, opioids are a safe way to help manage pain.
              Here are important tips on how to use opioids safely.
            </p>
          </InnerDiv>
          <Split altclass="safe_split">
            {safe.map(({ image, message, altclass, id }) => {
              return (
                <ThreeInOne mainImg={image} key={id} altclass={altclass}>
                  <p>{message}</p>
                </ThreeInOne>
              );
            })}
          </Split>
        </Section>

        <Section id="whatDo">
          <Heading>{whatDo[0].heading}</Heading>
          <InnerDiv altclass="disposal_main">
            <Split altclass="type1">
              <div className="column1 text">
                <ParagraphBox altclass="sec1">
                  <p className="white">{whatDo[1].message}</p>
                </ParagraphBox>
              </div>
              <div className="column2 image images">
                <img src={whatDo[1].image} alt="graphics" />
              </div>
            </Split>
            <Split altclass="type2">
              <div className="column1 images">
                <img src={whatDo[2].image} alt="graphics" />
              </div>
              <div className="column2">
                <ParagraphBox altclass="sec2">
                  <p className="primary">{whatDo[2].message}</p>
                </ParagraphBox>
              </div>
            </Split>
            <Split altclass="type2">
              <div className="column1 images">
                <img src={whatDo[3].image} alt="graphics" />
              </div>
              <div className="column2">
                <ParagraphBox altclass="sec3">
                  <p className="white">{whatDo[3].message}</p>
                </ParagraphBox>
              </div>
            </Split>
          </InnerDiv>
        </Section>

        <Section id="effects">
          <InnerDiv altclass="effects_inner">
            <Heading>{effects[0].heading}</Heading>
            <p className="white">{effects[0].subheading}</p>
          </InnerDiv>
          <ParagraphBox altclass="slider-box">
            <p>Common side effects include:</p>
            <Slider slide={slide2} speclass="effectslider" />
          </ParagraphBox>
          <Split altclass="effect-split">
            <div className="column1">
              <img src={Graphics.svg[20]} alt="graphics" />
            </div>
            <div className="column2">
              <ParagraphBox altclass="box">
                <p className="white">{effects[0].warnings}</p>
                <Split altclass="cards">
                  {effects[1].map(({ id, image, message }) => {
                    return (
                      <ThreeInOne mainImg={image} key={id}>
                        <p className="white">{message}</p>
                      </ThreeInOne>
                    );
                  })}
                </Split>
              </ParagraphBox>
            </div>
          </Split>
        </Section>

        <Section id="crisis">
          <ThreeInOne heading={crisis.heading} altclass="crisis_">
            <p>{crisis.subheading}</p>
            <img src={crisis.image} alt="graphic" />
            <p className="primary">{crisis.desc}</p>
            <p>
              People start using opioids without a prescription or for a reason
              other than what the doctor intended for a number of reasons, but
              quickly find they need to take more to get the same effect.{" "}
              <span>This can be dangerous.</span>
            </p>
          </ThreeInOne>
        </Section>

        <Section id="misuse">
          <ThreeInOne heading={misuse.heading} altclass="misuse_">
            <p>{misuse.subheading}</p>
            <InnerDiv altclass="misuse_inner">
              <img src={misuse.image} alt="graphic" />
            </InnerDiv>
          </ThreeInOne>
        </Section>

        <Section id="whenTo">
          <ThreeInOne heading={whenTo.heading} altclass="whenTo_">
            <p>{whenTo.subheading}</p>
            <img src={whenTo.image} alt="graphic" />
            <Split altclass="whenTo_split">
              <ParagraphBox altclass="column1">
                <li>
                  <span>
                    If you start to take more pills than you were told to or run
                    out early
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
              <ParagraphBox altclass="column2">
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
            </Split>
          </ThreeInOne>
        </Section>

        <Section id="where">
          <InnerDiv altclass="where_">
            <Heading>{where.heading}</Heading>
            <p>{where.subheading}</p>
            <ParagraphBox>
              <Slider slide={slide3} speclass="whereslider" />
            </ParagraphBox>
          </InnerDiv>
          <Split>
            <div className="column1">
              <Heading>{where.heading2}</Heading>
              <h2>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.canada.ca/en/health-canada/services/substance-use/get-help/get-help-problematic-substance-use.html"
                >
                  Health Canada
                </a>
              </h2>
              <h2>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.albertahealthservices.ca/info/Page16025.aspx"
                >
                  AHS
                </a>
              </h2>
            </div>
            <div className="column2">
              <img src={Graphics.svg[34]} alt="graphic" />
            </div>
          </Split>
        </Section>

        <Section id="remember">
          <InnerDiv>
            <Heading>Remember</Heading>
            <ParagraphBox>
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
                  Make sure to follow the instructions given by your doctor.
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
          <InnerDiv altclass="heading">
            <Heading>{footer[0].heading}</Heading>
            <p>{footer[0].subheading}</p>
          </InnerDiv>
          <InnerDiv altclass="color">
            <p className="color-background">
              <a target="_blank" rel="noreferrer" href={footer[1].link1}>
                {footer[1].text1}
              </a>
            </p>
            <p className="color-background">
              <a target="_blank" rel="noreferrer" href={footer[1].link2}>
                {footer[1].text2}
              </a>
            </p>
            <p className="color-background">
              <a target="_blank" rel="noreferrer" href={footer[1].link3}>
                {footer[1].text3}
              </a>
            </p>
            <p className="color-background">
              <a target="_blank" rel="noreferrer" href={footer[1].link4}>
                {footer[1].text4}
              </a>
            </p>
          </InnerDiv>
          <InnerDiv altclass="inner-box">
            <ParagraphBox {...footer[2]}>
              <p>{footer[3].message1}</p>
            </ParagraphBox>
            <DoubleImg {...footer[4]} />
            <ParagraphBox altclass="box2" {...footer[6]}>
              <p>{footer[3].message2}</p>
            </ParagraphBox>
            <DoubleImg {...footer[5]} />
          </InnerDiv>
          <div className="sectionTwo">
            <InnerDiv>
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
                rel="noreferrer"
                href="https://www.albertahealthservices.ca/scns/page9682.aspx"
              >
                <img src={Graphics.png[4]} alt="graphic" />
              </a>
            </InnerDiv>
          </div>
        </Section>

        <section className="footer">
          <InnerDiv altclass="copyright">
            <p>
              Ahrari M, Ali S, Hartling L, Dong K, Drendel AL, Klassen TP,
              Schreiner K, Dyson MP. Nonmedical opioid use following short-term
              therapeutic exposure in children: a systematic review. Pediatrics
              2021; e2021051927.{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://doi.org/10.1542/peds.2021-051927"
              >
                https://doi.org/10.1542/peds.2021-051927
              </a>
            </p>
          </InnerDiv>
        </section>
      </div>
    </div>
  );
};

export default Main;
