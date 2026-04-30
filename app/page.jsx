import Image from "next/image";

const navItems = ["Home", "About", "Services", "Projects", "Reviews", "Blog", "Contact"];

const stackItems = [
  ["Revenue-First Mapping", "purple-ribbon"],
  ["Surgical Market Entry", "coral-ribbon"],
  ["Radical Transparency", "purple-ribbon"],
  ["Competitive Counter-Intelligence", "coral-ribbon"],
  ["High-Velocity Execution", "purple-ribbon"]
];

const solutionCards = [
  {
    title: "Data-Driven ROI",
    text: "We swap “gut feelings” for hard analytics. Every move we make is engineered to move the needle on your bottom line, not just your traffic.",
    className: "bubble bubble-coral bubble-top-left"
  },
  {
    title: "Precision Engineering",
    text: "We don’t just “fix” websites, we build digital powerhouses. From technical SEO to high-conversion UX, we ensure your brand is structurally superior.",
    className: "bubble bubble-purple bubble-top-right"
  },
  {
    title: "First-Move Advantage",
    text: "The US market moves fast, we move faster. We deploy next-gen strategies and proprietary tactics that your competitors haven’t even heard of yet.",
    className: "bubble bubble-purple bubble-bottom-left"
  },
  {
    title: "Zero-Fluff Transparency",
    text: "Forget vanity metrics. We provide clear, direct reporting that focuses on the only numbers that actually pay the bills, leads and sales.",
    className: "bubble bubble-coral bubble-bottom-right"
  }
];

const serviceCards = [
  [
    "Search Engine Optimization",
    "We don’t just “rank” websites, we occupy the digital high ground. Our team hunts down the exact competitors keywords in the USA and dominates them."
  ],
  [
    "Pay-Per-Click Advertising",
    "Why wait for algorithms when you can jump the line? We build surgical PPC campaigns that turn search intent into measurable ROI."
  ],
  [
    "Website Design & Development",
    "A pretty site is useless if it does not sell. We build high-performance digital storefronts that load fast and convert like crazy."
  ],
  [
    "Social Media Marketing",
    "Stop shouting into the void. We create thumb-stopping content that turns casual scrollers into scheduled conversions."
  ]
];

const wins = [
  ["Preferred Auto Glass", "Mobile-First Experience"],
  ["Models Tile Studio", "★★★★★", "Smart, sharp, and ahead of the game."],
  ["Four Star Cars", "2X", "More efficient user inquiry flow.", true],
  ["Open Sky Window", "★★★★★", "High-level work, start to finish."],
  ["J. Hempel Services", "Improved User Flow"],
  ["My RV Services LLC", "Cut Bounce Rate In Half"],
  ["Elite Tree Services", "★★★★★", "Top-tier execution."],
  ["All Auto Glass", "50%", "Higher conversion rate.", true],
  ["Rudy Properties", "★★★★★", "These guys are legit."],
  ["Bigs 24 Hour Towing", "Optimized For Speed"]
];

const stats = [
  ["85%", "Websites That Simplify Decisions That Accelerate."],
  ["4X", "Faster Lead Flow. Smooth User Journeys."],
  ["90%", "Higher-Quality Leads. Smarter Targeting."],
  ["100+", "Brands Elevated Through Performance Marketing."]
];

const faqs = [
  [
    "Why Is Social Media Marketing Important For My Business?",
    "It builds trust, brings your audience back, and turns attention into measurable demand."
  ],
  [
    "Why Choose Our SEO Agency?",
    "We focus on revenue, not vanity rankings, with technical, content, and conversion strategy working together."
  ],
  [
    "How Much Does Digital Marketing Cost?",
    "It depends on scope, competition, and speed, but every plan is built around measurable return."
  ],
  [
    "What Makes Creative 360 Pro Different From Other Digital Marketing and Web Design Agencies?",
    "We combine strategy, execution, reporting, and support under one disciplined growth system."
  ],
  [
    "What Makes Creative 360 Pro Different From Other Digital Marketing and Web Design Agencies?",
    "Transparent reporting, direct communication, and a bias toward the numbers that actually pay bills."
  ]
];

const blogs = [
  [
    "foil",
    "Unveiling the Organic Powerhouse: Deep Diving into SEO with Creative 360 Pro",
    "Discover how Tech Haven skyrocketed its online sales by 40% with Digital Impact’s tailored SEO strategy."
  ],
  [
    "poster",
    "Cultivating Connections: Strategic Social Media Marketing with Creative 360 Pro",
    "Discover how one brand lifted qualified traffic with a smarter content rhythm."
  ],
  [
    "paper",
    "Navigating the Digital Frontier: Staying Ahead in the Evolving Landscape",
    "How modern search is changing and what growth teams should do next."
  ],
  [
    "canyon",
    "The Fusion of Power: Maximizing Impact Through the Synergy of SEO and Google Ads",
    "A practical view of search visibility from both paid and organic angles."
  ]
];

function GoogleWord() {
  return (
    <div className="google-mark" aria-hidden="true">
      <span className="g-blue">G</span>
      <span className="g-red">o</span>
      <span className="g-yellow">o</span>
      <span className="g-blue">g</span>
      <span className="g-green">l</span>
      <span className="g-red">e</span>
    </div>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Creative 360 Pro home">
        <Image
          src="/assets/creative-360-pro-logo.avif"
          alt="Creative 360 Pro"
          width={260}
          height={110}
          priority
        />
      </a>

      <nav className="main-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a
            key={item}
            className={item === "Home" ? "active" : undefined}
            href={item === "Home" ? "#home" : `#${item.toLowerCase()}`}
          >
            {item}
          </a>
        ))}
      </nav>

      <a className="phone-pill" href="tel:9735631729">
        <span>(973) 563-1729</span>
        <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="home">
        <section className="hero section-panel">
          <div className="hero-copy">
            <p className="eyebrow">Stop Searching</p>
            <h1>
              <span>You’ve Found the Top</span>
              <span>Digital Marketing</span>
              <span>Agency</span>
            </h1>
          </div>
        </section>

        <section className="proof section-panel" id="reviews">
          <div className="review-card">
            <p>Our clients love working with us</p>
            <div className="review-line" />
            <div className="review-body">
              <GoogleWord />
              <div>
                <div className="stars" aria-label="5 stars">★★★★★</div>
                <strong>267+ 5 Star Reviews</strong>
              </div>
            </div>
          </div>

          <div className="proof-copy">
            <p>
              Most agencies are great at sending monthly reports full of “vanity metrics” that don’t pay the bills.
              We’re different. We operate like a precision team, calculated, aggressive, and hitting your market from
              every possible angle to ensure your competitors never see you coming.
            </p>
            <a className="wide-cta" href="#contact">
              <span>Book a call with us</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        <section className="badge-strip" aria-label="Credentials">
          <div className="google-reviews">
            <Image src="/assets/google-reviews.webp" alt="Google Reviews 5 stars" width={260} height={88} />
          </div>
          <div className="partner-card">
            <Image src="/assets/google-partner-badge.svg" alt="Google Partner" width={90} height={90} />
          </div>
          <div className="award-seal">
            <Image
              src="/assets/advertising-agencies-newark-2025.svg"
              alt="2025 best advertising agencies award"
              width={110}
              height={110}
            />
          </div>
        </section>

        <section className="story section-panel" id="about">
          <div className="stack-graphic" aria-label="Agency methodology">
            {stackItems.map(([text, className]) => (
              <div key={text} className={`stack-ribbon ${className}`}>{text}</div>
            ))}
          </div>

          <article className="story-copy">
            <div className="tag"><span aria-hidden="true">⌘</span> Our Story</div>
            <h2>The Team Behind the Results</h2>
            <p>
              With a powerhouse team of over 50 specialists based in the United States, we provide cutting-edge digital
              marketing strategies to a diverse portfolio of 400+ American businesses. As the top-rated SEO agency on
              Google, we maintain a stellar 5-star rating backed by more than 450 verified client reviews.
            </p>
            <p>
              Statistics are great, but what actually matters is your ROI. Our mission is straightforward: we amplify
              your online visibility to directly increase your revenue. We don’t just promise results; we deliver them.
              By navigating the most competitive search landscapes in the country, we’ve generated millions in additional
              profit for our partners, moving them from page ten to the #1 spot.
            </p>
          </article>
        </section>

        <section className="solutions section-panel" id="services">
          <div className="solutions-copy">
            <h2>End-to-End Solutions</h2>
            <p>
              Our methodology claims to master every facet of the search landscape, and it’s a big swing, but it’s one
              we knock out of the park daily. We operate with discipline, attacking your competition from every possible
              flank. We leave no stone unturned.
            </p>
            <p>
              From deep-layer technical SEO and content marketing to precision on-page optimization, we do it all. As
              leaders in the American SEO space, we’re already deploying the next-gen strategies other agencies are still
              trying to figure out. Don’t just take our word for it, check out the data to your right to see why we are a
              top-tier SEO firm in the USA.
            </p>
          </div>

          <div className="bubble-grid">
            {solutionCards.map((card) => (
              <article key={card.title} className={card.className}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="consult-band section-panel">
          <a className="wide-cta compact-cta" href="#contact">
            <span>Get 30 min free consultation</span>
            <span aria-hidden="true">→</span>
          </a>
          <div className="cert-row" aria-label="Partner certifications">
            <div className="cert-item semrush">Semrush<br />Certified</div>
            <div className="cert-item">HubSpot<br /><span>Certified Partner</span></div>
            <div className="cert-item meta">Meta<br /><span>Business Partner</span></div>
            <div className="cert-item google">Google<br /><span>Partner</span></div>
            <div className="cert-item">MENA<br /><span>Search Awards</span></div>
          </div>
        </section>

        <section className="service-marquee" aria-label="Services">
          <div className="marquee-track">
            <span>Website Design</span><i aria-hidden="true">*</i>
            <span>Content Marketing</span><i aria-hidden="true">*</i>
            <span>SEO</span><i aria-hidden="true">*</i>
            <span>Google Ads</span>
          </div>
        </section>

        <section className="numbers-panel">
          <div className="number-bubbles">
            <div><strong>10+</strong><span>Years of Experience</span></div>
            <div><strong>2000+</strong><span>Successful Projects</span></div>
            <div><strong>1900+</strong><span>Happy Clients</span></div>
            <div><strong>267+</strong><span>5-Star Reviews</span></div>
          </div>
        </section>

        <section className="growth section-panel">
          <div className="tag"><span aria-hidden="true">⌘</span> Our Best Services</div>
          <h2>The Full Throttle Growth Engine</h2>
          <p>
            Let’s be real, most “full-service” agencies in the USA are just collections of freelancers in a trench coat.
            We’re different. We’ve built a coordinated strike team that hits your market from every conceivable angle.
          </p>
          <a className="wide-cta service-cta" href="#services">
            <span>View all services</span>
            <span aria-hidden="true">→</span>
          </a>
        </section>

        <section className="service-cards section-panel">
          {serviceCards.map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href="#contact">Learn more <span aria-hidden="true">→</span></a>
            </article>
          ))}
        </section>

        <section className="support-cards section-panel">
          <article className="support-card maintenance">
            <h3>Website Support &amp; Maintenance</h3>
            <p>We detect and resolve issues in real-time before visitors become lost opportunities.</p>
            <div className="support-bottom">
              <a href="#contact">Hire us <span aria-hidden="true">→</span></a>
              <strong>“Mindblowing Results.”</strong>
            </div>
          </article>
          <article className="support-card scaled">
            <h3>Flexible Support, Scaled to You</h3>
            <p>Receive actionable, strategic guidance across your entire digital landscape from ads and analytics to growth.</p>
            <div className="support-bottom">
              <a href="#contact">Let’s chat <span aria-hidden="true">→</span></a>
              <strong>“Clear strategy. Real movement.”</strong>
            </div>
          </article>
        </section>

        <section className="wins-wall" aria-label="Client results">
          <div className="wins-grid">
            {wins.map(([brand, label, text, large]) => (
              <article key={`${brand}-${label}`}>
                <b>{brand}</b>
                {large ? <em>{label}</em> : <span>{label}</span>}
                {text ? <p>{text}</p> : null}
              </article>
            ))}
          </div>
        </section>

        <section className="global-proof section-panel">
          <div className="stat-row">
            {stats.map(([value, text]) => (
              <div key={value}><strong>{value}</strong><span>{text}</span></div>
            ))}
          </div>
          <div className="world-map" aria-hidden="true" />
        </section>

        <section className="projects" id="projects">
          <div className="project-track">
            <article className="project-card green"><h3>Smarter Technology For Everyday Living</h3><p>TrekTek Technology Solutions</p></article>
            <article className="project-card red"><h3>Crafting Your Seamless Event Experience</h3><p>Venus Vogue</p></article>
            <article className="project-card rv"><h3>Your Local Mobile RV Experts</h3><p>MY RV Services LLC</p></article>
          </div>
        </section>

        <section className="discovery-band">
          <a className="wide-cta compact-cta" href="#contact">
            <span>Book a discovery call</span>
            <span aria-hidden="true">→</span>
          </a>
        </section>

        <section className="faq section-panel">
          <div className="faq-list">
            {faqs.map(([question, answer], index) => (
              <details key={`${question}-${index}`}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="blog section-panel" id="blog">
          <p className="muted-kicker">Articles &amp; insights</p>
          <h2>Engaging Blog Posts</h2>
          <a className="blog-link" href="#">View all blogs <span aria-hidden="true">↗</span></a>
          <div className="blog-grid">
            {blogs.map(([imageClass, title, text]) => (
              <article key={title}>
                <div className={`blog-img ${imageClass}`} />
                <div>
                  <span>Blog</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="pre-contact section-panel">
          <div className="secure-note">100% Satisfaction Guarantee. Leave your data, we won’t bite.</div>
          <div className="contact-actions">
            <a className="wide-cta compact-cta" href="#contact"><span>Get my free strategy call</span><span aria-hidden="true">→</span></a>
            <a className="call-outline" href="tel:9735631729">Call now: (973) 563-1729</a>
          </div>
          <div className="micro-row"><span>Response within 1 business hour</span><span>No contracts, no commitments</span><span>Best Agency Passaic County NJ 2026</span></div>
        </section>

        <section className="contact-section section-panel" id="contact">
          <h2>Let’s <span>Talk!</span></h2>
          <form className="contact-form">
            <h3>Claim Your Free Consultation</h3>
            <label>First Name<input type="text" placeholder="First Name" name="firstName" /></label>
            <label>Last Name<input type="text" placeholder="Last Name" name="lastName" /></label>
            <label>Phone Number<input type="tel" placeholder="Phone Number" name="phone" /></label>
            <label>Email<input type="email" placeholder="Email Address" name="email" /></label>
            <label>Inquiring About<input type="text" placeholder="Inquiring About" name="interest" /></label>
            <label>Company Name<input type="text" placeholder="Company Name" name="company" /></label>
            <button type="submit">Submit</button>
          </form>
        </section>

        <footer className="site-footer">
          <div className="footer-email">hello@creative360pro.com</div>
          <div>
            <h4>Menu</h4>
            <a href="#home">Home</a>
            <a href="#about">About</a>
          </div>
          <div>
            <h4>Services</h4>
            <a href="#services">SEO</a>
            <a href="#services">Google Ads</a>
          </div>
          <div>
            <h4>Other Pages</h4>
            <a href="#">Refund Policy</a>
            <a href="#">Privacy Policy</a>
          </div>
        </footer>
      </main>
    </>
  );
}
