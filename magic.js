var kol = 1, plus = 0, x = -40, z = 0, col = 0, mol = 1;
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
    var s = document.createElement("Shape");
    var a = document.createElement("Appearance");
    var m = document.createElement("Material");
    m.setAttribute("diffuseColor", " " + col + " " + col + " " + col);
    var b = document.createElement("Box");
    b.setAttribute("size", " " + 10 + " " + 0.5 + " " + 10);
    a.appendChild(m);
    s.appendChild(a);
    s.appendChild(b);
    t.appendChild(s);
    document.getElementById("pole").appendChild(t);
    x += 10;
    plus++;
  }
}
function move(point){
  point[1] +=5.2;
  document.getElementById('peskaChaser').setAttribute('set_destination', point);
}
/*var coor=[0,0,0];
var j = 0, g = 0, d = 0, a = 0, h = 0, f = 0;
function make() {
  if( j > 4){
    alert("Достаточно.");
  }else{
    var t = document.createElement("Transform");
    var n = document.createElement("Inline");
    //t.setAttribute("id", "1");
    if(j == 0){
      t.setAttribute("id", "1");
      coor=[-20, 0,-20];
      g = 33;
    }
    if(j == 1){
      t.setAttribute("id", "2");
      coor=[-10, 0,-70];
      d = 84;
    }
    if(j == 2){
      t.setAttribute("id", "3");
      coor=[-40, 0,-40];
      a = 51;
    }
    if(j == 3){
      t.setAttribute("id", "4");
      coor=[30, 0, 0];
      h = 18;
    }
    if(j == 4){
      t.setAttribute("id", "5");
      coor=[10, 0, -60];
      f = 76;
    }
    t.setAttribute("translation", coor);
    n.setAttribute("url", "chess.x3d");
    t.appendChild(n);
    document.getElementById("root").appendChild(t);
    j++;
  }
}
function del() {
  if(c == g){
    var delNode = document.getElementById("1");
    delNode.remove();
  }if(c == d){
    var delNod = document.getElementById("2");
    delNod.remove();
  }if(c == a){
    var delNo = document.getElementById("3");
    delNo.remove();
  }if(c == h){
    var delN = document.getElementById("4");
    delN.remove();
  }if(c == f){
    var delNn = document.getElementById("5");
    delNn.remove();
  }
}
var line = 0, i = 0, c = 0;
function move(point){
  line = 0;
  i = 0;
  while(i < 1){
  switch (line) {
    case 0:
      if(point[2] > -5){
        line = 1;
      }
      else if(point[2] > -15){
          line = 2;
        }else if (point[2] > -25){
              line = 3;
            }else if(point[2] > -35){
                  line = 4;
                }else if(point[2] > -45){
                      line = 5;
                    }else if(point[2] > -55){
                          line = 6;
                        }else if(point[2] > -65){
                              line = 7;
                            }else if(point[2] > -75){
                                  line = 8;
                              }
      break;
      case 1:
        if(point[0] < -35){
          point = [-40,0,0];
          i++;
          c = 11;
        }else if (point[0] < -25) {
          point = [-30,0,0];
          i++;
          c = 12;
        }else if (point[0] < -15) {
          point = [-20,0,0];
          i++;
          c = 13;
        }else if (point[0] < -5) {
          point = [-10,0,0];
          i++;
          c = 14;
        }else if (point[0] < 5) {
          point = [0,0,0];
          i++;
          c = 15;
        }else if (point[0] < 15) {
          point = [10,0,0];
          i++;
          c = 16;
        }else if (point[0] < 25) {
          point = [20,0,0];
          i++;
          c = 17;
        }else if (point[0] < 35) {
          point = [30,0,0];
          i++;
          c = 18;
        }
      break;
      case 2:
        if(point[0] < -35){
          point = [-40,0,-10];
          i++;
          c = 21;
        }else if(point[0] < -25){
          point = [-30,0,-10];
          i++;
          c = 22;
        }else if(point[0] < -15){
          point = [-20,0,-10];
          i++;
          c = 23;
        }else if(point[0] < -5){
          point = [-10,0,-10];
          i++;
          c = 24;
        }else if(point[0] < 5){
          point = [0,0,-10];
          i++;
          c = 25;
        }else if(point[0] < 15){
          point = [10,0,-10];
          i++;
          c = 26;
        }else if(point[0] < 25){
          point = [20,0,-10];
          i++;
          c = 27;
        }else if(point[0] < 35){
          point = [30,0,-10];
          i++;
          c = 28;
        }
      break;
      case 3:
        if(point[0] < -35){
          point = [-40,0,-20];
          i++;
          c = 31;
        }else if(point[0] < -25){
          point = [-30,0,-20];
          i++;
          c = 32;
        }else if(point[0] < -15){
          point = [-20,0,-20];
          i++;
          c = 33;
        }else if(point[0] < -5){
          point = [-10,0,-20];
          i++;
          c = 34;
        }else if(point[0] < 5){
          point = [0,0,-20];
          i++;
          c = 35;
        }else if(point[0] < 15){
          point = [10,0,-20];
          i++;
          c = 36;
        }else if(point[0] < 25){
          point = [20,0,-20];
          i++;
          c = 37;
        }else if(point[0] < 35){
          point = [30,0,-20];
          i++;
          c = 38;
        }
      break;
      case 4:
        if(point[0] < -35){
          point = [-40,0,-30];
          i++;
          c = 41;
        }else if(point[0] < -25){
          point = [-30,0,-30];
          i++;
          c = 42;
        }else if(point[0] < -15){
          point = [-20,0,-30];
          i++;
          c = 43;
        }else if(point[0] < -5){
          point = [-10,0,-30];
          i++;
          c = 44;
        }else if(point[0] < 5){
          point = [0,0,-30];
          i++;
          c = 45;
        }else if(point[0] < 15){
          point = [10,0,-30];
          i++;
          c = 46;
        }else if(point[0] < 25){
          point = [20,0,-30];
          i++;
          c = 47;
        }else if(point[0] < 35){
          point = [30,0,-30];
          i++;
          c = 48;
        }
      break;
      case 5:
        if(point[0] < -35){
          point = [-40,0,-40];
          i++;
          c = 51;
        }else if(point[0] < -25){
          point = [-30,0,-40];
          i++;
          c = 52;
        }else if(point[0] < -15){
          point = [-20,0,-40];
          i++;
          c = 53;
        }else if(point[0] < -5){
          point = [-10,0,-40];
          i++;
          c = 54;
        }else if(point[0] < 5){
          point = [0,0,-40];
          i++;
          c = 55;
        }else if(point[0] < 15){
          point = [10,0,-40];
          i++;
          c = 56;
        }else if(point[0] < 25){
          point = [20,0,-40];
          i++;
          c = 57;
        }else if(point[0] < 35){
          point = [30,0,-40];
          i++;
          c = 57;
        }
      break;
      case 6:
      if(point[0] < -35){
        point = [-40,0,-50];
        i++;
        c = 61;
      }else if(point[0] < -25){
        point = [-30,0,-50];
        i++;
        c = 62;
      }else if(point[0] < -15){
        point = [-20,0,-50];
        i++;
        c = 63;
      }else if(point[0] < -5){
        point = [-10,0,-50];
        i++;
        c = 64;
      }else if(point[0] < 5){
        point = [0,0,-50];
        i++;
        c = 65;
      }else if(point[0] < 15){
        point = [10,0,-50];
        i++;
        c = 66;
      }else if(point[0] < 25){
        point = [20,0,-50];
        i++;
        c = 67;
      }else if(point[0] < 35){
        point = [30,0,-50];
        i++;
        c = 68;
      }
      break;
      case 7:
      if(point[0] < -35){
        point = [-40,0,-60];
        i++;
        c = 71;
      }else if(point[0] < -25){
        point = [-30,0,-60];
        i++;
        c = 72;
      }else if(point[0] < -15){
        point = [-20,0,-60];
        i++;
        c = 73;
      }else if(point[0] < -5){
        point = [-10,0,-60];
        i++;
        c = 74;
      }else if(point[0] < 5){
        point = [0,0,-60];
        i++;
        c = 75;
      }else if(point[0] < 15){
        point = [10,0,-60];
        i++;
        c = 76;
      }else if(point[0] < 25){
        point = [20,0,-60];
        i++;
        c = 77;
      }else if(point[0] < 35){
        point = [30,0,-60];
        i++;
        c = 78;
      }
      break;
      case 8:
      if(point[0] < -35){
        point = [-40,0,-70];
        i++;
        c = 81;
      }else if(point[0] < -25){
        point = [-30,0,-70];
        i++;
        c = 82;
      }else if(point[0] < -15){
        point = [-20,0,-70];
        i++;
        c = 83;
      }else if(point[0] < -5){
        point = [-10,0,-70];
        i++;
        c = 84;
      }else if(point[0] < 5){
        point = [0,0,-70];
        i++;
        c = 85;
      }else if(point[0] < 15){
        point = [10,0,-70];
        i++;
        c = 86;
      }else if(point[0] < 25){
        point = [20,0,-70];
        i++;
        c = 87;
      }else if(point[0] < 35){
        point = [30,0,-70];
        i++;
        c = 88;
      }
      break;
    default:

  }
}
  point[1] +=5.2;
  document.getElementById('peskaChaser').setAttribute('set_destination', point);
}
///////////////////////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
function coloA1(q) {
  if(q == 1){
  var col = document.getElementById('cA1');
  }if(q == 3){
  var col = document.getElementById('cA3');
  }if(q == 5){
  var col = document.getElementById('cA5');
  }if(q == 7){
  var col = document.getElementById('cA7');
  }
  col.setAttribute("diffuseColor", " " + 1 + " " + 0 + " " + 0);
  sleep(10000);
  col.setAttribute("diffuseColor", " " + 0 + " " + 0 + " " + 0);
}
function colorA1(q) {
  if(q == 1){
  var col = document.getElementById('cA1');
  }if(q == 3){
  var col = document.getElementById('cA3');
  }if(q == 5){
  var col = document.getElementById('cA5');
  }if(q == 7){
  var col = document.getElementById('cA7');
  }
  col.setAttribute("diffuseColor", " " + 0 + " " + 1 + " " + 0);
}
function colorAA1(q) {
  if(q == 1){
  var col = document.getElementById('cA1');
  }if(q == 3){
  var col = document.getElementById('cA3');
  }if(q == 5){
  var col = document.getElementById('cA5');
  }if(q == 7){
  var col = document.getElementById('cA7');
  }
  col.setAttribute("diffuseColor", " " + 0 + " " + 0 + " " + 0);
}

function coloA2(q) {
  if(q == 2){
  var col = document.getElementById('cA2');
}if(q == 4){
  var col = document.getElementById('cA4');
}if(q == 6){
  var col = document.getElementById('cA6');
}if(q == 8){
  var col = document.getElementById('cA8');
  }
  col.setAttribute("diffuseColor", " " + 1 + " " + 0 + " " + 0);
  sleep(10000);
  col.setAttribute("diffuseColor", " " + 1 + " " + 1 + " " + 1);
}
function colorA2(q) {
  if(q == 2){
  var col = document.getElementById('cA2');
}if(q == 4){
  var col = document.getElementById('cA4');
}if(q == 6){
  var col = document.getElementById('cA6');
}if(q == 8){
  var col = document.getElementById('cA8');
  }
  col.setAttribute("diffuseColor", " " + 0 + " " + 1 + " " + 0);
}
function colorAA2(q) {
  if(q == 2){
  var col = document.getElementById('cA2');
}if(q == 4){
  var col = document.getElementById('cA4');
}if(q == 6){
  var col = document.getElementById('cA6');
}if(q == 8){
  var col = document.getElementById('cA8');
  }
  col.setAttribute("diffuseColor", " " + 1 + " " + 1 + " " + 1);
}
//////////////////////////////////////////////////////////////////////////////////////////////////BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
function coloB1(q) {
  if(q == 1){
  var col = document.getElementById('cB1');
  }if(q == 3){
  var col = document.getElementById('cB3');
  }if(q == 5){
  var col = document.getElementById('cB5');
  }if(q == 7){
  var col = document.getElementById('cB7');
  }
  col.setAttribute("diffuseColor", " " + 1 + " " + 0 + " " + 0);
  sleep(10000);
  col.setAttribute("diffuseColor", " " + 1 + " " + 1 + " " + 1);
}
function colorB1(q) {
  if(q == 1){
  var col = document.getElementById('cB1');
  }if(q == 3){
  var col = document.getElementById('cB3');
  }if(q == 5){
  var col = document.getElementById('cB5');
  }if(q == 7){
  var col = document.getElementById('cB7');
  }
  col.setAttribute("diffuseColor", " " + 0 + " " + 1 + " " + 0);
}
function colorBB1(q) {
  if(q == 1){
  var col = document.getElementById('cB1');
  }if(q == 3){
  var col = document.getElementById('cB3');
  }if(q == 5){
  var col = document.getElementById('cB5');
  }if(q == 7){
  var col = document.getElementById('cB7');
  }
  col.setAttribute("diffuseColor", " " + 1 + " " + 1 + " " + 1);
}

function coloB2(q) {
  if(q == 2){
  var col = document.getElementById('cB2');
}if(q == 4){
  var col = document.getElementById('cB4');
}if(q == 6){
  var col = document.getElementById('cB6');
}if(q == 8){
  var col = document.getElementById('cB8');
  }
  col.setAttribute("diffuseColor", " " + 1 + " " + 0 + " " + 0);
  sleep(10000);
  col.setAttribute("diffuseColor", " " + 0 + " " + 0 + " " + 0);
}
function colorB2(q) {
  if(q == 2){
  var col = document.getElementById('cB2');
}if(q == 4){
  var col = document.getElementById('cB4');
}if(q == 6){
  var col = document.getElementById('cB6');
}if(q == 8){
  var col = document.getElementById('cB8');
  }
  col.setAttribute("diffuseColor", " " + 0 + " " + 1 + " " + 0);
}
function colorBB2(q) {
  if(q == 2){
  var col = document.getElementById('cB2');
}if(q == 4){
  var col = document.getElementById('cB4');
}if(q == 6){
  var col = document.getElementById('cB6');
}if(q == 8){
  var col = document.getElementById('cB8');
  }
  col.setAttribute("diffuseColor", " " + 0 + " " + 0 + " " + 0);
}
//////////////////////////////////////////////////////////////////////////////////////////////////CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC
function coloC1(q) {
  if(q == 1){
  var col = document.getElementById('cC1');
  }if(q == 3){
  var col = document.getElementById('cC3');
  }if(q == 5){
  var col = document.getElementById('cC5');
  }if(q == 7){
  var col = document.getElementById('cC7');
  }
  col.setAttribute("diffuseColor", " " + 1 + " " + 0 + " " + 0);
  sleep(10000);
  col.setAttribute("diffuseColor", " " + 0 + " " + 0 + " " + 0);
}
function colorC1(q) {
  if(q == 1){
  var col = document.getElementById('cC1');
  }if(q == 3){
  var col = document.getElementById('cC3');
  }if(q == 5){
  var col = document.getElementById('cC5');
  }if(q == 7){
  var col = document.getElementById('cC7');
  }
  col.setAttribute("diffuseColor", " " + 0 + " " + 1 + " " + 0);
}
function colorCC1(q) {
  if(q == 1){
  var col = document.getElementById('cC1');
  }if(q == 3){
  var col = document.getElementById('cC3');
  }if(q == 5){
  var col = document.getElementById('cC5');
  }if(q == 7){
  var col = document.getElementById('cC7');
  }
  col.setAttribute("diffuseColor", " " + 0 + " " + 0 + " " + 0);
}

function coloC2(q) {
  if(q == 2){
  var col = document.getElementById('cC2');
}if(q == 4){
  var col = document.getElementById('cC4');
}if(q == 6){
  var col = document.getElementById('cC6');
}if(q == 8){
  var col = document.getElementById('cC8');
  }
  col.setAttribute("diffuseColor", " " + 1 + " " + 0 + " " + 0);
  sleep(10000);
  col.setAttribute("diffuseColor", " " + 1 + " " + 1 + " " + 1);
}
function colorC2(q) {
  if(q == 2){
  var col = document.getElementById('cC2');
}if(q == 4){
  var col = document.getElementById('cC4');
}if(q == 6){
  var col = document.getElementById('cC6');
}if(q == 8){
  var col = document.getElementById('cC8');
  }
  col.setAttribute("diffuseColor", " " + 0 + " " + 1 + " " + 0);
}
function colorCC2(q) {
  if(q == 2){
  var col = document.getElementById('cC2');
}if(q == 4){
  var col = document.getElementById('cC4');
}if(q == 6){
  var col = document.getElementById('cC6');
}if(q == 8){
  var col = document.getElementById('cC8');
  }
  col.setAttribute("diffuseColor", " " + 1 + " " + 1 + " " + 1);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
function coloD1(q) {
  if(q == 1){
  var col = document.getElementById('cD1');
  }if(q == 3){
  var col = document.getElementById('cD3');
  }if(q == 5){
  var col = document.getElementById('cD5');
  }if(q == 7){
  var col = document.getElementById('cD7');
  }
  col.setAttribute("diffuseColor", " " + 1 + " " + 0 + " " + 0);
  sleep(10000);
  col.setAttribute("diffuseColor", " " + 1 + " " + 1 + " " + 1);
}
function colorD1(q) {
  if(q == 1){
  var col = document.getElementById('cD1');
  }if(q == 3){
  var col = document.getElementById('cD3');
  }if(q == 5){
  var col = document.getElementById('cD5');
  }if(q == 7){
  var col = document.getElementById('cD7');
  }
  col.setAttribute("diffuseColor", " " + 0 + " " + 1 + " " + 0);
}
function colorDD1(q) {
  if(q == 1){
  var col = document.getElementById('cD1');
  }if(q == 3){
  var col = document.getElementById('cD3');
  }if(q == 5){
  var col = document.getElementById('cD5');
  }if(q == 7){
  var col = document.getElementById('cD7');
  }
  col.setAttribute("diffuseColor", " " + 1 + " " + 1 + " " + 1);
}

function coloD2(q) {
  if(q == 2){
  var col = document.getElementById('cD2');
}if(q == 4){
  var col = document.getElementById('cD4');
}if(q == 6){
  var col = document.getElementById('cD6');
}if(q == 8){
  var col = document.getElementById('cD8');
  }
  col.setAttribute("diffuseColor", " " + 1 + " " + 0 + " " + 0);
  sleep(10000);
  col.setAttribute("diffuseColor", " " + 0 + " " + 0 + " " + 0);
}
function colorD2(q) {
  if(q == 2){
  var col = document.getElementById('cD2');
}if(q == 4){
  var col = document.getElementById('cD4');
}if(q == 6){
  var col = document.getElementById('cD6');
}if(q == 8){
  var col = document.getElementById('cD8');
  }
  col.setAttribute("diffuseColor", " " + 0 + " " + 1 + " " + 0);
}
function colorDD2(q) {
  if(q == 2){
  var col = document.getElementById('cD2');
}if(q == 4){
  var col = document.getElementById('cD4');
}if(q == 6){
  var col = document.getElementById('cD6');
}if(q == 8){
  var col = document.getElementById('cD8');
  }
  col.setAttribute("diffuseColor", " " + 0 + " " + 0 + " " + 0);
}
////////////////////////////////////////////////////////////////////////////////////////////////////EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
function coloE1(q) {
  if(q == 1){
  var col = document.getElementById('cE1');
  }if(q == 3){
  var col = document.getElementById('cE3');
  }if(q == 5){
  var col = document.getElementById('cE5');
  }if(q == 7){
  var col = document.getElementById('cE7');
  }
  col.setAttribute("diffuseColor", " " + 1 + " " + 0 + " " + 0);
  sleep(10000);
  col.setAttribute("diffuseColor", " " + 0 + " " + 0 + " " + 0);
}
function colorE1(q) {
  if(q == 1){
  var col = document.getElementById('cE1');
  }if(q == 3){
  var col = document.getElementById('cE3');
  }if(q == 5){
  var col = document.getElementById('cE5');
  }if(q == 7){
  var col = document.getElementById('cE7');
  }
  col.setAttribute("diffuseColor", " " + 0 + " " + 1 + " " + 0);
}
function colorEE1(q) {
  if(q == 1){
  var col = document.getElementById('cE1');
  }if(q == 3){
  var col = document.getElementById('cE3');
  }if(q == 5){
  var col = document.getElementById('cE5');
  }if(q == 7){
  var col = document.getElementById('cE7');
  }
  col.setAttribute("diffuseColor", " " + 0 + " " + 0 + " " + 0);
}

function coloE2(q) {
  if(q == 2){
  var col = document.getElementById('cE2');
}if(q == 4){
  var col = document.getElementById('cE4');
}if(q == 6){
  var col = document.getElementById('cE6');
}if(q == 8){
  var col = document.getElementById('cE8');
  }
  col.setAttribute("diffuseColor", " " + 1 + " " + 0 + " " + 0);
  sleep(10000);
  col.setAttribute("diffuseColor", " " + 1 + " " + 1 + " " + 1);
}
function colorE2(q) {
  if(q == 2){
  var col = document.getElementById('cE2');
}if(q == 4){
  var col = document.getElementById('cE4');
}if(q == 6){
  var col = document.getElementById('cE6');
}if(q == 8){
  var col = document.getElementById('cE8');
  }
  col.setAttribute("diffuseColor", " " + 0 + " " + 1 + " " + 0);
}
function colorEE2(q) {
  if(q == 2){
  var col = document.getElementById('cE2');
}if(q == 4){
  var col = document.getElementById('cE4');
}if(q == 6){
  var col = document.getElementById('cE6');
}if(q == 8){
  var col = document.getElementById('cE8');
  }
  col.setAttribute("diffuseColor", " " + 1 + " " + 1 + " " + 1);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
function coloF1(q) {
  if(q == 1){
  var col = document.getElementById('cF1');
  }if(q == 3){
  var col = document.getElementById('cF3');
  }if(q == 5){
  var col = document.getElementById('cF5');
  }if(q == 7){
  var col = document.getElementById('cF7');
  }
  col.setAttribute("diffuseColor", " " + 1 + " " + 0 + " " + 0);
  sleep(10000);
  col.setAttribute("diffuseColor", " " + 1 + " " + 1 + " " + 1);
}
function colorF1(q) {
  if(q == 1){
  var col = document.getElementById('cF1');
  }if(q == 3){
  var col = document.getElementById('cF3');
  }if(q == 5){
  var col = document.getElementById('cF5');
  }if(q == 7){
  var col = document.getElementById('cF7');
  }
  col.setAttribute("diffuseColor", " " + 0 + " " + 1 + " " + 0);
}
function colorFF1(q) {
  if(q == 1){
  var col = document.getElementById('cF1');
  }if(q == 3){
  var col = document.getElementById('cF3');
  }if(q == 5){
  var col = document.getElementById('cF5');
  }if(q == 7){
  var col = document.getElementById('cF7');
  }
  col.setAttribute("diffuseColor", " " + 1 + " " + 1 + " " + 1);
}

function coloF2(q) {
  if(q == 2){
  var col = document.getElementById('cF2');
}if(q == 4){
  var col = document.getElementById('cF4');
}if(q == 6){
  var col = document.getElementById('cF6');
}if(q == 8){
  var col = document.getElementById('cF8');
  }
  col.setAttribute("diffuseColor", " " + 1 + " " + 0 + " " + 0);
  sleep(10000);
  col.setAttribute("diffuseColor", " " + 0 + " " + 0 + " " + 0);
}
function colorF2(q) {
  if(q == 2){
  var col = document.getElementById('cF2');
}if(q == 4){
  var col = document.getElementById('cF4');
}if(q == 6){
  var col = document.getElementById('cF6');
}if(q == 8){
  var col = document.getElementById('cF8');
  }
  col.setAttribute("diffuseColor", " " + 0 + " " + 1 + " " + 0);
}
function colorFF2(q) {
  if(q == 2){
  var col = document.getElementById('cF2');
}if(q == 4){
  var col = document.getElementById('cF4');
}if(q == 6){
  var col = document.getElementById('cF6');
}if(q == 8){
  var col = document.getElementById('cF8');
  }
  col.setAttribute("diffuseColor", " " + 0 + " " + 0 + " " + 0);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG
function coloG1(q) {
  if(q == 1){
  var col = document.getElementById('cG1');
  }if(q == 3){
  var col = document.getElementById('cG3');
  }if(q == 5){
  var col = document.getElementById('cG5');
  }if(q == 7){
  var col = document.getElementById('cG7');
  }
  col.setAttribute("diffuseColor", " " + 1 + " " + 0 + " " + 0);
  sleep(10000);
  col.setAttribute("diffuseColor", " " + 0 + " " + 0 + " " + 0);
}
function colorG1(q) {
  if(q == 1){
  var col = document.getElementById('cG1');
  }if(q == 3){
  var col = document.getElementById('cG3');
  }if(q == 5){
  var col = document.getElementById('cG5');
  }if(q == 7){
  var col = document.getElementById('cG7');
  }
  col.setAttribute("diffuseColor", " " + 0 + " " + 1 + " " + 0);
}
function colorGG1(q) {
  if(q == 1){
  var col = document.getElementById('cG1');
  }if(q == 3){
  var col = document.getElementById('cG3');
  }if(q == 5){
  var col = document.getElementById('cG5');
  }if(q == 7){
  var col = document.getElementById('cG7');
  }
  col.setAttribute("diffuseColor", " " + 0 + " " + 0 + " " + 0);
}

function coloG2(q) {
  if(q == 2){
  var col = document.getElementById('cG2');
}if(q == 4){
  var col = document.getElementById('cG4');
}if(q == 6){
  var col = document.getElementById('cG6');
}if(q == 8){
  var col = document.getElementById('cG8');
  }
  col.setAttribute("diffuseColor", " " + 1 + " " + 0 + " " + 0);
  sleep(10000);
  col.setAttribute("diffuseColor", " " + 1 + " " + 1 + " " + 1);
}
function colorG2(q) {
  if(q == 2){
  var col = document.getElementById('cG2');
}if(q == 4){
  var col = document.getElementById('cG4');
}if(q == 6){
  var col = document.getElementById('cG6');
}if(q == 8){
  var col = document.getElementById('cG8');
  }
  col.setAttribute("diffuseColor", " " + 0 + " " + 1 + " " + 0);
}
function colorGG2(q) {
  if(q == 2){
  var col = document.getElementById('cG2');
}if(q == 4){
  var col = document.getElementById('cG4');
}if(q == 6){
  var col = document.getElementById('cG6');
}if(q == 8){
  var col = document.getElementById('cG8');
  }
  col.setAttribute("diffuseColor", " " + 1 + " " + 1 + " " + 1);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
function coloH1(q) {
  if(q == 1){
  var col = document.getElementById('cH1');
  }if(q == 3){
  var col = document.getElementById('cH3');
  }if(q == 5){
  var col = document.getElementById('cH5');
  }if(q == 7){
  var col = document.getElementById('cH7');
  }
  col.setAttribute("diffuseColor", " " + 1 + " " + 0 + " " + 0);
  sleep(10000);
  col.setAttribute("diffuseColor", " " + 1 + " " + 1 + " " + 1);
}
function colorH1(q) {
  if(q == 1){
  var col = document.getElementById('cH1');
  }if(q == 3){
  var col = document.getElementById('cH3');
  }if(q == 5){
  var col = document.getElementById('cH5');
  }if(q == 7){
  var col = document.getElementById('cH7');
  }
  col.setAttribute("diffuseColor", " " + 0 + " " + 1 + " " + 0);
}
function colorHH1(q) {
  if(q == 1){
  var col = document.getElementById('cH1');
  }if(q == 3){
  var col = document.getElementById('cH3');
  }if(q == 5){
  var col = document.getElementById('cH5');
  }if(q == 7){
  var col = document.getElementById('cH7');
  }
  col.setAttribute("diffuseColor", " " + 1 + " " + 1 + " " + 1);
}

function coloH2(q) {
  if(q == 2){
  var col = document.getElementById('cH2');
}if(q == 4){
  var col = document.getElementById('cH4');
}if(q == 6){
  var col = document.getElementById('cH6');
}if(q == 8){
  var col = document.getElementById('cH8');
  }
  col.setAttribute("diffuseColor", " " + 1 + " " + 0 + " " + 0);
  sleep(10000);
  col.setAttribute("diffuseColor", " " + 0 + " " + 0 + " " + 0);
}
function colorH2(q) {
  if(q == 2){
  var col = document.getElementById('cH2');
}if(q == 4){
  var col = document.getElementById('cH4');
}if(q == 6){
  var col = document.getElementById('cH6');
}if(q == 8){
  var col = document.getElementById('cH8');
  }
  col.setAttribute("diffuseColor", " " + 0 + " " + 1 + " " + 0);
}
function colorHH2(q) {
  if(q == 2){
  var col = document.getElementById('cH2');
}if(q == 4){
  var col = document.getElementById('cH4');
}if(q == 6){
  var col = document.getElementById('cH6');
}if(q == 8){
  var col = document.getElementById('cH8');
  }
  col.setAttribute("diffuseColor", " " + 0 + " " + 0 + " " + 0);
}
*/
