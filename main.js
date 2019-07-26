document.getElementById("btn1").addEventListener("click", myName)
document.getElementById("btn2").addEventListener("click", mySchool)
document.getElementById("btn3").addEventListener("click", myCareer)
document.getElementById("btn4").addEventListener("click", myHobbies)


function myName() {
    if (document.getElementById("name").style.display == "block") {
        document.getElementById("name").style.display = "none";
    } else {
            document.getElementById("name").style.display = "block"
      }
    document.getElementById("name").innerHTML = "My name is Diya Shrawagi and I am 14 years old. I was born in Cedar Park, TX, and now I live in Round Rock, TX, with my parents and younger sister who is now going into middle school. ";
}

function mySchool() {
    if (document.getElementById("school").style.display == "block") {
        document.getElementById("school").style.display = "none";
    } else {
            document.getElementById("school").style.display = "block"
      }
    document.getElementById("school").innerHTML = "I just finished 8th grade at Walsh Middle School. I was a member of the Walsh Honor Band for two years and played the flute for three years. I have also particpated in Destination Imagination for three years, went to regionals with the Walsh Robotics team, and was a member of the National Junior Honors Society. Now, I will be starting as a freshman in Round Rock High School. As an academy, I will be taking computer science and exploring the STEM field. ";
}

function myCareer() {
    if (document.getElementById("career").style.display == "block") {
        document.getElementById("career").style.display = "none";
    } else {
            document.getElementById("career").style.display = "block"
      }
    document.getElementById("career").innerHTML = "Right now, I hope to go into the engineering field. I am still exploring what kind of engineer I want to be, as I have an interest in all types of technology.";
}

function myHobbies() {
    if (document.getElementById("hobbies").style.display == "block") {
        document.getElementById("hobbies").style.display = "none";
    } else {
            document.getElementById("hobbies").style.display = "block"
      }
    document.getElementById("hobbies").innerHTML = "Some of my hobbies are painting, reading my favorite book series (such as Harry Potter, Heroes of Olympus, Hunger Games, Lunar Chronicles, etc.), playing the flute, and annoying my younger sister.";
}