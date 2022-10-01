import axios from "axios";
import User from "../models/User";
import jwt from "jsonwebtoken";
import jwtHandler from "../modules/jwtHandler";

const kakaoLogin = async (kakaoToken: string, fcmToken: string) => {
  try {
    // 카카오 서버와 연결
    const response = await axios({
      method: "GET",
      url: "https://kapi.kakao.com/v2/user/me",
      headers: {
        Authorization: `Bearer ${kakaoToken}`, // 클라한테 받은 accessToken
      },
    });

    if (!response) {
      return null;
    }

    const userEmail = response.data.kakao_account.email;
    const userName = response.data.kakao_account.profile.nickname;
    const gender = response.data.kakao_account.gender;
    const age_range = response.data.kakao_account.age_range;
    //console.log(age_range);

    const existUser = await User.findOne({
      email: userEmail,
    });

    // 존재하는 유저인지 확인
    if (!userEmail) {
      return null;
    }

    // 유저가 없으면 회원 가입
    if (!existUser) {
      const user = new User({
        // 성별, 연령대 추가 필요
        nickname: userName as string,
        email: userEmail,
        fcm_token: fcmToken,
      });

      // accessToken 받기
      const jwtToken = jwtHandler.getAccessToken(user.id);
      user.accessToken = jwtToken;
      await user.save();

      return user;
    }

    // 유저가 있으면 로그인 처리
    const accessToken = jwtHandler.getAccessToken(existUser._id);
    const refreshToken = jwtHandler.getRefreshToken();

    await User.findByIdAndUpdate(existUser._id, existUser);

    const data = {
      isAlreadyUser: true,
      accessToken: accessToken,
      refreshToken: refreshToken,
      nickname: userName,
    };

    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const appleLogin = async (appleToken: string, fcmToken: string) => {
  try {
    // 필요한 값이 들어있는지 체크
    if (!appleToken || !fcmToken) {
      return null;
    }

    // 애플 토큰 해독
    const appleUser = jwt.decode(appleToken);

    // 애플 토큰 에러
    if (appleUser === null) {
      return null;
    }
    if (!(appleUser as jwt.JwtPayload).sub) {
      return null;
    }

    // 유저가 있는지 확인
    const existUser = await User.findOne({
      email: (appleUser as jwt.JwtPayload).sub,
    });

    // 유저가 db에 없는 경우 유저 회원 가입
    if (!existUser) {
      const user = new User({
        email: (appleUser as jwt.JwtPayload).email,
      });

      const jwtToken = jwtHandler.getAccessToken(user.id);
      user.accessToken = jwtToken;
      await user.save();

      return jwtToken;
    }

    // 유저가 db에 있으면 로그인
    existUser.accessToken = jwtHandler.getAccessToken(existUser.id);

    await User.findByIdAndUpdate(existUser._id, existUser);
    return existUser.accessToken;
  } catch (err) {
    console.log("apple token error");
    return null;
  }
};

export default {
  kakaoLogin,
  appleLogin,
};
