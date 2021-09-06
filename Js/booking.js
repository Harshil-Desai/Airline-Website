function toggleHiddenDiv() {
    let hidden_div = document.getElementById('hidden_div');
    if (hidden_div.style.visibility == "hidden") {
        hidden_div.style.visibility = "visible";
    }
    else {
        hidden_div.style.visibility = "hidden";
    }
}

function decrease(inc_btn, inp_num, dec_btn) {
    let decrease_button = document.getElementById(dec_btn);
    let input_number1 = document.getElementById(inp_num).value;

    if (input_number1 > 0) {
        decrease_button.disabled = false;
        document.getElementById(inp_num).value--;
    }
    else {
        decrease_button.disabled = true;
    }
}
function increase(inc_btn, inp_num, dec_btn) {
    let input_number1 = document.getElementById(inp_num).value;
    let decrease_button = document.getElementById(dec_btn);
    if (input_number1 > 0) {
        decrease_button.disabled = false;
    }
    if (input_number1 >= 9) {
        alert("Max 9 passengers allowd");
    }
    else
        document.getElementById(inp_num).value++;
}

function counter() {
    let count1 = document.getElementById('input-number1').value;
    let count2 = document.getElementById('input-number2').value;
    let count3 = document.getElementById('input-number3').value;
    let totalCount = document.getElementById('totalCount');
    let traveller_num = document.getElementById('traveller-title');
    let classtype = document.getElementsByName('classType');
    let travelerClassName = document.getElementById('travelerClassName');

    totalCount.value = Number(count1) + Number(count2) + Number(count3);
    totalCount.textContent = totalCount.value;
    if ((totalCount.value == 1)) {
        traveller_num.textContent = "Traveller";
    }
    else
        traveller_num.textContent = "Travellers";

    for (let i = 0; i < classtype.length; i++) {
        if (classtype[i].checked) {
            travelerClassName.textContent = classtype[i].value;
        }
    }
}

function swap() {
    let city1 = document.getElementById('input1').value;
    let city2 = document.getElementById('input2').value;
    var temp = city1;
    city1 = city2;
    city2 = temp;
    document.getElementById('input1').value = city1;
    document.getElementById('input2').value = city2;

}
function refresh() {
    window.location.reload();
}
