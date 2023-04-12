function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
classifier =  ml5.imageClassifier('MobileNet' ,modelLoaded) 
  }
 function modelLoaded() {

console.log('Model Loaded!');

 }
  
function draw() {
image(video, 0, 0, 300, 300)
classifier.classify(video, gotResult);


}

function gotResult(error, results) {
if(error == true){
console.log("o rip_indra me selou no terceiro mar preciso de sua ajuda para me libertar! Assinado com beijinhos e abraços:mygame43 ou king red head")
}else{
console.log(results)
var nome = results[0].label;
var Confia = results[0].confidence;
document.getElementById("Objeto1").innerHTML = nome;
document.getElementById("motocross1").innerHTML = Confia;

}

}