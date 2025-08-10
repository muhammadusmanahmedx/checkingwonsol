import React from 'react';
import Link from 'next/link';
import styles from './CompanyIntro.module.css';

interface StatItemProps {
  number: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ number, label }) => (
  <div className={styles.statItem}>
    <span className={styles.statNumber}>{number}</span>
    <span className={styles.statLabel}>{label}</span>
  </div>
);

const CompanyIntro: React.FC = () => {
  return (
    <section className={styles.introSection}>
      <h1 className={styles.companyLogo}>Won Solutions</h1>
      <p className={styles.tagline}>Transforming Ideas into Digital Reality</p>
      
      <div className={styles.description}>
        At <span className={styles.highlight}>Won Solutions</span>, we believe every challenge is an opportunity waiting to be <span className={styles.highlight}>won</span>. As a forward-thinking technology company, we specialize in delivering innovative digital solutions that empower businesses to thrive in today&apos;s competitive landscape. From cutting-edge software development to strategic digital transformation, we partner with our clients to turn their vision into measurable success.
      </div>
      
      <div className={styles.description}>
        Our team of passionate experts combines technical excellence with creative problem-solving to deliver solutions that don&apos;t just meet expectations—they exceed them. When you choose Won Solutions, you&apos;re not just getting a service provider; you&apos;re gaining a strategic partner committed to your success.
      </div>

      <div className={styles.stats}>
        <StatItem number="100+" label="Projects Completed" />
        <StatItem number="50+" label="Happy Clients" />
        <StatItem number="24/7" label="Support" />
      </div>

      <Link href="/contact" className={styles.ctaButton}>
        Start Your Journey
      </Link>
    </section>
  );
};

export default CompanyIntro;

/* 
Create this CSS module file: CompanyIntro.module.css
*/

/*
.introSection {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 60px 50px;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.introSection::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(102, 126, 234, 0.1), transparent);
  transform: rotate(45deg);
  animation: shimmer 3s ease-in-out infinite;
}

@keyframes shimmer {
  0%, 100% { transform: translateX(-100%) rotate(45deg); }
  50% { transform: translateX(100%) rotate(45deg); }
}

.companyLogo {
  font-size: 2.8rem;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 20px;
  position: relative;
  z-index: 2;
}

.tagline {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 30px;
  font-weight: 300;
  position: relative;
  z-index: 2;
}

.description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 30px;
  position: relative;
  z-index: 2;
}

.highlight {
  color: #667eea;
  font-weight: 600;
}

.stats {
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
  position: relative;
  z-index: 2;
}

.statItem {
  text-align: center;
}

.statNumber {
  font-size: 2rem;
  font-weight: 700;
  color: #667eea;
  display: block;
}

.statLabel {
  font-size: 0.9rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.ctaButton {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 15px 35px;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 30px;
  position: relative;
  z-index: 2;
  text-decoration: none;
  display: inline-block;
}

.ctaButton:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
}

@media (max-width: 768px) {
  .introSection {
    padding: 40px 30px;
    margin: 20px;
  }
  
  .companyLogo {
    font-size: 2.2rem;
  }
  
  .stats {
    flex-direction: column;
    gap: 20px;
  }
}
*/