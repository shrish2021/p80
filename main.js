var name_of_people = [""];

function namegotten() {
    var GuestName = document.getElementById("guestPerson").value;
    name_of_people.push(GuestName);
    document.getElementById("namess").innerHTML = name_of_people;
}

function showName() {
    document.getElementById("namessList").innerHTML = name_of_people;
}

function sortNames() {
    name_of_people.sort();
    document.getElementById("sortedList").innerHTML = name_of_people;
}

function search() {
    var s = document.getElementById("guestPersonSearch").value;
    var found = 0;
    var j;
    for(j=0; j<name_of_people.length; j++) {
        if(s==name_of_people[j]) {
            found=found+1;
        }
    }
    document.getElementById("namefoundtimes").innerHTML = "Name found " + found + " time/s."
    console.log("Name found " + found + " time/s.")
}