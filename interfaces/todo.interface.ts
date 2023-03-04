export interface Task{
    id: number,
    title: string,
    dateCreated: Date,
    deadline: string,
    priority: string,
    isComplete: boolean,
    dateCompleted?: Date
}