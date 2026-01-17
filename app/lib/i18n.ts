export type Language = "en" | "th";

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      pricing: "Pricing",
      contact: "Contact Us",
      hireAgency: "Hire agency",
    },
    hero: {
      title: "6CAT Agency Creative Design.",
      exploreMore: "Explore More",
      getQuote: "Get Quote",
      cornerLines: [
        "Creative agency for modern brands.",
        "We craft identity, experience, and product as one.",
        "Strategy-led work that turns ideas into growth.",
      ],
    },
    heroBottom: {
      marquee:
        "Creative agency for modern brands. We craft identity, experience, and product as one. Strategy-led work that turns ideas into growth.",
    },
    footer: {
      title: "Let's work together",
      nav: {
        home: "Home",
        about: "About",
        services: "Services",
        pricing: "Pricing",
        projects: "Projects",
        contact: "Contact",
        policy: "Policy",
      },
      copyright: "2026@6CAT AGENCY",
      designBy: "Design by 6CAT",
      city: "Bangkok",
      addressLine1: "Tha-sai",
      addressLine2: "Nonthaburi 11000",
    },
    about: {
      kicker: "Who We Are",
      title: "Independent studio for brands that grow with clarity.",
      description:
        "We combine strategy, design, and product thinking to move brands forward without losing their voice.",
      principles: ["Strategy-led", "Design with purpose", "Built for scale"],
      manifestoTitle: "Our viewpoint",
      manifesto: [
        "We start with the real business problem, not the surface brief.",
        "We design systems that teams can run with.",
        "We measure success by traction, not noise.",
      ],
      focus: [
        {
          label: "Business model",
          title: "Brand + Product",
          description: "Align identity and product so growth feels natural.",
        },
        {
          label: "Ways of work",
          title: "Small senior team",
          description: "Lean squads, direct access, fast decisions.",
        },
      ],
    },
    expertise: {
      title: "Our expertise",
      brandStrategy: {
        title: "Brand Strategy",
        description: "Defining the core of your business to create a lasting impact and meaningful connections.",
      },
      uiux: {
        title: "UI/UX Design",
        description: "Designing intuitive and beautiful interfaces that ensure a seamless user experience.",
      },
      development: {
        title: "Development",
        description: "Building robust, scalable, and high-performance digital solutions tailored to your needs.",
      },
      digitalMarketing: {
        title: "Digital Marketing",
        description: "Driving growth and engagement through data-driven strategies and creative campaigns.",
      },
    },
    services: {
      title: "Our services",
      creativeMode: "Creative Mode",
      teamProjects: "Team & Individual Projects",
      projectsDelivered: "Projects Delivered",
      description: "Expert teams ready to elevate your brand from concept to market leader.",
      webDesign: "Web Design",
      branding: "Branding",
      development: "Development",
      factsTitle: "A few more facts about us in numbers",
      hoursWorked: "Hours of work annually",
      clientSatisfaction: "Client Satisfaction Rate",
      activeClients: "Active Clients",
      annualProjects: "Annual Projects",
    },
    servicesDescription:
      "Cutting-edge digital solutions with enterprise-grade infrastructure & seamless workflows — deliver exceptional results, on any platform.",
    projects: {
      title: "Project Story",
      subtitle: "How we turn ideas into measurable results.",
      steps: [
        "Discover the real problem, not just the brief.",
        "Prototype fast, then sharpen the narrative.",
        "Ship a system that scales with the brand.",
      ],
      sideLines: [
        "Selected work and case studies",
        "Crafted with clarity and intent",
      ],
    },
    social: {
      facebook: "Facebook",
      instagram: "Instagram",
    },
    aboutPage: {
      kicker: "About Us",
      title: "A playful studio for serious growth.",
      description:
        "We mix strategy, design, and product to build brands that feel bold, clear, and impossible to ignore.",
      extraTitle: "We turn your ideas into websites and systems that work.",
      extraDescription:
        "We build websites and CRM systems for businesses that need speed, beauty, and real usability. From sales landing pages to full back-office systems.",
      extraHighlights: [
        "Premium design that fits every screen",
        "Fast delivery with clear structure",
        "Focused on real usability, not just visuals",
        "API connections, LINE OA, and back-office systems",
        "Monthly care with future upgrades",
      ],
      extraStepsTitle: "A simple workflow",
      extraSteps: [
        "Align on business goals and needs",
        "Map website structure / UX flow",
        "Design UI that matches the brand",
        "Build + test on mobile and desktop",
        "Deliver + handover (with CMS training if needed)",
      ],
      extraCtaPrimary: "Free consultation",
      extraCtaSecondary: "Request a quote",
      introHeadline: [
        "We are a team shaped by UX/UI.",
        "Not just beautiful, but usable and aligned with business goals.",
        "Many can design, but can’t ship.",
        "Many can build, but the experience falls short.",
        "We believe clients deserve end-to-end delivery.",
        "Great design + easy use + systems that work.",
        "That’s why clients choose us.",
      ],
      dnaTitle: "Our DNA",
      dnaItems: ["Strategy with attitude", "Design that moves", "System thinking", "Creative momentum"],
      studioTitle: "Studio at play",
      studioLines: ["Small team, big imagination.", "Fast loops, sharp decisions.", "Systems that scale with your story."],
      phases: [
        { title: "Launch", detail: "3–10 days", tag: "Fast starts" },
        { title: "Scale", detail: "1–3 months", tag: "Full systems" },
        { title: "Evolve", detail: "Ongoing", tag: "Brand care" },
      ],
      promiseTitle: "Our promise",
      promiseHeadline: "If you grow, we grow.",
      promiseBody:
        "We keep things playful, but we never joke about outcomes. Clarity, speed, and care are non‑negotiable.",
    },
    contactPage: {
      kicker: "Contact Us",
      title: "Say hello. We don’t bite.",
      description: "Drop a message and our team will reply within 24–48 hours.",
      nameLabel: "Full name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "you@email.com",
      messageLabel: "Project vibe",
      messagePlaceholder: "Tell us your goals, timeline, and scope.",
      chips: ["Brand", "Web", "Product", "Growth"],
      submit: "Send message",
      studioLabel: "Studio",
      studioCity: "Bangkok",
      studioAddress: "Tha-sai, Nonthaburi 11000",
      emailTitle: "Email",
      phoneTitle: "Phone",
      hoursTitle: "Hours",
      hoursValue: "Mon–Fri, 9:00–18:00",
      note: "We reply fast. We ship faster.",
    },
    pricingPage: {
      kicker: "Pricing",
      title: "Website Pricing & CRM Packages",
      intro: "Summary of every package we discussed, ready for your website.",
      labels: {
        included: "Includes",
        prep: "Client provides",
        excluded: "Not included / add-ons",
      },
      websiteTitle: "Website Packages",
      websiteDescription:
        "Pick the website package that matches your scope and timeline. Each plan is built for clarity, speed, and measurable growth. We keep the process simple so you can launch with confidence.",
      websiteSubtitle: "One-time price",
      packages: [
        {
          name: "Landing Page",
          tag: "Single page",
          price: "4,900 THB",
          badge: "",
          customNote: "Every project is custom. We never use templates.",
          includes: [
            "One-page landing website",
            "Responsive on mobile",
            "Sections: banner / highlights / services / reviews / contact",
            "Click-to-call / LINE / Facebook buttons",
            "Contact form",
            "1 revision round",
            "Delivery in 3–5 days (after all content is received)",
          ],
          prep: [
            "Logo (if any)",
            "Product/service images",
            "Business intro + service details",
            "Contact channels (LINE/phone/FB)",
          ],
          excluded: [
            "Domain/hosting (if you want us to manage it)",
            "Full content writing or sourcing images",
            "Advanced SEO / articles",
            "Heavy animation / back-office / member system",
          ],
        },
        {
          name: "Full Website",
          tag: "5 pages",
          badge: "Recommended",
          price: "14,999 THB",
          customNote: "Every project is custom. We never use templates.",
          includes: [
            "5 pages: Home / About / Services / Portfolio (Gallery) / Contact",
            "Responsive on mobile",
            "Contact buttons: Call / LINE / Facebook",
            "Contact form",
            "Full navigation + easy links",
            "2 revision rounds",
            "Delivery in 7–10 days (after all content is received)",
          ],
          prep: [],
          excluded: [
            "Domain/hosting",
            "CMS for self-editing",
            "Advanced SEO",
            "Heavy animation / booking system / membership",
            "Database integration (Supabase/Firebase)",
          ],
        },
        {
          name: "Full Website + CMS",
          tag: "5 pages + CMS",
          price: "19,999 THB",
          badge: "",
          customNote: "Every project is custom. We never use templates.",
          includes: [
            "5 pages: Home / About / Services / Portfolio (Gallery) / Contact",
            "Responsive on mobile",
            "CMS to edit content yourself",
            "Edit text/images + add portfolio items",
            "Contact buttons: Call / LINE / Facebook",
            "Contact form",
            "2 revision rounds",
            "Delivery in 10–14 days (after all content is received)",
          ],
          prep: [],
          excluded: [
            "Domain/hosting",
            "Advanced SEO",
            "Membership / booking / cart / payment",
            "Custom database integration (Supabase/Firebase)",
          ],
        },
      ],
      crmTitle: "CRM System",
      crmDescription:
        "A CRM system helps you track customers, manage follow-ups, and keep teams aligned. Best for growing businesses that need clarity across sales, support, and repeat clients.",
      crmSubtitle: "Monthly (3 packages)",
      crmPlans: [
        {
          name: "Starter",
          price: "999 THB / month",
          features: [
            "Overview dashboard",
            "Manage customers (add/edit/delete)",
            "Contact history & notes",
            "Lead capture form",
            "Search & filter",
            "1–2 users (basic)",
          ],
        },
        {
          name: "Pro",
          price: "1,999 THB / month",
          features: [
            "Everything in Starter",
            "Basic customer status (pipeline)",
            "Task / reminder system",
            "Tags & customer segments",
            "Export data (CSV/Excel)",
            "3–5 users",
            "Basic roles (Admin/Staff)",
          ],
        },
        {
          name: "Business",
          price: "2,999 THB / month",
          features: [
            "Everything in Pro",
            "More detailed reports",
            "Dashboard by staff/team",
            "Multi-branch support",
            "Advanced roles & permissions",
            "6–15 users",
            "Custom feature requests supported",
          ],
        },
      ],
      crmNote:
        "Add-on features such as LINE LIFF/OA integration, loyalty points, payments, multi-tenant, and advanced reports can be quoted based on scope.",
      crmCtaContact: "Contact for consultation",
      packageCta: "I'm interested",
    },
    servicesPage: {
      kicker: "Services",
      title: "Services built for brands that want to move fast.",
      intro:
        "We design websites, systems, and growth tools with clear outcomes. Every service is crafted from scratch for your business.",
      sections: [
        {
          title: "Landing Page",
          subtitle: "Single-page sales or lead capture",
          description:
            "A focused one-page site that tells the full story and drives fast action for campaigns and launches.",
          idealFor: ["New brand launches", "Promotions", "Ad campaigns"],
          features: [
            "Mobile responsive",
            "Call / LINE / Facebook buttons",
            "Contact form",
          ],
          cta: "Request a quote",
        },
        {
          title: "Full Website",
          subtitle: "Company website (5 pages)",
          description:
            "A complete business website with the core pages you need to build trust and convert visitors.",
          idealFor: ["Companies", "Service businesses", "Multi-page needs"],
          features: [
            "5 pages: Home / About / Services / Portfolio / Contact",
            "Responsive on mobile",
            "Contact form + LINE button",
          ],
          cta: "View website packages",
        },
        {
          title: "Full Website + CMS",
          subtitle: "Edit content yourself",
          description:
            "Update text, images, and portfolio items any time with a simple CMS.",
          idealFor: ["Frequent updates", "Promotions", "Portfolio or pricing changes"],
          features: [
            "5-page site + CMS",
            "Self-edit text & images",
            "Add/remove portfolio items",
          ],
          cta: "Request CMS demo",
        },
        {
          title: "CRM System",
          subtitle: "Monthly back-office system",
          description:
            "A structured system for customer data, workflows, and team operations so nothing slips.",
          idealFor: ["Teams with sales/admin/support"],
          features: [
            "Customer data + contact history",
            "Pipeline / status management",
            "Admin roles & permissions",
          ],
          cta: "See monthly packages",
        },
        {
          title: "E-Commerce",
          subtitle: "Online shop built to sell",
          description:
            "A full online store from product display to checkout and payments.",
          idealFor: ["Shops that want their own website", "Brands growing beyond platforms"],
          features: [
            "Product pages / cart / checkout",
            "Promotions / coupons (optional)",
            "Order management back office",
          ],
          cta: "Request ecommerce quote",
        },
        {
          title: "LINE Integration",
          subtitle: "Connect LINE OA / LIFF",
          description:
            "Turn LINE into a sales and notification channel with smart automations.",
          idealFor: ["Businesses that close sales on LINE"],
          features: [
            "Tracked 'Chat on LINE' buttons",
            "Auto alerts from form submissions",
            "Member check via LIFF",
          ],
          cta: "Consult LINE integration",
        },
        {
          title: "SEO + Speed Optimization",
          subtitle: "Rank better, load faster",
          description:
            "Improve search visibility and performance for a smoother user experience.",
          idealFor: ["Businesses that want long-term search traffic"],
          features: [
            "Title / Description / Sitemap setup",
            "Website speed optimization",
            "Google Analytics integration",
          ],
          cta: "Free SEO check",
        },
        {
          title: "Animation / Interactive",
          subtitle: "Premium, memorable web",
          description:
            "Add motion and interaction so your brand feels premium and unforgettable.",
          idealFor: ["Brands that want to stand out", "Premium launches"],
          features: [
            "GSAP scroll / light motion",
            "Hover / parallax interaction",
            "Story-driven product launch",
          ],
          cta: "Request animation demo",
        },
        {
          title: "Maintenance",
          subtitle: "Monthly website care",
          description:
            "Keep your website stable, updated, and ready to sell every day.",
          idealFor: ["Teams that want a reliable site", "Ongoing updates"],
          features: [
            "Basic bug fixes",
            "Minor content updates",
            "Speed & security checks",
          ],
          cta: "See maintenance plans",
        },
      ],
      outro:
        "If you're not sure where to start, send examples you like or share your business. We'll recommend the best structure for free.",
      outroPrimary: "Free consultation",
      outroSecondary: "Request a quote",
      labels: {
        ideal: "Ideal for",
        features: "Key features",
      },
    },
    timeline: {
      kicker: "How We Work",
      title: "Creative teams that grow with your business.",
      description:
        "We work as one team with clear ownership, high craft, and shared outcomes. When you grow, we grow too.",
      promiseLabel: "Quality + Teamwork",
      promiseTitle: "We deliver with care and creativity.",
      promiseDescription:
        "From landing pages to full systems, our process stays tight, transparent, and built for momentum.",
      stepPrefix: "Step",
      steps: [
        {
          label: "Landing page",
          title: "Fast, focused launch",
          description:
            "Single-purpose page with clear messaging and conversion-first design.",
          timeline: "3 days",
        },
        {
          label: "Full website",
          title: "Complete brand presence",
          description:
            "Multi-page site with structure, content flow, and scalable design.",
          timeline: "Within 1 month",
        },
        {
          label: "Client system",
          title: "Built for operations",
          description:
            "Custom system or platform with robust UX and handoff-ready architecture.",
          timeline: "1-2 months",
        },
      ],
    },
    testimonials: {
      kicker: "Client Love",
      title: "What our clients say",
      description:
        "Small teams, big outcomes. Here is how founders describe working with us.",
      items: [
        {
          name: "Nora Jensen",
          role: "Founder, Atlas Studio",
          quote:
            "They brought structure to the chaos and still kept the creative soul intact.",
        },
        {
          name: "Kavin R.",
          role: "Head of Product, Lumen Health",
          quote:
            "Fast, thoughtful, and always aligned with the business goal.",
        },
        {
          name: "Mayu Tan",
          role: "Marketing Lead, Northwave",
          quote:
            "We finally have a system that scales without losing our voice.",
        },
      ],
    },
    contact: {
      kicker: "Let’s Talk",
      title: "Ready to build something real?",
      description:
        "Tell us about your goals and we will map the next best step together.",
      quickLabel: "Response time",
      quickTitle: "We reply within 24 hours.",
      quickDescription:
        "Expect a short call and a clear proposal tailored to your scope.",
      form: {
        nameLabel: "Name",
        namePlaceholder: "Your name",
        emailLabel: "Email",
        emailPlaceholder: "your@email.com",
        messageLabel: "Project details",
        messagePlaceholder: "Tell us about your project and timeline.",
        submit: "Send inquiry",
        disclaimer: "By submitting, you agree to be contacted by our team.",
      },
    },
  },
  th: {
    nav: {
      home: "หน้าหลัก",
      about: "เกี่ยวกับเรา",
      services: "บริการ",
      pricing: "ราคา",
      contact: "ติดต่อเรา",
      hireAgency: "จ้างเอเจนซี่",
    },
    hero: {
      title: "6CAT Agency Creative Design.",
      exploreMore: "สำรวจเพิ่มเติม",
      getQuote: "ขอใบเสนอราคา",
      cornerLines: [
        "เอเจนซี่สร้างสรรค์สำหรับแบรนด์ยุคใหม่",
        "ผสานอัตลักษณ์ ประสบการณ์ และโปรดักต์เข้าด้วยกัน",
        "งานขับเคลื่อนด้วยกลยุทธ์ เปลี่ยนไอเดียเป็นการเติบโต",
      ],
    },
    heroBottom: {
      marquee:
        "Creative agency for modern brands. We craft identity, experience, and product as one. Strategy-led work that turns ideas into growth.",
    },
    footer: {
      title: "Let’s work together",
      nav: {
        home: "หน้าแรก",
        about: "เกี่ยวกับเรา",
        services: "บริการ",
        pricing: "ราคา",
        projects: "โปรเจค",
        contact: "ติดต่อ",
        policy: "นโยบาย",
      },
      copyright: "2026@6CAT AGENCY",
      designBy: "Design by 6CAT",
      city: "Bangkok",
      addressLine1: "ท่า-ทราย",
      addressLine2: "นนทบุรี 11000",
    },
    about: {
      kicker: "เราเป็นใคร",
      title: "สตูดิโออิสระสำหรับแบรนด์ที่เติบโตอย่างชัดเจน",
      description:
        "ผสานกลยุทธ์ ดีไซน์ และแนวคิดสินค้า เพื่อให้แบรนด์เดินหน้าโดยไม่หลงเสียงของตัวเอง",
      principles: ["ขับเคลื่อนด้วยกลยุทธ์", "ออกแบบอย่างมีเป้าหมาย", "พร้อมขยายสเกล"],
      manifestoTitle: "แนวคิดของเรา",
      manifesto: [
        "เริ่มจากปัญหาธุรกิจจริง ไม่ใช่แค่บรีฟ",
        "ออกแบบเป็นระบบที่ทีมใช้งานต่อได้",
        "วัดผลด้วยแรงขับเคลื่อน ไม่ใช่เสียงดัง",
      ],
      focus: [
        {
          label: "โมเดลธุรกิจ",
          title: "แบรนด์ + โปรดักต์",
          description: "เชื่อมอัตลักษณ์และสินค้าให้เติบโตอย่างเป็นธรรมชาติ",
        },
        {
          label: "วิธีทำงาน",
          title: "ทีมเล็กประสบการณ์สูง",
          description: "ทีมกระชับ สื่อสารตรง ตัดสินใจไว",
        },
      ],
    },
    expertise: {
      title: "ความเชี่ยวชาญของเรา",
      brandStrategy: {
        title: "กลยุทธ์แบรนด์",
        description: "กำหนดแกนหลักของธุรกิจเพื่อสร้างผลกระทบที่ยั่งยืนและความสัมพันธ์ที่มีความหมาย",
      },
      uiux: {
        title: "ออกแบบ UI/UX",
        description: "ออกแบบอินเทอร์เฟซที่ใช้งานง่ายและสวยงามเพื่อให้ประสบการณ์ผู้ใช้ที่ราบรื่น",
      },
      development: {
        title: "พัฒนาเว็บไซต์",
        description: "สร้างโซลูชันดิจิทัลที่แข็งแกร่ง ขยายได้ และประสิทธิภาพสูงตามความต้องการของคุณ",
      },
      digitalMarketing: {
        title: "การตลาดดิจิทัล",
        description: "ขับเคลื่อนการเติบโตและการมีส่วนร่วมผ่านกลยุทธ์ที่ขับเคลื่อนด้วยข้อมูลและการรณรงค์ที่สร้างสรรค์",
      },
    },
    services: {
      title: "บริการของเรา",
      creativeMode: "โหมดสร้างสรรค์",
      teamProjects: "โปรเจ็กต์ทีมและรายบุคคล",
      projectsDelivered: "โปรเจ็กต์ที่ส่งมอบ",
      description: "ทีมผู้เชี่ยวชาญพร้อมยกระดับแบรนด์ของคุณจากแนวคิดสู่ผู้นำตลาด",
      webDesign: "ออกแบบเว็บไซต์",
      branding: "สร้างแบรนด์",
      development: "พัฒนา",
      factsTitle: "ข้อเท็จจริงเพิ่มเติมเกี่ยวกับเราในตัวเลข",
      hoursWorked: "ชั่วโมงการทำงานต่อปี",
      clientSatisfaction: "อัตราความพึงพอใจของลูกค้า",
      activeClients: "ลูกค้าที่ใช้งานอยู่",
      annualProjects: "โปรเจ็กต์รายปี",
    },
    servicesDescription:
      "โซลูชันดิจิทัลล้ำสมัยด้วยโครงสร้างพื้นฐานระดับองค์กรและเวิร์กโฟลว์ที่ราบรื่น — ส่งมอบผลลัพธ์ที่ยอดเยี่ยม บนทุกแพลตฟอร์ม",
    projects: {
      title: "โปรเจค",
      subtitle: "เปลี่ยนไอเดียให้เป็นผลลัพธ์ที่จับต้องได้",
      steps: [
        "ค้นหาปัญหาจริง ไม่ใช่แค่บรีฟ",
        "ทำต้นแบบเร็ว แล้วขัดเกลานำเสนอ",
        "ส่งมอบระบบที่ขยายตามแบรนด์ได้",
      ],
      sideLines: [
        "ผลงานที่คัดสรรและกรณีศึกษา",
        "สร้างสรรค์ด้วยความชัดเจนและความตั้งใจ",
      ],
    },
    social: {
      facebook: "Facebook",
      instagram: "Instagram",
    },
    aboutPage: {
      kicker: "เกี่ยวกับเรา",
      title: "สตูดิโอสนุก ๆ ที่จริงจังกับการเติบโต",
      description:
        "ผสานกลยุทธ์ ดีไซน์ และโปรดักต์ เพื่อสร้างแบรนด์ที่ชัด กล้า และน่าจดจำ",
      extraTitle: "เราเปลี่ยนไอเดียของคุณ ให้กลายเป็นเว็บและระบบที่ใช้งานได้จริง",
      extraDescription:
        "เรารับทำเว็บไซต์และระบบ CRM สำหรับธุรกิจที่ต้องการความเร็ว ความสวย และใช้งานได้จริง ตั้งแต่หน้าเว็บขายของ ไปจนถึงหลังบ้านจัดการข้อมูลแบบครบวงจร",
      extraHighlights: [
        "ดีไซน์สวย ดูแพง รองรับมือถือทุกหน้าจอ",
        "ทำงานไว วางโครงสร้างชัด ส่งมอบตามแผน",
        "โฟกัส “ใช้งานได้จริง” ไม่ใช่แค่สวยอย่างเดียว",
        "ต่อ API / เชื่อม LINE OA / ทำระบบหลังบ้านได้",
        "ดูแลต่อรายเดือน อัปเดตและเพิ่มฟีเจอร์ในอนาคตได้",
      ],
      extraStepsTitle: "ขั้นตอนทำงานแบบง่ายๆ",
      extraSteps: [
        "คุยความต้องการ + เป้าหมายของธุรกิจ",
        "ออกแบบโครงสร้างหน้าเว็บ / UX Flow",
        "ดีไซน์ UI ให้ตรงแบรนด์",
        "พัฒนา + ทดสอบบนมือถือ/เดสก์ท็อป",
        "ส่งมอบงาน + สอนใช้งาน (ถ้ามี CMS)",
      ],
      extraCtaPrimary: "ปรึกษาฟรี",
      extraCtaSecondary: "ขอใบเสนอราคา",
      introHeadline: [
        "เราเป็นทีมที่โตมาจาก UX/UI",
        "ไม่ใช่แค่ทำให้สวย แต่ทำให้ “ใช้งานได้จริง” และ “ได้ผลลัพธ์ตามเป้าหมายธุรกิจ”",
        "หลายที่ออกแบบได้…แต่ทำออกมาไม่ได้",
        "หลายที่ทำได้…แต่ประสบการณ์ใช้งานไม่ดี",
        "เราเชื่อว่าลูกค้าควรได้งานที่ครบตั้งแต่ต้นจนจบ",
        "ออกแบบดี + ใช้งานง่าย + ระบบทำงานจริง",
        "นี่คือเหตุผลที่ลูกค้าเลือกเรา",
      ],
      dnaTitle: "DNA ของเรา",
      dnaItems: ["กลยุทธ์มีคาแรกเตอร์", "ดีไซน์ที่ขยับได้", "คิดเป็นระบบ", "โมเมนตัมสร้างสรรค์"],
      studioTitle: "สตูดิโอที่เล่นเป็น",
      studioLines: ["ทีมเล็ก จินตนาการใหญ่", "รอบสั้น ตัดสินใจไว", "ระบบที่โตไปกับเรื่องราวคุณ"],
      phases: [
        { title: "เริ่มต้น", detail: "3–10 วัน", tag: "เปิดไว" },
        { title: "สเกล", detail: "1–3 เดือน", tag: "ระบบเต็ม" },
        { title: "พัฒนา", detail: "ต่อเนื่อง", tag: "ดูแลแบรนด์" },
      ],
      promiseTitle: "คำสัญญาของเรา",
      promiseHeadline: "ถ้าคุณโต เราก็โตด้วย",
      promiseBody:
        "สนุกได้ แต่ผลลัพธ์ต้องจริงจัง ความชัด ความเร็ว และความใส่ใจคือมาตรฐาน",
    },
    contactPage: {
      kicker: "ติดต่อเรา",
      title: "ทักมาได้เลย เราไม่กัด",
      description: "ส่งข้อความหาเรา ทีมจะตอบกลับภายใน 24–48 ชั่วโมง",
      nameLabel: "ชื่อ-นามสกุล",
      namePlaceholder: "ชื่อของคุณ",
      emailLabel: "อีเมล",
      emailPlaceholder: "you@email.com",
      messageLabel: "บรีฟโปรเจ็กต์",
      messagePlaceholder: "เล่าเป้าหมาย ไทม์ไลน์ และขอบเขตงานให้เราฟัง",
      chips: ["แบรนด์", "เว็บไซต์", "โปรดักต์", "การเติบโต"],
      submit: "ส่งข้อความ",
      studioLabel: "สตูดิโอ",
      studioCity: "กรุงเทพฯ",
      studioAddress: "ท่า‑ทราย นนทบุรี 11000",
      emailTitle: "อีเมล",
      phoneTitle: "โทร",
      hoursTitle: "เวลาทำการ",
      hoursValue: "จ–ศ, 9:00–18:00",
      note: "ตอบไว ส่งงานไวกว่า",
    },
    pricingPage: {
      kicker: "Pricing",
      title: "Pricing สำหรับหน้าเว็บไซต์",
      intro: "สรุปราคาบริการที่คุยกันทั้งหมด (พร้อมนำไปใส่หน้าเว็บได้ทันที)",
      labels: {
        included: "รวมในแพ็กเกจ",
        prep: "สิ่งที่ลูกค้าต้องเตรียม",
        excluded: "ไม่รวม/คิดเพิ่ม",
      },
      websiteTitle: "แพ็กเกจเว็บไซต์",
      websiteDescription:
        "เลือกแพ็กเกจให้เหมาะกับขอบเขตและไทม์ไลน์ งานของเราชัดเจน ส่งไว และเน้นผลลัพธ์จริง กระบวนการง่าย เพื่อให้คุณเปิดตัวได้มั่นใจ",
      websiteSubtitle: "ราคาแบบครั้งเดียว",
      packages: [
        {
          name: "Landing Page",
          tag: "หน้าเดียว",
          price: "4,900 บาท",
          badge: "",
          customNote: "ทุกงานของเราไม่ใช่เทมเพลต เราสร้างใหม่ให้ทุกเจ้า",
          includes: [
            "หน้าเว็บ 1 หน้า (Landing Page)",
            "รองรับมือถือ (Responsive)",
            "ใส่ข้อมูล: แบนเนอร์ / จุดเด่น / บริการ / รีวิว / ช่องทางติดต่อ",
            "ปุ่มกดโทร / LINE / Facebook",
            "ฟอร์มติดต่อ",
            "แก้ไขงานได้ 1 รอบ",
            "ส่งงาน 3–5 วัน (หลังได้รับข้อมูลครบ)",
          ],
          prep: [
            "โลโก้ (ถ้ามี)",
            "รูปภาพสินค้า/บริการ",
            "ข้อความแนะนำธุรกิจ + รายละเอียดบริการ",
            "ช่องทางติดต่อ (LINE/เบอร์/FB)",
          ],
          excluded: [
            "โดเมน/โฮสติ้ง (ถ้าต้องการให้ช่วยจัดการ)",
            "เขียนคอนเทนต์/หาภาพให้ทั้งหมด",
            "SEO ขั้นสูง / บทความ",
            "Animation หนักๆ / ระบบหลังบ้าน / ระบบสมาชิก",
          ],
        },
        {
          name: "Full Website",
          tag: "5 หน้า",
          badge: "Recommended",
          price: "14,999 บาท",
          customNote: "ทุกงานของเราไม่ใช่เทมเพลต เราสร้างใหม่ให้ทุกเจ้า",
          includes: [
            "เว็บไซต์ 5 หน้า: Home / About / Services / Portfolio(Gallery) / Contact",
            "รองรับมือถือ (Responsive)",
            "ปุ่มติดต่อ: โทร / LINE / Facebook",
            "ฟอร์มติดต่อ",
            "เมนูนำทางครบ + ลิงก์ใช้งานง่าย",
            "แก้ไขงานได้ 2 รอบ",
            "ส่งงาน 7–10 วัน (หลังได้รับข้อมูลครบ)",
          ],
          prep: [],
          excluded: [
            "โดเมน/โฮสติ้ง",
            "CMS หลังบ้านแก้ไขเอง",
            "SEO ขั้นสูง",
            "Animation หนัก / ระบบจอง / ระบบสมาชิก",
            "เชื่อมฐานข้อมูล (Supabase/Firebase)",
          ],
        },
        {
          name: "Full Website + CMS",
          tag: "5 หน้า + CMS",
          price: "19,999 บาท",
          badge: "",
          customNote: "ทุกงานของเราไม่ใช่เทมเพลต เราสร้างใหม่ให้ทุกเจ้า",
          includes: [
            "เว็บไซต์ 5 หน้า: Home / About / Services / Portfolio(Gallery) / Contact",
            "รองรับมือถือ (Responsive)",
            "มีหลังบ้าน CMS แก้ไขเนื้อหาเองได้",
            "แก้ไขข้อความ/รูปภาพ + เพิ่มผลงานใน Portfolio ได้",
            "ปุ่มติดต่อ: โทร / LINE / Facebook",
            "ฟอร์มติดต่อ",
            "แก้ไขงานได้ 2 รอบ",
            "ส่งงาน 10–14 วัน (หลังได้รับข้อมูลครบ)",
          ],
          prep: [],
          excluded: [
            "โดเมน/โฮสติ้ง",
            "SEO ขั้นสูง",
            "ระบบสมาชิก / ระบบจอง / ตะกร้าสินค้า / ชำระเงิน",
            "เชื่อมฐานข้อมูลแบบเฉพาะ (Supabase/Firebase)",
          ],
        },
      ],
      crmTitle: "CRM System",
      crmDescription:
        "ระบบ CRM ช่วยเก็บข้อมูลลูกค้า ติดตามงาน และจัดระบบทีมให้ทำงานต่อเนื่อง เหมาะกับธุรกิจที่กำลังโตและต้องการเห็นภาพรวมการขายและลูกค้าซ้ำชัดเจน",
      crmSubtitle: "รายเดือน (3 แพ็กเกจ)",
      crmPlans: [
        {
          name: "Starter",
          price: "999.-/เดือน",
          features: [
            "Dashboard ภาพรวม",
            "จัดการข้อมูลลูกค้า (เพิ่ม/แก้ไข/ลบ)",
            "บันทึกประวัติการติดต่อ/โน้ต",
            "ฟอร์มรับข้อมูลลูกค้า (Lead)",
            "ค้นหา/กรองข้อมูล",
            "ผู้ใช้งาน 1–2 คน (พื้นฐาน)",
          ],
        },
        {
          name: "Pro",
          price: "1,999.-/เดือน",
          features: [
            "ทุกอย่างใน Starter",
            "จัดการสถานะลูกค้า (Pipeline เบื้องต้น)",
            "ระบบงานติดตาม (Task/Reminder)",
            "แท็ก/จัดกลุ่มลูกค้า",
            "Export ข้อมูล (CSV/Excel)",
            "ผู้ใช้งาน 3–5 คน",
            "Role พื้นฐาน (Admin/Staff)",
          ],
        },
        {
          name: "Business",
          price: "2,999.-/เดือน",
          features: [
            "ทุกอย่างใน Pro",
            "รายงาน (Report) ละเอียดขึ้น",
            "Dashboard แยกตามพนักงาน/ทีม",
            "รองรับหลายสาขา (Branch)",
            "Role & Permission ขั้นสูง",
            "ผู้ใช้งาน 6–15 คน",
            "รองรับขอฟีเจอร์เฉพาะ (Custom Request)",
          ],
        },
      ],
      crmNote:
        "หมายเหตุ: ฟีเจอร์เสริม เช่น เชื่อม LINE LIFF/OA, ระบบสะสมแต้ม, ระบบชำระเงิน, Multi-tenant, รายงานขั้นสูง สามารถประเมินราคาเพิ่มตามความต้องการ",
      crmCtaContact: "ติดต่อสอบถาม",
      packageCta: "สนใจแพคเกจ",
    },
    servicesPage: {
      kicker: "Services",
      title: "บริการที่ออกแบบมาเพื่อธุรกิจที่อยากโตเร็วและชัด",
      intro:
        "เราสร้างเว็บไซต์ ระบบ และเครื่องมือเติบโตแบบมีเป้าหมาย ทุกงานทำใหม่ให้ตรงกับธุรกิจของคุณ",
      sections: [
        {
          title: "Landing Page",
          subtitle: "หน้าเดียวขายของ/เก็บลูกค้า",
          description:
            "หน้าเว็บเดียวเล่าเรื่องครบ จบในหน้าเดียว เหมาะกับโปรโมชันและการปิดการขายไว",
          idealFor: ["เปิดตัวแบรนด์ใหม่", "โปรโมชัน", "แคมเปญยิงแอด"],
          features: [
            "หน้าเดียวรองรับมือถือ",
            "ปุ่มโทร / LINE / Facebook",
            "ฟอร์มติดต่อ",
          ],
          cta: "ขอใบเสนอราคา",
        },
        {
          title: "Full Website",
          subtitle: "เว็บไซต์บริษัท 5 หน้า",
          description:
            "เว็บไซต์ครบหน้า เพิ่มความน่าเชื่อถือ พร้อมใช้งานจริงได้ทันที",
          idealFor: ["บริษัท", "ร้านบริการ", "ธุรกิจที่มีหลายหน้า"],
          features: [
            "5 หน้า (Home / About / Services / Portfolio / Contact)",
            "Responsive รองรับมือถือ",
            "ฟอร์มติดต่อ + ปุ่ม LINE",
          ],
          cta: "ดูแพ็กเกจเว็บไซต์",
        },
        {
          title: "Full Website + CMS",
          subtitle: "มีหลังบ้านแก้เองได้",
          description:
            "ลูกค้าสามารถแก้ไขข้อความ รูปภาพ และผลงานได้เองผ่าน CMS",
          idealFor: ["อัปเดตข้อมูลบ่อย", "โปรโมชัน", "ผลงานหรือราคา"],
          features: [
            "เว็บ 5 หน้า + ระบบหลังบ้าน CMS",
            "แก้ไขเนื้อหาได้เองง่ายๆ",
            "เพิ่ม/ลบผลงาน (Portfolio/Gallery)",
          ],
          cta: "ขอเดโม่หลังบ้าน",
        },
        {
          title: "CRM System",
          subtitle: "ระบบหลังบ้านรายเดือน",
          description:
            "ระบบจัดการข้อมูลลูกค้า งาน และทีม ช่วยให้ทำงานเร็วขึ้นและไม่หลุดงาน",
          idealFor: ["ทีมขาย/แอดมิน/บริการลูกค้า"],
          features: [
            "เก็บข้อมูลลูกค้า + ประวัติการติดต่อ",
            "จัดการสถานะงาน (Pipeline)",
            "Admin + สิทธิ์การใช้งาน (Role)",
          ],
          cta: "ดูแพ็กเกจรายเดือน",
        },
        {
          title: "E-Commerce",
          subtitle: "เว็บไซต์ขายของออนไลน์",
          description:
            "เว็บร้านค้าที่ใช้งานได้จริง ตั้งแต่โชว์สินค้าไปจนถึงชำระเงิน",
          idealFor: ["ร้านที่อยากมีเว็บเป็นของตัวเอง", "ไม่ต้องพึ่งแพลตฟอร์ม"],
          features: [
            "หน้าสินค้า / ตะกร้า / เช็คเอาท์",
            "โปรโมชัน / คูปอง (ถ้าต้องการ)",
            "ระบบจัดการออเดอร์หลังบ้าน",
          ],
          cta: "ขอใบเสนอราคาสายร้านค้า",
        },
        {
          title: "LINE Integration",
          subtitle: "เชื่อม LINE OA / LIFF",
          description:
            "เปลี่ยน LINE ให้เป็นหน้าร้านและระบบแจ้งเตือนอัตโนมัติ",
          idealFor: ["ร้าน/ธุรกิจที่ปิดการขายผ่าน LINE"],
          features: [
            "ปุ่ม “ทัก LINE” แบบ Tracking",
            "แจ้งเตือนอัตโนมัติเมื่อมีลูกค้าส่งฟอร์ม",
            "ระบบสมาชิก/เช็คสิทธิ์ผ่าน LIFF",
          ],
          cta: "ขอปรึกษาการเชื่อม LINE",
        },
        {
          title: "SEO + Speed Optimization",
          subtitle: "ทำเว็บให้ติดค้นหา + โหลดไว",
          description:
            "ปรับเว็บให้ Google เข้าใจและจัดอันดับง่ายขึ้น พร้อมเพิ่มความเร็ว",
          idealFor: ["ธุรกิจที่ต้องการคนค้นหาเจอแบบยาวๆ"],
          features: [
            "ตั้งค่า Title / Description / Sitemap",
            "ปรับความเร็วเว็บไซต์",
            "เชื่อม Google Analytics",
          ],
          cta: "ตรวจ SEO ฟรีเบื้องต้น",
        },
        {
          title: "Animation / Interactive",
          subtitle: "เว็บสวยพรีเมียม น่าจดจำ",
          description:
            "เพิ่มลูกเล่นให้เว็บดูแพงขึ้นด้วย motion และ interaction",
          idealFor: ["แบรนด์ที่อยากต่างจากคู่แข่ง", "งานเปิดตัวพรีเมียม"],
          features: [
            "GSAP Scroll / Motion เบาๆ",
            "Interactive Hover / Parallax",
            "เปิดตัวสินค้าแบบเล่าเรื่อง",
          ],
          cta: "ขอเดโม่งาน Animation",
        },
        {
          title: "Maintenance",
          subtitle: "ดูแลเว็บรายเดือน",
          description:
            "ดูแลเว็บไซต์ให้พร้อมขาย ลดปัญหาเว็บล่ม และอัปเดตข้อมูลต่อเนื่อง",
          idealFor: ["ลูกค้าที่อยากให้เว็บพร้อมขายตลอดเวลา"],
          features: [
            "แก้ไขบั๊กพื้นฐาน",
            "อัปเดตเนื้อหาเล็กน้อย",
            "ตรวจสอบความเร็ว/ความปลอดภัย",
          ],
          cta: "ดูแพ็กเกจดูแลรายเดือน",
        },
      ],
      outro:
        "หากยังไม่แน่ใจว่าควรเริ่มจากแพ็กเกจไหน ส่งตัวอย่างเว็บที่ชอบ หรือเล่าธุรกิจคร่าวๆ แล้วเราจะแนะนำโครงสร้างที่เหมาะที่สุดให้ฟรี",
      outroPrimary: "ปรึกษาฟรี",
      outroSecondary: "ขอใบเสนอราคา",
      labels: {
        ideal: "เหมาะกับ",
        features: "สิ่งที่ได้",
      },
    },
    timeline: {
      kicker: "ขั้นตอนการทำงาน",
      title: "ทีมสร้างสรรค์ที่เติบโตไปกับธุรกิจของคุณ",
      description:
        "เราทำงานเป็นทีมเดียว มีความรับผิดชอบชัดเจน คุณภาพสูง และเป้าหมายร่วมกัน ถ้าคุณโต เราก็โตด้วย",
      promiseLabel: "คุณภาพ + ทีมเวิร์ก",
      promiseTitle: "ส่งมอบด้วยความตั้งใจและความคิดสร้างสรรค์",
      promiseDescription:
        "ตั้งแต่ landing page ไปจนถึงระบบเต็ม กระบวนการของเรากระชับ ชัดเจน และผลักดันให้ไปต่อได้จริง",
      stepPrefix: "ขั้นที่",
      steps: [
        {
          label: "Landing page",
          title: "เปิดตัวไว โฟกัสชัด",
          description:
            "หน้าเดี่ยวที่สื่อสารตรงและออกแบบเพื่อการคอนเวอร์ชัน",
          timeline: "3 วัน",
        },
        {
          label: "Full website",
          title: "แบรนด์ครบระบบ",
          description:
            "หลายหน้า โครงสร้างครบ เนื้อหาชัด และดีไซน์ที่ต่อยอดได้",
          timeline: "ไม่เกิน 1 เดือน",
        },
        {
          label: "ระบบของลูกค้า",
          title: "พร้อมใช้งานจริง",
          description:
            "ระบบหรือแพลตฟอร์มที่เน้นประสบการณ์ผู้ใช้และโครงสร้างที่ส่งต่อได้",
          timeline: "1-2 เดือน",
        },
      ],
    },
    testimonials: {
      kicker: "เสียงจากลูกค้า",
      title: "ความประทับใจจากลูกค้า",
      description:
        "ทีมเล็กที่โฟกัสชัด ผลลัพธ์จริง นี่คือสิ่งที่ลูกค้าพูดถึงเรา",
      items: [
        {
          name: "Nora Jensen",
          role: "ผู้ก่อตั้ง, Atlas Studio",
          quote:
            "พวกเขาจัดระบบให้ชัดเจน แต่ยังรักษาความคิดสร้างสรรค์ไว้ครบ",
        },
        {
          name: "Kavin R.",
          role: "หัวหน้าฝ่ายผลิตภัณฑ์, Lumen Health",
          quote:
            "ทำงานเร็ว คิดลึก และโฟกัสเป้าหมายทางธุรกิจเสมอ",
        },
        {
          name: "Mayu Tan",
          role: "หัวหน้าการตลาด, Northwave",
          quote:
            "ตอนนี้เรามีระบบที่ขยายได้โดยไม่เสียเสียงของแบรนด์",
        },
      ],
    },
    contact: {
      kicker: "คุยกันเลย",
      title: "พร้อมเริ่มงานร่วมกันไหม",
      description:
        "เล่าความต้องการของคุณ แล้วเราจะช่วยวางขั้นตอนที่เหมาะที่สุด",
      quickLabel: "เวลาตอบกลับ",
      quickTitle: "ตอบกลับภายใน 24 ชั่วโมง",
      quickDescription:
        "เราจะติดต่อกลับพร้อมแนวทางและข้อเสนอที่ชัดเจน",
      form: {
        nameLabel: "ชื่อ",
        namePlaceholder: "ชื่อของคุณ",
        emailLabel: "อีเมล",
        emailPlaceholder: "your@email.com",
        messageLabel: "รายละเอียดโปรเจค",
        messagePlaceholder: "เล่าขอบเขตงานและไทม์ไลน์คร่าว ๆ",
        submit: "ส่งข้อความ",
        disclaimer: "การส่งฟอร์มนี้หมายถึงคุณยินยอมให้ทีมติดต่อกลับ",
      },
    },
  },
} as const;

export type Translations = typeof translations;

export const getTranslations = (language: Language) => translations[language];
