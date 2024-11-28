import {reactive} from 'vue'

import article1 from './articles/article-1'

const store = reactive ({
    posts:[
        article1
        
        // {
        //     id: 1,
        //     title: 'Мой первый пост',
        //     description: 'Простой блог-сайт на на vue+tailwindcss',
        //     date: '04.10.2024',
        //     text: 'Дарова! Супер простой пошаговый гайд по тому как я сделала такой блог. На самом деле все взяла с видео на youtube. 1. Создаем проект vue 2. &nbsp авава '
        // }
    ]
})
export default store;