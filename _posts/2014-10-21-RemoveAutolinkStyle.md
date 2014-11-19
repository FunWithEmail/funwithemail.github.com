---
title: Target Webkit Clients
layout: default
categories: Webkit
tags: 
- webkit
---

##Remove autolink styling in iOS:
#### 	Fix automatic styling of phone numbers, etc.

Use a span:

```css
.appleLinksBlack a { text-decoration:none !important; }
.appleLinksBlack a { color:#000000 !important; }
```

```html
<span class="appleLinksBlack">866-787-7030</span>
```

Add additional classes such as `.appleLinksWhite a`, `.appleLinksPink a` when appropriate

<em>-courtesy of Justine Jordan</em>