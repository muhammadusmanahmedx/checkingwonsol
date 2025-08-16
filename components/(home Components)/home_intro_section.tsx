<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Won Solutions</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .intro-section {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 60px 50px;
            max-width: 800px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .intro-section::before {
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

        .company-logo {
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

        .stat-item {
            text-align: center;
        }

        .stat-number {
            font-size: 2rem;
            font-weight: 700;
            color: #667eea;
            display: block;
        }

        .stat-label {
            font-size: 0.9rem;
            color: #666;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .cta-button {
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

        .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
        }

        @media (max-width: 768px) {
            .intro-section {
                padding: 40px 30px;
                margin: 20px;
            }
            
            .company-logo {
                font-size: 2.2rem;
            }
            
            .stats {
                flex-direction: column;
                gap: 20px;
            }
        }
    </style>
</head>
<body>
    <section class="intro-section">
        <h1 class="company-logo">Won Solutions</h1>
        <p class="tagline">Transforming Ideas into Digital Reality</p>
        
        <div class="description">
            At <span class="highlight">Won Solutions</span>, we believe every challenge is an opportunity waiting to be <span class="highlight">won</span>. As a forward-thinking technology company, we specialize in delivering innovative digital solutions that empower businesses to thrive in today's competitive landscape. From cutting-edge software development to strategic digital transformation, we partner with our clients to turn their vision into measurable success.
        </div>
        
        <div class="description">
            Our team of passionate experts combines technical excellence with creative problem-solving to deliver solutions that don't just meet expectations—they exceed them. When you choose Won Solutions, you're not just getting a service provider; you're gaining a strategic partner committed to your success.
        </div>

        <div class="stats">
            <div class="stat-item">
                <span class="stat-number">100+</span>
                <span class="stat-label">Projects Completed</span>
            </div>
            <div class="stat-item">
                <span class="stat-number">50+</span>
                <span class="stat-label">Happy Clients</span>
            </div>
            <div class="stat-item">
                <span class="stat-number">24/7</span>
                <span class="stat-label">Support</span>
            </div>
        </div>

        <a href="#contact" class="cta-button">Start Your Journey</a>
    </section>
</body>
</html>