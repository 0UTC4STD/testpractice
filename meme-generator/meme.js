const imageFile = document.querySelector('#imageFile');
const topText = document.querySelector('#topText');
const bottomText = document.querySelector('#bottomText');
const generate =document.querySelector('#generateButton');
const finishedMeme =document.querySelector('#finishedMeme');

function createMeme(img,topText,bottomText){
const ctx = finishedMeme.getContext('2d');
finishedMeme.width=img.width;
finishedMeme.height=img.height;
ctx.drawImage(img,0,0);


let fontSize = Math.floor(finishedMeme.width/10);
ctx.font = `${fontSize}px Impact`;
ctx.lineWidth = fontSize / 20;

ctx.strokeStyle = "black";
ctx.fillStyle = "white";
ctx.textAlign = "center";
ctx.lineJoin = "round";


const xPos = finishedMeme.width / 2;
const yPos = finishedMeme.height / 25;
ctx.textBaseline = "top";
  ctx.strokeText(topText, xPos, yPos);
  ctx.fillText(topText, xPos, yPos);

  ctx.textBaseline = "bottom";
  ctx.strokeText(bottomText, xPos,finishedMeme.height - yPos);
  ctx.fillText(bottomText, xPos, finishedMeme.height- yPos);



}

generate.addEventListener('click', ()=>{
  const reader = new FileReader();
  reader.onload=()=> {
  const image= new Image();
  image.src = reader.result;
  image.onload=()=>{
      createMeme(image,topText.value,bottomText.value);
    };
  };
    reader.readAsDataURL(imageFile.files[0]);
});



