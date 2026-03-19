import { useState } from 'react';
import './About.css';

const About = () => {
  const [isArabic, setIsArabic] = useState(false);

  const toggleLanguage = () => {
    setIsArabic((prev) => !prev);
  };

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-header">
          <div>
            <span className="section-label">Who I Am</span>
            <h2 className="section-title">
              About <span className="accent">me</span>
            </h2>
          </div>
          <button
            className="lang-toggle"
            onClick={toggleLanguage}
            aria-label="Toggle language between English and Arabic"
            title={isArabic ? 'Switch to English' : 'التبديل إلى العربية'}
          >
            <i className="fa-solid fa-globe"></i>
            <span className="lang-label">{isArabic ? 'EN' : 'AR'}</span>
          </button>
        </div>

        <div className="about-body">
          <div className="about-text-container">
            <div className={`about-text ${isArabic ? 'slide-out' : 'slide-in'}`} key="en">
              {!isArabic && (
                <p>
                  I am a Computer Engineer and Front-End Developer who combines the precision of engineering logic with the creativity of digital design. Specializing in building seamless and attractive user interfaces using React and JavaScript, I possess a high proficiency in converting complex designs into clean, scalable code. Thanks to my background in electronics engineering and back-end development, I don't just build interfaces; I design integrated digital solutions that connect the power of the web with smart control systems, striving to deliver innovative user experiences that push the boundaries of technology.
                </p>
              )}
            </div>
            <div
              className={`about-text ${isArabic ? 'slide-in' : 'slide-out'}`}
              dir="rtl"
              key="ar"
            >
              {isArabic && (
                <p>
                  انا مهندس حاسوب ومطور واجهات أمامية front-end يجمع بين دقة المنطق الهندسي وإبداع التصميم الرقمي، متخصص في بناء واجهات مستخدم سلسة وجذابة باستخدام React و JavaScript مع مهارة عالية في تحويل التصاميم المعقدة إلى أكواد نظيفة وقابلة للتطوير بفضل خلفياتي في هندسة الإلكترونيات والـ back-end لا أكتفي ببناء الواجهات بل أصمم حلولًا رقمية متكاملة تربط بين قوة الويب وأنظمة التحكم الذكية، سعيًا لتقديم تجارب مستخدم مبتكرة تدفع حدود التكنولوجيا للأمام.
                </p>
              )}
            </div>
          </div>

          <div className="about-illustration">
            <div className="illustration-box">
              <i className="fa-solid fa-laptop-code"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
