class Bullet{
    constructor(){
    //   this.obj = document.createElement("a-sphere");
      this.obj = document.createElement("a-gltf-model");
      this.obj.setAttribute("src","#strawberry_cat");
      this.obj.setAttribute("scale", ".5 .5 .5");
      this.obj.setAttribute("dynamic-body", "");
    //   this.obj.setAttribute("rotation", {x:0, y:90, z:0});
    //   this.obj.setAttribute("color","black")
    //   this.obj.setAttribute("radius",.5);
    //   this.obj.setAttribute("position",{x:0, y:2, z:0});
      scene.append(this.obj)
      this.dx = 10;
      this.dz = 10;
      this.rx = 0.1;
      this.rz = 0.1;

    }
    move(){
      if(this.fire){
        this.x += this.dx;
        this.z += this.dz;
        this.rx +=  5;
        this.rz += 5;
        this.obj.setAttribute("position",{x:this.x, y:1, z:this.z});
        this.obj.setAttribute("rotation", {x:this.rx, y:0, z:this.rz});
      }else{
        this.obj.setAttribute("opacity",0);
      }
      
    }
    shoot(){
      this.fire = true;
      this.obj.setAttribute("opacity",1);
      this.x = camera.object3D.position.x;
      this.y = 1;
      this.z = camera.object3D.position.z;
  
      let angle = camera.object3D.rotation.y + Math.PI;
      this.dx = Math.sin(angle) / 2;
      this.dz = Math.cos(angle) / 2;
    }
  }