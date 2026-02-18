import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  return (
    <section className="about" id="aboutMe">
      <div className="spotlight-container" data-aos="fade-up">
        <span className="spotlight-heading">About Me</span>
      </div>

      <div className="about-text-container" data-aos="fade-up">
        <div>
          <p>
            I’m <strong>Mohamed Zuhair</strong>, an aspiring Machine Learning Engineer 
            focused on building intelligent systems that transform complex data into 
            <strong> scalable, production-ready solutions</strong>. I specialize in 
            designing AI models that bridge the gap between high accuracy and 
            real-world efficiency.
          </p>

          <p>
            My technical foundation is built on <strong>Python, TensorFlow, PyTorch, 
            and Scikit-learn</strong>, which I leverage to develop robust machine 
            learning and deep learning systems. From <strong>CNN-based computer vision 
            architectures</strong> to advanced regression and clustering models, 
            I prioritize model optimization and rigorous performance evaluation 
            using modern data processing tools like <strong>NumPy, Pandas, and Seaborn</strong>.
          </p>

          <p>
            Beyond the models, I am a firm believer in <strong>clean, reproducible AI</strong>. 
            I follow structured development workflows using <strong>Git</strong> and 
            modular design principles to ensure that every solution I build is not 
            just a prototype, but a deployable asset.
          </p>

          <p>
            I thrive at the intersection of <strong>software and hardware</strong>, 
            often exploring how intelligent automation can be physically implemented 
            to solve tangible problems in sustainability and manufacturing.
          </p>
        </div>

        <div data-aos="fade-up">
          <button
            className="resume-btn"
            id="resume-btn"
            onClick={() => window.open("/mohamed-zuhair-resume.pdf", "_blank")}
          >
            <div className="sign">
              <svg viewBox="0 0 640 512">
                <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z" />
              </svg>
            </div>
            <div className="text">Resume</div>
          </button>
        </div>
      </div>
    </section>
  );
};