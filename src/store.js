import {reactive} from 'vue'

const store = reactive ({
    posts:[
        {
            id: 1,
            title: 'Мой первый пост',
            description: 'Вкатываюсь в сайты на vue, tailwindcss и все такое',
            date: '04.10.2024',
            text: 'Дарова! Этот пост будет немного про то как я написала блог сайт'
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