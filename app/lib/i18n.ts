export type Language = "en" | "th";

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
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
