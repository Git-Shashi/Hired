# Hired - Full Stack Job Portal 🚀

## Project Overview

**Hired** is a modern, full-stack job portal application that connects job seekers with employers in a seamless, user-friendly platform. Built with cutting-edge technologies, it provides a comprehensive solution for recruitment and job searching.

## 🛠️ Tech Stack

### Frontend
- **React.js** - Modern JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Shadcn UI** - Beautiful, accessible component library
- **Vite** - Fast build tool and development server

### Backend & Database
- **Supabase** - Open-source Firebase alternative
  - Real-time database
  - Authentication
  - Storage
  - Row Level Security (RLS)

### Authentication
- **Clerk** - Modern authentication and user management solution
  - Social logins
  - Email/password authentication
  - User profiles and sessions

## ✨ Key Features

### For Job Seekers
- **Browse Jobs** - Search and filter through available job listings
- **Apply to Jobs** - Submit applications with resume upload
- **Track Applications** - Monitor application status and progress
- **Profile Management** - Create and maintain professional profiles
- **Save Jobs** - Bookmark interesting positions for later

### For Recruiters/Employers
- **Post Jobs** - Create detailed job listings with requirements
- **Manage Applications** - Review and respond to candidate applications
- **Company Profiles** - Showcase company information and culture
- **Application Tracking** - Monitor hiring pipeline and candidate progress
- **Dashboard Analytics** - Track job posting performance

### General Features
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Real-time Updates** - Live notifications for applications and messages
- **Advanced Search** - Filter by location, salary, skills, experience level
- **User Roles** - Separate interfaces for job seekers and recruiters

## 🏗️ Architecture

```
Frontend (React + Tailwind + Shadcn)
         ↕️
Authentication Layer (Clerk)
         ↕️
Backend Services (Supabase)
         ↕️
Database (PostgreSQL via Supabase)
```

## 🔐 Environment Setup

The project requires three essential environment variables:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

## 🎯 Project Highlights

### Modern Development Practices
- **Component-based Architecture** - Reusable and maintainable React components
- **Utility-first CSS** - Rapid styling with Tailwind CSS
- **Type Safety** - Better development experience with proper typing
- **Real-time Features** - Live updates using Supabase subscriptions

### User Experience Focus
- **Intuitive Interface** - Clean, modern design with Shadcn UI components
- **Fast Performance** - Optimized with Vite build tool
- **Accessibility** - WCAG compliant components from Shadcn
- **Mobile Responsive** - Works perfectly on all device sizes

### Scalable Backend
- **PostgreSQL Database** - Robust relational database through Supabase
- **Real-time Subscriptions** - Live data updates
- **File Storage** - Resume and document uploads
- **Row Level Security** - Built-in data protection

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Git-Shashi/Hired.git
   cd Hired
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Create a `.env` file in the root directory
   - Add your Supabase and Clerk credentials

4. **Start development server**
   ```bash
   npm run dev
   ```

## 🎨 UI/UX Features

- **Dark/Light Mode** - Theme switching capability
- **Loading States** - Smooth loading animations
- **Error Handling** - User-friendly error messages
- **Form Validation** - Client-side and server-side validation
- **Skeleton Loaders** - Better perceived performance

## 🔍 Technical Implementation

### State Management
- React hooks for local state
- Supabase for global state synchronization
- Context API for theme and user management

### Data Flow
1. User authentication through Clerk
2. Protected routes based on user roles
3. Real-time data sync with Supabase
4. Optimistic updates for better UX

### Security Features
- Row Level Security (RLS) policies
- JWT token validation
- Protected API endpoints
- Input sanitization

## 📱 Responsive Design

The application is fully responsive and provides optimal experience across:
- **Desktop** - Full-featured interface with advanced filtering
- **Tablet** - Adapted layout for touch interactions
- **Mobile** - Streamlined interface for on-the-go job searching

## 🎯 Learning Outcomes

This project demonstrates proficiency in:
- Modern React development patterns
- Full-stack application architecture
- Database design and management
- Authentication and authorization
- Responsive web design
- Real-time application features
- Modern deployment practices

## 🌟 Future Enhancements

Potential features for expansion:
- **AI-powered job matching**
- **Video interview integration**
- **Skills assessment tests**
- **Company reviews and ratings**
- **Salary insights and trends**
- **Advanced analytics dashboard**

---

**Hired** represents a comprehensive solution to modern recruitment challenges, showcasing the power of combining React's flexibility with Supabase's backend capabilities and Clerk's authentication services.