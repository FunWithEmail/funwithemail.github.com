---
title: Ghost column to emulate "align" in Outlook
layout: default
categories: Outlook
tags: 
- Outlook
---

##Ghost column to emulate "align" in Outlook
####	Outlook hates "align"; we love conditionals

```html
<td>
	Table X
	<!--[if mso]></td><td><![endif]-->
	Table Y
</td>
```

<em>-courtesy of Mike Ragan http://labs.actionrocket.co/make_mobile_email_work_in_outlook</em>