var images = 
["IMG_5005.jpeg","IMG_4887.jpeg","IMG_4229.jpeg","IMG_4499.jpeg","IMG_2879.jpeg"]
var names = ["Amarech(My grandma)","Nolawit(My sister)","Mahlet(My mom)","Christian(me)","My whole family"]

var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(1 > numbers_of_family_member_in_array)
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("family_member_image").src=updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}