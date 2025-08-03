# Overview

This is a modern web application for showcasing Roblox User Generated Content (UGC) creations. The application features a gaming-inspired design system with a portfolio gallery for displaying 3D models of hats and clothing items. Built as a full-stack TypeScript application with a React frontend and Express.js backend, it's designed to present UGC assets in an interactive and visually appealing manner.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for fast development and building
- **UI Components**: Extensive use of Radix UI primitives with shadcn/ui component library
- **Styling**: Tailwind CSS with a custom gaming-inspired dark theme featuring cosmic gradients and neon effects
- **3D Rendering**: React Three Fiber (@react-three/fiber) and Drei (@react-three/drei) for interactive 3D model display
- **State Management**: TanStack React Query for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: Vite integration for hot reload and development server
- **Data Storage**: In-memory storage implementation with interface for future database integration
- **Build System**: ESBuild for production bundling

## Design System
- **Color Scheme**: HSL-based color system with CSS custom properties
- **Theme**: Gaming-inspired dark theme with purple (#8B5CF6), cyan (#06B6D4), and dark backgrounds
- **Typography**: System fonts optimized for readability
- **Components**: Comprehensive UI component library covering forms, navigation, feedback, and layout
- **Animations**: CSS animations for floating elements, cosmic rotations, and smooth transitions

## Database Schema
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Location**: Shared schema definitions in `/shared/schema.ts`
- **Migrations**: Drizzle Kit for database migrations stored in `/migrations`
- **Current Tables**: Users table with id, username, and password fields

## API Structure
- **Pattern**: RESTful API with `/api` prefix
- **Middleware**: Request logging, JSON parsing, and error handling
- **Storage Interface**: Abstracted storage layer supporting both in-memory and database implementations
- **Error Handling**: Centralized error handling with proper HTTP status codes

# External Dependencies

## Database
- **PostgreSQL**: Primary database with Neon Database serverless driver (@neondatabase/serverless)
- **Connection**: Environment variable `DATABASE_URL` for database connection

## UI Libraries
- **Radix UI**: Complete suite of accessible UI primitives for complex components
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Type-safe variant styling system
- **CLSX & Tailwind Merge**: Utility libraries for conditional styling

## 3D Graphics
- **Three.js**: Core 3D graphics library
- **React Three Fiber**: React renderer for Three.js
- **React Three Drei**: Helper components and utilities for React Three Fiber

## Development Tools
- **Vite**: Build tool and development server
- **ESBuild**: JavaScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer
- **TypeScript**: Type checking and compilation

## Form & Validation
- **React Hook Form**: Form state management and validation
- **Zod**: Schema validation library
- **Hookform Resolvers**: Integration between React Hook Form and validation libraries

## Utilities
- **Date-fns**: Date manipulation and formatting
- **Nanoid**: Unique ID generation
- **CMDK**: Command palette component
- **Sonner**: Toast notification system