
export interface Items {
    id: String,
    item: String,
    checked: boolean
}

export default class ListItem implements Items {
    constructor(private _id: string = '', private _item: string = '', private _checked: boolean = false,) {

    }
    
    // id Getter and Setter
    get id(): string {
        return this._id;
    }
    set id(id: string) {
        this._id = id;
    }

    // item Getter and Setter
    get item(): string {
        return this._item;
    }
    set item(item: string) {
        this._item = item;
    }

    // checked Getter and Setter
    get checked(): boolean {
        return this._checked;
    }
    set checked(item: boolean) {
        this._checked = item;
    }
}