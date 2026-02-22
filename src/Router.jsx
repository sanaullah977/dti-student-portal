import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import Student_Portal from "./Page/Student-Portal/Student_Portal";
import Result from "./Page/Result/result";
import Card from "./Components/Card/Card";
import Syllabus from "./Page/Syllabus/Syllabus";
import Scholarship from "./Page/Scholarship/Scholarship";
import AdmitCard from "./Page/AdmitCard/AdmitCard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Student_Portal,
    children:[
      {
        index:true,
        Component:Card,
      },

      {
        path:"admit-card",
        Component:AdmitCard,

      },

      {
        path:"result",
        Component:Result,
      },

      {
        path:"syllabus",
        Component:Syllabus,
      },

      {
        path:"scholarship",
        Component:Scholarship,
      }
    ]
  },
]);