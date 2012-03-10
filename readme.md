Grid Debug
==========

Apply a typographical grid lines to the background of any page.

You may either include grid_debug.js on your page, or use it as a bookmarklet.

If you include it on your page, you may invoke it from the console:

    drawDebugGrid(40,20);
    
This will draw major lines every 40px and minor lines every 20px;

Bookmarklet
-----------
Create a new bookmark, and replace its URL with the following lovely blob:

    javascript:%20-function%20drawDebugGrid(major,minor){var%20canvas=document.createElement("canvas");canvas.width=1;canvas.height=major;var%20ctx=canvas.getContext('2d');ctx.translate(0,-0.5);ctx.lineWidth=1;ctx.setStrokeColor('#ccc');ctx.moveTo(0,major);ctx.lineTo(32,major);ctx.stroke();if(minor){for(var%20i=minor;i<major;i+=minor){ctx.setStrokeColor('#eee');ctx.moveTo(0,i);ctx.lineTo(32,i);ctx.stroke();}}%20var%20dataUrl=canvas.toDataURL("image/png");document.body.style.cssText+='background-image:%20url('+dataUrl+')';}(40,20)

The default is a 40/20, you can customize the major/minor rythmn by changing 
the two parameters at the end, so "(40,20)" could become "(36,9)" for instance.

More Reading
------------

These articles provide more information on typographic rhythm:

* http://24ways.org/2006/compose-to-a-vertical-rhythm
* http://www.alistapart.com/articles/settingtypeontheweb

Enjoy!