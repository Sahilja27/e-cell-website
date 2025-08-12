export interface TeamMember {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
  social: {
    linkedin: string;
    twitter: string;
  };
}

export interface TimelineEvent {
  date: string;
  title: string;
  subtitle: string;
  details: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  imageUrl: string;
}

export interface Event {
  title: string;
  description: string;
  date: string;
  type: string;
}