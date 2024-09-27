let color = [];
let desiciones = []
let colors;
let lvl = 0;
let y, b, g, r;  
let y2, b2, g2, r2;  
let yp
let pop;
let muestras = []
let juegamaquina = true

function preload() {
    y = loadImage('https://cdn.discordapp.com/attachments/1219799954307158141/1286102397915103242/Pink_Retro_Typographic_Streamer_Twitch_Logo__1_-removebg-preview.png?ex=66f5ea32&is=66f498b2&hm=e774909863289c875b26311877968fc53a98b4b3046fb434388a5eb873ca634b&');
    b = loadImage('https://cdn.discordapp.com/attachments/1219799954307158141/1286102552966074438/Pink_Retro_Typographic_Streamer_Twitch_Logo__2_-removebg-preview.png?ex=66f5ea57&is=66f498d7&hm=4248760eb1de5f557cc362f386eaad34f7a036dd475fb0992054bc6fcb1a2316&');
    g = loadImage('https://cdn.discordapp.com/attachments/1219799954307158141/1286102942264328234/Pink_Retro_Typographic_Streamer_Twitch_Logo__3_-removebg-preview.png?ex=66f5eab4&is=66f49934&hm=af08378f0b6d6fa867d38b1aa8c4005ac508e565af6a974121d3368cac27d4a2&');
    r = loadImage('https://cdn.discordapp.com/attachments/1219799954307158141/1286102820491366441/Pink_Retro_Typographic_Streamer_Twitch_Logo__4_-removebg-preview.png?ex=66f5ea97&is=66f49917&hm=88591da873c021083a91c510a68cf20656edc484b689115b2232ab9e546e1aa4&');

    r2 = loadImage('https://cdn.discordapp.com/attachments/1219799954307158141/1288282443165597706/Pink_Retro_Typographic_Streamer_Twitch_Logo__5_-removebg-preview.png?ex=66f5ef85&is=66f49e05&hm=112f25a997f62bcc37796b4f4f4a255dd60a9bed2778a9dae713ccd21f6b777c&')
    b2 = loadImage('https://cdn.discordapp.com/attachments/1219799954307158141/1288283009622999136/Pink_Retro_Typographic_Streamer_Twitch_Logo__7_-removebg-preview.png?ex=66f5f00c&is=66f49e8c&hm=81cee0bb172e5144ecbc88436b3e966a272dae3135649fd4e4cddb1498d0170f&')
    g2 = loadImage('https://cdn.discordapp.com/attachments/1219799954307158141/1288283456266047561/Pink_Retro_Typographic_Streamer_Twitch_Logo__9_-removebg-preview.png?ex=66f5f077&is=66f49ef7&hm=83d3c9963bb84a1f9891bc2b7ab71259e17429792535fdb2865a54f1fc13c939&')
    y2 = loadImage('https://cdn.discordapp.com/attachments/1219799954307158141/1288284376450203678/Pink_Retro_Typographic_Streamer_Twitch_Logo__11_-removebg-preview.png?ex=66f5f152&is=66f49fd2&hm=0b913efc1d7f4c2d8366448a30831291e480b1d8cd902c842782231529e8148f&')
    pop = loadSound('pop1.wav')
}

function setup() {
    createCanvas(5300, 2500);
    canva();
    rcolor()
    resize();
    cursor('https://cdn.discordapp.com/attachments/1219773611531829261/1288246607724286003/hand_point.png?ex=66f676e5&is=66f52565&hm=b49651e196148e5989f00ec2eb3fb79bf4fb65a7d779417a2acc8ceab0cc75cc&');
    textSize(200);
}

function draw() {
    background(0, 100, 100);   

    clicks(); 
    verificar()


    if (juegamaquina) {
        for (let i = 0; i < color.length; i++) {
            setTimeout(() => ask(i), i * 1000);
        }


        setTimeout(clearMuestras, color.length * 1000 + 1000); 
    }

    text("NIVEL:" + lvl,100,500)
    text("acordate:" + muestras,100,2400)
    asteriscos()

    drawSprites();
}

function asteriscos() {
    let faltantes = ""
    for (let i = 0; i < lvl+1 -desiciones.length; i++) {
        faltantes += "*";
    }

    text(desiciones + faltantes,100,300)

}

function ask(i) {
    muestras[i] = color[i];
    text("valores: " + muestras[i], 100, 500); 

    if (i >= color.length - 1) {
        juegamaquina = false; 
    }
}

function clearMuestras() {
    muestras = [];
    console.log("muestras borradas");
}

function verificar() {
    if (desiciones.length >= lvl + 1) {
        if (sonIguales(desiciones, color)) {
        
            desiciones = [];
            lvl++;
            juegamaquina = true
            rcolor();
        } else {
    
            desiciones = [];
            lvl = 0;
            color = [];  
            rcolor();  
        }
    }
}

function sonIguales(arreglo1, arreglo2) {
    if (arreglo1.length !== arreglo2.length) {
        return false; 
    }

    for (let i = 0; i < arreglo1.length; i++) {
        if (arreglo1[i] !== arreglo2[i]) {
            return false;
        }
    }

    return true; 
}

function resize() {
    y.resize(1000, 1000);
    g.resize(1000, 1000);
    b.resize(1000, 1000);
    r.resize(1000, 1000);

    y2.resize(1000, 1000);
    g2.resize(1000, 1000);
    b2.resize(1000, 1000);
    r2.resize(1000, 1000);
}

function canva() {
    yp = createSprite(2100, 700);
    yp.addImage(y);
    
    gp = createSprite(3150, 1750);
    gp.addImage(g);

    rp = createSprite(2100, 1750);
    rp.addImage(r);

    bp = createSprite(3150, 700);
    bp.addImage(b);
}

function rcolor() {

        colors = round(random(1, 5)); 

        if (colors === 1) {
            color.push("🟨");
            
        } else if (colors == 2) {
            color.push("🟦");
        } else if (colors == 3) {
            color.push("🟥");
        } else if (colors == 4) {
            color.push("🟩");
        }
    

}

function clicks() {
    if (mouseIsPressed && !juegamaquina) {
        if (yp.overlapPoint(mouseX, mouseY)) {
            pop.play();
            rp.addImage(r2);
            desiciones.push("🟨");
            yp.addImage(y2);
            mouseX = 0
            mouseY = 0
        } else if (bp.overlapPoint(mouseX, mouseY)) {
            pop.play();
            desiciones.push("🟦");
            bp.addImage(b2);
            mouseX = 0
            mouseY = 0
        } else if (rp.overlapPoint(mouseX, mouseY)) {
            pop.play();
            desiciones.push("🟥");
            mouseX = 0
            mouseY = 0
        } else if (gp.overlapPoint(mouseX, mouseY)) {
            pop.play();
            desiciones.push("🟩");
            gp.addImage(g2);
            mouseX = 0
            mouseY = 0
        }
    }
}
