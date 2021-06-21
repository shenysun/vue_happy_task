import { Module } from "vuex";
export enum EnumSelectType {
    Only, // 单选
    More, // 多选
}

const state = {
    index: 0, // subjects的下标
    subjects: [
        {
            title: "题目一",
            type: EnumSelectType.Only,
            options: [
                {
                    id: "A",
                    desc: "答案aaaa",
                },
                {
                    id: "B",
                    desc: "答案bbbb",
                },
                {
                    id: "C",
                    desc: "答案aaaa",
                },
                {
                    id: "D",
                    desc: "答案bbbb",
                },
                {
                    id: "E",
                    desc: "答案aaaa",
                }
            ],
            score: 15,
            selectId: [],
            isRight: false,
            rightId: ["C"]
        },
        {
            title: "题目二",
            type: EnumSelectType.More,
            options: [
                {
                    id: "A",
                    desc: "答案aaa111a",
                },
                {
                    id: "B",
                    desc: "答案bbbb",
                },
                {
                    id: "C",
                    desc: "答案aaaa",
                },
                {
                    id: "D",
                    desc: "答案bbbb",
                },
                {
                    id: "E",
                    desc: "答案aaaa",
                }
            ],
            score: 30,
            selectId: [],
            isRight: false,
            rightId: ["C"]
        }
    ]
};


const getters = {
    /**
     * 当前题目
     */
    curSubject(state: any) {
        return state.subjects[state.index];
    },
    // 最大关卡数量
    maxLvCount(state: any): number {
        return state.subjects.length;
    },
    // 获取总分
    score(state: any): number {
        let temp = 0;
        for (const subject of state.subjects) {
            temp += subject.isRight ? subject.score : 0;
        }
        return temp;
    },
    // 是否是最后一关
    getIsLast(state: any): boolean {
        return state.index + 1 === state.subjects.length;
    }

}
    
const mutations = {
    /**
     * 当前题目选择选项
     */
    changeSelected(state: any, id: string) {
        const curSubject = state.subjects[state.index];
        if (curSubject.selectId.indexOf(id) != -1) {
            return;
        }
        if (curSubject.type == EnumSelectType.Only) {
            curSubject.selectId = [];
        }
        curSubject.selectId.push(id);
        // for (const option of curSubject.options) {
        //     option.selected = option.id === id ? "choosed" : "";
        // }
    },
    /**
     * 提交答案
     */
    submitTask(state: any) {
        const curSubject = state.subjects[state.index];
        if (!curSubject) {
            return;
        }
        if (curSubject.selectId.length !== curSubject.rightId.length) {
            curSubject.isRight = false;
        }
        curSubject.isRight = (curSubject.selectId as Array<string>).some(val=> 
             curSubject.rightId.indexOf(val) != -1
        )
        console.log(curSubject.isRight);
        if (state.subjects.length > state.index + 1) {
            state.index++;
        }
    }
}

const task: Module<any, any> = {
    namespaced: true,
    state,
    getters,
    mutations
}

export default task;