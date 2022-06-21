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
      ctx.translate(x+width/2, y+height/2);
      ctx.rotate(rad);
      ctx.drawImage(img, width/2 * -1, height/2*-1, width, height);
      ctx.restore();
    }
}
export default Util;