<div align="center">

# 🛡️ EmpowerHer
### Gender-Based Violence Reporting Platform

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/mongodb-7.0+-green.svg)](https://www.mongodb.com/)

> **Empowering victims of gender-based violence with secure reporting, real-time case tracking, and comprehensive support services.**

### 🌐 Live Demo & Resources

[![Website](https://img.shields.io/badge/🌐_Live_Website-EmpowerHer-purple?style=for-the-badge)](https://empowerhersquad-44.vercel.app/)
[![API](https://img.shields.io/badge/🔌_Backend_API-Online-green?style=for-the-badge)](https://squad-44.onrender.com)
[![Pitch Deck](https://img.shields.io/badge/📊_Pitch_Deck-View-blue?style=for-the-badge)](https://gamma.app/docs/EMPOWERHER-Secure-GBV-Reporting-Justice-Platform-8n4wknzlpzwetwu)

**Quick Links:**
- 🌐 **Live Website**: [empowerhersquad-44.vercel.app](https://empowerhersquad-44.vercel.app/)
- 🔌 **Backend API**: [squad-44.onrender.com](https://squad-44.onrender.com)
- 📊 **Pitch Deck**: [View Presentation](https://gamma.app/docs/EMPOWERHER-Secure-GBV-Reporting-Justice-Platform-8n4wknzlpzwetwu)

</div>

---

## 🌟 About EmpowerHer

EmpowerHer is a **secure, accessible platform** dedicated to empowering victims of gender-based violence by providing a safe channel for reporting incidents and tracking case progress. We believe that **every victim deserves justice, support, and protection**.

### 🎯 Our Mission

EmpowerHer connects victims with the resources they need while ensuring complete confidentiality and security. Our platform bridges the gap between victims, law enforcement, and support services to create a comprehensive support ecosystem.

### 🔗 Access EmpowerHer

- **🌐 Live Website**: [https://empowerhersquad-44.vercel.app/](https://empowerhersquad-44.vercel.app/) - Explore the full application
- **🔌 Backend API**: [https://squad-44.onrender.com](https://squad-44.onrender.com) - API documentation and endpoints
- **📊 Pitch Deck**: [View Full Presentation](https://gamma.app/docs/EMPOWERHER-Secure-GBV-Reporting-Justice-Platform-8n4wknzlpzwetwu) - Learn more about our mission and impact

---

## 📋 Table of Contents

- [About EmpowerHer](#-about-empowerher)
- [Key Features](#-key-features)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Meet the Team](#-meet-the-team)
- [Getting Started](#-getting-started)
- [API Documentation](#-api-documentation)
- [Deployment Guide](#-deployment-guide)
- [Live Demo & Resources](#-live-demo--resources)
- [Support & Contact](#-support--contact)

---

## ✨ Key Features

<div align="center">

### 🔥 What Makes EmpowerHer Special?

</div>

| Feature | Description |
|---------|-------------|
| 🔐 **Secure Reporting** | End-to-end encrypted, confidential incident reporting with anonymous options |
| 📊 **Real-Time Tracking** | Live status updates from submission to resolution with complete transparency |
| 🤖 **AI Helpline** | 24/7 AI-powered chat support for immediate assistance and guidance |
| 📱 **Mobile-First** | Fully responsive design that works seamlessly on all devices |
| 👥 **Support Network** | Direct connection to advocates, legal resources, and counseling services |
| 🔒 **Enterprise Security** | Bank-level security with role-based access control and audit trails |
| 📧 **Smart Notifications** | Automated email updates for case status changes and important events |
| 🌐 **API Integration** | Seamless integration with police databases and third-party services |

---

## 🎯 Core Functionalities

### 🔐 Authentication & Authorization
- **User Registration & Login**: Secure account creation and authentication
- **Role-Based Access Control**: Three user roles (User, Admin, Officer)
- **JWT Token Authentication**: Secure token-based authentication
- **Admin ID Login**: Support for admin badge number login (ADMIN-XXXX format)
- **Session Management**: 7-day token expiration with refresh capabilities
- **Password Security**: bcrypt password hashing with configurable rounds

### 📝 Incident Reporting
- **Multi-Step Report Form**: Intuitive 4-step form process
  - Step 1: Personal Information (with anonymous option)
  - Step 2: Incident Details (type, date, time, location, description)
  - Step 3: Additional Information (witnesses, evidence, urgency)
  - Step 4: Consent & Privacy
- **Incident Types Supported**:
  - Physical Violence
  - Sexual Violence
  - Emotional/Psychological Abuse
  - Economic Abuse
  - Digital/Online Harassment
  - Stalking
  - Threats/Intimidation
  - Other
- **Urgency Levels**: Low, Medium, High, Emergency
- **Anonymous Reporting**: Option to submit reports without linking to account
- **Consent Management**: Explicit consent for contact and information sharing
- **Automatic OB Number Generation**: Unique identifier for each report
- **Evidence Documentation**: Support for witness information and evidence description

### 📊 Case Management
- **Real-Time Status Tracking**: Live updates on case progress
- **Case Status Workflow**:
  - Submitted
  - Under Review
  - Investigating
  - Case Assigned
  - In Progress
  - Ongoing
  - Summoning
  - Invited to Court
  - Resolved
  - Completed
  - Closed
  - Referred
- **Officer Assignment**: Assign cases to specific officers with contact details
- **Handling Parties Tracking**: Track all parties involved (officers, prosecutors, lawyers, judges)
- **Status Updates History**: Complete audit trail of all status changes
- **Case Notes**: Public and private notes management
- **Next Steps Tracking**: Action items with due dates and completion status
- **Court Reference Numbers**: Support for police and court case references

### 👥 User Dashboard
- **Personal Dashboard**: View all user reports in one place
- **Report Filtering**: Filter by status, urgency, or date
- **Report Details View**: Comprehensive view of each report
- **Status Updates**: Real-time notifications of case status changes
- **Quick Actions**: Quick access to report incident, view reports, chat with helpline
- **Case Timeline**: Visual timeline of case progress

### 🤖 AI-Powered Helpline Chat
- **AI Assistant Integration**: 24/7 AI-powered chat support
- **Contextual Responses**: Keyword-based intelligent responses
- **Support Categories**:
  - Greetings and introductions
  - Emotional support
  - Resource information
  - Emergency guidance
- **Resource Suggestions**: Automated suggestions for support services
- **Confidential Chat**: Secure and private conversations
- **Emergency Alerts**: Immediate emergency contact information (1195)

### 👨‍💼 Admin Dashboard
- **Dashboard Statistics**:
  - Total Reports
  - Pending Reports
  - Urgent Reports
  - Resolved Reports
- **Report Management**:
  - View all reports
  - Update case status
  - Assign officers
  - Add case notes
  - Manage handling parties
- **User Management**:
  - View all users
  - Create new users
  - Update user information
  - Manage user roles
  - Activate/deactivate accounts
- **Bulk Operations**: Mass status updates and assignments

### 🔍 Audit Trail
- **Complete Activity Logging**: Track all system activities
- **User Action Tracking**: Monitor all user actions
- **Report Modification History**: Complete history of report changes
- **Admin Action Logs**: Track administrative actions
- **Timeline View**: Visual representation of all activities

### 🔒 Security Features
- **End-to-End Encryption**: Secure data transmission
- **Helmet.js Security Headers**: Protection against common web vulnerabilities
- **Rate Limiting**: Prevent abuse with request rate limiting (100 requests per 15 minutes)
- **Input Validation**: Comprehensive input validation using express-validator
- **CORS Configuration**: Secure cross-origin resource sharing
- **Password Hashing**: bcrypt with configurable rounds
- **JWT Token Security**: Secure token generation and validation
- **File Upload Security**: Secure file handling with size limits

### 📧 Email Notifications
- **Report Confirmation**: Email confirmation upon report submission
- **Status Update Notifications**: Notify users of case status changes
- **Assignment Notifications**: Notify when cases are assigned
- **Custom Email Templates**: Configurable email templates

### 🌐 API Integration
- **Police Database Integration**: Integration with police systems for OB number generation
- **Payment Gateway**: Paystack integration for future premium features
- **Email Service**: Nodemailer integration for notifications
- **Real-time Updates**: Socket.io support for real-time notifications

### 📱 Responsive Design
- **Mobile-First Approach**: Fully responsive across all devices
- **Modern UI/UX**: Beautiful, intuitive interface using Tailwind CSS
- **Animations**: Smooth animations using Framer Motion
- **Accessibility**: WCAG-compliant design considerations

---

## 🛠 Technology Stack

### Frontend
- **Framework**: Next.js 14.0.4 (React 18.2.0)
- **Language**: TypeScript 5.3.3
- **Styling**: Tailwind CSS 3.3.6
- **UI Components**: Headless UI, Heroicons
- **Animations**: Framer Motion 10.16.16
- **Forms**: React Hook Form 7.48.2, Zod 3.22.4
- **HTTP Client**: Axios 1.6.2
- **Notifications**: React Hot Toast 2.4.1
- **Real-time**: Socket.io Client 4.7.4
- **Date Handling**: date-fns 2.30.0
- **Encryption**: Crypto-JS 4.2.0

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js 4.18.2
- **Database**: MongoDB 8.0.3 (Mongoose ODM)
- **Authentication**: JWT (jsonwebtoken 9.0.2)
- **Security**: Helmet 7.1.0, bcryptjs 2.4.3
- **Validation**: express-validator 7.0.1
- **File Upload**: Multer 1.4.5-lts.1
- **Email**: Nodemailer 6.9.7
- **Real-time**: Socket.io 4.7.4
- **Utilities**: uuid 9.0.1, compression 1.7.4
- **Logging**: Morgan 1.10.0

### DevOps & Deployment
- **Containerization**: Docker, Docker Compose
- **Deployment Platforms**: 
  - Frontend: Vercel, Netlify
  - Backend: Railway, Render
- **Environment Management**: dotenv 16.3.1
- **CI/CD**: GitHub Actions (configurable)

---

## 📁 Project Structure

```
EmpowerHer/
│
├── backend/                          # Backend API Server
│   ├── src/
│   │   ├── middleware/              # Custom middleware
│   │   │   └── auth.js             # Authentication & authorization middleware
│   │   ├── models/                 # MongoDB Models
│   │   │   ├── User.js            # User model with roles and permissions
│   │   │   ├── Report.js          # Incident report model
│   │   │   ├── Case.js            # Case management model
│   │   │   ├── Resource.js        # Support resources model
│   │   │   └── AuditTrail.js      # Audit logging model
│   │   ├── routes/                 # API Routes
│   │   │   ├── auth.js            # Authentication routes (register, login)
│   │   │   ├── reports.js         # Report management routes
│   │   │   ├── cases.js           # Case management routes
│   │   │   ├── admin.js           # Admin dashboard routes
│   │   │   ├── helpline.js        # AI helpline chat routes
│   │   │   └── audit.js           # Audit trail routes
│   │   ├── services/              # Business logic services
│   │   └── server.js              # Express server setup
│   ├── scripts/
│   │   └── create-admin.js        # Admin user creation script
│   ├── Dockerfile                 # Docker configuration for backend
│   ├── package.json               # Backend dependencies
│   ├── env.example                # Environment variables template
│   ├── railway.json               # Railway deployment config
│   └── render.yaml                # Render deployment config
│
├── frontend/                        # Frontend Next.js Application
│   ├── components/                 # React Components
│   │   ├── AIHelplineChat.tsx    # AI chat interface component
│   │   ├── AuditTrailView.tsx    # Audit trail visualization
│   │   └── ReportModal.tsx       # Multi-step report form modal
│   ├── pages/                     # Next.js Pages (File-based routing)
│   │   ├── _app.tsx              # App wrapper with global styles
│   │   ├── index.tsx             # Landing page
│   │   ├── login.tsx             # Login page
│   │   ├── register.tsx          # Registration page
│   │   ├── dashboard.tsx         # User dashboard
│   │   └── admin/
│   │       └── dashboard.tsx     # Admin dashboard
│   ├── utils/                     # Utility functions
│   │   └── auth.ts               # Authentication utilities
│   ├── styles/                    # Global styles
│   │   └── globals.css           # Tailwind CSS imports and custom styles
│   ├── Dockerfile                 # Docker configuration for frontend
│   ├── package.json               # Frontend dependencies
│   ├── next.config.js             # Next.js configuration
│   ├── tailwind.config.js         # Tailwind CSS configuration
│   ├── tsconfig.json              # TypeScript configuration
│   ├── env.example                # Environment variables template
│   ├── netlify.toml               # Netlify deployment config
│   └── vercel.json                # Vercel deployment config
│
├── docker-compose.yml              # Docker Compose for local development
├── package.json                    # Root package.json (shared dependencies)
└── README.md                       # This file

```

### Key File Descriptions

#### Backend Files
- **`backend/src/server.js`**: Main Express server setup with middleware, routes, and error handling
- **`backend/src/models/Report.js`**: Comprehensive report schema with status tracking, officer assignment, and case notes
- **`backend/src/models/User.js`**: User model with role-based access control (user, admin, officer)
- **`backend/src/middleware/auth.js`**: JWT authentication and role-based authorization middleware
- **`backend/src/routes/reports.js`**: Report creation, retrieval, and update endpoints
- **`backend/src/routes/admin.js`**: Admin dashboard endpoints for report and user management
- **`backend/src/routes/helpline.js`**: AI-powered helpline chat endpoints

#### Frontend Files
- **`frontend/pages/index.tsx`**: Landing page with features overview and report initiation
- **`frontend/pages/dashboard.tsx`**: User dashboard with reports list, status tracking, and quick actions
- **`frontend/pages/admin/dashboard.tsx`**: Admin dashboard with statistics and report management
- **`frontend/components/ReportModal.tsx`**: Multi-step form component for incident reporting
- **`frontend/components/AIHelplineChat.tsx`**: AI chat interface for helpline support
- **`frontend/utils/auth.ts`**: Authentication service with token management

---

## 👥 Meet the Team

<div align="center">

### Our Amazing Team Making a Difference

</div>

### 👩‍💼 Sandra Mukami
**Role**: Team Leader & Deployment Lead

**Responsibilities**:
- **Project Leadership & Coordination**: Leading the team, setting project vision, and ensuring timely delivery
- **Strategic Planning**: Project roadmap, milestone planning, and stakeholder management
- **Deployment Strategy & Execution**: 
  - Deployment pipeline design and implementation
  - Multi-platform deployment coordination (Vercel, Netlify, Railway, Render)
  - Production environment management and monitoring
  - CI/CD pipeline configuration and optimization
  - Environment management across development, staging, and production
- **Infrastructure Management**:
  - Docker and containerization strategy
  - Server infrastructure planning
  - Performance optimization and scalability planning
- **Team Communication**: Facilitating team collaboration and communication
- **Quality Assurance**: Code review, deployment validation, and quality checks
- **Stakeholder Communication**: Requirements gathering and stakeholder updates

**Key Contributions**:
- ✅ Established the overall project vision and deployment strategy
- ✅ Designed and implemented comprehensive deployment workflows
- ✅ Orchestrated successful multi-platform deployments
- ✅ Set up monitoring and production environment management
- ✅ Created deployment documentation and best practices
- ✅ Ensured zero-downtime deployment strategies
- ✅ Coordinated cross-functional team efforts

---

### 💻 Peter Mwaura
**Role**: Lead Frontend Developer

**Responsibilities**:
- Frontend development leadership and technical direction
- Dashboard implementation (`frontend/pages/dashboard.tsx`)
- Admin dashboard development (`frontend/pages/admin/dashboard.tsx`)
- Complex component development and optimization
- Authentication flow implementation (`frontend/pages/login.tsx`, `frontend/pages/register.tsx`)
- Real-time feature implementation (Socket.io integration)
- Frontend performance optimization
- TypeScript type definitions and interfaces
- Frontend testing strategy and implementation
- Cross-browser compatibility and responsive design refinement

**Key Contributions**:
- ✅ Built comprehensive user and admin dashboards
- ✅ Implemented authentication flows and protected routes
- ✅ Developed real-time status update mechanisms
- ✅ Created reusable UI components and utilities
- ✅ Optimized frontend performance and bundle size

---

### 🔧 Ezra Shitote
**Role**: Full Stack Developer & Backend Developer

**Responsibilities**:
- Backend API development and architecture
- Database schema design and optimization
- Authentication and authorization system (`backend/src/middleware/auth.js`)
- Report management system (`backend/src/routes/reports.js`)
- Case management routes (`backend/src/routes/cases.js`)
- API integration (Police database, payment gateway)
- Server infrastructure and Docker configuration
- Environment management and security configuration
- API documentation and endpoint testing
- Database migration and data management
- Backend performance optimization
- Full-stack feature implementation

**Key Contributions**:
- ✅ Designed and implemented the RESTful API architecture
- ✅ Built secure authentication system with JWT
- ✅ Created comprehensive report and case management APIs
- ✅ Configured Docker and docker-compose for local development
- ✅ Integrated third-party APIs (Police database, Paystack)
- ✅ Developed end-to-end features across frontend and backend

---

### 🚀 Taibat
**Role**: API Integration & DevOps Specialist

**Responsibilities**:
- API integration and testing
- Third-party service integration (Email, Payment, APIs)
- Environment variable management across environments
- Monitoring and logging setup
- Performance monitoring and optimization
- SSL certificate management
- Domain and DNS configuration
- Deployment troubleshooting and issue resolution
- Production environment maintenance
- Infrastructure monitoring and alerts

**Key Contributions**:
- ✅ Set up monitoring and logging systems
- ✅ Integrated external APIs (Police database, payment gateway)
- ✅ Configured production monitoring and alerting
- ✅ Maintained production deployment stability
- ✅ Documented API integration procedures and runbooks

---

### 🛠️ Nelson 
**Role**: Lead Backend Developer

**Responsibilities**:
- Backend architecture and system design
- Database modeling and schema design
- Admin routes and dashboard backend (`backend/src/routes/admin.js`)
- Audit trail implementation (`backend/src/models/AuditTrail.js`, `backend/src/routes/audit.js`)
- Helpline AI integration (`backend/src/routes/helpline.js`)
- Security implementation and best practices
- API endpoint design and documentation
- Backend testing and quality assurance
- Performance optimization and database query optimization
- Error handling and logging strategies
- API rate limiting and security middleware
- Server-side validation and data sanitization

**Key Contributions**:
- ✅ Designed comprehensive database schemas
- ✅ Implemented admin management system
- ✅ Built audit trail for compliance and tracking
- ✅ Created AI helpline chat backend integration
- ✅ Established security best practices and middleware
- ✅ Optimized database queries for performance

---

## 🚀 Getting Started

<div align="center">

### Ready to Get Started? Let's Set It Up! 🎉

</div>

### 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: v18.0.0 or higher ⬇️ [Download](https://nodejs.org/)
- **MongoDB**: v7.0 or higher (or MongoDB Atlas account) ⬇️ [Download](https://www.mongodb.com/try/download/community)
- **npm** or **yarn**: Package manager (comes with Node.js)
- **Git**: Version control ⬇️ [Download](https://git-scm.com/)

### ⚙️ Installation

Follow these simple steps to get EmpowerHer running on your machine:

<details>
<summary><b>Step 1: Clone the Repository</b></summary>

```bash
git clone <repository-url>
cd "Empower her - Copy"
```

</details>

<details>
<summary><b>Step 2: Install Dependencies</b></summary>

**Install root dependencies:**
```bash
npm install
```

**Install backend dependencies:**
```bash
cd backend
npm install
```

**Install frontend dependencies:**
```bash
cd ../frontend
npm install
```

</details>

### Environment Configuration

1. **Backend Environment Variables**
   
   Copy `backend/env.example` to `backend/.env` and configure:
   
   ```env
   # Server Configuration
   PORT=5000
   NODE_ENV=development
   
   # Database
   MONGODB_URI=mongodb://localhost:27017/empowerher
   
   # JWT
   JWT_SECRET=your-super-secret-jwt-key-change-in-production
   
   # Frontend URL
   FRONTEND_URL=http://localhost:3000
   BACKEND_URL=http://localhost:5000
   
   # Email Configuration
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   
   # Payment Gateway (Optional)
   PAYSTACK_PUBLIC_KEY=your-paystack-public-key
   PAYSTACK_SECRET_KEY=your-paystack-secret-key
   
   # Police API Integration (Optional)
   POLICE_API_URL=your-police-api-url
   POLICE_API_KEY=your-police-api-key
   ```

2. **Frontend Environment Variables**
   
   Copy `frontend/env.example` to `frontend/.env.local` and configure:
   
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   NEXT_PUBLIC_APP_NAME=EmpowerHer
   NEXT_PUBLIC_APP_VERSION=1.0.0
   ```

### Running the Application

#### Option 1: Docker Compose (Recommended)

```bash
# From root directory
docker-compose up -d
```

This will start:
- MongoDB on port 27017
- Backend API on port 5000
- Frontend on port 3000

#### Option 2: Manual Setup

**Start MongoDB** (if not using Docker)
```bash
# Windows
mongod

# macOS/Linux
sudo systemctl start mongod
```

**Start Backend**
```bash
cd backend
npm run dev
```

**Start Frontend** (in a new terminal)
```bash
cd frontend
npm run dev
```

### Creating Admin User

```bash
cd backend
npm run create-admin
```

Follow the prompts to create an admin account.

### Accessing the Application

**Local Development:**
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Health Check**: http://localhost:5000/api/health

**Production:**
- **Frontend**: [https://empowerhersquad-44.vercel.app/](https://empowerhersquad-44.vercel.app/)
- **Backend API**: [https://squad-44.onrender.com](https://squad-44.onrender.com)
- **API Health Check**: [https://squad-44.onrender.com/api/health](https://squad-44.onrender.com/api/health)

---

## 📡 API Documentation

<div align="center">

### RESTful API Endpoints

All API endpoints are prefixed with `/api`

</div>

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (Protected)

### Reports
- `POST /api/reports` - Create a new report (Protected)
- `GET /api/reports` - Get user's reports (Protected)
- `GET /api/reports/:id` - Get report by ID (Protected)
- `PUT /api/reports/:id` - Update report (Protected)

### Cases
- `GET /api/cases` - Get all cases (Protected, Admin/Officer)
- `GET /api/cases/:id` - Get case by ID (Protected)
- `PUT /api/cases/:id/status` - Update case status (Protected, Admin/Officer)

### Admin
- `GET /api/admin/dashboard` - Get admin dashboard stats (Protected, Admin)
- `GET /api/admin/reports` - Get all reports (Protected, Admin)
- `GET /api/admin/users` - Get all users (Protected, Admin)
- `POST /api/admin/users` - Create new user (Protected, Admin)
- `PUT /api/admin/reports/:id/assign` - Assign officer to report (Protected, Admin)

### Helpline
- `POST /api/helpline/chat` - Send message to AI helpline (Protected)
- `GET /api/helpline/resources` - Get support resources (Public)

### Audit
- `GET /api/audit` - Get audit trail (Protected, Admin)
- `GET /api/audit/report/:id` - Get audit trail for specific report (Protected)

### Health Check
- `GET /api/health` - API health status (Public)
  - **Live**: [https://squad-44.onrender.com/api/health](https://squad-44.onrender.com/api/health)

---

## 🚢 Deployment Guide

<div align="center">

### Deploy EmpowerHer to Production

Comprehensive deployment instructions for all platforms

**🌐 Current Production URLs:**
- Frontend: [https://empowerhersquad-44.vercel.app/](https://empowerhersquad-44.vercel.app/)
- Backend: [https://squad-44.onrender.com](https://squad-44.onrender.com)

</div>

### Frontend Deployment (Vercel)

Our frontend is deployed on **Vercel** at [empowerhersquad-44.vercel.app](https://empowerhersquad-44.vercel.app/)

**Deployment Steps:**
1. Connect your repository to Vercel
2. Configure environment variables in the Vercel dashboard:
   - `NEXT_PUBLIC_API_URL=https://squad-44.onrender.com/api`
   - `NEXT_PUBLIC_APP_NAME=EmpowerHer`
3. Set build command: `npm run build`
4. Set output directory: `.next` (default for Next.js)
5. Deploy automatically on every push to main branch

**Alternative: Netlify**
1. Connect your repository to Netlify
2. Configure environment variables
3. Set build command: `npm run build`
4. Set output directory: `.next`
5. Deploy

### Backend Deployment (Render)

Our backend is deployed on **Render** at [squad-44.onrender.com](https://squad-44.onrender.com)

**Deployment Steps:**
1. Connect your repository to Render
2. Set root directory to `backend`
3. Configure environment variables:
   - `MONGODB_URI` - MongoDB connection string
   - `JWT_SECRET` - Secret key for JWT tokens
   - `FRONTEND_URL=https://empowerhersquad-44.vercel.app`
   - Other required environment variables
4. Set start command: `npm start`
5. Deploy automatically on every push to main branch

**Alternative: Railway**
1. Connect your repository to Railway
2. Set root directory to `backend`
3. Configure environment variables
4. Set start command: `npm start`
5. Deploy

### Docker Deployment

```bash
# Build and start all services
docker-compose up -d --build

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

---

## 🌐 Live Demo & Resources

<div align="center">

### Experience EmpowerHer in Action 🚀

</div>

### 🔗 Quick Access Links

| Resource | Link | Description |
|----------|------|-------------|
| 🌐 **Live Website** | [empowerhersquad-44.vercel.app](https://empowerhersquad-44.vercel.app/) | Access the full EmpowerHer platform with all features |
| 🔌 **Backend API** | [squad-44.onrender.com](https://squad-44.onrender.com) | RESTful API endpoints and documentation |
| 📊 **Pitch Deck** | [View Presentation](https://gamma.app/docs/EMPOWERHER-Secure-GBV-Reporting-Justice-Platform-8n4wknzlpzwetwu) | Comprehensive overview of our mission, impact, and features |
| 📡 **API Health** | [https://squad-44.onrender.com/api/health](https://squad-44.onrender.com/api/health) | Check API status and version |

### 🌟 What You Can Do on the Live Site

- ✅ **Report Incidents**: Submit gender-based violence reports securely
- ✅ **Track Cases**: Monitor your case status in real-time
- ✅ **Access Support**: Connect with AI helpline and support resources
- ✅ **Manage Dashboard**: View and manage all your reports
- ✅ **Admin Access**: Full administrative capabilities (for authorized users)

### 📊 Explore Our Pitch Deck

Our comprehensive pitch deck includes:
- **Mission & Vision**: Our commitment to ending GBV
- **Problem Statement**: The challenges we're addressing
- **Solution Overview**: How EmpowerHer makes a difference
- **Features & Benefits**: Detailed platform capabilities
- **Impact & Statistics**: Real-world impact metrics
- **Team & Technology**: Meet our team and tech stack

**[👉 View Full Pitch Deck](https://gamma.app/docs/EMPOWERHER-Secure-GBV-Reporting-Justice-Platform-8n4wknzlpzwetwu)**

---

## 📝 License

This project is licensed under the MIT License.

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. 🍴 **Fork the repository**
2. 🌿 **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. 💾 **Commit your changes** (`git commit -m 'Add some amazing feature'`)
4. 🚀 **Push to the branch** (`git push origin feature/amazing-feature`)
5. 📝 **Open a Pull Request**

**Guidelines:**
- Follow the existing code style
- Write clear commit messages
- Add tests for new features
- Update documentation as needed

---

## 📧 Support & Contact

<div align="center">

### Need Help? We're Here for You! 💬

</div>

- 🐛 **Found a bug?** [Open an issue](../../issues)
- 💡 **Have a feature request?** [Suggest it](../../issues/new)
- 📧 **Need direct support?** Contact the EmpowerHer team
- 📖 **Want to contribute?** Check out our [Contributing Guide](#-contributing)
- 🌐 **Visit Live Site**: [empowerhersquad-44.vercel.app](https://empowerhersquad-44.vercel.app/)
- 📊 **View Pitch Deck**: [Full Presentation](https://gamma.app/docs/EMPOWERHER-Secure-GBV-Reporting-Justice-Platform-8n4wknzlpzwetwu)

---

<div align="center">

### 🌟 Star Us on GitHub ⭐

If you find EmpowerHer useful, please consider giving us a star on GitHub!

---

**Built with ❤️ by the EmpowerHer Team**

*Making a difference, one report at a time* 💜

</div>

