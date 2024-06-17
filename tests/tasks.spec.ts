import { test, expect } from '@playwright/test'

interface TaskModel {
    name: string
    is_done: boolean
}

test('deve poder cadastrar uma nova tarefa', async ({ page, request }) => {

    interface TaskModel {
        name: 'Ler um livro de Typescript'
        is_done: false
    }

    await request.delete('http://localhost:8080/helper/tasks' + task.name)

    await page.goto('http://localhost:8080/')

    const inputTaskName = page.locator('input[placeholder="Add a new Task"]')
    await inputTaskName.fill(task.name)

    await page.click('css=button >> text=Create')

    const target = page.locator('css=.task-item p >> text=${task.name}')
    await expect(target).toBeVisible()

})

test.only('não deve permitir tarefa duplicada', async ({ page, request}) => {

    const task = {
        name: 'Comprar Ketchup',
        is_done: false
    }

    await request.delete('http://localhost:8080/helper/tasks' + taskName)

    const newTask = await request.post('http://localhost:8080/tasks', { data: task})
    expect(newTask.ok()).toBeTruthy()

    await page.goto('http://localhost:8080/')

    const inputTaskName = page.locator('input[class*=InputNewTask]')
    await inputTaskName.fill(task.name)

    await page.click('css=button >> text=Create')

}