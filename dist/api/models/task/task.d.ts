import { ITask } from './type';
declare const Task: import("mongoose").Model<ITask, {}, {}, {}, import("mongoose").Document<unknown, {}, ITask> & ITask & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any>;
export default Task;
