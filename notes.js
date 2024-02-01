document.addEventListener("DOMContentLoaded", function() {
    loadNotes();
  });
  
  function loadNotes() {
    const notesContainer = document.getElementById("notes-container");
    notesContainer.innerHTML = "";
  
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
  
    notes.forEach(function(note, index) {
      const noteDiv = document.createElement("div");
      noteDiv.className = "note";
      noteDiv.innerHTML = `
        <span class="notes-card">${note}</span>
        <button class="remove" onclick="deleteNote(${index})">Usuń</button>
      `;
      notesContainer.appendChild(noteDiv);
    });
  }
  
  function addNote() {
    const noteInput = document.getElementById("note-input");
    const noteText = noteInput.value.trim();
  
    if (noteText !== "") {
      const notes = JSON.parse(localStorage.getItem("notes")) || [];
      notes.push(noteText);
      localStorage.setItem("notes", JSON.stringify(notes));
  
      noteInput.value = "";
      loadNotes();
    }
  }
  
  function deleteNote(index) {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
  
    loadNotes();
  }