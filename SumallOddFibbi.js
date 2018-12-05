var tin=[]
function sumFibs(num) {
  for (let i=0;i<num;i++){
    var Theta=(1+(Math.pow(5,1/2)))/2;
    var Phi=(-1/Theta);
    tin = Math.ceil(((Math.pow(Theta,i))-(Math.pow(Phi,i)))/(Math.pow(5,1/2)));
    console.log(tin);
  }
};

sumFibs(4);
//if(num%2==0)