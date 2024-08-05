
import ListItem from "./List_Item";


interface List {
    list: ListItem[],
    load(): void,
    save(): void,
    clearList(): void,
    remove(id: string): void
    addItem(itemObj: ListItem): void,
}

export default class FullList implements List {

    static instance: FullList = new FullList();

    constructor(private _list: ListItem[] = []) { }

    get list(): ListItem[] {
        return this._list;
    }
    load(): void {
        const storedList: string | null = localStorage.getItem("myList");
        if (typeof storedList !== "string") return

        const parsedList: {
            _id: string,
            _item: string,
            _checked: boolean
        }[] = JSON.parse(storedList);

        parsedList.forEach(itemObj => {
            const newListItem = new ListItem(itemObj._id, itemObj._item, itemObj._checked);
            FullList.instance.addItem(newListItem)
        })

    }
    save(): void {
        localStorage.setItem('myList', JSON.stringify(this._list))
    }
    clearList(): void {
        this._list = [];
        this.save();
    }
    addItem(itemObj: ListItem): void {
        this._list.push(itemObj);
        this.save();
    }
    remove(id: string): void {
        this._list = this._list.filter(item => item.id !== id);
        this.save();
    }
}