class Gun{
   constructor(x,z){
       this.stop = false;
       this.x = x;
       this.z = z;
       this.dx = rnd(-10,10)/50;
       this.dy = 0.5; 
       this.dz = rnd(-10,10)/50;
       this.obj = giftTemplate.cloneNode(true);
       this.obj.setAttribute("animation","property: rotation; to: 0 540 0; loop: true; dur: 3000");
 
       this.obj.addEventListener("mouseenter", ()=>{
          this.stop = true; 
          let inventory_text = document.createElement("a-text");
          inventory_text.setAttribute("value","You obtained a gun. Press [Space] to shoot.");
          inventory_text.setAttribute("position", {x:-.9, y:-.9, z:-.25});
          inventory_text.setAttribute("scale", "0.43 0.43 0.43");
          cursor.append(inventory_text);

         //  <a-text scale =".5 .5 .5" id="health" position="-1 .9 -.25" value="Health: " color="black"></a-text>
          gun_inventory = true;
       }); 
       this.obj.addEventListener("mouseleave", ()=>{
          this.stop = false;
       })
       this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
       scene.append(this.obj);
       // this.obj.setAttribute("interact","");
 
       this.rainbow();
   }
   rainbow(){
    let rnd = (l,u) => Math.floor(Math.random()*(u-l)+l);
    this.colors = ["black", "white"];
    let i = 0;
    // An interval that changes colors periodically(i + 1) % this.colors.length; 
    setInterval(() => {
      this.obj.setAttribute("color", this.colors[i]);
      i = rnd(0,this.colors.length);
    }, 500); 
  }
   roam(){
     /* Challenge
        Create an altering animation for movement on the z axis. Keep the gift 
        between the z values of -20 and 20
     */
       this.z += this.dz;
       if(this.z < -120 || this.z > 120){
          this.dz = -this.dz;
       }
 
     /* Challenge
        Create an altering animation for movement on the x axis. Keep the gift 
        between the x values of -20 and 20
     */
        this.x += this.dx;
        if(this.x < -120 || this.x > 120){
           this.dx = -this.dx;
        }
 
        if(this.stop){
          this.dx = 0;
          this.dz = 0;
          this.dy = -10;
        }
       
       
       this.obj.setAttribute("position",{x:this.x, y:this.dy, z:this.z}); 
     
   }
 }