---
title: Image gaps in Office 365 (OWA)
layout: default
categories: Outlook
tags: 
- Outlook
---

##Image gaps in Office 365 (OWA)
####	Office 365 strips display:block causing images to have massive gaps

Wrapping an image in a `<div>` with a height equal to the image height will simulate
a block element for clients that won't accept `display:block`.

```html
<div style="height:125px;">  
    <img src="/path/to/image.jpg" alt="Image Description" style="display:block;" width="200" height="125" />  
</div>
```

In some cases the addition of `font-size:0;` may be required in order to remove further gaps created by certain CSS properties set on the parent element i.e. table cell such as line-height.

Warning: Small font sizes can effect your spam score.

<em> For more information visit: http://www.emailonacid.com/blog/details/C13/two_fixes_for_image_spacing_in_outlook_web_app_owa</em>

<em>-courtesy of James White at http://blog.jmwhite.co.uk</em>