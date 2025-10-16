// ===== 职场场景问题数据 - 100个问题库 =====
const allQuestions = [
    // 工作热情类问题 (1-20)
    {
        id: 1,
        category: "work-passion",
        icon: "fas fa-heart",
        color: "#FF3B30",
        question: "周一早上醒来，想到要去上班，你的第一反应是？",
        options: [
            { text: "充满期待，今天又有新的挑战", icon: "fas fa-smile", score: 1 },
            { text: "还行吧，就是正常上班", icon: "fas fa-meh", score: 2 },
            { text: "唉，又要面对那些烦心事", icon: "fas fa-frown", score: 3 }
        ]
    },
    {
        id: 2,
        category: "work-passion",
        icon: "fas fa-coffee",
        color: "#FF9500",
        question: "每天上班路上，你的心情是？",
        options: [
            { text: "精神饱满，准备迎接新一天", icon: "fas fa-sun", score: 1 },
            { text: "平静如水，按部就班", icon: "fas fa-cloud", score: 2 },
            { text: "心情沉重，像上刑场", icon: "fas fa-cloud-rain", score: 3 }
        ]
    },
    {
        id: 3,
        category: "work-passion",
        icon: "fas fa-calendar-check",
        color: "#34C759",
        question: "周五下班时，你的心情是？",
        options: [
            { text: "有点不舍，还想继续工作", icon: "fas fa-heart", score: 1 },
            { text: "终于解放了，周末愉快", icon: "fas fa-grin", score: 2 },
            { text: "终于熬完了，下周还要继续受罪", icon: "fas fa-sad-tear", score: 3 }
        ]
    },
    {
        id: 4,
        category: "work-passion",
        icon: "fas fa-tasks",
        color: "#5856D6",
        question: "当接到新任务时，你的第一反应是？",
        options: [
            { text: "兴奋，又有机会展现自己", icon: "fas fa-rocket", score: 1 },
            { text: "平静接受，该做什么做什么", icon: "fas fa-clipboard-list", score: 2 },
            { text: "头疼，怎么又来活儿了", icon: "fas fa-head-side-virus", score: 3 }
        ]
    },
    {
        id: 5,
        category: "work-passion",
        icon: "fas fa-trophy",
        color: "#FFD60A",
        question: "完成一个项目后，你的感受是？",
        options: [
            { text: "成就感满满，期待下一个挑战", icon: "fas fa-medal", score: 1 },
            { text: "松了一口气，总算完成了", icon: "fas fa-check-circle", score: 2 },
            { text: "累死了，赶紧休息一下", icon: "fas fa-bed", score: 3 }
        ]
    },

    // 工作压力类问题 (21-40)
    {
        id: 6,
        category: "work-pressure",
        icon: "fas fa-exclamation-triangle",
        color: "#FF3B30",
        question: "当老板临时给你安排一个紧急任务，而你手上已经有3个项目在进行，你会？",
        options: [
            { text: "立即调整优先级，想办法完成", icon: "fas fa-cogs", score: 1 },
            { text: "和老板沟通工作量，看能否延后", icon: "fas fa-comments", score: 2 },
            { text: "内心崩溃，想直接摆烂", icon: "fas fa-dizzy", score: 3 }
        ]
    },
    {
        id: 7,
        category: "work-pressure",
        icon: "fas fa-clock",
        color: "#FF9500",
        question: "老板要求你24小时内完成一个需要3天的工作，你会？",
        options: [
            { text: "加班加点，全力以赴完成", icon: "fas fa-fire", score: 1 },
            { text: "尽力而为，能完成多少是多少", icon: "fas fa-hourglass-half", score: 2 },
            { text: "直接拒绝，这根本不可能", icon: "fas fa-times-circle", score: 3 }
        ]
    },
    {
        id: 8,
        category: "work-pressure",
        icon: "fas fa-balance-scale",
        color: "#5856D6",
        question: "工作和生活的平衡对你来说？",
        options: [
            { text: "工作就是生活的一部分，很充实", icon: "fas fa-heart", score: 1 },
            { text: "尽量平衡，但有时会偏向工作", icon: "fas fa-balance-scale", score: 2 },
            { text: "完全失衡，工作占用了所有时间", icon: "fas fa-exclamation", score: 3 }
        ]
    },
    {
        id: 9,
        category: "work-pressure",
        icon: "fas fa-moon",
        color: "#1C1C1E",
        question: "经常需要加班到很晚，你的感受是？",
        options: [
            { text: "乐在其中，晚上工作效率更高", icon: "fas fa-moon", score: 1 },
            { text: "偶尔可以接受，但不要成为常态", icon: "fas fa-clock", score: 2 },
            { text: "非常反感，影响身体健康", icon: "fas fa-bed", score: 3 }
        ]
    },
    {
        id: 10,
        category: "work-pressure",
        icon: "fas fa-mobile-alt",
        color: "#007AFF",
        question: "下班后老板还经常在群里@你，你会？",
        options: [
            { text: "及时回复，保持工作状态", icon: "fas fa-mobile-alt", score: 1 },
            { text: "看情况回复，紧急的才理", icon: "fas fa-eye", score: 2 },
            { text: "假装没看到，下班就是下班", icon: "fas fa-eye-slash", score: 3 }
        ]
    },

    // 人际关系类问题 (41-60)
    {
        id: 11,
        category: "interpersonal",
        icon: "fas fa-users",
        color: "#34C759",
        question: "同事小李总是把工作推给你，今天又让你帮忙做他的PPT，你会？",
        options: [
            { text: "委婉拒绝，教他怎么做", icon: "fas fa-graduation-cap", score: 1 },
            { text: "帮忙做，但心里很不爽", icon: "fas fa-smile-wink", score: 2 },
            { text: "直接拒绝，凭什么要帮他", icon: "fas fa-hand-paper", score: 3 }
        ]
    },
    {
        id: 12,
        category: "interpersonal",
        icon: "fas fa-comments",
        color: "#5856D6",
        question: "办公室里总是有人在背后说闲话，你的态度是？",
        options: [
            { text: "不参与，专注于自己的工作", icon: "fas fa-ear-deaf", score: 1 },
            { text: "偶尔听听，但不传播", icon: "fas fa-ear-listen", score: 2 },
            { text: "加入其中，反正大家都这样", icon: "fas fa-comment-dots", score: 3 }
        ]
    },
    {
        id: 13,
        category: "interpersonal",
        icon: "fas fa-user-friends",
        color: "#FF9500",
        question: "你和同事的关系如何？",
        options: [
            { text: "关系很好，经常一起聚餐", icon: "fas fa-users", score: 1 },
            { text: "一般般，工作关系为主", icon: "fas fa-handshake", score: 2 },
            { text: "关系紧张，经常有矛盾", icon: "fas fa-fist-raised", score: 3 }
        ]
    },
    {
        id: 14,
        category: "interpersonal",
        icon: "fas fa-crown",
        color: "#FFD60A",
        question: "你的直属领导总是批评你的工作，但从不给具体建议，你会？",
        options: [
            { text: "主动找他沟通，了解具体问题", icon: "fas fa-comments", score: 1 },
            { text: "忍一忍，可能是我做得不够好", icon: "fas fa-shield-alt", score: 2 },
            { text: "受不了这种PUA，想换工作", icon: "fas fa-running", score: 3 }
        ]
    },
    {
        id: 15,
        category: "interpersonal",
        icon: "fas fa-handshake",
        color: "#34C759",
        question: "团队合作时，你更倾向于？",
        options: [
            { text: "主动承担更多责任", icon: "fas fa-hands-helping", score: 1 },
            { text: "做好自己分内的事", icon: "fas fa-user-check", score: 2 },
            { text: "能少做就少做，别累着自己", icon: "fas fa-user-times", score: 3 }
        ]
    },

    // 薪资待遇类问题 (61-80)
    {
        id: 16,
        category: "salary",
        icon: "fas fa-money-bill-wave",
        color: "#34C759",
        question: "听说隔壁部门小王跳槽后工资涨了50%，你内心的想法是？",
        options: [
            { text: "为他高兴，我也要努力提升自己", icon: "fas fa-thumbs-up", score: 1 },
            { text: "有点羡慕，但觉得现在还行", icon: "fas fa-meh", score: 2 },
            { text: "凭什么他涨这么多，我也要跳槽", icon: "fas fa-angry", score: 3 }
        ]
    },
    {
        id: 17,
        category: "salary",
        icon: "fas fa-chart-line",
        color: "#007AFF",
        question: "你的薪资涨幅如何？",
        options: [
            { text: "每年都有不错的涨幅", icon: "fas fa-arrow-up", score: 1 },
            { text: "偶尔涨一点，聊胜于无", icon: "fas fa-minus", score: 2 },
            { text: "好几年没涨过了", icon: "fas fa-arrow-down", score: 3 }
        ]
    },
    {
        id: 18,
        category: "salary",
        icon: "fas fa-gift",
        color: "#FF3B30",
        question: "公司年会上，老板宣布今年没有年终奖，你的心情是？",
        options: [
            { text: "理解公司困难，继续努力工作", icon: "fas fa-heart", score: 1 },
            { text: "有点失望，但还能接受", icon: "fas fa-meh", score: 2 },
            { text: "彻底心凉，开始看招聘网站", icon: "fas fa-sad-tear", score: 3 }
        ]
    },
    {
        id: 19,
        category: "salary",
        icon: "fas fa-coins",
        color: "#FFD60A",
        question: "你的工资够用吗？",
        options: [
            { text: "绰绰有余，还能存下不少", icon: "fas fa-piggy-bank", score: 1 },
            { text: "刚好够用，没什么结余", icon: "fas fa-balance-scale", score: 2 },
            { text: "完全不够，经常月光", icon: "fas fa-wallet", score: 3 }
        ]
    },
    {
        id: 20,
        category: "salary",
        icon: "fas fa-hand-holding-usd",
        color: "#5856D6",
        question: "老板总是说'公司现在困难，大家理解一下'，你会？",
        options: [
            { text: "理解支持，与公司共渡难关", icon: "fas fa-hands-helping", score: 1 },
            { text: "听听就好，别太当真", icon: "fas fa-ear-deaf", score: 2 },
            { text: "又是画饼，准备跳槽", icon: "fas fa-running", score: 3 }
        ]
    },

    // 公司文化类问题 (81-100)
    {
        id: 21,
        category: "company-culture",
        icon: "fas fa-building",
        color: "#1C1C1E",
        question: "你们公司的企业文化如何？",
        options: [
            { text: "很正能量，大家都很积极", icon: "fas fa-smile", score: 1 },
            { text: "一般般，没什么特别感觉", icon: "fas fa-meh", score: 2 },
            { text: "很压抑，勾心斗角严重", icon: "fas fa-frown", score: 3 }
        ]
    },
    {
        id: 22,
        category: "company-culture",
        icon: "fas fa-clock",
        color: "#FF9500",
        question: "周五下班前，同事们都走了，但你的工作还没完成，你会？",
        options: [
            { text: "加班完成，工作要有始有终", icon: "fas fa-clock", score: 1 },
            { text: "看情况，不太急就下周再做", icon: "fas fa-hourglass-half", score: 2 },
            { text: "直接走人，周末不工作", icon: "fas fa-running", score: 3 }
        ]
    },
    {
        id: 23,
        category: "company-culture",
        icon: "fas fa-users-cog",
        color: "#5856D6",
        question: "公司最近频繁裁员，你担心自己也会被裁，你的想法是？",
        options: [
            { text: "提升自己的不可替代性", icon: "fas fa-user-crown", score: 1 },
            { text: "观望一下，看情况再说", icon: "fas fa-eye", score: 2 },
            { text: "主动出击，开始投简历", icon: "fas fa-paper-plane", score: 3 }
        ]
    },
    {
        id: 24,
        category: "company-culture",
        icon: "fas fa-chart-bar",
        color: "#34C759",
        question: "公司的发展前景如何？",
        options: [
            { text: "前景很好，很有发展潜力", icon: "fas fa-rocket", score: 1 },
            { text: "一般般，稳定发展", icon: "fas fa-chart-line", score: 2 },
            { text: "前景堪忧，可能随时倒闭", icon: "fas fa-skull", score: 3 }
        ]
    },
    {
        id: 25,
        category: "company-culture",
        icon: "fas fa-award",
        color: "#FFD60A",
        question: "你在公司有晋升机会吗？",
        options: [
            { text: "机会很多，正在努力争取", icon: "fas fa-trophy", score: 1 },
            { text: "有一些机会，需要等待", icon: "fas fa-hourglass", score: 2 },
            { text: "基本没有，升职无望", icon: "fas fa-times", score: 3 }
        ]
    }
];

// 继续添加更多问题...
// 这里为了演示，我只添加了25个问题，实际项目中可以添加完整的100个问题

// ===== 随机选择问题函数 =====
function getRandomQuestions(count = 8) {
    // 从所有问题中随机选择指定数量的问题
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(count, allQuestions.length));
}

// ===== 结果分析配置 =====
const resultConfig = {
    low: {
        range: [8, 12],
        probability: "5-15%",
        title: "职场快乐星人",
        icon: "fas fa-star",
        color: "#34C759",
        description: "你对当前工作很满意，离职概率很低！",
        advice: [
            "继续保持积极的工作态度",
            "继续在现有岗位上发光发热",
            "可以考虑承担更多责任，获得晋升机会",
            "你的工作状态很好，是团队的稳定力量"
        ],
        encouragement: "🌟 你就像职场中的小太阳，用正能量感染着身边的每一个人！继续保持这份热情，未来的路会越走越宽广。记住，优秀的人在哪里都会发光！"
    },
    medium: {
        range: [13, 18],
        probability: "30-50%",
        title: "理性思考者",
        icon: "fas fa-brain",
        color: "#FF9500",
        description: "你对工作有理性思考，离职概率中等。",
        advice: [
            "仔细评估当前工作的优缺点",
            "考虑是否可以通过沟通改善现状",
            "制定明确的职业发展计划",
            "如果决定留下，要更加积极主动"
        ],
        encouragement: "🤔 你的理性思考能力很强，这是职场中非常宝贵的品质！无论最终做出什么决定，都要相信自己的判断。记住，每一次选择都是成长的机会！"
    },
    high: {
        range: [19, 24],
        probability: "70-85%",
        title: "变革寻求者",
        icon: "fas fa-rocket",
        color: "#FF3B30",
        description: "你对当前工作不太满意，离职概率较高。",
        advice: [
            "开始关注其他工作机会",
            "提升自己的专业技能",
            "更新简历，准备面试",
            "考虑转行或创业的可能性"
        ],
        encouragement: "🚀 人生就像一场冒险，有时候需要勇敢地踏出舒适圈！你的不安分可能正是推动你走向更好未来的动力。记住，最好的机会往往在未知的路上等着你！"
    }
};

// ===== 问题分类配置 =====
const categoryConfig = {
    "work-passion": {
        name: "工作热情",
        icon: "fas fa-heart",
        color: "#FF3B30"
    },
    "work-pressure": {
        name: "工作压力",
        icon: "fas fa-exclamation-triangle",
        color: "#FF9500"
    },
    "interpersonal": {
        name: "人际关系",
        icon: "fas fa-users",
        color: "#5856D6"
    },
    "salary": {
        name: "薪资待遇",
        icon: "fas fa-money-bill-wave",
        color: "#34C759"
    },
    "company-culture": {
        name: "公司文化",
        icon: "fas fa-building",
        color: "#1C1C1E"
    }
};

// 导出数据供其他文件使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { allQuestions, getRandomQuestions, resultConfig, categoryConfig };
}