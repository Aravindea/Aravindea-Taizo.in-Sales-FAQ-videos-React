import { useState, useCallback, useEffect } from "react";
import VideoPlayerPopupSowmiya from "../components/VideoPlayerPopupSowmiya";
import PortalPopup from "../components/PortalPopup";
import styles from "./TaizoinSalesFAQsPageSow.module.css";

const TaizoinSalesFAQsPageSow = () => {
  const [isVideoPlayerPopupSowmiyaOpen, setVideoPlayerPopupSowmiyaOpen] =
    useState(false);

  const onTaizoLogoClick = useCallback(() => {
    window.location.href = "wwwtaizo.in";
  }, []);

  const openVideoPlayerPopupSowmiya = useCallback(() => {
    setVideoPlayerPopupSowmiyaOpen(true);
  }, []);

  const closeVideoPlayerPopupSowmiya = useCallback(() => {
    setVideoPlayerPopupSowmiyaOpen(false);
  }, []);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onScheduleACallFloatingActioClick = useCallback(() => {
    window.open("https://www.taizo.in/book-free-call");
  }, []);

  const onPostAJobFloatingActionButClick = useCallback(() => {
    window.open("https://www.taizo.in/post-a-job");
  }, []);

  const onFooterLogoImageClick = useCallback(() => {
    window.location.href = "www.taizo.in";
  }, []);

  const onEmployerClick = useCallback(() => {
    window.location.href = "https://www.taizo.in/post-a-job";
  }, []);

  const onJobseekerClick = useCallback(() => {
    window.open("https://www.taizo.in/jobseeker");
  }, []);

  const onAboutUsClick = useCallback(() => {
    window.open("https://www.taizo.in/about-us");
  }, []);

  const onPricingClick = useCallback(() => {
    window.open("https://web.taizo.in/console/pricing");
  }, []);

  const onBookAFreeClick = useCallback(() => {
    window.open("https://www.taizo.in/book-free-call");
  }, []);

  const onWhatsAppUsClick = useCallback(() => {
    window.open(
      "https://api.whatsapp.com/send?phone=917806805808&text=Hi%20Taizo%F0%9F%91%8B"
    );
  }, []);

  const onIntroductionClick = useCallback(() => {
    window.open("https://www.taizo.in/introduction");
  }, []);

  const onWereHiringClick = useCallback(() => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSclD1EHRO_wwe8uhMHfgO-eeJXwK3KeQunJ8FaJRf9xcJ9U5w/viewform?pli=1"
    );
  }, []);

  const onWhatsAppIconClick = useCallback(() => {
    window.open(
      "https://api.whatsapp.com/send?phone=917806805808&text=Hi%20Taizo%F0%9F%91%8B"
    );
  }, []);

  const onFacebookIconClick = useCallback(() => {
    window.open("https://www.facebook.com/TaizoIndia");
  }, []);

  const onYouTubeIconClick = useCallback(() => {
    window.open("https://www.youtube.com/channel/UCtXH7feV_GwI-gwTnD6b2Vg");
  }, []);

  const onLinkedInCircledIconClick = useCallback(() => {
    window.open("https://www.linkedin.com/company/taizo-in");
  }, []);

  const onInstagramIconClick = useCallback(() => {
    window.open("https://www.instagram.com/taizojobs/?hl=en");
  }, []);

  const onPrivacyPolicyClick = useCallback(() => {
    window.open("https://www.taizo.in/privacy-policy");
  }, []);

  const onTermsConditionClick = useCallback(() => {
    window.open("https://www.taizo.in/terms-service");
  }, []);

  return (
    <>
      <div className={styles.taizoinSalesFaqsPageSow}>
        <div className={styles.navBar}>
          <div className={styles.navBarLogoDividerLine}>
            <div className={styles.navBarLinks}>
              <img
                className={styles.taizoLogoIcon}
                alt=""
                src="/taizologo.svg"
                onClick={onTaizoLogoClick}
              />
            </div>
            <div className={styles.line} />
          </div>
        </div>
        <div className={styles.mainBody}>
          <div className={styles.mainBodyMachineOperatorsBg}>
            <div className={styles.machineOperatorsBgSowmiyaI}>
              <div className={styles.machineOperatorsBgImg}>
                <div className={styles.hriringMachineOperatorsTitl}>
                  <div className={styles.hiring}>Hiring</div>
                  <b className={styles.machineOperators}>machine operators</b>
                  <div
                    className={styles.madeSimpleOrganized}
                  >{`made simple, organized & Quick.`}</div>
                </div>
              </div>
              <div className={styles.sowmiyaIntroSection}>
                <div className={styles.sowmiyaIntroSection1}>
                  <img
                    className={styles.bgImgGreenCard}
                    alt=""
                    src="/bg-img-green-card@2x.png"
                  />
                  <div className={styles.sowiyaNameCard}>
                    <div className={styles.sowiyaNameCard1} />
                    <div className={styles.sowiyaNameCard2}>
                      <div className={styles.sowiyaNameRole}>
                        <div className={styles.sowmiyaGunasekaran}>
                          Sowmiya Gunasekaran
                        </div>
                        <div className={styles.customerOnboardingSpecialist}>
                          Customer Onboarding Specialist
                        </div>
                      </div>
                      <div className={styles.taizoinIntroductionText}>
                        <div className={styles.taizoin}>Taizo.in</div>
                        <div className={styles.div}>|</div>
                        <div className={styles.introduction}>Introduction</div>
                      </div>
                    </div>
                  </div>
                  <button
                    className={styles.introVideoPlayButton}
                    onClick={openVideoPlayerPopupSowmiya}
                  >
                    <div
                      className={styles.playButton2ndBackground}
                      data-animate-on-scroll
                    />
                    <div
                      className={styles.playButton1stBackground}
                      data-animate-on-scroll
                    />
                    <img
                      className={styles.playButtonImage1}
                      alt=""
                      src="/play-button-image-1@2x.png"
                    />
                  </button>
                </div>
                <img
                  className={styles.sowminyaG1}
                  alt=""
                  src="/sowminya-g-1@2x.png"
                />
              </div>
            </div>
            <img
              className={styles.sowmiyaIntro960LessScreens}
              alt=""
              src="/sowmiya-intro-960-less-screensize-image-n2-1@2x.png"
            />
          </div>
          <div className={styles.bottomRightFloatingButtonP}>
            <div
              className={styles.scheduleACallFloatingActio}
              onClick={onScheduleACallFloatingActioClick}
            >
              <div className={styles.scheduleACallFloatingActioInner}>
                <div className={styles.scheduleACallWrapper}>
                  <div className={styles.scheduleACall}>Schedule a Call</div>
                </div>
              </div>
              <button className={styles.postAJobFloatingButton}>
                <img
                  className={styles.calendar1196SvgrepoCom1Icon}
                  alt=""
                  src="/calendar1196svgrepocom-11.svg"
                />
              </button>
            </div>
            <div
              className={styles.postAJobFloatingActionBut}
              onClick={onPostAJobFloatingActionButClick}
            >
              <div className={styles.postAJobFloatingActionButInner}>
                <div className={styles.postAJobWrapper}>
                  <div className={styles.postAJob}>Post a Job</div>
                </div>
              </div>
              <button className={styles.postAJobFloatingButton1}>
                <img
                  className={styles.calendar1196SvgrepoCom1Icon}
                  alt=""
                  src="/post-a-job-icon1.svg"
                />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.faqsSection}>
          <div className={styles.faqsSection1}>
            <div className={styles.faqsTitle}>
              <div className={styles.leftLine} />
              <b className={styles.faqs}>FAQs</b>
              <div className={styles.leftLine} />
            </div>
            <div className={styles.faqsVideosSection}>
              <div className={styles.faqsVideosSectionInner}>
                <div className={styles.faqVideo1ThumbnailParent}>
                  <button className={styles.faqVideo1Thumbnail}>
                    <div className={styles.video1PlayButton}>
                      <div className={styles.faqVideo1PlayButton} />
                      <img
                        className={styles.playButtonSvgrepoCom1Icon}
                        alt=""
                        src="/playbuttonsvgrepocom-11.svg"
                      />
                    </div>
                  </button>
                  <div className={styles.faqVideo1TitleText}>
                    <div className={styles.div1}>1.</div>
                    <div className={styles.whatDifferentiatesTaizoin}>
                      What differentiates Taizo.in from other hiring platforms?
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.faqsVideosSectionChild}>
                <div className={styles.faqVideo2ThumbnailParent}>
                  <button className={styles.faqVideo2Thumbnail}>
                    <img
                      className={styles.video1PlayButton}
                      alt=""
                      src="/faq-video-2-play-button1.svg"
                    />
                  </button>
                  <div className={styles.faqVideo1TitleText}>
                    <div className={styles.div2}>2.</div>
                    <div className={styles.whyDoWe}>
                      Why do we charge for the hiring requirements of your
                      company?
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.faqsVideosSectionChild}>
                <div className={styles.faqVideo2ThumbnailParent}>
                  <button className={styles.faqVideo3Thumbnail}>
                    <img
                      className={styles.video1PlayButton}
                      alt=""
                      src="/faq-video-3-play-button1.svg"
                    />
                  </button>
                  <div className={styles.faqVideo1TitleText}>
                    <div className={styles.div2}>3.</div>
                    <div className={styles.whyDoWe}>
                      How to register your company on the Taizo.in hiring
                      platform?
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.faqsVideosSectionChild}>
                <div className={styles.faqVideo2ThumbnailParent}>
                  <button className={styles.faqVideo4Thumbnail}>
                    <img
                      className={styles.video1PlayButton}
                      alt=""
                      src="/faq-video-4-play-button1.svg"
                    />
                  </button>
                  <div className={styles.faqVideo1TitleText}>
                    <div className={styles.div2}>4.</div>
                    <div className={styles.whyDoWe}>
                      How to post a job on Taizo.in's hiring platform?
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerT}>
          <div className={styles.footerContainer1}>
            <div className={styles.footerContent}>
              <div className={styles.footerLogoText}>
                <img
                  className={styles.footerLogoIcon}
                  alt="taizo-logo-white"
                  src="/footer-logo.svg"
                  onClick={onFooterLogoImageClick}
                />
                <div className={styles.taizoEnablesManufacturing}>
                  Taizo enables manufacturing small-businesses and enterprises
                  to connect with the right employees.
                </div>
              </div>
              <div className={styles.footerQuickLinks}>
                <div className={styles.links}>
                  <div className={styles.carreers}>Links</div>
                  <div className={styles.linksText}>
                    <a className={styles.employer} onClick={onEmployerClick}>
                      Employer
                    </a>
                    <a className={styles.jobseeker} onClick={onJobseekerClick}>
                      Jobseeker
                    </a>
                    <a className={styles.jobseeker} onClick={onAboutUsClick}>
                      About Us
                    </a>
                    <a className={styles.employer} onClick={onPricingClick}>
                      Pricing
                    </a>
                  </div>
                </div>
                <div className={styles.moreCareers}>
                  <div className={styles.more}>
                    <div className={styles.carreers}>More</div>
                    <div className={styles.linksText}>
                      <a className={styles.employer} onClick={onBookAFreeClick}>
                        Book a free call
                      </a>
                      <a
                        className={styles.employer}
                        onClick={onWhatsAppUsClick}
                      >
                        WhatsApp Us
                      </a>
                      <a
                        className={styles.employer}
                        onClick={onIntroductionClick}
                      >
                        Introduction
                      </a>
                    </div>
                  </div>
                  <div className={styles.more}>
                    <div className={styles.carreers}>Carreers</div>
                    <a
                      className={styles.wereHiring}
                      onClick={onWereHiringClick}
                    >
                      We’re hiring
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.socialLink}>
                <div className={styles.socialIcons}>
                  <img
                    className={styles.whatsappIcon}
                    alt=""
                    src="/whatsapp.svg"
                    onClick={onWhatsAppIconClick}
                  />
                  <img
                    className={styles.facebookIcon}
                    alt="facebook-icon"
                    src="/entyposocialfacebookwithcircle.svg"
                    onClick={onFacebookIconClick}
                  />
                  <img
                    className={styles.youtubeIcon}
                    alt="youTube-icon"
                    src="/youtube.svg"
                    onClick={onYouTubeIconClick}
                  />
                  <img
                    className={styles.facebookIcon}
                    alt="linkedin-icon"
                    src="/linkedin-circled.svg"
                    onClick={onLinkedInCircledIconClick}
                  />
                  <img
                    className={styles.facebookIcon}
                    alt="instagram-icon"
                    src="/entyposocialinstagramwithcircle.svg"
                    onClick={onInstagramIconClick}
                  />
                </div>
                <div className={styles.support}>
                  <div className={styles.weWouldLove}>
                    We would love to hear from you
                  </div>
                  <div className={styles.supportDetails}>
                    <a className={styles.infotaizoin}>info@taizo.in</a>
                    <div className={styles.div5}>044 4813 5483</div>
                    <a
                      className={styles.a}
                      href="mailto:info@taizo.in"
                      target="_blank"
                    >
                      -
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.greenDivLine} />
            <div className={styles.cotainer2}>
              <div className={styles.copyrightTaizo}>
                Copyright © Taizo Technologies Private Limited
              </div>
              <div className={styles.privacyTerms}>
                <button
                  className={styles.privacyPolicy}
                  onClick={onPrivacyPolicyClick}
                >
                  Privacy Policy
                </button>
                <div className={styles.div6}>/</div>
                <button
                  className={styles.termsCondition}
                  onClick={onTermsConditionClick}
                >{`Terms & Condition`}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isVideoPlayerPopupSowmiyaOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.7)"
          placement="Centered"
          onOutsideClick={closeVideoPlayerPopupSowmiya}
        >
          <VideoPlayerPopupSowmiya onClose={closeVideoPlayerPopupSowmiya} />
        </PortalPopup>
      )}
    </>
  );
};

export default TaizoinSalesFAQsPageSow;
