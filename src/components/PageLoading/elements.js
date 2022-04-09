import styled, { keyframes } from "styled-components";

const LoadingSpinner = keyframes`
   to {
        transform: rotateZ(360deg);
    }
`;

export const PageLoadingContainerWrapper = styled.div`
  background: #fff;
  height: 100%;
  /* width: 100%; */
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const PageLoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 15px;
  padding-right: 15px;
`;

export const RoundSpinnerContainer = styled.div`
  border-width: 1px;
  border-color: #eef3f4;
  border-style: solid;
  border-radius: 50%;
  background-color: #fdfdfd;
  box-shadow: 0 0 100px 0 rgba(4, 46, 56, 0.14);
  width: 248px;
  height: 248px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 40px auto 80px;

  @media (max-width: 32em) {
    width: 148px;
    height: 148px;
    margin-top: 80px;
  }
`;

export const PageLoadingSpinner = styled.div`
  animation: ${LoadingSpinner} 3s infinite linear;
  border-radius: 50%;
  border: 3px solid #f1f6f8;
  border-left-color: #4c4cf1;
  border-top-color: #4c4cf1;
  margin: 0 auto 0em auto;
  position: absolute;
  left: -40px;
  right: -40px;
  bottom: -40px;
  top: -40px;

  ::before {
    content: "";
    width: 10px;
    height: 10px;
    border: 6px solid #fff;
    box-shadow: 0 0 20px 0 rgba(4, 46, 56, 0.2);
    background: #4c4cf1;
    position: absolute;
    right: 31px;
    top: 41px;
    border-radius: 50%;
    @media (max-width: 32em) {
      top: 21px;
      right: 19px;
    }
  }
`;

export const PageLoadTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PageLoadingTitleLogo = styled.img`
  height: 40px;
  width: 40px;
  margin-bottom: 4px;
`;

export const PageLoadingTitleContent = styled.h1`
  font-weight: 600;
  font-size: 1.3rem;
  text-shadow: 1px 1px 10px rgba(4, 46, 56, 0.2);
  margin: 2px auto;
`;

export const PageLoadingSpan = styled.span`
  font-weight: 600;
  margin: 10px auto;
  font-size: 0.9rem;
`;
