const Util = {
    scale(vec, m) {
        return [vec[0] * m, vec[1] * m];
      },
    dist(pos1, pos2) {
        return Math.sqrt(
          Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)
        );
      },
    rotateImg(ctx, img, x, y, width, height, deg){
      ctx.save();
      let rad = deg * Math.PI/180;
      ctx.translate(x, y);
      ctx.rotate(rad);
      ctx.drawImage(img, width/2 * -1, height/2*-1, width, height);
      ctx.restore();
    },
    rotateImgTrack(ctx, img, x, y, width, height, carPos, deg){
      ctx.save();
      let distance = Util.dist([x,y], carPos);
      let distanceToNewMid = distance*(Math.sin(deg/2))*2;

      let rad = deg * Math.PI/180;
      ctx.translate(x, y); // this does not change
      ctx.rotate(rad);
      ctx.drawImage(img, width/2*-1, height/2*-1, width, height); //this changes
      ctx.restore();
    }
    
}
export default Util;