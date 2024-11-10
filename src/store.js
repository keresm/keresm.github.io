import {reactive} from 'vue'

const store = reactive ({
    posts:[
        {
            id: 1,
            title: 'Мой первый пост',
            description: 'Простой блог-сайт на на vue+tailwindcss',
            date: '04.10.2024',
            text: 'Дарова! Супер простой пошаговый гайд по тому как я сделала такой блог. На самом деле все взяла с видео на youtube. 1. Создаем проект vue 2. '
        },
        // {
        //     id: 2,
        //     title: 'Алматы-Шымкент-Ташкент',
        //     description: 'Небольшой отпуск в 2 недели, что было',
        //     date: '14.03.2024'
        // },
        // {
        //     id: 3,
        //     title: 'Мой второй EP',
        //     description: 'Что это',
        //     date: '14.03.2024'
        // }
    ]
})
export default store;