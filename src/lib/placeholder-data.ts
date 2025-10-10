import type { Course } from "./types";
import { placeholderImages } from "./placeholder-images";

const getImage = (id: string) => {
  const image = placeholderImages.find(img => img.id === id);
  return image || { imageUrl: 'https://picsum.photos/seed/placeholder/600/400', imageHint: 'placeholder' };
}

export const placeholderCourses: Course[] = [
  {
    id: "web-dev-101",
    title: "Introduction to Web Development",
    description: "Learn the fundamentals of HTML, CSS, and JavaScript to build your first websites from scratch.",
    instructor: {
      name: "Jane Doe",
      avatarUrl: getImage('avatar-1').imageUrl,
    },
    category: "Development",
    duration: "8 Weeks",
    imageUrl: getImage('course-web-dev').imageUrl,
    imageHint: getImage('course-web-dev').imageHint,
    studentsEnrolled: 1250,
  },
  {
    id: "react-201",
    title: "Advanced React Patterns",
    description: "Take your React skills to the next level with hooks, state management, and performance optimization.",
    instructor: {
      name: "John Smith",
      avatarUrl: getImage('avatar-2').imageUrl,
    },
    category: "Development",
    duration: "6 Weeks",
    imageUrl: getImage('course-react-adv').imageUrl,
    imageHint: getImage('course-react-adv').imageHint,
    studentsEnrolled: 879,
  },
  {
    id: "uiux-101",
    title: "UI/UX Design Principles",
    description: "Discover the principles of great user interface and user experience design to create intuitive products.",
    instructor: {
      name: "Emily White",
      avatarUrl: getImage('avatar-3').imageUrl,
    },
    category: "Design",
    duration: "4 Weeks",
    imageUrl: getImage('course-ui-ux').imageUrl,
    imageHint: getImage('course-ui-ux').imageHint,
    studentsEnrolled: 2134,
  },
  {
    id: "data-sci-101",
    title: "Data Science with Python",
    description: "An introduction to data analysis and machine learning using Python, Pandas, and Scikit-learn.",
    instructor: {
      name: "Michael Brown",
      avatarUrl: getImage('avatar-4').imageUrl,
    },
    category: "Data Science",
    duration: "10 Weeks",
    imageUrl: getImage('course-data-science').imageUrl,
    imageHint: getImage('course-data-science').imageHint,
    studentsEnrolled: 945,
  },
];

export { placeholderImages };
