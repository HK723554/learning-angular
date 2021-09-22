import { Content } from "./content-interface";

export class ContentList{
    private _books : Content[];

    //makes the books array empty
    constructor(){
        this._books = [];
    }

    //getter method
    get books(): Content[]{
        return this._books
    }

    //adds books
    addBooks(book: Content): void {
        this._books.push(book);
    }

    //returns all the books in an array
    numOfBooks(): number{
        return this._books.length;
    }

    //returns all the books listed as html output
    returnBooksAsHtmlOutput(index: number): string{

        //if there's no more books, list them as nothing here
        if (index >= this._books.length){
            return `<div> Nothing here. </div>`;
        }

        let output = `
            <div>ID of book: ${this._books[index].id} </div>
            <div>Author of book: ${this._books[index].author} </div>
            <div>Image of book: ${this._books[index].imgUrl} </div>
            <div>Type of book: ${this._books[index].type} </div>
            <div>Title of book: ${this._books[index].title} </div>
            <div>Description of book: ${this._books[index].body} </div>
            <div>Tags: ${this._books[index].tags} </div>
        `;

        if (this._books[index].imgUrl){
            output+= `<img src=${this._books[index].imgUrl}>`
        }

        if (this._books[index].type){
            output+= `<div> ${this._books[index].type} </div>`
        }

        //TODO: FIX THIS
        // if (this._books[index].tags){

        //     for(var i = 0; i < this._books[index].tags?.length; i++){
        //         output+= `<div> ${this._books[index].tags[i]} </div>`
        //     }
            
        // }

        return output;
    }

}