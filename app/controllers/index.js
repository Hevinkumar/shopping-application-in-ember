import Controller from '@ember/controller';

export default Controller.extend({
    // size: window.innerWidth,
    
    self:this,
    

    didInsertElement() {
        this._super(...arguments);
        window.addEventListener('click', () => {
        //   this.element.classList.remove('sliding-anim');
            console.log("event listener");
            console.log(self.get('login'));
            if(self.get('login') === true){
                this.set('login',!this.get("login"))
            }
            else if(self.get('signup'=== true)){
                this.set("signup" , !this.get("signup"))
            }
        });
      },
  

    
    // init() {
    //     this._super(...arguments);
    
    //     window.addEventListener('click', function () {
    //         console.log("event listener");
    //         console.log(self.get('login'));
    //         if(self.get('login') === true){
    //             this.set('login',!this.get("login"))
    //         }
    //         else if(self.get('signup'=== true)){
    //             this.set("signup" , !this.get("signup"))
    //         }
    //     });
    //   },
      
    
    
    
});
