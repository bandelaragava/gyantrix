import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import FAQs from './pages/FAQs';
import Contact from './pages/Contact';
import IT from './pages/IT';
import Pharma from './pages/Pharma';
import NonIT from './pages/NonIT';
import Agriculture from './pages/Agriculture';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Events from './pages/Events';
import Careers from './pages/Careers';
import CareerForm from './pages/CareerForm';
import VideoLectures from './pages/VideoLectures';
import InterviewQuestions from './pages/InterviewQuestions';
import Blog from './pages/Blog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import Refund from './pages/Refund';
import Referral from './pages/Referral';
import Dashboard from './pages/Dashboard';
import Management from './pages/Management';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import LeadFormPage from './pages/LeadFormPage';
import PlacementCourses from './pages/PlacementCourses';
// import TrendingCourses from './pages/TrendingCourses';
import StudentPrograms from './pages/StudentPrograms';
import LearnHub from './pages/LearnHub';
import SparkleBackground from './components/SparkleBackground';
import CurtainEffect from './components/CurtainEffect';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './components/CustomCursor';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <CustomCursor />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="courses" element={<StudentPrograms />} />
                    <Route path="courses/:courseId" element={<CourseDetail />} />
                    <Route path="about" element={<About />} />
                    <Route path="faqs" element={<FAQs />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="it" element={<IT />} />
                    <Route path="pharma" element={<Pharma />} />
                    <Route path="nonit" element={<NonIT />} />
                    <Route path="agriculture" element={<Agriculture />} />
                    <Route path="events" element={<Events />} />
                    <Route path="careers" element={<Careers />} />
                    <Route path="career-form" element={<CareerForm />} />
                    <Route path="videolectures" element={<VideoLectures />} />
                    <Route path="interview-questions" element={<InterviewQuestions />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="terms-conditions" element={<TermsConditions />} />
                    <Route path="refund" element={<Refund />} />
                    <Route path="referral" element={<Referral />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="internship-form" element={<LeadFormPage />} />
                    <Route path="certification-form" element={<LeadFormPage />} />
                    <Route path="mentorship-form" element={<LeadFormPage />} />
                    <Route path="project-form" element={<LeadFormPage />} />
                    <Route path="liveevents-form" element={<LeadFormPage />} />
                    <Route path="enroll" element={<LeadFormPage />} />
                    <Route path="guidance-form" element={<LeadFormPage />} />
                    <Route path="background" element={<SparkleBackground />} />
                    <Route path="management" element={<Management />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="forgot-password" element={<ForgotPassword />} />
                    <Route path="curtain" element={<CurtainEffect />} />
                    <Route path="placement-guarantee" element={<PlacementCourses />} />
                    <Route path="student-programs" element={<StudentPrograms />} />
                    <Route path="certification" element={<Navigate to="/certification-form" replace />} />
                    <Route path="live-events" element={<Navigate to="/liveevents-form" replace />} />
                    <Route path="answer-form" element={<Navigate to="/guidance-form" replace />} />
                    <Route path="learn-hub" element={<LearnHub />} />
                    <Route path="index.html" element={<Navigate to="/" replace />} />
                    <Route path="events.html" element={<Navigate to="/" replace />} />
                    {/* Add other nested routes here */}
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
