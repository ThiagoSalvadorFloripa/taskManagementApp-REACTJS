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


    deleteTask(id){
        return this.delete(`tasks/${id}`)
    }

    updateTask(task){
        return this.put(`tasks/${task.id}`, task)
    }


}

export default TaskService;