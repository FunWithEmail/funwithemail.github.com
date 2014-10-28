---
layout: default
---

<h1 id="title">HTML	Email<br>		Hacks</h1>

<h3 id="subtitle">A series of HTML hacks for all those lovely Email clients out there.</h3>

<h4 id="subsub">This repo is a place to put all of the HTML Email hacks we all depend on so much to get our campaigns looking and feeling sweet and spiffy. </h4>

---

##Links and Helpful Tools
<div id="mainLinks">
<ul>
<li> Responsive Email Resources: <a href="www.ResponsiveEmailResources.com">www.ResponsiveEmailResources.com</a></li>
<li> Bulletproof Buttons: <a href="www.buttons.cm">www.buttons.cm</a></li>
<li> Bulletproof Backgrounds: <a href="www.backgrounds.cm">www.backgrounds.cm</a></li>
<li> HTML Email Boilerplate: <a href="www.http://htmlemailboilerplate.com">www.http://htmlemailboilerplate.com</a></li>
<li> Special characters for HTML Email: <a href="http://www.emailonacid.com/character_converter/">http://www.emailonacid.com/character_converter/</a></li> 
<li> Send HTML Email with Google Docs: <a href="http://www.labnol.org/internet/send-html-email/19672/">http://www.labnol.org/internet/send-html-email/19672/</a></li>
</ul>
</div>

<div id="arrowCont">
	<a href="#posts"><div id="arrow">
	</div></a>
</div>

<section id="posts">
	<h1>Gmail</h1>
	<ul>
	  {% for post in site.tags.gmail %}
	    <li>{{ post.content }}</li>
	  {% endfor %}
	</ul>

	<h1>Outlook</h1>
	<ul>
	  {% for post in site.tags.Outlook %}
	    <li>{{ post.content }}</li>
	  {% endfor %}
	</ul>
</section>