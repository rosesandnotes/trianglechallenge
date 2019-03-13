document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('triangle').addEventListener('submit', function(e){

    //Hide Result
    document.getElementById('result').style.display = 'none';
  
    //Show Result
    document.getElementById('loading').style.display = 'block';
  
    setTimeout(getTriangleType, 1000);
  
    e.preventDefault();
  });
  
  // Get Triangle Type
  function getTriangleType(e){
    const side1 = document.getElementById('inputSide1');
    const side2 = document.getElementById('inputSide2');
    const side3 = document.getElementById('inputSide3');
    const triangleType = document.getElementById('triangletype');
  
    var found = 0;
    var result;
    const sides = [side1.value, side2.value, side3.value];
  
    for(var x = 0; x < 3; x++){
      for(var y = x + 1; y < 3; y++){
        if(parseInt(sides[x]) == parseInt(sides[y])){
          found++;
        }
      }
    }
  
    if(found === 0){
      result = "Scalene Triangle";
    }else if(found === 1){
      result = "Isosceles Triangle";
    }else{
      result = "Equilateral Triangle";
    }
  
  
    triangleType.value = result;
  
    //Show Result
    document.getElementById('result').style.display = 'block';
  
    //Hide Spinner
    document.getElementById('loading').style.display = 'none';
  }
});