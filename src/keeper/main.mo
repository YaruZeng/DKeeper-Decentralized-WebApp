import List "mo:base/List";
import Debug "mo:base/Debug";

actor Keeper {

  public type Note = { // create a type of note
    title: Text;
    content: Text;
  };

  var notes: List.List<Note> = List.nil<Note>(); // create a list object containing Note type with null as initial

  public func createNote(titleText: Text, contentText: Text) {
    // add a new note to database
    
    let newNote: Note = { // create a new Note instance
      title = titleText;
      content = contentText;
    };
    notes := List.push(newNote, notes); // add the newNote into notes list
    
  };

  public query func readNotes(): async [Note] { // return an array of Note which is more efficient in JavaScript
    // query for notes from database
    return List.toArray(notes);
  };
}