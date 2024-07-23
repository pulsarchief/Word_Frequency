/**
 *
 * @type Array
 */
let wordList = [];
/**
 *
 * @type Array
 */
let occurrenceList = [];
/**
 * @type HTMLInputElement
 */
const text_area = document.querySelector("#text_input");
const reset_btn = document.querySelector("#reset");
const analyze_btn = document.querySelector("#analyze");
const count_display = document.querySelector("#number");
const body = document.querySelector("body");
let tbody = document.createElement("tbody");
const remark = document.createElement("p");
const data = document.querySelector("#data");
const footer = document.querySelector("footer");
const buttons = document.querySelector("#buttons");
const table = document.querySelector("#main_table");

text_area.focus();
text_area.value = "";

remark.textContent = "2048 Characters Has  Been Entered";
remark.style.margin = "10px";
remark.style.padding = "0";
remark.style.color = "#780000";
remark.style.fontSize = "x-large";
remark.style.textAlign = "center";

reset_btn.addEventListener("click", () => {
    reset();
});

text_area.addEventListener("input", () => {
    count_display.textContent = text_area.value.length;
    if (text_area.value.length >= 2048) {
        body.insertBefore(remark, footer);
    } else {
        try {
            body.removeChild(remark);
        } catch (error) {}
    }
});

analyze_btn.addEventListener("click", () => {
    analyze();
    table.style.display = "table";
});

function analyze() {
    let text = text_area.value.toLocaleLowerCase();
    reset();
    let arr = text.split(/[ .!?,_/:;\r\n]+/).filter(Boolean);
    compute(arr);
    for (let index = 0; index < wordList.length; index++) {
        const element = wordList[index];
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        td1.textContent = index + 1;
        td2.textContent = element;
        td3.textContent = occurrenceList[index];
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);

    remark.textContent = "All Words Converted to LowerCase";
    body.insertBefore(table, footer);
    body.insertBefore(remark, table);
}

function reset() {
    text_area.value = "";
    text_area.focus();
    count_display.textContent = 0;
    try {
        body.removeChild(remark);
    } catch (error) {}
    try {
        body.removeChild(list);
    } catch (error) {}
    try {
        table.removeChild(tbody);
    } catch (error) {}
    tbody = document.createElement("tbody");
    table.style.display = "none";
    wordList = [];
    occurrenceList = [];
}
/**
 *
 * @param {Array} arr
 */

function compute(arr) {
    arr.sort();
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (wordList.includes(element)) {
            let i = wordList.indexOf(element);
            occurrenceList[i] = occurrenceList[i] + 1;
        } else {
            wordList.push(element);
            occurrenceList.push(1);
        }
    }
}
