# BOOTSTRAP
- <a href="https://getbootstrap.com/">BootSTrap</a>
---

## CSS link Tag
```html
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
```

## JS link Tag(Bundle)
```html
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
```
---
# Component
## Buttons
- <a href="https://getbootstrap.com/docs/5.1/components/buttons/">Buttons</a>

## Dropdowns
- <a href="https://getbootstrap.com/docs/5.1/components/dropdowns/">Dropdowns</a>

## List group
- <a href="https://getbootstrap.com/docs/5.1/components/list-group/">List group</a>

---
# Forms
## Overview
- <a href="https://getbootstrap.com/docs/5.1/forms/overview/">Overview</a>
- form이라는 태그로 구성된 code로 손쉽게 깔금한 양식으로 구성 가능(login page, ...)

## Form control
- <a href="https://getbootstrap.com/docs/5.1/forms/form-control/">Form control</a>
- 양식의 디자인 조율 가능

## Input group
- <a href="https://getbootstrap.com/docs/5.1/forms/input-group/">Input group</a>

---
# Modal
- <a href="https://getbootstrap.com/docs/5.1/components/modal/">Modal</a>

---
# Tooltips
- <a href="https://getbootstrap.com/docs/5.1/components/tooltips/">Tooltips</a>
- 실행하기 위해선 JS에서 초기화를 해줘야함

---
# NPM 프로젝트 생성
- npm bootstrap 설치
```
$ npm init -y
$ npm i parcel-bundler -D
$ npm i bootstrap
```
- js 연결
- 아래 코드 사용
```js
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle';
```
- scss 연결
```scss
@import "../node_modules/bootstrap/scss/bootstrap.scss"//마지막에.scss 생략 가능(bootstrap.scss)
```
