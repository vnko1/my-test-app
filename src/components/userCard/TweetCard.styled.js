import styled from "@emotion/styled";
import bgImageUrl1x from "../../assets/pics/bgPicCard1x.png";

const Container = styled.div`
  position: relative;
  max-width: 380px;
  background-image: url(${bgImageUrl1x}),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  padding: 20px 20px 36px;

  background-repeat: no-repeat;

  background-position: center top 36px, center;
`;

const ImageWrapper = styled.div`
  width: 80px;
  height: 80px;

  margin: 136px auto 0;
  border-radius: 50%;
  background-color: #5736a3;
  border: 8px solid #ebd8ff;
  overflow: hidden;
  position: relative;
  z-index: 1;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
`;

const Line = styled.div`
  position: absolute;
  width: 100%;
  height: 8px;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
  top: 230px;
  left: 0;
`;

const TweetsText = styled.p`
  margin-top: 26px;
`;

const FollowersText = styled.p`
  margin-top: 16px;
`;

const Button = styled.button`
  display: block;
  margin: 26px auto 0;

  border-radius: 10.3108px;
  border: none;
  width: 196px;
  padding: 14px 28px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  font-family: inherit;
  text-transform: uppercase;

  color: #373737;
  transition: background-color 0.25s;
  background-color: ${({ isFollowing }) =>
    isFollowing ? "#5CD3A8" : "#ebd8ff"};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: box-shadow 0.25s;
  @media screen and (max-width: 720px) {
    max-width: 100%;
  }
  &:hover,
  &:focus {
    box-shadow: 10px 5.43693px 3.43693px rgba(0, 0, 0, 0.25);
  }
`;

export {
  Container,
  ImageWrapper,
  Image,
  Line,
  TweetsText,
  FollowersText,
  Button,
};
