var kol = 1, plus = 0, x = -40, z = 0, col = 0, mol = 1, moveLabel = 0;
var one = 0, two = 0;
var matrix = [[]], watrix = [[]];
var arr;
var omg = 0, omgg = 0;
document.onload = function(){
  for(kol; kol < 65; kol++){
    if(plus == 8){
      plus = 0;
      x -= 80;
      z -= 10;
      mol++;
    }
    if(mol % 2){
      if(kol % 2)
        col = 0;
      else
        col = 1;
    }else {
      if(kol % 2)
        col = 1;
      else
        col = 0;
    }
    var t = document.createElement("Transform");
    t.setAttribute("id", String("kol"));
    t.setAttribute("translation", " " + x + " " + -10 + " " + z);
    arr = [x, -10, z];
    var s = document.createElement("Shape");
    var a = document.createElement("Appearance");
    var m = document.createElement("Material");
    m.setAttribute("diffuseColor", " " + col + " " + col + " " + col);
    m.setAttribute("id", "COL" + String("kol"));
    var b = document.createElement("Box");
    b.setAttribute("size", " " + 10 + " " + 0.5 + " " + 10);
    a.appendChild(m);
    s.appendChild(a);
    s.appendChild(b);
    t.appendChild(s);
    document.getElementById("pole").appendChild(t);
    matrix[one][two] = arr;
    watrix[one][two] = arr;
    two++;
    x += 10;
    plus++;
  }
}
function HandelClickShape(nameOfShape){
  var q = document.createElement("PositionChaser");
  q.setAttribute("duration", 2);
  q.setAttribute("DEF", "peskaChaser0");
  q.setAttribute("id", "peskaChaser" + omg);
  switch (nameOfShape) {
    case "peska0":
      q.setAttribute("initialDestination", watrix[0][0]);
      break;
    case "peska1":
      q.setAttribute("initialDestination", watrix[0][1]);
      break;
    case "peska2":
      q.setAttribute("initialDestination", watrix[0][2]);
      break;
    case "peska3":
      q.setAttribute("initialDestination", watrix[0][3]);
      break;
    case "peska4":
      q.setAttribute("initialDestination", watrix[0][4]);
      break;
    case "peska5":
      q.setAttribute("initialDestination", watrix[0][5]);
      break;
    case "peska6":
      q.setAttribute("initialDestination", watrix[0][6]);
      break;
    case "peska7":
      q.setAttribute("initialDestination", watrix[0][7]);
      break;
  }
  document.getElementById("root").appendChild(q);
  var r = document.createElement("ROUTE");
  r.setAttribute("fromNode", "peskaChaser0");
  r.setAttribute("fromField", "value_changed");
  r.setAttribute("toNode", nameOfShape);
  r.setAttribute("toField", "set_translation");
  document.getElementById("root").appendChild(r);
  //не работает
  /*var q = document.getElementById("ROUTE");
  q.setAttribute("toNode", nameOfShape);
  document.getElementById("root").appendChild(q);*/
  omgg = omg;
  omg++;
}
function move(point){
  point[1] +=5.2;
  document.getElementById('peskaChaser'+omgg).setAttribute('set_destination', point);
}
