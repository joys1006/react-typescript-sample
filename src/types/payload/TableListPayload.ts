export default class TableListPayload {
    get size(): number {
        return this._size;
    }

    set size(value: number) {
        this._size = value;
    }
    get current(): number {
        return this._current;
    }

    set current(value: number) {
        this._current = value;
    }
    private _current: number = 1;
    private _size: number = 10;
}
