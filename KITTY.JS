let kitty;
let kittyImg;

function setup() {
  createCanvas(5400, 5400);
  kitty = createSprite(width/2, height/2);
  kitty.addImage('https://cdn.discordapp.com/attachments/1219799954307158141/1286102397915103242/Pink_Retro_Typographic_Streamer_Twitch_Logo__1_-removebg-preview.png?ex=66f692f2&is=66f54172&hm=3270bac3753e3e983433fb0f64a22f33985d81c0d24a78c50b991e58b89507d0&');
}
function draw() {
  background(0);
  kitty.position.x = mouseX;
  kitty.position.y = mouseY;
  kitty.addImage('https://cdn.discordapp.com/attachments/1219799954307158141/1288284376450203678/Pink_Retro_Typographic_Streamer_Twitch_Logo__11_-removebg-preview.png?ex=66f5f152&is=66f49fd2&hm=0b913efc1d7f4c2d8366448a30831291e480b1d8cd902c842782231529e8148f&');
  if (mouseIsPressed) {
  
kitty.rotation += 2;

}

  drawSprites();
}