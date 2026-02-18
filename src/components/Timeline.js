import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import icBriefcase from "../assets/img/ic-briefcase.svg";
import icCourse from "../assets/img/ic-course.svg";
import icCollege from "../assets/img/ic-college.svg";

export const Timeline = () => {
  useEffect(() => {
    AOS.init({ duration: 300 });
  }, []);

  const timelineData = [
    {
      date: "2024 - Present",
      title: "B.E Computer Science (AIML Specialization)",
      company: "Chennai Institute of Technology, Chennai",
      descriptions: [
        "• Currently pursuing specialization in Artificial Intelligence and Machine Learning.",
        "• Developed strong foundations in data structures, algorithms, and probability.",
        "• Participated in ML hackathons and campus research projects involving neural networks and data analytics.",
        "• Contributed to academic projects integrating IoT and ML for smart applications.",
        "• Building portfolio projects to explore applied ML across domains like sustainability and automation.",
      ],
      icon: icCollege,
      tech: [
        "Machine Learning",
        "Data Science",
        "Python",
        "Deep Learning",
        "Statistics",
      ],
    },
    {
      date: "June 2025 – July 2025",
      title: "Applied Machine Learning & Data Science",
      company: "Intensive Project-Based Training",
      descriptions: [
        "• Designed and implemented supervised (Linear/Logistic Regression, Decision Trees) and unsupervised (K-Means, Hierarchical Clustering) machine learning models on real-world datasets.",
        "• Built end-to-end data pipelines including data cleaning, exploratory data analysis (EDA), feature engineering, and model evaluation using cross-validation techniques.",
        "• Developed small-scale CNN-based computer vision models for image classification tasks using TensorFlow, achieving optimized validation performance.",
        "• Performed hyperparameter tuning and model performance comparison using accuracy, precision, recall, and F1-score metrics.",
        "• Structured modular ML workflows and maintained version-controlled repositories using Git and GitHub.",
      ],
      icon: icCourse,
      tech: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "TensorFlow",
        "Matplotlib",
        "Seaborn",
        "Git",
        "GitHub",
      ],
    },
    {
      date: "Apr 2024 - Present",
      title: "Machine Learning Engineer (Research & Development)",
      company: "Centre for Additive Manufacturing, CIT Chennai",
      descriptions: [
        "• Working on AI-driven optimization and predictive analytics for Additive Manufacturing processes.",
        "• Developed machine learning models to detect defects and improve print quality using Python and Scikit-learn.",
        "• Implemented CNN-based image classification to analyze layer consistency in 3D printed parts.",
        "• Designed experiments integrating ML with sensor data to predict material properties.",
        "• Collaborating with a multidisciplinary team to deploy ML insights into real-world manufacturing workflows.",
      ],
      icon: icBriefcase,
      tech: [
        "Python",
        "TensorFlow",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "CNN",
        "IoT Data",
      ],
    },
  ];

  return (
    <section className="timeline-section" id="timeline">
      <div className="spotlight-container" data-aos="fade-up">
        <span className="spotlight-heading">Timeline</span>
      </div>

      <div className="timeline">
        {timelineData.map((item, index) => (
          <div key={index} className="timeline-item" data-aos="fade-up">
            <div className="timeline-card">
              <div className="timeline-icon">
                <img src={item.icon} alt="icon" />
              </div>

              <h3 className="timeline-title">{item.title}</h3>

              <div className="timeline-header">
                <h4 className="timeline-subtitle">{item.company}</h4>
                <h4 className="timeline-date">{item.date}</h4>
              </div>

              <div className="timeline-divider"></div>

              {item.descriptions.map((desc, i) => (
                <p key={i} className="timeline-description">
                  {desc}
                </p>
              ))}

              {item.tech && (
                <div className="tech-tags">
                  {item.tech.map((tag, i) => (
                    <span key={i} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};