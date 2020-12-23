// Days, Hours, Minutes, Seconds... left.
function time2go(t) {
    var out = {};
    
    var t1 = new Date().getTime();
    var t2 = new Date(t).getTime();
    var tm = t2 - t1;
    
    var s = 1000;
    var m = s*60;
    var h = m*60;
    var d = h*24;
    
    out.d = tm/d;
    out.d < 0 ?
    out.d = 0:'';
    
    out.h = (tm%d)/h;
    out.h < 0 ?
    out.h = 0:'';
    
    out.m = (tm%h)/m;
    out.m < 0 ?
    out.m = 0:'';
    
    out.s = (tm%m)/s;
    out.s < 0 ?
    out.s = 0:'';
    
    out.d = Math.floor(out.d);
    out.h = Math.floor(out.h);
    out.m = Math.floor(out.m);
    out.s = Math.floor(out.s);
    
    return out;
}
