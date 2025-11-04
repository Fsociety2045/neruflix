## 과제
### netflix.com/kr FE 넷플릭스 코리아  클론코딩
-한글화 작업 by ksh322 <br>
-login page by ksh322<br>
-한글/일본어(?) 전환 기능 추가예정 <br>

-demo 페이지 배포 완 by github.io
<br>

## 팀원 소개
SCIT 48기 A반
서동욱님, 강준석님, 김상호님, 장지웅님

## 프로젝트 소개
넷플릭스 코리아 클론코딩
[데모 시연 페이지]()

## 구성 요소 (기술스택)

<br> Built with:

- HTML
- CSS
- Vanilla JS - ES6

## Netflix Clone


## Learning Points

- CSS Grid
- Styling Tables
- Tabs with Javascript
- Positioning

## Some cool stuff

Here's a pretty simple, basic way of creating switchable tab content using Vanilla JS:

```javascript
const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

// Select tab content
function selectItem(e) {
  removeBorder();
  removeShow();
  // Add border to current tab
  this.classList.add("tab-border");
  // Grab content item from DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  // Add show class
  tabContentItem.classList.add("show");
}
function removeBorder() {
  tabItems.forEach(item => item.classList.remove("tab-border"));
}
function removeShow() {
  tabContentItems.forEach(item => item.classList.remove("show"));
}
// Listen for tab click
tabItems.forEach(item => item.addEventListener("click", selectItem));
```

And for the HTML All you really need is this:

```html
<!-- Content Pretty Long so I'll add later -->
<!-- But this is the basic gist -->
<div class="tab-item">
  <!-- Selectors for the different tab content -->
</div>
<div class="tab-content-item">
  <!-- Content of each tab item -->
</div>
<!-- Simply add more selectors and corresponding 
tab content for each selector -->
```

## Acknowledgments
scit48.duckdns.org
