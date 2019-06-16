var kol = 1, plus = 0, x = -40, z = 0, col = 0, mol = 1, moveLabel = 0, svi = 0;
var one = 0, two = 0;
var matrix = [[]], watrix = [0, 0, 0, 0, 0, 0, 0, 0], jatrix = [[]], peskaLabel = [0, 0, 0, 0, 0, 0, 0, 0];
var arr, array, blackPoint = [0, 0, 0];
var omg = 0, omgg = 0;
var sringi = ["peska8", "peska9", "peska10", "peska11", "peska12", "peska13", "peska14", "peska15"];
var dinamicPoint0 = [-40, -5, 0],
    dinamicPoint1 = [-30, -5, 0],
    dinamicPoint2 = [-20, -5, 0],
    dinamicPoint3 = [-10, -5, 0],
    dinamicPoint4 = [0, -5, 0],
    dinamicPoint5 = [10, -5, 0],
    dinamicPoint6 = [20, -5, 0],
    dinamicPoint7 = [30, -5, 0];
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
    arr = [x, -5, z];
    array = [x + 5, -10, z - 5];
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
    //watrix[one][two] = arr;
    jatrix[one][two] = array;
    two++;
    x += 10;
    plus++;
  }
  var name = 65;
  kol = 0;
  col = 0;
  x = -40, z = -70;
  for(kol; kol < 8; kol++){
    var y = document.createElement("Transform");
    y.setAttribute("id", sringi[kol]);
    y.setAttribute("translation", " " + x + " " + -5 + " " + z);
    blackPoint = [x, -5, z];
    watrix[kol] = blackPoint;
    var u = document.createElement("Shape");
    var o = document.createElement("Appearance");
    var f = document.createElement("Material");
    f.setAttribute("diffuseColor", " " + col + " " + col + " " + col);
    var l = document.createElement("Box");
    l.setAttribute("size", " " + 5 + " " + 10 + " " + 5);
    o.appendChild(f);
    u.appendChild(o);
    u.appendChild(l);
    y.appendChild(u);
    document.getElementById("root").appendChild(y);
    x += 10;
    name++;
  }
  obnull();
}
function HandelClickShape(nameOfShape){
  var q = document.createElement("PositionChaser");
  q.setAttribute("duration", 2);
  q.setAttribute("DEF", "peskaChaser0");
  q.setAttribute("id", "peskaChaser" + omg);
  switch (nameOfShape) {
    case "peska0":
      q.setAttribute("initialDestination", dinamicPoint0);
      obnull();
      peskaLabel[0] = 1;
      break;
    case "peska1":
      q.setAttribute("initialDestination", dinamicPoint1);
      obnull();
      peskaLabel[1] = 1;
      break;
    case "peska2":
      q.setAttribute("initialDestination", dinamicPoint2);
      obnull();
      peskaLabel[2] = 1;
      break;
    case "peska3":
      q.setAttribute("initialDestination", dinamicPoint3);
      obnull();
      peskaLabel[3] = 1;
      break;
    case "peska4":
      q.setAttribute("initialDestination", dinamicPoint4);
      obnull();
      peskaLabel[4] = 1;
      break;
    case "peska5":
      q.setAttribute("initialDestination", dinamicPoint5);
      obnull();
      peskaLabel[5] = 1;
      break;
    case "peska6":
      q.setAttribute("initialDestination", dinamicPoint6);
      obnull();
      peskaLabel[6] = 1;
      break;
    case "peska7":
      q.setAttribute("initialDestination", dinamicPoint7);
      obnull();
      peskaLabel[7] = 1;
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

var i = 0, j, maf;
var govnoint;
function move(point){
  for(j = 0; j < 64; j++){
    govnoint = jatrix[i][j];
    if(point[0] < govnoint[0] && point[2] > govnoint[2]){
      point = matrix[i][j];
      change(point);
      break;
    }
  }
  dol(point);
  document.getElementById('peskaChaser'+omgg).setAttribute('set_destination', point);
  maf = point;
}
function change(p){
  var w = 0, state = 9;
  while(w == 0){
    switch (state) {
      case 9:
        for(var meg = 0; meg < 8; meg++){
          if(peskaLabel[meg] == 1){
            state = meg;
          }
        }
        break;
      case 0:
        dinamicPoint0 = p;
        w = 1;
        break;
      case 1:
        dinamicPoint1 = p;
        w = 1;
        break;
      case 2:
        dinamicPoint2 = p;
        w = 1;
        break;
      case 3:
        dinamicPoint3 = p;
        w = 1;
        break;
      case 4:
        dinamicPoint4 = p;
        w = 1;
        break;
      case 5:
        dinamicPoint5 = p;
        w = 1;
        break;
      case 6:
        dinamicPoint6 = p;
        w = 1;
        break;
      case 7:
        dinamicPoint7 = p;
        w = 1;
        break;
    }
  }
}
function obnull() {
  for(var mag = 0; mag < 8; mag++){
    peskaLabel[mag] = 0;
  }
}
function dol(poi){
  for(var mexx = 0; mexx < 8; mexx++){
    var fff = [0, 0 ,0];
    fff = watrix[mexx];
    var ffd = [0, 0, 0];
    ffd = poi;
    if(fff[0] == ffd[0] && fff[1] == ffd[1] && fff[2] == ffd[2]){
      var dolNode = document.getElementById(sringi[mexx]);
      dolNode.remove();
      break;
    }
  }
}
