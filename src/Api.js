const token = 'bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck'

//Функция делает запрос на получение списка задач
export const getTodos = async () => {
    const response = await fetch('https://wedev-api.sky.pro/api/v2/todos', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const data = await response.json();
    return data;
};

//Функция делает запрос на добавление задачи в список 
export const postTodos = async (text) => {
    const response = await fetch('https://wedev-api.sky.pro/api/v2/todos', {
        headers: {
            Authorization: `Bearer ${token}`,
            
        },
        method: 'POST',
        body: JSON.stringify({
            text,
        })
    })
    const data = await response.json();
    return data;
};

//Функция делает запрос на удаление задачи из списока 
export const deleteTodos = async (id) => {
    const response = await fetch(`https://wedev-api.sky.pro/api/v2/todos/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        method: 'DELETE',
    })
    console.log(response);
    const data = await response.json();
    console.log(data);
    return data;
};