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

# 테마 색상 커스터마이징
- <a href="https://getbootstrap.com/docs/5.1/customize/sass/#maps-and-loops">Scss에서 import code 설정</a>
- <a href="https://getbootstrap.com/docs/5.1/customize/color/">color 커스터마이징</a>
- scss에서 필수 code 설정
```scss
@import "../node_modules/bootstrap/scss/functions";   // 필수

@import "../node_modules/bootstrap/scss/variables";   // 필수
@import "../node_modules/bootstrap/scss/mixins";    // 필수
@import "../node_modules/bootstrap/scss/root";    // 필수
// scss에서 bootstrap 호출 전 필수 code 호출 후 중간에 커스터마이징 코드 삽입
$theme-colors: (
  "primary":    red,
  "secondary":  royalblue,
  "success":    $success,
  "info":       $info,
  "warning":    $warning,
  "danger":     $danger,
  "light":      $light,
  "dark":       $dark
);

@import "../node_modules/bootstrap/scss/bootstrap"
```

---
# 성능 최적화(트리 쉐이킹)
- 사이트 내 ``Via Javascript`` 확인
## Dropdown 코드 최적화
- @popperjs/core 설치
```
$ npm i @popperjs/core
```
- 기존 코드
```js
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'; // bootstrap에서 모든 내용을 import
```
- 최적화 코드
```js
import Dropdown from 'bootstrap/js/dist/dropdown';    // dropdown 내용만을 import

const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
dropdownElementList.map(function (dropdownToggleEl) {
  return new Dropdown(dropdownToggleEl)
})    // code 초기화
// 모든 code 가 초기화가 필요한 것은 아님 사용시 홈페이지에서 확인
```

## Modal 코드 최적화
- 최적화 코드
- 복사 코드
```js
var myModal = new bootstrap.Modal(document.getElementById('myModal'), options)
// new bootstrap사용 불가
// var myModal따로 사용안할시 삭제 가능
// getElementById 는 querySelector 같은 기능
// 'myModal'은 index.html에서 id 확인해야함(index.html의 id가 다를시 변경)
// options 에는 {객체 데이터}로 옵션 적용 가능
```
- 최적화 수정 코드
```js
import Modal from 'bootstrap/js/dist/modal'
Modal(document.querySelector('#exampleModal'), options)
```
