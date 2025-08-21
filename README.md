# blog_pro

Vite로 구축된 React 기반 블로그 애플리케이션입니다.

## 프로젝트 개요

- **이름**: blog_pro
- **버전**: 0.0.0
- **타입**: ES Module
- **프레임워크**: React 19.1.1

## 의존성

### 핵심 의존성
- **React**: ^19.1.1 - 사용자 인터페이스 구축을 위한 JavaScript 라이브러리
- **React DOM**: ^19.1.1 - 웹용 React 렌더링
- **React Router DOM**: ^7.8.1 - React용 선언적 라우팅
- **Axios**: ^1.11.0 - Promise 기반 HTTP 클라이언트

### 개발 의존성
- **Vite**: ^7.1.2 - 빠른 빌드 도구 및 개발 서버
- **@vitejs/plugin-react**: ^5.0.0 - React 지원을 위한 Vite 플러그인
- **ESLint**: ^9.33.0 - JavaScript 린터
- **TypeScript Types**: React 타입 정의
- **ESLint Plugins**: React Hooks 및 React Refresh 플러그인

## 사용 가능한 스크립트

```bash
# 개발 서버 시작
npm run dev

# 프로덕션용 빌드 (docs/ 디렉토리에 출력)
npm run build

# 프로덕션 빌드 미리보기
npm run preview
```

## 시작하기

1. 의존성 설치:
   ```bash
   npm install
   ```

2. 개발 서버 시작:
   ```bash
   npm run dev
   ```

3. 브라우저를 열고 Vite에서 제공하는 로컬 개발 URL로 이동하세요.

## 빌드

프로젝트는 `docs/` 디렉토리로 빌드되어 GitHub Pages와 같은 플랫폼에서 배포하기에 적합합니다.
