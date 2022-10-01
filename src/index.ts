import express, { Request, Response, NextFunction } from "express";
const app = express();
const nunjunks = require("nunjucks");
const axios = require("axios");
const qs = require("qs");
import connectDB from "./loaders/db";
import routes from "./routes";
// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes); //라우터
// error handler

interface ErrorType {
  message: string;
  status: number;
}

nunjunks.configure("src/views", {
  express: app,
});

app.set("view engine", "html");

const kakao = {
  clientId: "9fd1c9a1108a73f6b3c0114bdd8147ad",
  clientSecret: "hFdnrNSjmRwB02wh3WDwPsz8EcxkmzpN",
  redirectUri: "http://localhost:8000/auth/login",
};

app.get("/", (req, res) => {
  res.render("index.html");
});

app.get("/auth", (req, res) => {
  const kakaoAuthURL = `https://kauth.kakao.com/oauth/authorize?client_id=${kakao.clientId}&redirect_uri=${kakao.redirectUri}&response_type=code&scope=profile_nickname,account_email,gender,age_range`;
  res.redirect(kakaoAuthURL);
});

app.get("/auth/login", async (req, res) => {
  let token;
  try {
    token = await axios({
      method: "POST",
      url: "https://kauth.kakao.com/oauth/token",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        grant_type: "authorization_code",
        client_id: kakao.clientId,
        client_secret: kakao.clientSecret,
        redirectUri: kakao.redirectUri,
        code: req.query.code,
      }),
    });
  } catch (err: any) {
    res.json(err.data);
  }
  console.log(token);

  let user;
  try {
    user = await axios({
      method: "GET",
      url: "https://kapi.kakao.com/v2/user/me",
      headers: {
        Authorization: `Bearer ${token.access_token}`,
      },
    });
  } catch (err: any) {
    res.json(err.data);
  }
  console.log(user);
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use(function (err: ErrorType, req: Request, res: Response, next: NextFunction) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "production" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app
  .listen(process.env.PORT, () => {
    console.log(`
    ################################################
          🛡️  Server listening on port 🛡️
    ################################################
  `);
  })
  .on("error", (err) => {
    console.error(err);
    process.exit(1);
  });
