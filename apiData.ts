export const patientData = [
  {
    id: 1,
    firstName: "Aarav",
    lastName: "Sharma",
    diagnosedWith: "autism",
    dateOfBirth: "2015 May 10",
    gender: "male",
    email: "aarav.sharma@example.com",
    phone: "+91 98765 43210",
    preferredLanguage: "Hindi",
    address: "45 MG Road, Mumbai, India",
    additionalNotes: "Requires occupational therapy and structured learning.",
  },
  {
    id: 2,
    firstName: "Emily",
    lastName: "Davis",
    diagnosedWith: "down-syndrome",
    dateOfBirth: "2016 Jul 22",
    gender: "female",
    email: "emily.davis@example.com",
    phone: "+1 (415) 234-5678",
    preferredLanguage: "english",
    address: "101 Elm Street, San Francisco, CA, USA",
    additionalNotes: "Receives speech therapy and special education support.",
  },
  {
    id: 3,
    firstName: "Rohan",
    lastName: "Mehta",
    diagnosedWith: "autism",
    dateOfBirth: "2013 Nov 3",
    gender: "male",
    email: "rohan.mehta@example.com",
    phone: "+91 90000 12345",
    preferredLanguage: "english",
    address: "23 Residency Road, Bangalore, India",
    additionalNotes:
      "Prefers non-verbal communication and sensory-friendly environments.",
  },
  {
    id: 4,
    firstName: "Sophia",
    lastName: "Martinez",
    diagnosedWith: "other",
    dateOfBirth: "2017 Jan 15",
    gender: "female",
    email: "sophia.martinez@example.com",
    phone: "+34 600 987 654",
    preferredLanguage: "spanish",
    address: "Av. de la Constitución, Madrid, Spain",
    additionalNotes:
      "Mild developmental delay; attends early intervention programs.",
  },
  {
    id: 5,
    firstName: "Noah",
    lastName: "Anderson",
    diagnosedWith: "down-syndrome",
    dateOfBirth: "2014 Sep 8",
    gender: "male",
    email: "noah.anderson@example.com",
    phone: "+1 (212) 555-0198",
    preferredLanguage: "english",
    address: "789 Park Avenue, New York, NY, USA",
    additionalNotes:
      "Engages well in group therapy; enjoys music-based learning.",
  },
];

export const tasks = [
  {
    id: 1,
    patientId: 2, // Emily Davis (Down Syndrome)
    category: "Social Skills",
    name: "Greetings Practice",
    description: "Practice saying hello and goodbye with eye contact",
    difficulty: "Easy",
    status: "Completed",
    timeSpent: 10,
    successRate: 80,
    date: "2025-03-20",
  },
  {
    id: 2,
    patientId: 2, // Emily Davis
    category: "Self-Help",
    name: "Brushing Teeth",
    description: "Follow steps to brush teeth independently",
    difficulty: "Medium",
    status: "In Progress",
    timeSpent: 15,
    successRate: 60,
    date: "2025-03-21",
  },
  {
    id: 3,
    patientId: 5, // Noah Anderson (Down Syndrome)
    category: "Motor Skills",
    name: "Button Practice",
    description: "Practice buttoning a shirt",
    difficulty: "Medium",
    status: "Completed",
    timeSpent: 12,
    successRate: 85,
    date: "2025-03-22",
  },
  {
    id: 4,
    patientId: 5, // Noah Anderson
    category: "Communication",
    name: "Picture Naming",
    description: "Identify objects in pictures",
    difficulty: "Easy",
    status: "Completed",
    timeSpent: 20,
    successRate: 70,
    date: "2025-03-23",
  },
  {
    id: 5,
    patientId: 2, // Emily Davis
    category: "Social Skills",
    name: "Turn Taking",
    description: "Practice taking turns in a game",
    difficulty: "Medium",
    status: "Failed",
    timeSpent: 25,
    successRate: 40,
    date: "2025-03-24",
  },
  {
    id: 6,
    patientId: 5, // Noah Anderson
    category: "Self-Help",
    name: "Putting on Shoes",
    description: "Learn to put on shoes with velcro",
    difficulty: "Easy",
    status: "Completed",
    timeSpent: 8,
    successRate: 90,
    date: "2025-03-25",
  },
];

export const studyMaterials = [
  {
    category: "Social Skills",
    items: [
      {
        title: "Guide to Social Interaction",
        type: "PDF",
        link: "https://example.com/social-interaction-guide.pdf",
        description: "A comprehensive guide to improving social skills.",
        size: "2.3 MB",
      },
      {
        title: "Making Friends Video",
        type: "Video",
        link: "https://example.com/making-friends-video",
        description: "A short video on building friendships.",
        duration: "5:32",
      },
    ],
  },
  {
    category: "Self-Help Tasks",
    items: [
      {
        title: "Daily Routine Checklist",
        type: "PDF",
        link: "https://example.com/daily-routine-checklist.pdf",
        description: "A checklist for managing daily self-help tasks.",
        size: "1.5 MB",
      },
      {
        title: "Self-Care Tips for Stress Relief",
        type: "PDF",
        link: "https://example.com/self-care-stress-relief.pdf",
        description:
          "Helpful tips for managing stress and practicing self-care.",
        size: "2.1 MB",
      },
    ],
  },
  {
    category: "Motor Skills",
    items: [
      {
        title: "Motor Skills Exercises",
        type: "Text",
        content:
          "Practice these exercises daily: 1. Finger tapping (10 mins), 2. Ball squeezing (5 mins).",
      },
      {
        title: "Balance Training Guide",
        type: "PDF",
        link: "https://example.com/balance-training-guide.pdf",
        description: "Exercises to improve balance and coordination.",
        size: "3.0 MB",
      },
    ],
  },
  {
    category: "Communication",
    items: [
      {
        title: "Basic Communication Tips",
        type: "PDF",
        link: "https://example.com/communication-tips.pdf",
        description: "Tips for improving verbal and non-verbal communication.",
        size: "1.8 MB",
      },
      {
        title: "Active Listening Skills Video",
        type: "Video",
        link: "https://example.com/active-listening-skills-video",
        description: "A video on enhancing active listening skills.",
        duration: "7:45",
      },
    ],
  },
  {
    category: "Emotional Regulation",
    items: [
      {
        title: "Coping Mechanisms for Anxiety",
        type: "PDF",
        link: "https://example.com/coping-mechanisms-anxiety.pdf",
        description: "A guide to dealing with anxiety and stress effectively.",
        size: "2.7 MB",
      },
      {
        title: "Mindfulness Techniques",
        type: "Video",
        link: "https://example.com/mindfulness-techniques-video",
        description: "A video on mindfulness and emotional regulation.",
        duration: "8:12",
      },
    ],
  },
  {
    category: "Life Skills",
    items: [
      {
        title: "Basic Cooking Skills",
        type: "PDF",
        link: "https://example.com/basic-cooking-skills.pdf",
        description: "Simple cooking techniques for everyday meals.",
        size: "3.0 MB",
      },
      {
        title: "Personal Finance Tips",
        type: "Text",
        content:
          "1. Track your expenses. 2. Set a monthly budget. 3. Save a portion of your income.",
      },
    ],
  },
  {
    category: "Academic Skills",
    items: [
      {
        title: "Study Techniques for Success",
        type: "PDF",
        link: "https://example.com/study-techniques-success.pdf",
        description: "Effective study methods for better learning outcomes.",
        size: "2.2 MB",
      },
      {
        title: "Time Management for Students",
        type: "Video",
        link: "https://example.com/time-management-video",
        description: "A video on time management strategies for students.",
        duration: "6:30",
      },
    ],
  },
  {
    category: "Behavioral Skills",
    items: [
      {
        title: "Behavioral Therapy Techniques",
        type: "PDF",
        link: "https://example.com/behavioral-therapy-techniques.pdf",
        description: "An overview of various behavioral therapy techniques.",
        size: "4.0 MB",
      },
      {
        title: "Positive Reinforcement in Action",
        type: "Video",
        link: "https://example.com/positive-reinforcement-video",
        description:
          "A short video on using positive reinforcement to encourage behavior.",
        duration: "4:15",
      },
    ],
  },
];

export const faqs = [
  {
    question: "How do I track patients progress?",
    answer:
      "Visit the Performance Dashboard to view your task completion rates, daily progress, and skill improvements. Use the time period filter to adjust the view.",
  },
  {
    question: "Where can I find study materials?",
    answer:
      "Go to the Study Material page from your dashboard. It offers resources like PDFs and videos tailored to your goals.",
  },
  {
    question: "How do I add a new task?",
    answer:
      "On the Performance Dashboard, click 'Add Task' in the header to create a new task for yourself or the patient.",
  },
  {
    question: "Who can I contact for technical issues?",
    answer:
      "Use the contact form below or email support@therapyapp.com for assistance.",
  },
];
