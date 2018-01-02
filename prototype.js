      function C1(name){
        if(name){
          this.name = name;
        }
      }

      function C2(name){
        this.name = name;
      }

      function C3(name){
        this.name = name || "John";
      }

      C1.prototype.name = "Tom";
      C2.prototype.name = "Tom";
      C3.prototype.name = "John";

      console.log(new C1().name + "," + new C2().name + "," + new C3().name);