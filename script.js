const add = document.querySelector('#add');
const noteField = document.querySelector('.noteAria');




add.addEventListener('click', function addNote() {
    var newNote = document.createElement("note");
    newNote.innerHTML = `        <div class="note-main">
                                    <div class="noteHead">
                                        <button id ="delete">Del</button>
                                    </div>
                                    <textarea style="outline: 0px;"  class="notepad" placeholder="Write your thougths here" ></textarea>
                                </div>`;
    noteField.appendChild(newNote)

    newNote.querySelector('#delete').addEventListener('click', function delNote() {
        newNote.remove();
});


});
