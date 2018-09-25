function translatePigLatin(str){
    var slicestr=[""];
    var pig1=[""];
     slicestr=str.slice(0, 1);
     str=str.slice(1,str.length);
     pig1=str+slicestr+"ay";
  console.log(pig1);
}
translatePigLatin("consonant");
translatePigLatin("california");