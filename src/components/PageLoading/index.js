import React from "react";
import {
  PageLoadingContainer,
  PageLoadingContainerWrapper,
  PageLoadingSpan,
  PageLoadingSpinner,
  PageLoadingTitleContent,
  PageLoadingTitleLogo,
  PageLoadTitleContainer,
  RoundSpinnerContainer,
} from "./elements";

import Logo from "../../images/logo.png";

export default function PageLoading() {
  return (
    <PageLoadingContainerWrapper>
      <PageLoadingContainer>
        <RoundSpinnerContainer>
          <PageLoadingSpinner />
          <PageLoadTitleContainer>
            <PageLoadingTitleLogo src={Logo} alt="logo" />
            <PageLoadingTitleContent>Acquire</PageLoadingTitleContent>
            <PageLoadingSpan>Loading . . .</PageLoadingSpan>
          </PageLoadTitleContainer>
        </RoundSpinnerContainer>
      </PageLoadingContainer>
    </PageLoadingContainerWrapper>
  );
}
