const reset_btn = document.querySelector("#reset");
const analyze_btn = document.querySelector("#analyze");
const count_display = document.querySelector("#number");
const body = document.querySelector("body");
/**
 * @type HTMLInputElement
 */
const text_area = document.querySelector("#text_input");
/**
 * @type HTMLInputElement
 */
const remark = document.createElement("p");
const data = document.querySelector("#data");
const footer = document.querySelector("footer");
const buttons = document.querySelector("#buttons");
let list = document.createElement("ol");

list.style.marginLeft = "90px";
list.style.marginRight = "90px";
list.style.textAlign = "center";
list.style.boxSizing = "border-box";

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
});

function analyze() {
    let text = text_area.value.toLocaleLowerCase();
    reset();
    let arr = text.split(/[ .!?,_/:;\r\n]+/).filter(Boolean);
    let set = new Set(arr.sort());
    set.forEach((element) => {
        const li = document.createElement("li");
        li.textContent = element;
        list.appendChild(li);
    });
    remark.textContent = "All Words Converted to LowerCase";
    body.insertBefore(list, footer);
    body.insertBefore(remark, list);
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
}
