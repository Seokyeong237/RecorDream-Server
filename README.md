# 💜RecorDream-Server

> ### 레코드림은 베를린이야. 꿈쟁이들 마음에 치명적인 독일수도. 🇩🇪 <br>

<br />

## About

![178281860-743ffefc-f92d-4b20-84ee-58904794afce](https://user-images.githubusercontent.com/64405757/178695039-2c1f3ccf-8a8e-4b1e-a9f4-00be52287367.png)
<img src="https://user-images.githubusercontent.com/76062959/178496454-6556d901-884d-4e7b-a090-1427d34d427c.png"><br>

<br />
<br>

## 서비스 핵심 기능 소개

![KakaoTalk_20220722_230635123_03](https://user-images.githubusercontent.com/64405757/180468525-4602d496-1fd1-429c-9679-ca770ba68f04.jpg)


<br>
<br />

## Collection 설계

![디비설계](https://user-images.githubusercontent.com/83302344/180460021-c0a08d5c-eb28-4f51-8de1-e565c015554b.png)

<br> 
<br />

## 팀원 소개 및 역할 분담

| <img src="https://user-images.githubusercontent.com/76062959/178627113-b5a98f49-83aa-4d0e-8820-87ab895e185b.jpeg" width=200> | <img src="https://user-images.githubusercontent.com/76062959/178627128-8b837ecd-5950-457d-bfcc-384af327a362.jpeg" width=200> | <img src="https://user-images.githubusercontent.com/76062959/178627131-b2dcccb5-6456-4b5e-88a1-2bd034b64563.jpeg" width=200> |
| :--------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: |
|                                                          **황서경**                                                          |                                                          **추서연**                                                          |                                                          **김시연**                                                          |
|                                       [@Seokyeong237](https://github.com/Seokyeong237)                                       |                                        [@ChooSeoyeon](https://github.com/ChooSeoyeon)                                        |                                          [@ksiyeon27](https://github.com/ksiyeon27)                                          |
|                                                           DB 설계                                                            |                                                           DB 설계                                                            |                                                           DB 설계                                                            |
|                                                   API 명세서 작성 및 구현                                                    |                                                   API 명세서 작성 및 구현                                                    |                                                   API 명세서 작성 및 구현                                                    |
|                                                        프로젝트 세팅                                                         |                                                                                                                              |                                                         리드미 작성                                                          |

<br>
<br />

## Branch 전략, Commit Convention

<details>
<summary>❗️ Git Workflow</summary>

### main → develop → feature/이슈번호-기능, fix/이슈번호-기능, refactor/이슈번호-기능

1. local - feature/이슈번호-기능 에서 각자 작업
2. 작업 완료 후 remote - develop 에 PR
3. 코드 리뷰 후 Confirm 받고 Merge
4. remote - develop 에 Merge 될 때 마다 모든 팀원 remote - develop pull 받아 최신 상태 유지
</details>

<details>
<summary>❗️ Commit Convention</summary>

| 태그 이름  | 설명                                                                 |
| ---------- | -------------------------------------------------------------------- |
| [Feat]     | 새로운 기능 구현                                                     |
| [Fix]      | 버그, 오류 수정                                                      |
| [Hotfix]   | issue나 QA에서 급한 버그 수정                                        |
| [Docs]     | 문서 수정                                                            |
| [Test]     | 테스트 코드 추가 및 업데이트                                         |
| [Chore]    | 코드 수정, 내부 파일 수정                                            |
| [Del]      | 불필요한 코드 삭제                                                   |
| [Refactor] | 전면 수정                                                            |
| [Merge]    | 다른 브랜치를 merge 할 때 사용                                       |
| [Add]      | Feat 이외의 부수적인 코드 추가, 라이브러리 추가, 새로운 파일 생성 시 |
| [Rename]   | 파일 이름 변경 시 사용                                               |
| [Move]     | 프로젝트 내 파일이나 코드의 이동                                     |

</details> <br>
<br />

## Coding Convention

<details>
<summary>변수</summary>

1. 변수나 함수명은 `camelCase`를 사용한다.
2. 함수의 경우 동사+명사 사용한다.

- ex) getRecords()

3. flag로 사용 되는 변수는 조동사 + flag 종류로 구성한다.

- ex) isDeleted

4. Class / Interface / Type / Namespace / Enum 명은 `PascalCase`를 사용한다.
5. 약어는 되도록 사용하지 않는다.

- 부득이하게 약어가 필요하다고 판단되는 경우 팀원과 상의를 거친다.

</details> 
<details>
<summary>주석</summary>
1. 한 줄 주석은 // 를 사용한다.

```
  // 한줄 주석일 때
  /**
  * 여러줄
  * 주석일 때
  */
```

2. 컨트롤러에 대한 주석

```
/**
 * @route POST /record
 * @desc Create Record
 * @access Public
 */
```

</details> 
<details>
<summary>Bracket</summary>

- [Prettier](https://prettier.io/)
- [Eslint](https://eslint.org/)
</details> <br>
<br />

## 프로젝트 폴더 구조

```
---📁src
------📄index.ts
------📄app.ts
------📁tests
------📁config
---------📄index.ts
---------📄multer.ts
---------📄s3Config.ts
---------📄firebase-admin.json
------📁controllers
---------📄index.ts
---------📄NoticeController.ts
---------📄RecordController.ts
---------📄UserController.ts
---------📄VoiceController.ts
------📁interfaces
---------📁common
---------📁notice
---------📁record
---------📁user
---------📁voice
------📁loaders
---------📄db.ts
------📁models
---------📄Notice.ts
---------📄Record.ts
---------📄User.ts
---------📄UserMocking.ts
---------📄Voice.ts
---------📄VoiceMocking.ts
------📁modules
---------📄pushMessage.ts
---------📄responseMessage.ts
---------📄returnToSlackMessage.ts
---------📄slackApi.ts
---------📄statusCode.ts
---------📄util.ts
------📁routes
---------📄index.ts
---------📄NoticeRouter.ts
---------📄RecordRouter.ts
---------📄UserRouter.ts
---------📄VoiceRouter.ts
------📁services
---------📄index.ts
---------📄NoticeService.ts
---------📄RecordService.ts
---------📄UserService.ts
---------📄VoiceService.ts
```
<br>
<br />

## Dependency Module

```
{
  "name": "recordream-server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon",
    "build": "tsc",
    "test": "jest --detectOpenHandles --setupFiles dotenv/config --forceExit",
    "prepare": "husky install"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/express": "^4.17.13",
    "@types/jest": "^28.1.6",
    "@types/mongoose": "^5.11.97",
    "@types/multer": "^1.4.7",
    "@types/multer-s3": "^2.7.12",
    "@types/node": "^17.0.25",
    "@types/node-schedule": "^2.1.0",
    "@types/supertest": "^2.0.12",
    "@typescript-eslint/eslint-plugin": "^5.30.5",
    "@typescript-eslint/parser": "^5.30.5",
    "eslint": "^8.19.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-prettier": "^4.2.1",
    "husky": "^8.0.0",
    "jest": "^28.1.3",
    "nodemon": "^2.0.15",
    "prettier": "^2.7.1",
    "supertest": "^6.2.4",
    "ts-jest": "^28.0.7",
    "ts-node": "^10.7.0",
    "typescript": "^4.6.3"
  },
  "dependencies": {
    "@types/agenda": "^4.1.0",
    "aws-sdk": "^2.1171.0",
    "axios": "^0.27.2",
    "bcryptjs": "^2.4.3",
    "dayjs": "^1.11.3",
    "dotenv": "^16.0.1",
    "ejs": "^3.1.8",
    "express": "^4.18.1",
    "express-validator": "^6.14.2",
    "firebase-admin": "^11.0.0",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^6.4.3",
    "multer": "^1.4.5-lts.1",
    "multer-s3": "^2.10.0",
    "node-schedule": "^2.1.0",
    "slack-node": "^0.1.8"
  }
}

```
<br>
<br />

## 전체 API 로직 구현 진척도 및 담당자

|기능|담당자|구현 여부|
|---|---|---|
|[PUT] 유저 닉네임 수정 | 황서경 | ✅ |
|[GET] 회원정보 조회 | 황서경| ✅ |
|[PUT] 푸시알림 여부(토글) 변경 | 황서경 | ✅ |
|[POST] 음성녹음 업로드 | 김시연 | ✅ |
|[GET] 음성녹음 재생 | 김시연 | ✅ |
|[POST] 꿈 기록 작성 | 추서연 | ✅ |
|[GET] 꿈 기록 리스트 조회 (홈 뷰) | 추서연 | ✅ |
|[GET] 꿈 기록 리스트 조회 (보관함 뷰) | 추서연 | ✅ |
|[GET] 꿈 기록 조회 (상세보기 뷰) | 김시연 | ✅ |
|[PATCH] 꿈 기록 일부 수정 | 김시연 | ✅ |
|[DELETE]꿈 기록 삭제 | 김시연 | ✅ |
|[GET] 꿈 검색 | 추서연 | ✅ |
|[POST] 푸시알림 시간 설정 | 황서경| ✅ |
|[PUT] 푸시알림 시간 수정 |황서경| ✅ |
|[PUT] 푸시알림 토큰 refresh |황서경| ✅ |

<br>
<br />

## Architecture

![architecture](https://user-images.githubusercontent.com/83302344/180429375-876019f7-651d-4e45-9a3d-fb7f23f98e3e.jpg)

<br>
<br />
