import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import PageLoading from "../../components/PageLoading";
import LoginPage from "../LoginPage";
import SignupPage from "../SignupPage";
import { HomePageContainer } from "./elements";

export default function HomePage() {
  return (
    <Fragment>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
      <HomePageContainer>
        <PageLoading />
      </HomePageContainer>
    </Fragment>
  );
}
