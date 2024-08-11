export interface INoteProps {
    content?: string,
    remove?: (arg: number) => void,
    id?: number
}

export interface INote {
    content?: string
    id?: number,
}

export interface IAddNotes {
    value?: string,
    onChange?: React.FormEventHandler<HTMLInputElement>,
    
}
