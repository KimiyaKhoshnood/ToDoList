let inputBox = document.querySelector("#inputBox");

console.log(inputBox);

inputBox.children[2].addEventListener("click", () => {
  if (inputBox.children[1].value != "") {
    const inputData = inputBox.children[1].value;
    inputBox.children[1].value = "";

    const todo_el = document.createElement("div");
    todo_el.classList.add("todo-item");

    const red_div = document.createElement("div");
    red_div.classList.add("colorRed");
    red_div.classList.add("color");

    todo_el.appendChild(red_div);

    const todo_content_el = document.createElement("div");
    todo_content_el.classList.add("boxOfInput");
    todo_el.appendChild(todo_content_el);

    const todo_input_el = document.createElement("input");
    todo_input_el.classList.add("text");
    todo_input_el.type = "text";
    todo_input_el.value = inputData;
    todo_input_el.setAttribute("readonly", "readonly");

    todo_content_el.appendChild(todo_input_el);

    const todo_actions_el = document.createElement("div");
    todo_actions_el.classList.add("action-items");

    const todo_done_el = document.createElement("i");
    todo_done_el.classList.add("markbtn");

    const todo_edit_el = document.createElement("i");
    todo_edit_el.classList.add("editbtn");
    todo_edit_el.classList.add("edit");

    const todo_delete_el = document.createElement("i");
    todo_delete_el.classList.add("deletebtn");

    todo_done_el.innerHTML = `<img src="./media/check-svgrepo-com.svg" alt="">`;

    todo_edit_el.innerHTML = `<img src="./media/edit-svgrepo-com.svg" alt="">`;

    todo_delete_el.innerHTML = `<img src="./media/trash-bin-2-svgrepo-com.svg" alt="">`;

    todo_actions_el.appendChild(todo_done_el);
    todo_actions_el.appendChild(todo_edit_el);
    todo_actions_el.appendChild(todo_delete_el);

    todo_el.appendChild(todo_actions_el);
    console.log(todo_el);
    // add the todo-item to lists
    document.querySelector(".right>div").appendChild(todo_el);

    // done functionality
    todo_done_el.addEventListener("click", () => {
      todo_input_el.classList.add("done");
      todo_el.removeChild(todo_actions_el);
    });

    // edit functionality
    todo_edit_el.addEventListener("click", (e) => {
      if (todo_edit_el.classList.contains("edit")) {
        todo_done_el.style.opacity = 0.5;
        todo_delete_el.style.opacity = 0.5;
        todo_edit_el.classList.remove("edit");
        todo_edit_el.classList.remove("editbtn");
        todo_edit_el.classList.add("okbtn");
        todo_edit_el.classList.add("save");
        todo_input_el.removeAttribute("readonly");
        todo_input_el.focus();
        todo_edit_el.innerHTML = `<img src="./media/ok-svgrepo-com.svg" alt="">`;
      } else {
        todo_done_el.style.opacity = 1;
        todo_delete_el.style.opacity = 1;
        todo_edit_el.classList.remove("save");
        todo_edit_el.classList.remove("okbtn");
        todo_edit_el.classList.add("editbtn");
        todo_edit_el.classList.add("edit");
        todo_input_el.setAttribute("readonly", "readonly");
        todo_edit_el.innerHTML = `<img src="./media/edit-svgrepo-com.svg" alt="">`;
      }
    });

    // delete functionality
    todo_delete_el.addEventListener("click", (e) => {
      console.log(todo_el);
      todo_el.style.display = "none";
    });

    // toggle functionality
    red_div.addEventListener("click", (e) => {
      if (red_div.classList.contains("colorRed")) {
        red_div.classList.remove("colorRed");
        red_div.classList.add("colorYellow");
      } else if (red_div.classList.contains("colorYellow")) {
        red_div.classList.remove("colorYellow");
        red_div.classList.add("colorGreen");
      } else {
        red_div.classList.remove("colorGreen");
        red_div.classList.add("colorRed");
      }
    });
  } else {
    inputBox.classList.add("empty");
    alert("Can't add empty text");
  }
});

document.querySelector("#dots").addEventListener("click", ()=>{
  document.querySelector("#forDots").classList.toggle("active")
})