import List "mo:base/List";
import Debug "mo:base/Debug";

actor Keeper {

  public type Note = { // create a type of note
    title: Text;
    content: Text;
  };

  var notes: List.List<Note> = List.nil<Note>(); // create a list object containing Note type with null as initial

  public func createNote(titleText: Text, contentText: Text) {
    
    let newNote: Note = { // create a new Note instance
      title = titleText;
      content = contentText;
    };

    notes := List.push(newNote, notes); // add the newNote into notes list
    Debug.print(debug_show(notes));

  };

}