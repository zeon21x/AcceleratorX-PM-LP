export const HERO_DATA = {
  eyebrowBrand: 'ACCELERATORX',
  eyebrowPartner: 'IBM',
  eyebrowContext: 'IN COLLABORATION WITH',
  programLabel: 'AI PRODUCT MANAGEMENT NANO DEGREE',
  title: 'AI Product Management Course',
  description:
    'In 18 weeks, build, launch and scale your own product—from idea to execution—with core product management and AI-led product practices.',
  chips: [
    '18-week program',
    '4 sessions per week',
    'No technical prerequisites',
    'AcceleratorX + IBM',
  ],
  metrics: [
    { value: '2,000+', label: 'Learners' },
    { value: '4.8/5', label: 'Average rating' },
    { value: '1,700+', label: 'Companies across alumni careers' },
  ],
};

export const ALUMNI_COMPANIES = [
  { name: 'Mahindra', domain: 'mahindra.com' },
  { name: 'Cognizant', domain: 'cognizant.com' },
  { name: 'Amazon', domain: 'amazon.com' },
  { name: 'KPMG', domain: 'kpmg.com' },
  { name: 'Cvent', domain: 'cvent.com' },
  { name: 'Caparo', domain: 'caparo.com' },
];

export const TESTIMONIALS = [
  {
    quote:
      "Use the learner's original approved testimonial here. Keep the quote specific to their learning experience, projects or career progress.",
    author: 'Verified learner testimonial',
    meta: 'Name · Role / Company, where verified',
  },
  {
    quote:
      'Use a second original testimonial from the AcceleratorX brochure or an approved learner interview. Do not create or paraphrase a quote as if it were real.',
    author: 'Verified learner testimonial',
    meta: 'Name · Role / Company, where verified',
  },
  {
    quote:
      'Use a third approved learner story. Add a real photo or video thumbnail when permission is available.',
    author: 'Verified learner testimonial',
    meta: 'Name · Role / Company, where verified',
  },
];

export const OVERVIEW_CARDS = [
  {
    num: '01',
    title: 'Own the product journey',
    description:
      'Move from problem discovery and user research to product strategy, roadmaps and launch.',
  },
  {
    num: '02',
    title: 'Work with AI-led methods',
    description:
      'Understand AI products, LLMs, AI workflows, product metrics and responsible AI decisions.',
  },
  {
    num: '03',
    title: 'Build and showcase',
    description:
      'Create a real product through Build Your Dream Product (BYDP) and showcase your work with BuildrX.',
  },
];

export const BENEFIT_TRACKS = [
  {
    index: '01',
    label: 'CORE PRODUCT MANAGEMENT',
    title: 'Core product management',
    intro:
      'Build the fundamentals to take a product from customer problem to successful launch.',
    items: [
      'Product discovery and user research',
      'Market sizing and competitive analysis',
      'Product vision, strategy and roadmaps',
      'PRDs, UX foundations and prioritisation',
      'MVPs, product metrics and go-to-market',
    ],
  },
  {
    index: '02',
    label: 'AI PRODUCT EXECUTION',
    title: 'AI product execution',
    intro:
      'Apply modern AI capabilities to design, prototype and evaluate intelligent products.',
    items: [
      'AI product discovery and problem framing',
      'LLMs, foundation models and prompt frameworks',
      'AI product design, PRDs and metrics',
      'Rapid AI MVPs and workflow automation',
      'RAG, MCP, AI agents and responsible AI',
    ],
  },
];

export const APPROACH_CARDS = [
  {
    num: '01',
    title: 'Learn',
    description:
      'Build a foundation in product thinking, user research, strategy, roadmaps and AI product concepts.',
  },
  {
    num: '02',
    title: 'Practise',
    description:
      'Work through weekly case studies, product decisions, frameworks, documentation and experiments.',
  },
  {
    num: '03',
    title: 'Build',
    description:
      'Create your own product, take it through execution and showcase the outcome with BuildrX.',
  },
];

export const CURRICULUM_MODULES = [
  {
    weeks: 'WEEKS 01–02',
    number: '01',
    title: 'Product Management Foundations',
    description:
      'Understand the PM role, responsibilities, product lifecycle, stakeholders, product thinking, user problems, research, personas, JTBD and market fundamentals.',
    learnings:
      'PM role and lifecycle · Stakeholder management · User interviews and surveys · Personas and JTBD · Market research',
    tools: [
      { name: 'Jira', icon: 'https://cdn.simpleicons.org/jira', fallback: 'J' },
      { name: 'Notion', icon: 'https://cdn.simpleicons.org/notion', fallback: 'N' },
    ],
    project: 'Create a product problem brief and user persona.',
  },
  {
    weeks: 'WEEKS 03–05',
    number: '02',
    title: 'Strategy, Roadmaps & Product Design',
    description:
      'Translate market opportunities into product direction, delivery plans and clear product requirements.',
    learnings:
      'TAM/SAM/SOM · Competitive analysis · Vision and value proposition · Agile, Scrum and Kanban · PRDs · UX and user journeys',
    tools: [
      { name: 'Jira', icon: 'https://cdn.simpleicons.org/jira', fallback: 'J' },
      { name: 'Confluence', icon: 'https://cdn.simpleicons.org/confluence', fallback: 'C' },
      { name: 'Notion', icon: 'https://cdn.simpleicons.org/notion', fallback: 'N' },
      { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma', fallback: 'F' },
    ],
    project: 'Create a product strategy, roadmap and PRD.',
  },
  {
    weeks: 'WEEKS 06–08',
    number: '03',
    title: 'Prioritisation, MVP & Go-to-Market',
    description:
      'Design product experiences, prioritise features, define success and plan a launch.',
    learnings:
      'Wireframes · RICE, MoSCoW and Kano · MVPs · North Star Metric · Funnels · Pricing and positioning · Launch readiness',
    tools: [
      { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma', fallback: 'F' },
      { name: 'Miro', icon: 'https://cdn.simpleicons.org/miro', fallback: 'M' },
      { name: 'Mixpanel', icon: 'https://cdn.simpleicons.org/mixpanel', fallback: 'M' },
    ],
    project: 'Define an MVP, prioritised backlog and GTM plan.',
  },
  {
    weeks: 'WEEKS 09–10',
    number: '04',
    title: 'Product Frameworks & Experimentation',
    description:
      'Use frameworks and experiments to make evidence-led product decisions.',
    learnings:
      'User segmentation · Cohort analysis · AARRR · Hypothesis-driven development · A/B testing · Data-led prioritisation',
    tools: [
      { name: 'Mixpanel', icon: 'https://cdn.simpleicons.org/mixpanel', fallback: 'M' },
      {
        name: 'Google Analytics',
        icon: 'https://cdn.simpleicons.org/googleanalytics',
        fallback: 'GA',
      },
    ],
    project: 'Design an experiment and interpret its results.',
  },
  {
    weeks: 'WEEKS 11–12',
    number: '05',
    title: 'Technical Foundations for PMs',
    description:
      'Build technical fluency to collaborate with engineering and make informed product decisions.',
    learnings:
      'Frontend and backend basics · Infrastructure · APIs and integrations · Databases · SQL · Analytics instrumentation',
    tools: [
      { name: 'Postman', icon: 'https://cdn.simpleicons.org/postman', fallback: 'P' },
      { name: 'SQL', genericBadge: 'SQL' },
      { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github', fallback: 'G' },
    ],
    project: 'Map an API integration and define product data requirements.',
  },
  {
    weeks: 'WEEKS 13–15',
    number: '06',
    title: 'AI Product Foundations & Discovery',
    description:
      'Understand AI product management, identify suitable use cases and evaluate modern AI systems.',
    learnings:
      'AI vs traditional PM · AI use cases · Data quality and risk · ML basics · LLMs and SLMs · Foundation models · Prompting · Model evaluation',
    tools: [
      { name: 'ChatGPT', icon: 'https://cdn.simpleicons.org/openai', fallback: 'C' },
      { name: 'Gemini', icon: 'https://cdn.simpleicons.org/googlegemini', fallback: 'G' },
      { name: 'Hugging Face', icon: 'https://cdn.simpleicons.org/huggingface', fallback: 'HF' },
    ],
    project: 'Frame an AI product opportunity and model evaluation criteria.',
  },
  {
    weeks: 'WEEKS 16–17',
    number: '07',
    title: 'AI Product Design & Rapid MVPs',
    description:
      'Design AI-specific product experiences and build rapid prototypes and MVPs.',
    learnings:
      'AI PRDs · Data and model constraints · Human-in-the-loop · AI metrics · Rapid AI MVPs · Vibe coding · Workflow automation',
    tools: [
      { name: 'AI assistants', genericBadge: 'AI' },
      { name: 'Prototyping tools', genericBadge: 'UX' },
    ],
    project: 'Build and test an AI-enabled product prototype.',
  },
  {
    weeks: 'WEEK 18',
    number: '08',
    title: 'Advanced AI Systems & Career Readiness',
    description:
      'Explore advanced AI systems, responsible AI and prepare to present and defend your product work.',
    learnings:
      'RAG · MCP · AI agents and multi-agent systems · Bias, privacy and responsible AI · Interview preparation · Capstone',
    tools: [
      { name: 'RAG', genericBadge: 'RAG' },
      { name: 'MCP', genericBadge: 'MCP' },
      { name: 'Agent frameworks', genericBadge: 'AGT' },
    ],
    project: 'Prepare the capstone and explain product decisions.',
  },
];

export const CAPSTONE_DATA = {
  kicker: 'Final capstone project',
  title: 'Build, Launch and Showcase Your Product',
  description:
    'Bring the product lifecycle together: validate a real user problem, define your product strategy, write the PRD, prioritise an MVP, prototype the experience, test assumptions and present your product decisions with a clear launch plan.',
  pills: [
    'Problem validation',
    'Product strategy',
    'PRD & roadmap',
    'MVP prototype',
    'Launch plan',
  ],
  outcomes: [
    'Validated problem and target user',
    'Product strategy, PRD and prioritised roadmap',
    'Working prototype and product presentation',
  ],
};

export const PROJECT_STEPS = [
  {
    num: '01',
    title: 'Problem Discovery & Validation',
    description:
      'Identify a real user problem, conduct research, define personas and validate the opportunity.',
  },
  {
    num: '02',
    title: 'Product Strategy & Roadmap',
    description:
      'Define the product vision, value proposition, priorities, roadmap and success metrics.',
  },
  {
    num: '03',
    title: 'PRD & UX Prototype',
    description:
      'Translate user needs into requirements, user journeys, wireframes and a prioritised backlog.',
  },
  {
    num: '04',
    title: 'MVP & Go-to-Market',
    description:
      'Scope an MVP, plan experiments, define launch positioning and map distribution.',
  },
  {
    num: '05',
    title: 'AI Product Prototype',
    description:
      'Apply AI product practices to build a prototype using modern AI tools and workflows.',
  },
  {
    num: '06',
    title: 'BuildrX Product Showcase',
    description:
      'Present your product, decisions, execution and outcomes as visible proof of work.',
  },
];

export const TOOLS_LIST = [
  { name: 'Jira', icon: 'https://cdn.simpleicons.org/atlassian' },
  { name: 'Asana', icon: 'https://cdn.simpleicons.org/asana' },
  { name: 'Notion', icon: 'https://cdn.simpleicons.org/notion' },
  { name: 'Confluence', icon: 'https://cdn.simpleicons.org/confluence' },
  { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma' },
  { name: 'Miro', icon: 'https://cdn.simpleicons.org/miro' },
  { name: 'Mixpanel', icon: 'https://cdn.simpleicons.org/mixpanel' },
  { name: 'Google Analytics', icon: 'https://cdn.simpleicons.org/googleanalytics' },
  { name: 'Postman', icon: 'https://cdn.simpleicons.org/postman' },
  { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github' },
  { name: 'ChatGPT', icon: 'https://cdn.simpleicons.org/openai' },
  { name: 'Gemini', icon: 'https://cdn.simpleicons.org/googlegemini' },
  { name: 'Hugging Face', icon: 'https://cdn.simpleicons.org/huggingface' },
  { name: 'LangChain', icon: 'https://cdn.simpleicons.org/langchain' },
  { name: 'LangGraph', icon: 'https://cdn.simpleicons.org/langgraph' },
  { name: 'Claude', icon: 'https://cdn.simpleicons.org/anthropic' },
];

export const LIVE_LEARNING_CARDS = [
  {
    tag: 'Live classes',
    title: 'Learn with instructors',
    description:
      'Attend sessions covering product concepts, frameworks, case studies and practical applications.',
  },
  {
    tag: 'Mentor connect',
    title: 'Get your questions answered',
    description:
      'Connect with mentors for guidance on concepts, assignments and projects.',
  },
  {
    tag: 'Assignments',
    title: 'Practise what you learn',
    description:
      'Apply module concepts through assignments and practical exercises.',
  },
];

export const MENTORS = [
  {
    initials: 'RR',
    name: 'Ruchir Rana',
    role: 'Product Head',
    company: 'AcceleratorX',
  },
  {
    initials: 'SC',
    name: 'Subhasis Chandra',
    role: 'Senior PM',
    company: 'Publicis Sapient',
  },
  {
    initials: 'NS',
    name: 'Nitya Sagar',
    role: 'Senior PM',
    company: 'Valuepitch',
  },
  {
    initials: 'RA',
    name: 'Ravi Ahlawat',
    role: 'Senior PM',
    company: 'Paytm',
  },
];

export const FEEDBACK_CARDS = [
  {
    num: '01',
    title: 'Concept guidance',
    description: 'Clarify product concepts, frameworks and decisions as you progress.',
  },
  {
    num: '02',
    title: 'Case study feedback',
    description: 'Discuss your approach to product problems, trade-offs and prioritisation.',
  },
  {
    num: '03',
    title: 'Product guidance',
    description: 'Get direction while shaping your product strategy, requirements and execution.',
  },
  {
    num: '04',
    title: 'Career preparation',
    description: 'Practise presenting your product thinking and defending your decisions.',
  },
];

export const CAREER_SERVICES = [
  {
    num: '01',
    title: 'Resume and portfolio',
    description: 'Present your product work, decisions and outcomes clearly.',
  },
  {
    num: '02',
    title: 'Interview preparation',
    description: 'Practise product sense, execution, strategy and case interviews.',
  },
  {
    num: '03',
    title: 'Career guidance',
    description: 'Explore product roles aligned with your experience and goals.',
  },
  {
    num: '04',
    title: 'Product showcase',
    description: 'Use your BYDP work and BuildrX showcase to demonstrate capability.',
  },
];

export const CAREER_ROLES = [
  { title: 'Associate Product Manager', subtitle: 'Product fundamentals and execution' },
  { title: 'Product Manager', subtitle: 'Product strategy and lifecycle ownership' },
  { title: 'Product Owner', subtitle: 'Backlog, prioritisation and delivery' },
  { title: 'AI Product Manager', subtitle: 'AI-enabled products and workflows' },
];

export const CERTIFICATIONS = [
  {
    kicker: 'Credential 01',
    title: 'AcceleratorX Certification',
    description:
      'Earn the AcceleratorX Nano-Degree in AI Product Management after completing the program requirements. Your credential includes a verified badge and a unique verification ID.',
    brand: 'ACCELERATORX',
    smallLabel: 'Certificate of Completion',
    certTitle: 'Nano-Degree in\nAI Product Management',
    certSubtitle:
      'This credential recognises successful completion of the programme requirements.',
    footerLeft: 'Unique Verification ID',
    seal: 'AX',
    footerRight: 'AcceleratorX',
    variant: 'acceleratorx',
    reverse: false,
  },
  {
    kicker: 'Credential 02',
    title: 'IBM Industry Certification',
    description:
      'Complete the IBM AI Product Management certification requirements included in the AcceleratorX + IBM program and earn your separate IBM credential.',
    brand: 'IBM',
    smallLabel: 'Professional Certificate',
    certTitle: 'Product Management',
    certSubtitle: 'IBM Industry Certification',
    footerLeft: 'IBM Skills Credential',
    seal: 'IBM',
    footerRight: 'IBM',
    variant: 'ibm',
    reverse: true,
  },
];

export const PRICING_FEATURES = [
  '18-week program · 4 sessions per week',
  'IBM industry certification',
  'Advanced AI Product & Automation learning track',
  'Exclusive product strategy workshops',
  'Advanced product case simulations',
  'Dedicated career support and mentorship',
  'Build Your Dream Product (BYDP)',
  'Product showcase through BuildrX',
  'Career support',
];

export const FAQS = [
  {
    q: 'Who is this program for?',
    a: 'The program is designed for product owners, associate product managers, product managers, business analysts, marketers, designers, developers, founders, career switchers and beginners.',
  },
  {
    q: 'Do I need a technical or coding background?',
    a: 'The brochure states that the program is designed to build product leadership skills without technical prerequisites.',
  },
  {
    q: 'How long is the program?',
    a: 'The program runs for 18 weeks, with four sessions per week.',
  },
  {
    q: 'What will I learn?',
    a: 'The roadmap covers core product management in Weeks 1–12 and AI Product Management in Weeks 13–18, including discovery, strategy, roadmaps, PRDs, UX, MVPs, analytics, LLMs, AI product design, RAG and AI agents.',
  },
  {
    q: 'Will I build a real product?',
    a: 'Yes. The Build Your Dream Product (BYDP) experience is designed around building your own product from idea to execution. BuildrX is the platform described in the brochure for hosting and showcasing the product.',
  },
  {
    q: 'Which tools are covered?',
    a: 'The brochure lists Jira, Asana, Notion, Confluence, Figma, Miro, Mixpanel, Google Analytics, Postman, GitHub, ChatGPT, Claude, Gemini, Hugging Face, LangChain and LangGraph.',
  },
  {
    q: 'Who are the mentors?',
    a: 'The brochure features Ruchir Rana, Subhasis Chandra, Nitya Sagar and Ravi Ahlawat. Confirm active-cohort mentor availability with the admissions team.',
  },
  {
    q: 'What certification is included?',
    a: 'The pricing reference supplied shows an AcceleratorX + IBM Advanced AI Product Management Program and includes IBM Industry Certification. Confirm the exact credential title and completion requirements with admissions.',
  },
  {
    q: 'What is the program fee?',
    a: 'The supplied pricing screenshot lists the AcceleratorX + IBM Advanced AI Product Management Program at ₹59,999 + GST. Confirm current cohort pricing and availability with admissions.',
  },
];
