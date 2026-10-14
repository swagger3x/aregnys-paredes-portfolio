// Single source of truth for all site content. Edit here; every section reads from it.

export interface Profile {
  name: string;
  shortName: string;
  initials: string;
  title: string;
  tagline: string[];
  location: string;
  email: string;
  phone: string;
  /** Full profile URL, e.g. https://www.linkedin.com/in/<handle>. Leave empty to hide. */
  linkedin: string;
  resumePdf: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface FocusArea {
  title: string;
  icon: 'sparkles' | 'network' | 'gauge' | 'document' | 'cloud' | 'shield';
  description: string;
  tags: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Role {
  title: string;
  company: string;
  location: string;
  start: string;
  end: string;
  focus: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  start: string;
  end: string;
}

export const profile: Profile = {
  name: 'Aregnys C. Paredes Gomez',
  shortName: 'Aregnys Paredes',
  initials: 'AP',
  title: 'Senior AI / Machine Learning Engineer',
  tagline: ['LLMs & Generative AI', 'Secure Distributed Systems'],
  location: 'Lehigh Acres, FL',
  email: 'aregnysparedes.01@gmail.com',
  phone: '+1 (352) 727-6915',
  linkedin: 'https://www.linkedin.com/in/aregnys-paredes-gomez/',
  resumePdf: '/Aregnys-Paredes-Gomez-Resume.pdf',
};

export const summary =
  'Senior AI Engineer with 14+ years of software engineering experience and 6+ years designing, training, fine-tuning, and deploying machine learning systems in production. Specializes in generative AI, LLM applications, multi-agent systems, NLP, computer vision, and MLOps, built on a strong foundation in full-stack development, networking, and cybersecurity gained delivering secure, high-throughput financial platforms. Works fluently across Python, TypeScript, Java, C/C++, and Rust. Brings a rigorous, evaluation-driven approach to model quality, from data curation and annotation standards through benchmarking and error analysis, using deep engineering experience to improve model performance, reliability, and safety.';

export const stats: Stat[] = [
  { value: '14+', label: 'years in software engineering' },
  { value: '6+', label: 'years shipping production ML' },
  { value: '9', label: 'programming languages' },
];

export const focusAreas: FocusArea[] = [
  {
    title: 'Generative AI & LLMs',
    icon: 'sparkles',
    description:
      'Integrating commercial and open-source LLMs into production workflows with retrieval-augmented generation and structured prompting.',
    tags: ['RAG', 'Fine-tuning', 'OpenAI API', 'Hugging Face'],
  },
  {
    title: 'Multi-Agent Systems',
    icon: 'network',
    description:
      'Coordinating specialized agents for retrieval, extraction, validation, and summarization, with tool use, memory, and guardrails for reliable outputs.',
    tags: ['LangChain', 'Tool use', 'Guardrails'],
  },
  {
    title: 'Model Evaluation & Data Quality',
    icon: 'gauge',
    description:
      'Golden datasets, scoring rubrics, and automated regression tests that track accuracy, hallucination, and consistency, plus labeling guidelines and reviewer calibration.',
    tags: ['Benchmarking', 'Error analysis', 'Annotation'],
  },
  {
    title: 'Document Intelligence',
    icon: 'document',
    description:
      'Pipelines that combine OCR, layout analysis, and LLM-based extraction to turn contracts, invoices, and forms into validated structured data.',
    tags: ['OCR', 'Layout analysis', 'Extraction'],
  },
  {
    title: 'MLOps',
    icon: 'cloud',
    description:
      'Containerized model serving on AWS and Azure, CI/CD for models and prompts, and monitoring for latency, cost, and model drift.',
    tags: ['Docker', 'Kubernetes', 'CI/CD'],
  },
  {
    title: 'AI Security',
    icon: 'shield',
    description:
      'PII redaction, role-based access control, and defenses against prompt injection and data leakage, grounded in years of secure financial systems work.',
    tags: ['PII redaction', 'RBAC', 'Prompt-injection defense'],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: 'AI & Machine Learning',
    skills: [
      'LLM Fine-tuning',
      'Retrieval-Augmented Generation (RAG)',
      'Prompt Engineering',
      'Multi-Agent Systems',
      'NLP',
      'Computer Vision',
      'Deep Learning',
      'Reinforcement Learning',
      'Federated Learning',
      'Neural Architecture Search',
      'Recommendation Engines',
      'Sentiment Analysis',
    ],
  },
  {
    category: 'Model Quality & Data',
    skills: [
      'Model Evaluation & Benchmarking',
      'Error Analysis',
      'Data Labeling & Annotation',
      'Annotation Guidelines',
      'Data Quality Assurance',
      'Feature Engineering',
    ],
  },
  {
    category: 'ML Frameworks & Libraries',
    skills: [
      'PyTorch',
      'TensorFlow',
      'Hugging Face',
      'scikit-learn',
      'LangChain',
      'OpenAI API',
      'NumPy',
      'Pandas',
      'Matplotlib',
      'Seaborn',
    ],
  },
  {
    category: 'Programming Languages',
    skills: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C', 'C++', 'Rust', 'C#', 'SQL'],
  },
  {
    category: 'Backend & Cloud',
    skills: [
      'Node.js',
      'NestJS',
      'Django',
      'FastAPI',
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'Docker',
      'Kubernetes',
      'AWS',
      'Azure',
      'GCP',
    ],
  },
  {
    category: 'Data Engineering',
    skills: ['Data Pipelines', 'ETL/ELT', 'Kafka', 'RabbitMQ', 'Elasticsearch'],
  },
  {
    category: 'Networking & Security',
    skills: [
      'TCP/IP & Network Protocols',
      'Network Architecture',
      'Secure Coding',
      'Authentication & Authorization (OAuth2/JWT)',
      'Encryption',
      'Vulnerability Assessment & Remediation',
      'AI Security (PII Redaction, Prompt-Injection Defense)',
    ],
  },
];

export const experience: Role[] = [
  {
    title: 'Senior AI / Software Engineer',
    company: 'Blackstraw AI',
    location: 'Tampa, FL',
    start: 'Oct 2022',
    end: 'Present',
    focus: 'Generative AI, multi-agent systems, MLOps, document intelligence',
    highlights: [
      'Architect and deploy generative AI solutions for enterprise clients, integrating commercial and open-source LLMs (OpenAI API, Hugging Face) into production workflows using retrieval-augmented generation and structured prompting.',
      'Design multi-agent systems in LangChain that coordinate specialized agents for retrieval, extraction, validation, and summarization, with tool use, memory, and guardrails for reliable outputs.',
      'Build document intelligence pipelines that combine OCR, layout analysis, and LLM-based extraction to convert unstructured documents such as contracts, invoices, and forms into validated structured data.',
      'Fine-tune and evaluate LLMs on domain-specific datasets; create golden datasets, scoring rubrics, and automated regression tests to track accuracy, hallucination, and consistency across model and prompt versions.',
      'Lead data annotation and quality workflows, including labeling guidelines, reviewer calibration, and error analysis that feed targeted improvements back into training and evaluation data.',
      'Own MLOps for AI services: containerized model serving with Docker and Kubernetes on AWS and Azure, CI/CD for models and prompts, and monitoring for latency, cost, and model drift.',
      'Apply security best practices to AI systems, including PII redaction, role-based access control, and defenses against prompt injection and data leakage.',
    ],
  },
  {
    title: 'Machine Learning Engineer',
    company: 'NLP Logix',
    location: 'Jacksonville, FL',
    start: 'Jul 2020',
    end: 'Aug 2022',
    focus: 'Machine learning, NLP, computer vision, data science, AI engineering',
    highlights: [
      'Developed and deployed NLP models for text classification, named entity recognition, and sentiment analysis using PyTorch, TensorFlow, and Hugging Face Transformers.',
      'Built computer vision models for image classification and object detection, handling dataset preparation, augmentation, training, and production deployment.',
      'Engineered end-to-end data pipelines and feature engineering workflows in Python and Pandas, with validation checks to ensure clean, consistent training data.',
      'Ran rigorous model evaluation using cross-validation, precision/recall and confusion-matrix analysis, and error analysis to guide model selection and retraining.',
      'Served models through FastAPI and Django microservices and translated client business problems into measurable ML objectives alongside data science and product teams.',
    ],
  },
  {
    title: 'Full-Stack Developer',
    company: 'Armada Labs',
    location: 'Estero, FL',
    start: 'Mar 2016',
    end: 'May 2020',
    focus: 'Financial software, lending, payments, digital banking',
    highlights: [
      'Built full-stack features for digital banking and lending platforms using Node.js, NestJS, TypeScript, and PostgreSQL/MongoDB.',
      'Developed loan origination and servicing workflows, including application intake, underwriting rules, and repayment scheduling.',
      'Integrated payment processing and designed secure REST APIs with OAuth2/JWT authentication and encryption of sensitive financial data in transit and at rest.',
      'Implemented event-driven services with Kafka and RabbitMQ and Redis caching to improve reliability and responsiveness of transaction flows.',
      'Performed code reviews focused on secure coding and remediated vulnerabilities identified in security assessments.',
    ],
  },
  {
    title: 'Software Developer',
    company: 'EFX Financial Services',
    location: 'Largo, FL',
    start: 'Feb 2012',
    end: 'Jan 2016',
    focus: 'Transaction processing, proprietary financial software',
    highlights: [
      'Developed and maintained high-throughput transaction processing components in C/C++ and Java for proprietary financial software.',
      'Built networked services over TCP/IP, including socket-level communication and message protocols between internal systems.',
      'Optimized performance through multithreading, memory management, and SQL query and stored-procedure tuning.',
      'Implemented security controls including encryption, authentication, and audit logging to protect financial transaction data.',
    ],
  },
];

export const education: Education[] = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'University of Miami',
    location: 'Coral Gables, FL',
    start: '2007',
    end: '2011',
  },
];

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

/** Digits-only phone for tel: links. */
export const phoneHref = `tel:${profile.phone.replace(/[^\d+]/g, '')}`;
