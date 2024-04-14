alert("plese vote");
function votebjp() {
    let voterName = document.getElementById('i1').value;
    if (!voterName) {
        alert("Please enter your name before voting!!");
        return false;
    }
    let votes = document.getElementById('bjpvotes').innerHTML;
    let votesInNumber = parseInt(votes) + 1;
    document.getElementById('bjpvotes').innerHTML = votesInNumber;
    alert(voterName + " voted for BJP");
    document.getElementById('i1').value = "";
}
function votecon() {
    let voterName = document.getElementById('i1').value;
    if (!voterName) {
        alert("Please enter your name before voting!!");
        return false;
    }
    let votes = document.getElementById('convotes').innerHTML;
    let votesInNumber = parseInt(votes) + 1;
    document.getElementById('convotes').innerHTML = votesInNumber;
    alert(voterName + " voted for CONGRESS");
    document.getElementById('i1').value = "";
}
function votess() {
    let voterName = document.getElementById('i1').value;
    if (!voterName) {
        alert("Please enter your name before voting!!");
        return false;
    } let votes = document.getElementById('ssvotes').innerHTML;
    let votesInNumber = parseInt(votes) + 1;
    document.getElementById('ssvotes').innerHTML = votesInNumber;
    alert(voterName + " voted for SHIVSENA");
    document.getElementById('i1').value = "";
}
function voterr() {
    let voterName = document.getElementById('i1').value;
    if (!voterName) {
        alert("Please enter your name before voting!!");
        return false;
    } let votes = document.getElementById('rrvotes').innerHTML;
    let votesInNumber = parseInt(votes) + 1;
    document.getElementById('rrvotes').innerHTML = votesInNumber;
    alert(voterName + " voted for RASHTRAVADI");
    document.getElementById('i1').value = "";
}
function showresult() {
    document.getElementById('result').style.display = "table";
}
function hideresult() {
    document.getElementById('result').style.display = "none";
}
function validateName() {
    let voterCheNaav = document.getElementById('i1').value;
    if (voterCheNaav) {
        return true;
    } else {
        alert("Please enter your name before voting !!");
        return false;
    }
}

function showoption() {
    let org = document.getElementById('res').style.display;
    if (!org) {
        alert("Voting has ended...Please check result!!");
        document.getElementById('res').style.display = "block";
        document.getElementById('end').style.display = "none";
         document.getElementById('evm').style.display = "none";
    }
}
