import { Request, Response } from 'express'
import Task from '../models/task.models'



export const createTask = async (req: Request, res: Response) => {
    try {
        const  {title, description} = req.body
        const task = new Task ({
            title,
            description
        })

        await task.save();

        res.status(201).json(task)

    } catch (error) {
        console.error(`task creation  error:`, error)
    }
}


export const getTasks = async(req: Request, res: Response) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks)
    } catch (error) {;
        res.status(500).json({
            message: "Failed to fetch tasks", error
        })
    }
}

export const getTaskById = async(req: Request, res: Response) => {
    try {
        const task = await Task.findById(req.params.id)
        if(!task) return res.status(404).json({
            message: "Task not found"
        })

        res.status(200).json(task)
    } catch (error) {
       res.status(500).json({
        message: "Failed to fetch task", error
       }) 
    }
}

export const updateTask = async(req: Request, res: Response) => {
    try {
        const {title, description, completed} = req.body
        const task = await Task.findByIdAndUpdate(
            req.params.id,
            {title, description, completed},
            { new : true }
        )

        if(!task) return res.status(404).json({
            message: "task not found"
        })

        res.status(200).json(task)

    } catch (error) {
        res.status(500).json({
            message: "Failed to update task", error
        })
    }
}

export const deleteTask = async( req: Request, res: Response) => {

    try {
        const task = await Task.findByIdAndDelete(req.params.id)

        if(!task) return res.status(404).json({
            message: "Task not found"
        })

        res.status(200).json({
            message: "Task deleted successfully"
        })

    } catch (error) {
        res.status(500).json({
            message: "Failed to delete task", error
        })
    }
}