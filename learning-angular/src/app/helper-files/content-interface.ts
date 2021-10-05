export interface Content{
    showOnList: boolean; 
    id: number;
    author: string;
    imgUrl?: string;
    type?: string;
    title: string;
    body: string;
    tags?: string[];
}