# Triple_FE_Homwork-3

[트리플 홈페이지](https://triple.guide/intro/) 의 한 섹션을 구현한 프로젝트입니다.

## Requirement

- npm 최신버전

```bash
sudo npm install -g npm
```

- node.js 최신버전

window \

[nodejs 공식홈페이지](nodejs.org) 에서 LST 인스톨러 설치

linux

1. 현재 nodejs 버전 확인

```bash
node -v
```

2. npm 캐시 제거

```bash
npm cache clean -f
```

3. Node.js 버전 관리 모듈 설치

```bash
npm install -g n
```

4. 관리모듈로 LTS 버전 설치

```bash
n lts
```

## Installation

1. 'Master' branch의 소스코드를 ZIP파일로 다운로드

2. ZIP파일 압축해제 및 VSCODE 상 프로젝트 폴더 open (package.json 및 tsconfig.json 포함 경로)

3. 의존성 패키지 설치

```bash
npm install
```

4. 프로젝트 실행

```bash
npm start
```

## 사용기술 및 이유

- typescript

  - 컴파일 단계 오류 검출을 통한 디버깅 효율성 증가

- react-countup

  - react-animation-number(s) 대비 숫가 증가속도 커스텀 용이

- react-transition-group

  - transition 효과 적용 및 지정 용이 (element별 애니메이션 사이 간격 및 duration 설정 등)
