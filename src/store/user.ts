import {defineStore} from "pinia";

export const useUserStore = defineStore('user',{
    // id: 'user', // id,必填且唯一
    state: () => {
        return {
            name: 'zhanhong'
        }
    },
    actions: {
        updateName(name: any) {
            this.name = name
        }
    },
    persist: true, // 设置持久化
})
