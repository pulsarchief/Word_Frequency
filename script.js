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
text_area.value = "";

const remark = document.createElement("p");
remark.textContent = "2048 Characters Have Been Entered";
remark.style.margin = "10px";
remark.style.padding = "0";
remark.style.color = "#780000";
remark.style.fontSize = "x-large";
remark.style.textAlign = "center";

reset_btn.addEventListener("click", () => {
    text_area.value = "";
    text_area.focus();
});

text_area.addEventListener("input", () => {
    count_display.textContent = text_area.value.length;
    if (text_area.value.length >= 2048) {
        body.appendChild(remark);
    } else {
        body.removeChild(remark);
    }
});
