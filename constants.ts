import { TeamMember, TimelineEvent, Testimonial, Event } from './types';

export const NAV_LINKS = [
    { name: 'About', href: '#about' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Eureka', href: '#eureka' },
    { name: 'Opn-Source', href: '#opnsource' },
    { name: 'Events', href: '#events' },
    { name: 'Team', href: '#team' },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Kartik D. Sakhare',
    role: 'Team Head',
    description: "The strategic visionary steering the E-Cell ship. Kartik blends leadership with friendship, ensuring the squad not only meets deadlines but also thrives in a collaborative and inspiring environment. He keeps the chaos classy and the team motivated.",
    imageUrl: 'https://i.postimg.cc/wMPvss2v/kartik.png',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'Abhay K. Chonde',
    role: 'Vice-Head',
    description: "The silent strategist turning ambitious plans into actionable results. Abhay's sharp instincts and operational expertise are the bedrock of our execution, providing the clarity and direction needed to navigate complex challenges and keep the team buzzing.",
    imageUrl: 'https://i.postimg.cc/G2pTYsT7/abhay.png',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'Sahil N. Jadhav',
    role: 'Tech Head',
    description: "The wizard behind the wires and the architect of our digital presence. Sahil leads the technical team, transforming ideas into flawless websites and applications. His expertise in modern web technologies ensures our digital experiences are always world-class.",
    imageUrl: 'https://i.postimg.cc/t45kK2g1/sahil.png',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'Vikas V. Hiwale',
    role: 'Event Head',
    description: "The master of execution who makes every event an unforgettable experience. Vikas handles the end-to-end logistics and coordination, ensuring that from ideation to wrap-up, every detail is flawlessly managed. He is the bar for event organization.",
    imageUrl: 'https://i.postimg.cc/k47g2FqN/vikas.png',
    social: { linkedin: '#', twitter: '#' },
  },
   {
    name: 'Sakshi D. Gadekar',
    role: 'Social Media Head',
    description: "The mind behind the moodboard and the voice of our online brand. Sakshi crafts our digital narrative, dancing with algorithms to build an engaged community. Her strategies ensure our message resonates across all social platforms.",
    imageUrl: 'https://i.postimg.cc/SxzWctff/sakshi.png',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'Janhavi S. Mahamune',
    role: 'PR Head',
    description: "The powerhouse of influence and communication. Janhavi builds bridges with media and partners, shaping our public image with flair and focus. She ensures our story is told compellingly and reaches the right audience.",
    imageUrl: 'https://i.postimg.cc/Yq7Yc3k1/janhavi.png',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'Krushna G. Bhosle',
    role: 'Video Creation & Editing Head',
    description: "Our master storyteller in motion. Krushna crafts compelling narratives from raw footage, producing high-impact videos that captivate our audience. He doesn't just edit clips; he directs the visual heartbeat of our content.",
    imageUrl: 'https://i.postimg.cc/L8yN27nC/krushna.png',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'Siya P. Lahoti',
    role: 'Graphic Designer',
    description: "The visual architect who defines our brand's aesthetic. Siya transforms blank canvases into branded brilliance, ensuring every design is not just beautiful but also strategically aligned with our mission. She designs the vibe of E-Cell.",
    imageUrl: 'https://i.postimg.cc/bJgRTnCj/siya.png',
    social: { linkedin: '#', twitter: '#' },
  },
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    date: '28 July 2024',
    title: 'Foundation of E-Cell IICT',
    subtitle: 'Institute of Chemical Technology, Mumbai',
    details: [
      'The Entrepreneurship Cell was officially established at UDICT, ICT Mumbai.',
      'Core objectives set to foster innovation and entrepreneurial mindset among students.',
      'Initial core team formation and planning for the academic year.',
    ]
  },
  {
    date: '1 September 2024',
    title: 'Launch Event',
    subtitle: 'E-Cell IICT',
    details: [
      'Introduction of E-Cell IICT to students, discussing the mission, vision, and upcoming plans.',
      'Engaged over 100 students from various departments.',
      'Conducted a session on entrepreneurship and innovation.',
    ]
  },
  {
    date: '15 September 2024',
    title: 'QR Quest & Srujan',
    subtitle: 'Ideation Contest',
    details: [
        'A fun-filled QR code hunt across the campus to promote entrepreneurial thinking.',
        'Srujan, an idea-pitching competition, saw participation from over 50 teams.',
        'Winners were awarded seed funding and mentorship opportunities.',
    ]
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Being the Head of E-Cell IICT has been a transformative experience. Our goal is to nurture entrepreneurship and innovation, and seeing the enthusiasm among students is truly inspiring. Each event we conduct feels like a step towards a brighter future for young innovators.",
    author: 'Kartik D. Sakhare',
    role: 'Team Head, E-Cell IICT',
    imageUrl: 'https://i.postimg.cc/wMPvss2v/kartik.png',
  },
  {
    quote: "As the Vice-Head, I am constantly amazed by the potential of our team and the students we work with. Our events have shown how eager students are to develop their skills. It's a privilege to be a part of this journey.",
    author: 'Abhay K. Chonde',
    role: 'Vice-Head, E-Cell IICT',
    imageUrl: 'https://i.postimg.cc/G2pTYsT7/abhay.png',
  },
];

export const EVENTS: Event[] = [
  {
    title: 'E-Summit',
    description: 'A grand conclave of entrepreneurs, investors, and students, with keynotes, panels, and networking opportunities.',
    date: 'Coming Soon',
    type: 'Summit'
  },
  {
    title: 'Innovator\'s Talk Series',
    description: 'A monthly series where we invite successful founders and industry experts to share their journey and insights.',
    date: 'Monthly',
    type: 'Webinar'
  },
  {
    title: 'Startup Workshops',
    description: 'Hands-on workshops covering essential startup skills like business model canvas, financial modeling, and pitching.',
    date: 'Bi-Monthly',
    type: 'Workshop'
  },
];