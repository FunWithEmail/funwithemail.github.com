---
title: Change button text responsively
layout: default
categories: All
tags: 
- all
---

##Click To Tap:
####   Change button text responsively

```css	
@media screen and (max-width:600px) {<br>
span[class=click] {display: none !important; max-height: 0 !important;}<br>
span[class=tap]:after {content:”Tap”;}<br><br>
```

```html
<a href=”#”><span class=”tap”><span class=”click”>Click</span></span>here</a>
```

<em>-courtesy of Nicole Merlin</em>