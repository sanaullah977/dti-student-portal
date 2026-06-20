import { createBrowserRouter } from "react-router";
import Student_Portal from "./Page/Student-Portal/Student_Portal";
import Result from "./Page/Result/result";
import Card from "./Components/Card/Card";
import Syllabus from "./Page/Syllabus/Syllabus";
import Scholarship from "./Page/Scholarship/Scholarship";
import AdmitCard from "./Page/AdmitCard/AdmitCard";
import StudentApplication from "./Page/StudentApplication/StudentApplication";
import AboutStudentPortal from "./Components/About/AboutStudentPortal";
import Routine from "./Page/Routine/Routine";

// Import all 14 student application form components
import RecommendationLetter from "./Components/SideBar/Manu/RecommendationLetter";
import Testimonial from "./Components/SideBar/Manu/Testimonial";
import CourseCertificate from "./Components/SideBar/Manu/CourseCertificate";
import Readmission from "./Components/SideBar/Manu/Readmission";
import IndustrialDocuments from "./Components/SideBar/Manu/IndustrialDocuments";
import AATCW from "./Components/SideBar/Manu/AATCW";
import AdmissionCancel from "./Components/SideBar/Manu/AdmissionCancel";
import Manu_8 from "./Components/SideBar/Manu/Manu_8";
import Manu_9 from "./Components/SideBar/Manu/Manu_9";
import Manu_10 from "./Components/SideBar/Manu/Manu_10";
import Manu_11 from "./Components/SideBar/Manu/Manu_11";
import Manu_12 from "./Components/SideBar/Manu/Manu_12";
import Manu_13 from "./Components/SideBar/Manu/Manu_13";
import SSCMarksheet from "./Components/SideBar/Manu/SSCMarksheet";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Student_Portal,
    children: [
      {
        index: true,
        Component: Card,
      },
      {
        path: "admit-card",
        Component: AdmitCard,
      },
      {
        path: "result",
        Component: Result,
      },
      {
        path: "routine",
        Component: Routine,
      },
      {
        path: "syllabus",
        Component: Syllabus,
      },
      {
        path: "scholarship",
        Component: Scholarship,
      },
    ],
  },
  {
    path: "/student-application",
    Component: StudentApplication,
    children: [
      {
        index: true,
        Component: AboutStudentPortal,
      },
      {
        path: "recommendation-letter",
        Component: RecommendationLetter,
      },
      {
        path: "testimonial",
        Component: Testimonial,
      },
      {
        path: "course-certificate",
        Component: CourseCertificate,
      },
      {
        path: "readmission",
        Component: Readmission,
      },
      {
        path: "industrial-documents",
        Component: IndustrialDocuments,
      },
      {
        path: "academic-transcript",
        Component: AATCW,
      },
      {
        path: "admission-cancel",
        Component: AdmissionCancel,
      },
      {
        path: "student-exchange",
        Component: Manu_8,
      },
      {
        path: "id-card-reissue",
        Component: Manu_9,
      },
      {
        path: "admit-card-reissue",
        Component: Manu_10,
      },
      {
        path: "marksheet-verification",
        Component: Manu_11,
      },
      {
        path: "marksheet-correction",
        Component: Manu_12,
      },
      {
        path: "ssc-marksheet-copy",
        Component: Manu_13,
      },
      {
        path: "ssc-marksheet",
        Component: SSCMarksheet,
      },
    ],
  },
]);
