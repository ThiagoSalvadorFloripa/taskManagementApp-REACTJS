import ApiService from './apiService'

class TaskService extends ApiService{
    constructor(){
        super('/')
    }

    saveTask(task){
        return this.post('tasks',task)
    }

    getAllTasks(){
        return this.get('tasks/')
    }

    getTaskById(id){
        return this.get(`tasks/${id}`)
    }


    get
}

export default TaskService;