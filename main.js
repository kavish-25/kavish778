var images=["https://image.shutterstock.com/image-vector/family-together-group-people-standing-260nw-590327120.jpg",
"https://cdn1.vectorstock.com/i/1000x1000/76/80/cartoon-dad-vector-10157680.jpg","https://us.123rf.com/450wm/kinokotagawa/kinokotagawa1712/kinokotagawa171200465/91961518-mom-wearing-short-sleeve-clothes-is-pointing.jpg?ver=6",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN_qDFIkwPCzpAjoLp0hnWuC0TdWAvzA0-xQ&usqp=CAU"];

var names=["MY FAMILY","HARISH SHARMA","KAVITA SHARMA","KAVYANSH SHARMA"];

var i=0;
function update(){
    i++;
    var number_of_family_memebr_in_array=4;
    if(i > number_of_family_memebr_in_array){
        i=0;
    }
var updatedimages= images[i];
var updatedno=names[i];
document.getElementById("img").src=updatedimages;
document.getElementById("names").innerHTML=updatedno;
}