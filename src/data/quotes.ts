export interface Quote {
  id: string;
  text: string;
  author: string;
  category: string;
}

export const quotes: Quote[] = [
  {
    id: "1",
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "success"
  },
  {
    id: "2",
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
    category: "success"
  },
  {
    id: "3",
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    category: "motivational"
  },
  {
    id: "4",
    text: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle",
    category: "wisdom"
  },
  {
    id: "5",
    text: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins",
    category: "motivational"
  },
  {
    id: "6",
    text: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein",
    category: "wisdom"
  },
  {
    id: "7",
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    category: "success"
  },
  {
    id: "8",
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
    category: "motivational"
  },
  {
    id: "9",
    text: "Don't let yesterday take up too much of today.",
    author: "Will Rogers",
    category: "life"
  },
  {
    id: "10",
    text: "You learn more from failure than from success. Don't let it stop you. Failure builds character.",
    author: "Unknown",
    category: "wisdom"
  },
  {
    id: "11",
    text: "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you.",
    author: "Steve Jobs",
    category: "success"
  },
  {
    id: "12",
    text: "People who are crazy enough to think they can change the world, are the ones who do.",
    author: "Rob Siltanen",
    category: "motivational"
  },
  {
    id: "13",
    text: "We don't make mistakes, just happy little accidents.",
    author: "Bob Ross",
    category: "life"
  },
  {
    id: "14",
    text: "Whether you think you can or you think you can't, you're right.",
    author: "Henry Ford",
    category: "motivational"
  },
  {
    id: "15",
    text: "The only person you are destined to become is the person you decide to be.",
    author: "Ralph Waldo Emerson",
    category: "wisdom"
  },
  {
    id: "16",
    text: "Go confidently in the direction of your dreams. Live the life you have imagined.",
    author: "Henry David Thoreau",
    category: "life"
  },
  {
    id: "17",
    text: "When you have a dream, you've got to grab it and never let go.",
    author: "Carol Burnett",
    category: "motivational"
  },
  {
    id: "18",
    text: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
    author: "Jimmy Dean",
    category: "wisdom"
  },
  {
    id: "19",
    text: "No matter what you're going through, there's a light at the end of the tunnel.",
    author: "Demi Lovato",
    category: "motivational"
  },
  {
    id: "20",
    text: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    author: "Albert Einstein",
    category: "life"
  },
  {
    id: "21",
    text: "Believing in yourself is the first secret to success.",
    author: "Unknown",
    category: "success"
  },
  {
    id: "22",
    text: "Life is 10% what happens to you and 90% how you react to it.",
    author: "Charles R. Swindoll",
    category: "wisdom"
  },
  {
    id: "23",
    text: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
    category: "wisdom"
  },
  {
    id: "24",
    text: "Your limitation—it's only your imagination.",
    author: "Unknown",
    category: "motivational"
  },
  {
    id: "25",
    text: "Push yourself, because no one else is going to do it for you.",
    author: "Unknown",
    category: "motivational"
  }
];

export const categories = ["all", "motivational", "wisdom", "success", "life"];