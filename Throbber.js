<script src="p5.min.js"></script>
<script>
function setup() {
    createCanvas(222, 222);
}
    function draw () {
        background(0);
fill(255,204,0);
arc(100, 100, 80, 80, 0, 3.15, 90);        
arc(120, 100, 80, 80, 9.43, 0, 90);
fill(0);        

ellipse(102, 85, 12, 12);
ellipse(135, 85, 12, 12);
fill(255,204,0);

strokeWeight(2);
arc(100, 108, 50, 30, 0, 3.15, 90); 
}
</script>