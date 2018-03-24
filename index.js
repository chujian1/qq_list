/**
 * Created by ypj on 18-3-24.
 */
var h3s = document.getElementsByTagName("h3");
var uls = document.getElementsByTagName("ul");
for(let i = 0 ; i < h3s.length ; i++){
    h3s[i].f=true;
    h3s[i].index=i;
    h3s[i].onclick = function () {
        for(let i=0;i<h3s.length;i++){

            if(i!=this.index){
                h3s[i].className = '';
                h3s[i].f=true;
                uls[i].style.display = 'none';
            }
        }
        if(this.f){
            this.className = "active";
            uls[this.index].style.display = 'block';
        }
        else{
            this.className = '';
            uls[this.index].style.display = 'none';
        }
        this.f = !this.f;
    }
}