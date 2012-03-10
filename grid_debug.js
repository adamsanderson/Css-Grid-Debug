/**
  Draws a typographical grid as a background image.
  
  Lines will be drawn every `major` pixels, and then lighter lines will be 
  drawn every `minor` pixels if a `minor` grid is set.

*/
function drawDebugGrid(major,minor){
  // add canvas
  var canvas = document.createElement("canvas");
  canvas.width = 1;
  canvas.height = major;

  var ctx = canvas.getContext('2d');
  
  // Translate by 1/2 pixel to draw crisp lines
  ctx.translate(0, -0.5);
  
  // Draw major lines
  ctx.lineWidth = 1;
  ctx.setStrokeColor('#ccc');
  ctx.moveTo(0,major); ctx.lineTo(32,major);
  ctx.stroke();
  
  // Draw minor lines
  if (minor){
    for (var i = minor; i < major; i += minor){
      ctx.setStrokeColor('#eee');
      ctx.moveTo(0,i); ctx.lineTo(32,i);
      ctx.stroke();
    }
  }

  // add background image
  var dataUrl = canvas.toDataURL("image/png");
  document.body.style.cssText += 'background: url('+dataUrl+') repeat';
};