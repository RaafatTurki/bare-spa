function toggleElement(el) {
    let currState = document.getElementById(el).style.display

    if (currState == 'flex') {
        document.getElementById(el).style.display = 'none'
    } else {
        document.getElementById(el).style.display = 'flex'
    }

}

// let day;

// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case  6:
//     day = "Saturday";
// }
// document.getElementById("weekdays").innerHTML = "Today is " + day;

curr_lang = 0

let lang = {
  are_you_ready: ["Are You Ready", "هل أنت مستعد"],
  home: ["Home", "ألصفحة ألرئيسية"],
  today_is: ["Today Is", "أليوم هو"],

  weekdays: [
    ["Sunday", "ألاحد"],
    ["Monday", "ألاثنين"],
    ["Tuesday", "ألثلاثاء"],
    ["Wednesday", "ألاربعاء"],
    ["Thursday", "ألخميس"],
    ["Friday", "ألجمعة"],
    ["Saturday", "ألسبت"],
  ],
}

function translate(n) {
    for (let key in lang) {
        let el = document.getElementById(key)
        if (el) el.innerHTML = lang[key][n]
    }

    document.getElementById("weekday").innerHTML = lang.today_is[curr_lang] + " " + lang.weekdays[new Date().getDay()][curr_lang];
}

translate(curr_lang)


function toggle_translate() {
    if (curr_lang == 1) curr_lang = 0; else curr_lang = 1
    translate(curr_lang)

}




