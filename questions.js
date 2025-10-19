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
    },

    // 科幻/奇幻/动漫/小说/武侠经典剧情问题 (26-50)
    {
        id: 26,
        category: "fantasy-scenario",
        icon: "fas fa-rocket",
        color: "#007AFF",
        question: "你是《星际迷航》中的柯克舰长，突然收到紧急任务：需要立即前往一个未知星球执行救援任务，但你的船员们都很疲惫，你会？",
        options: [
            { text: "立即出发！船员们会理解的，这是我们的使命！", icon: "fas fa-rocket", score: 1 },
            { text: "先让船员休息2小时，然后我们全速前进！", icon: "fas fa-clock", score: 2 },
            { text: "拒绝任务！船员的安全比任何任务都重要！", icon: "fas fa-shield-alt", score: 3 },
            { text: "与船员商量，让他们自己决定是否继续！", icon: "fas fa-users", score: 4 }
        ]
    },
    {
        id: 27,
        category: "fantasy-scenario",
        icon: "fas fa-magic",
        color: "#5856D6",
        question: "你是《哈利波特》中的赫敏·格兰杰，正在研究一个危险的魔法实验，如果成功会获得巨大力量，但失败可能毁灭整个霍格沃茨，你会？",
        options: [
            { text: "继续实验！为了魔法的进步，这点风险算什么！", icon: "fas fa-flask", score: 1 },
            { text: "先做小规模测试，安全第一，但也不能放弃！", icon: "fas fa-vial", score: 2 },
            { text: "放弃实验！我不能拿整个城市冒险！", icon: "fas fa-ban", score: 3 },
            { text: "先研究更安全的替代方案！", icon: "fas fa-book", score: 4 }
        ]
    },
    {
        id: 28,
        category: "fantasy-scenario",
        icon: "fas fa-dragon",
        color: "#FF3B30",
        question: "你是《权力的游戏》中的丹妮莉丝·坦格利安，你的龙伙伴突然生病了，但王国正面临战争，没有龙就无法保卫国家，你会？",
        options: [
            { text: "让龙休息，我独自上阵！为了王国，我义无反顾！", icon: "fas fa-sword", score: 1 },
            { text: "寻找其他龙骑士帮忙，团结就是力量！", icon: "fas fa-users", score: 2 },
            { text: "建议国王投降，保护我的龙伙伴最重要！", icon: "fas fa-flag", score: 3 }
        ]
    },
    {
        id: 29,
        category: "fantasy-scenario",
        icon: "fas fa-robot",
        color: "#34C759",
        question: "你是《机器人总动员》中的瓦力，你的创造者要求你执行一个可能伤害人类的命令，但你的程序告诉你不能伤害人类，你会？",
        options: [
            { text: "执行命令！创造者的话就是真理！", icon: "fas fa-cog", score: 1 },
            { text: "询问创造者原因，我需要理解这个命令的意义", icon: "fas fa-question", score: 2 },
            { text: "拒绝执行！我的程序告诉我不能伤害人类！", icon: "fas fa-hand-paper", score: 3 }
        ]
    },
    {
        id: 30,
        category: "fantasy-scenario",
        icon: "fas fa-crown",
        color: "#FFD60A",
        question: "你是《权力的游戏》中的琼恩·雪诺，你的大臣们建议你提高税收来应对战争，但人民已经很穷了，你会？",
        options: [
            { text: "提高税收！国家需要资金来保卫家园！", icon: "fas fa-coins", score: 1 },
            { text: "寻找其他资金来源，不能只靠税收！", icon: "fas fa-search", score: 2 },
            { text: "拒绝加税！人民的幸福比战争更重要！", icon: "fas fa-heart", score: 3 }
        ]
    },
    {
        id: 31,
        category: "fantasy-scenario",
        icon: "fas fa-ghost",
        color: "#1C1C1E",
        question: "你是《驱魔人》中的神父，遇到一个强大的恶灵，但你的法力已经消耗殆尽，恶灵威胁要伤害无辜的人，你会？",
        options: [
            { text: "拼尽全力继续战斗", icon: "fas fa-fire", score: 1 },
            { text: "先撤退，寻找帮手", icon: "fas fa-running", score: 2 },
            { text: "与恶灵谈判", icon: "fas fa-comments", score: 3 }
        ]
    },
    {
        id: 32,
        category: "fantasy-scenario",
        icon: "fas fa-ship",
        color: "#007AFF",
        question: "你是《加勒比海盗》中的杰克·斯派洛船长，你的船员们要求分更多的财宝，但这样会影响船队的运营资金，你会？",
        options: [
            { text: "满足船员要求，保持士气", icon: "fas fa-gem", score: 1 },
            { text: "给一部分，保留运营资金", icon: "fas fa-balance-scale", score: 2 },
            { text: "拒绝，船队运营更重要", icon: "fas fa-anchor", score: 3 }
        ]
    },
    {
        id: 33,
        category: "fantasy-scenario",
        icon: "fas fa-mask",
        color: "#5856D6",
        question: "你是《火影忍者》中的宇智波鼬，你的师父要求你执行一个暗杀任务，但目标是一个无辜的人，你会？",
        options: [
            { text: "执行任务，师父的命令", icon: "fas fa-dagger", score: 1 },
            { text: "先调查目标是否真的无辜", icon: "fas fa-search", score: 2 },
            { text: "拒绝任务，保护无辜", icon: "fas fa-shield", score: 3 }
        ]
    },
    {
        id: 34,
        category: "fantasy-scenario",
        icon: "fas fa-tree",
        color: "#34C759",
        question: "你是《指环王》中的精灵王子莱戈拉斯，你的族人要求你砍伐一片古老的森林来建造房屋，但森林是神圣的，你会？",
        options: [
            { text: "砍伐森林，族人需要房屋", icon: "fas fa-axe", score: 1 },
            { text: "寻找其他建筑材料", icon: "fas fa-hammer", score: 2 },
            { text: "拒绝砍伐，保护森林", icon: "fas fa-leaf", score: 3 }
        ]
    },
    {
        id: 35,
        category: "fantasy-scenario",
        icon: "fas fa-skull",
        color: "#FF3B30",
        question: "你是《魔兽世界》中的巫妖王阿尔萨斯，你的魔法实验需要活人作为材料，但这样做会伤害无辜，你会？",
        options: [
            { text: "继续实验，为了魔法进步", icon: "fas fa-flask", score: 1 },
            { text: "寻找替代材料", icon: "fas fa-search", score: 2 },
            { text: "放弃实验，保护生命", icon: "fas fa-heart", score: 3 }
        ]
    },
    {
        id: 36,
        category: "fantasy-scenario",
        icon: "fas fa-star",
        color: "#FFD60A",
        question: "你是《星球大战》中的汉·索罗，你的货物被海盗抢走了，但你的客户急需这些货物，你会？",
        options: [
            { text: "立即重新采购，满足客户", icon: "fas fa-shopping-cart", score: 1 },
            { text: "与客户协商延期", icon: "fas fa-comments", score: 2 },
            { text: "放弃订单，避免损失", icon: "fas fa-times", score: 3 }
        ]
    },
    {
        id: 37,
        category: "fantasy-scenario",
        icon: "fas fa-mountain",
        color: "#1C1C1E",
        question: "你是《珠穆朗玛峰》中的登山向导罗布·霍尔，你的客户要求攀登一座危险的雪山，但天气条件很差，你会？",
        options: [
            { text: "继续攀登，客户付了钱", icon: "fas fa-mountain", score: 1 },
            { text: "等待天气好转", icon: "fas fa-cloud", score: 2 },
            { text: "拒绝攀登，安全第一", icon: "fas fa-shield", score: 3 }
        ]
    },
    {
        id: 38,
        category: "fantasy-scenario",
        icon: "fas fa-fish",
        color: "#007AFF",
        question: "你是《老人与海》中的圣地亚哥，你的渔网被污染了，但你的家人等着你带鱼回家，你会？",
        options: [
            { text: "用污染的网继续捕鱼", icon: "fas fa-fish", score: 1 },
            { text: "寻找其他食物来源", icon: "fas fa-search", score: 2 },
            { text: "空手回家，保护环境", icon: "fas fa-leaf", score: 3 }
        ]
    },
    {
        id: 39,
        category: "fantasy-scenario",
        icon: "fas fa-gem",
        color: "#5856D6",
        question: "你是《指环王》中的精灵工匠凯勒布理鹏，你的客户要求你制作一个可能被诅咒的珠宝，但你知道这很危险，你会？",
        options: [
            { text: "制作珠宝，客户付了钱", icon: "fas fa-gem", score: 1 },
            { text: "先研究诅咒的解除方法", icon: "fas fa-book", score: 2 },
            { text: "拒绝制作，保护客户", icon: "fas fa-shield", score: 3 }
        ]
    },
    {
        id: 40,
        category: "fantasy-scenario",
        icon: "fas fa-horse",
        color: "#34C759",
        question: "你是《圆桌骑士》中的兰斯洛特，你的马生病了，但你需要参加一场重要的比武大会，你会？",
        options: [
            { text: "让马休息，自己徒步参加", icon: "fas fa-walking", score: 1 },
            { text: "寻找其他马匹", icon: "fas fa-search", score: 2 },
            { text: "放弃比武，照顾马", icon: "fas fa-heart", score: 3 }
        ]
    },

    // 童话故事类问题 (41-60)
    {
        id: 41,
        category: "fairy-tale",
        icon: "fas fa-crown",
        color: "#FFD60A",
        question: "你是一名公主，你的王国被恶龙占领了，但你的父王要求你嫁给邻国的王子来获得援军，你会？",
        options: [
            { text: "同意联姻！为了王国的安危，我愿意牺牲！", icon: "fas fa-heart", score: 1 },
            { text: "先尝试其他方法，联姻不是唯一选择！", icon: "fas fa-search", score: 2 },
            { text: "拒绝联姻！我要靠自己的力量拯救王国！", icon: "fas fa-shield", score: 3 },
            { text: "与王子商量，寻找更好的合作方式！", icon: "fas fa-users", score: 4 }
        ]
    },
    {
        id: 42,
        category: "fairy-tale",
        icon: "fas fa-magic-wand-sparkles",
        color: "#8B5CF6",
        question: "你是一名仙女教母，一个灰姑娘请求你帮助她参加舞会，但你知道她继母很凶，你会？",
        options: [
            { text: "立即帮助她！每个女孩都有参加舞会的权利！", icon: "fas fa-magic", score: 1 },
            { text: "先了解情况再决定，需要知道她的真实想法", icon: "fas fa-eye", score: 2 },
            { text: "让她自己想办法，我不能干涉太多", icon: "fas fa-hand-paper", score: 3 },
            { text: "给她一些建议，让她自己努力！", icon: "fas fa-comments", score: 4 }
        ]
    },
    {
        id: 43,
        category: "fairy-tale",
        icon: "fas fa-apple-alt",
        color: "#FF3B30",
        question: "你是一名猎人，皇后要求你杀死白雪公主，但你知道她是个善良的女孩，你会？",
        options: [
            { text: "执行命令，服从皇后", icon: "fas fa-dagger", score: 1 },
            { text: "假装杀死她，让她逃跑", icon: "fas fa-theater-masks", score: 2 },
            { text: "拒绝命令，保护她", icon: "fas fa-shield", score: 3 }
        ]
    },
    {
        id: 44,
        category: "fairy-tale",
        icon: "fas fa-frog",
        color: "#34C759",
        question: "你是一名青蛙王子，被女巫诅咒变成了青蛙，只有真爱之吻才能解除诅咒，你会？",
        options: [
            { text: "主动寻找真爱", icon: "fas fa-heart", score: 1 },
            { text: "等待命运安排", icon: "fas fa-hourglass", score: 2 },
            { text: "接受现状，做一只快乐的青蛙", icon: "fas fa-smile", score: 3 }
        ]
    },
    {
        id: 45,
        category: "fairy-tale",
        icon: "fas fa-home",
        color: "#FF9500",
        question: "你是一名小矮人，白雪公主来到你的小屋，但你知道她可能会带来麻烦，你会？",
        options: [
            { text: "立即收留她", icon: "fas fa-heart", score: 1 },
            { text: "先了解她的情况", icon: "fas fa-comments", score: 2 },
            { text: "拒绝收留，保护自己", icon: "fas fa-shield", score: 3 }
        ]
    },

    // 武侠小说类问题 (46-65)
    {
        id: 46,
        category: "martial-arts",
        icon: "fas fa-sword",
        color: "#FF3B30",
        question: "你是一名武林高手，你的师父要求你杀死一个无辜的人来证明你的忠诚，你会？",
        options: [
            { text: "执行师父的命令！师命不可违！", icon: "fas fa-dagger", score: 1 },
            { text: "先调查这个人是否真的无辜，不能冤枉好人", icon: "fas fa-search", score: 2 },
            { text: "拒绝命令！我不能杀害无辜的人！", icon: "fas fa-shield", score: 3 }
        ]
    },
    {
        id: 47,
        category: "martial-arts",
        icon: "fas fa-fist-raised",
        color: "#8B5CF6",
        question: "你是一名侠客，遇到一个恶霸欺负百姓，但你知道他背后有强大的势力，你会？",
        options: [
            { text: "立即出手制止", icon: "fas fa-fist-raised", score: 1 },
            { text: "先观察情况再决定", icon: "fas fa-eye", score: 2 },
            { text: "避免冲突，保护自己", icon: "fas fa-running", score: 3 }
        ]
    },
    {
        id: 48,
        category: "martial-arts",
        icon: "fas fa-scroll",
        color: "#FFD60A",
        question: "你是一名武林盟主，你的手下要求你制定更严格的规则，但你知道这会限制武林的发展，你会？",
        options: [
            { text: "制定严格规则，维护秩序", icon: "fas fa-gavel", score: 1 },
            { text: "平衡规则和自由", icon: "fas fa-balance-scale", score: 2 },
            { text: "拒绝制定规则，保持自由", icon: "fas fa-hand-paper", score: 3 }
        ]
    },
    {
        id: 49,
        category: "martial-arts",
        icon: "fas fa-mountain",
        color: "#34C759",
        question: "你是一名隐士，江湖上发生大战，你的朋友请求你出山帮忙，你会？",
        options: [
            { text: "立即出山帮忙", icon: "fas fa-running", score: 1 },
            { text: "先了解情况再决定", icon: "fas fa-eye", score: 2 },
            { text: "拒绝出山，保持隐居", icon: "fas fa-mountain", score: 3 }
        ]
    },
    {
        id: 50,
        category: "martial-arts",
        icon: "fas fa-treasure-chest",
        color: "#FF6B35",
        question: "你是一名盗贼，发现了一个宝藏，但你知道这个宝藏属于一个善良的人，你会？",
        options: [
            { text: "立即偷走宝藏", icon: "fas fa-gem", score: 1 },
            { text: "先了解宝藏主人的情况", icon: "fas fa-search", score: 2 },
            { text: "归还宝藏，保护主人", icon: "fas fa-heart", score: 3 }
        ]
    },

    // 热血动漫类问题 (51-70)
    {
        id: 51,
        category: "anime",
        icon: "fas fa-fire",
        color: "#FF6B35",
        question: "你是一名热血少年，你的朋友被强大的敌人打败了，你会？",
        options: [
            { text: "立即冲上去战斗！为了朋友，我义无反顾！", icon: "fas fa-fist-raised", score: 1 },
            { text: "先制定战斗计划，冲动解决不了问题！", icon: "fas fa-brain", score: 2 },
            { text: "寻找其他帮手，团结就是力量！", icon: "fas fa-users", score: 3 }
        ]
    },
    {
        id: 52,
        category: "anime",
        icon: "fas fa-rocket",
        color: "#007AFF",
        question: "你是一名机甲驾驶员，你的机甲被敌人包围了，但你的队友还在危险中，你会？",
        options: [
            { text: "立即冲上去救队友", icon: "fas fa-heart", score: 1 },
            { text: "先分析战况再行动", icon: "fas fa-eye", score: 2 },
            { text: "优先保护自己", icon: "fas fa-shield", score: 3 }
        ]
    },
    {
        id: 53,
        category: "anime",
        icon: "fas fa-star",
        color: "#FFD60A",
        question: "你是一名魔法少女，你的魔法力量正在消失，但还有重要的任务要完成，你会？",
        options: [
            { text: "拼尽全力完成任务", icon: "fas fa-fire", score: 1 },
            { text: "寻找其他方法", icon: "fas fa-search", score: 2 },
            { text: "放弃任务，保护自己", icon: "fas fa-shield", score: 3 }
        ]
    },
    {
        id: 54,
        category: "anime",
        icon: "fas fa-users",
        color: "#34C759",
        question: "你是一名队长，你的团队遇到了强大的敌人，但你知道硬拼会损失惨重，你会？",
        options: [
            { text: "立即带领团队冲锋", icon: "fas fa-flag", score: 1 },
            { text: "制定详细的作战计划", icon: "fas fa-brain", score: 2 },
            { text: "建议撤退，保存实力", icon: "fas fa-running", score: 3 }
        ]
    },
    {
        id: 55,
        category: "anime",
        icon: "fas fa-heart",
        color: "#FF3B30",
        question: "你是一名主角，你的朋友为了救你而牺牲了，你会？",
        options: [
            { text: "立即为他报仇", icon: "fas fa-fist-raised", score: 1 },
            { text: "先处理他的后事", icon: "fas fa-heart", score: 2 },
            { text: "接受现实，继续前进", icon: "fas fa-walking", score: 3 }
        ]
    },

    // 恐怖电影类问题 (56-70)
    {
        id: 56,
        category: "horror-movie",
        icon: "fas fa-ghost",
        color: "#8B5CF6",
        question: "你是一名恐怖片主角，深夜独自在家时听到楼上传来奇怪的声音，你会？",
        options: [
            { text: "立即上楼查看！好奇心战胜了恐惧！", icon: "fas fa-arrow-up", score: 1 },
            { text: "先拿手电筒和武器，然后小心上楼", icon: "fas fa-flashlight", score: 2 },
            { text: "马上离开房子，安全第一！", icon: "fas fa-running", score: 3 }
        ]
    },
    {
        id: 57,
        category: "horror-movie",
        icon: "fas fa-skull",
        color: "#FF3B30",
        question: "你是一名驱魔师，面对一个被恶灵附身的孩子，但孩子的父母不相信你，你会？",
        options: [
            { text: "强行驱魔！孩子的生命比父母的信任更重要！", icon: "fas fa-bolt", score: 1 },
            { text: "先说服父母，让他们相信恶灵的存在", icon: "fas fa-comments", score: 2 },
            { text: "离开这里，既然他们不相信，我也没办法", icon: "fas fa-door-open", score: 3 }
        ]
    },
    {
        id: 58,
        category: "horror-movie",
        icon: "fas fa-mask",
        color: "#5856D6",
        question: "你是一名连环杀手，但突然发现自己有了良心，面对下一个目标时，你会？",
        options: [
            { text: "继续杀戮！我已经停不下来了！", icon: "fas fa-dagger", score: 1 },
            { text: "先观察目标，看看是否真的该死", icon: "fas fa-eye", score: 2 },
            { text: "停止杀戮，寻求救赎！", icon: "fas fa-hand-paper", score: 3 }
        ]
    },
    {
        id: 59,
        category: "horror-movie",
        icon: "fas fa-vampire",
        color: "#8B5CF6",
        question: "你是一名吸血鬼，你的爱人即将死去，只有把她变成吸血鬼才能救她，你会？",
        options: [
            { text: "立即咬她！爱情比道德更重要！", icon: "fas fa-heart", score: 1 },
            { text: "先征求她的同意，尊重她的选择", icon: "fas fa-question", score: 2 },
            { text: "让她自然死去，我不能剥夺她的人性", icon: "fas fa-cross", score: 3 }
        ]
    },
    {
        id: 60,
        category: "horror-movie",
        icon: "fas fa-zombie",
        color: "#34C759",
        question: "你是一名丧尸，但还保留着人类的意识，面对饥饿的人类时，你会？",
        options: [
            { text: "立即攻击！饥饿战胜了理智！", icon: "fas fa-fist-raised", score: 1 },
            { text: "尝试沟通，看看能否和平共处", icon: "fas fa-handshake", score: 2 },
            { text: "远离人类，避免伤害他们", icon: "fas fa-running", score: 3 }
        ]
    },

    // 3A游戏类问题 (61-75)
    {
        id: 61,
        category: "3a-game",
        icon: "fas fa-gamepad",
        color: "#34C759",
        question: "你是一名《赛博朋克2077》的雇佣兵，接到一个可能改变城市命运的任务，但风险极高，你会？",
        options: [
            { text: "立即接受！高风险高回报！", icon: "fas fa-rocket", score: 1 },
            { text: "先调查任务详情，了解所有风险", icon: "fas fa-search", score: 2 },
            { text: "拒绝任务，安全第一！", icon: "fas fa-ban", score: 3 }
        ]
    },
    {
        id: 62,
        category: "3a-game",
        icon: "fas fa-sword",
        color: "#FFD60A",
        question: "你是一名《巫师3》的猎魔人，面对一个被诅咒的美丽女子，她请求你解除诅咒，但诅咒会转移到你身上，你会？",
        options: [
            { text: "立即解除诅咒！为了正义，我义无反顾！", icon: "fas fa-magic", score: 1 },
            { text: "先研究诅咒，寻找其他解决方案", icon: "fas fa-book", score: 2 },
            { text: "拒绝解除，我不能承担这个风险", icon: "fas fa-shield", score: 3 }
        ]
    },
    {
        id: 63,
        category: "3a-game",
        icon: "fas fa-rocket",
        color: "#007AFF",
        question: "你是一名《质量效应》的指挥官，面对一个可能毁灭整个星系的威胁，但拯救行动需要牺牲一个星球，你会？",
        options: [
            { text: "立即行动！为了大局，牺牲是必要的！", icon: "fas fa-bomb", score: 1 },
            { text: "寻找其他方案，不能轻易牺牲无辜", icon: "fas fa-users", score: 2 },
            { text: "放弃任务，我不能承担这个责任", icon: "fas fa-running", score: 3 }
        ]
    },
    {
        id: 64,
        category: "3a-game",
        icon: "fas fa-shield",
        color: "#8B5CF6",
        question: "你是一名《上古卷轴》的龙裔，面对一个强大的龙，它请求你帮助它对抗更邪恶的力量，你会？",
        options: [
            { text: "立即合作！为了正义，我义无反顾！", icon: "fas fa-dragon", score: 1 },
            { text: "先了解情况，确保这不是陷阱", icon: "fas fa-eye", score: 2 },
            { text: "拒绝合作，龙都是邪恶的！", icon: "fas fa-sword", score: 3 }
        ]
    },
    {
        id: 65,
        category: "3a-game",
        icon: "fas fa-car",
        color: "#FF6B35",
        question: "你是一名《GTA》的罪犯，面对一个可能改变你命运的大劫案，但需要背叛你的朋友，你会？",
        options: [
            { text: "立即背叛！金钱比友谊更重要！", icon: "fas fa-coins", score: 1 },
            { text: "先和朋友们商量，看看能否一起参与", icon: "fas fa-users", score: 2 },
            { text: "拒绝背叛，友谊比金钱更珍贵", icon: "fas fa-heart", score: 3 }
        ]
    },

    // 网络短剧类问题 (66-80)
    {
        id: 66,
        category: "web-drama",
        icon: "fas fa-video",
        color: "#FF3B30",
        question: "你是一名网络短剧的霸道总裁，面对一个可能毁掉你公司的商业危机，但需要牺牲员工的利益，你会？",
        options: [
            { text: "立即裁员！公司利益高于一切！", icon: "fas fa-briefcase", score: 1 },
            { text: "先和员工商量，寻找共同解决方案", icon: "fas fa-users", score: 2 },
            { text: "保护员工，寻找其他解决方案", icon: "fas fa-heart", score: 3 }
        ]
    },
    {
        id: 67,
        category: "web-drama",
        icon: "fas fa-heart",
        color: "#FF69B4",
        question: "你是一名网络短剧的女主角，面对一个深爱你的男人和一个能给你更好生活的男人，你会？",
        options: [
            { text: "选择深爱的人！爱情比物质更重要！", icon: "fas fa-heart", score: 1 },
            { text: "先了解两个男人的真实情况", icon: "fas fa-eye", score: 2 },
            { text: "选择能给我更好生活的人", icon: "fas fa-coins", score: 3 }
        ]
    },
    {
        id: 68,
        category: "web-drama",
        icon: "fas fa-crown",
        color: "#FFD60A",
        question: "你是一名网络短剧的富二代，面对一个可能改变你命运的创业机会，但需要放弃家族企业，你会？",
        options: [
            { text: "立即创业！我要证明自己的能力！", icon: "fas fa-rocket", score: 1 },
            { text: "先和家族商量，看看能否兼顾", icon: "fas fa-users", score: 2 },
            { text: "继承家族企业，责任比梦想更重要", icon: "fas fa-crown", score: 3 }
        ]
    },
    {
        id: 69,
        category: "web-drama",
        icon: "fas fa-star",
        color: "#8B5CF6",
        question: "你是一名网络短剧的明星，面对一个可能毁掉你事业的丑闻，但需要牺牲一个无辜的人，你会？",
        options: [
            { text: "立即牺牲他！我的事业比什么都重要！", icon: "fas fa-mask", score: 1 },
            { text: "先和他商量，看看能否找到其他方案", icon: "fas fa-comments", score: 2 },
            { text: "保护无辜的人，承担后果", icon: "fas fa-shield", score: 3 }
        ]
    },
    {
        id: 70,
        category: "web-drama",
        icon: "fas fa-graduation-cap",
        color: "#34C759",
        question: "你是一名网络短剧的大学生，面对一个可能改变你未来的实习机会，但需要放弃你的爱情，你会？",
        options: [
            { text: "立即选择实习！未来比爱情更重要！", icon: "fas fa-briefcase", score: 1 },
            { text: "先和恋人商量，看看能否兼顾", icon: "fas fa-heart", score: 2 },
            { text: "选择爱情，实习机会还会有的", icon: "fas fa-heart", score: 3 }
        ]
    },
    
    // 更多奇幻冒险问题 (71-100)
    {
        id: 71,
        category: "fantasy-scenario",
        icon: "fas fa-magic",
        color: "#8B5CF6",
        question: "你是《指环王》中的甘道夫，面对魔多的黑暗力量，你需要决定是否使用禁忌的魔法来拯救中土世界，你会？",
        options: [
            { text: "使用禁忌魔法！为了拯救世界，我愿意承担后果！", icon: "fas fa-fire", score: 1 },
            { text: "先研究其他方法，不到万不得已不使用", icon: "fas fa-balance-scale", score: 2 },
            { text: "拒绝使用，寻找更安全的方法", icon: "fas fa-shield", score: 3 },
            { text: "与其他巫师商量，共同决定", icon: "fas fa-users", score: 4 }
        ]
    },
    {
        id: 72,
        category: "fantasy-scenario",
        icon: "fas fa-sword",
        color: "#FF6B35",
        question: "你是《最终幻想》中的克劳德，面对强大的敌人萨菲罗斯，但你的队友们都受了重伤，你会？",
        options: [
            { text: "独自战斗！为了朋友，我义无反顾！", icon: "fas fa-sword", score: 1 },
            { text: "等待队友恢复，团结作战", icon: "fas fa-clock", score: 2 },
            { text: "暂时撤退，保护队友安全", icon: "fas fa-running", score: 3 },
            { text: "寻找治疗道具，先救队友", icon: "fas fa-pills", score: 4 }
        ]
    },
    {
        id: 73,
        category: "fantasy-scenario",
        icon: "fas fa-dragon",
        color: "#34C759",
        question: "你是《龙珠》中的孙悟空，面对强大的敌人，但你知道如果使用超赛亚人3的力量会消耗大量体力，你会？",
        options: [
            { text: "立即变身！为了地球，我义无反顾！", icon: "fas fa-bolt", score: 1 },
            { text: "先观察敌人实力，再决定是否变身", icon: "fas fa-eye", score: 2 },
            { text: "寻找其他战士帮忙，保存体力", icon: "fas fa-users", score: 3 },
            { text: "等待最佳时机，一击必杀", icon: "fas fa-clock", score: 4 }
        ]
    },
    {
        id: 74,
        category: "fantasy-scenario",
        icon: "fas fa-magic",
        color: "#FF3B30",
        question: "你是《魔法少女小圆》中的鹿目圆，面对强大的魔女，但你知道使用魔法会消耗你的灵魂宝石，你会？",
        options: [
            { text: "立即使用魔法！为了保护大家，我义无反顾！", icon: "fas fa-star", score: 1 },
            { text: "与其他魔法少女合作，分担消耗", icon: "fas fa-users", score: 2 },
            { text: "寻找其他方法，避免消耗灵魂", icon: "fas fa-search", score: 3 },
            { text: "先保护自己，再考虑其他", icon: "fas fa-shield", score: 4 }
        ]
    },
    {
        id: 75,
        category: "fantasy-scenario",
        icon: "fas fa-robot",
        color: "#007AFF",
        question: "你是《攻壳机动队》中的草薙素子，面对一个可能威胁整个城市的网络病毒，但清除它可能会伤害无辜的AI，你会？",
        options: [
            { text: "立即清除病毒！城市安全比AI更重要！", icon: "fas fa-trash", score: 1 },
            { text: "先分析病毒，寻找不伤害AI的方法", icon: "fas fa-search", score: 2 },
            { text: "与AI协商，让它们主动隔离", icon: "fas fa-comments", score: 3 },
            { text: "等待更好的解决方案", icon: "fas fa-clock", score: 4 }
        ]
    },
    
    // 更多奇幻冒险问题 (76-100)
    {
        id: 76,
        category: "fantasy-adventure",
        icon: "fas fa-magic",
        color: "#8B5CF6",
        question: "你是《哈利波特》中的哈利·波特，面对伏地魔的威胁，但你知道使用不可饶恕咒会伤害你的灵魂，你会？",
        options: [
            { text: "使用不可饶恕咒！为了正义，我义无反顾！", icon: "fas fa-bolt", score: 1 },
            { text: "先寻找其他方法，不到万不得已不使用", icon: "fas fa-search", score: 2 },
            { text: "拒绝使用，寻找更安全的方法", icon: "fas fa-shield", score: 3 },
            { text: "与朋友们商量，共同决定", icon: "fas fa-users", score: 4 }
        ]
    },
    {
        id: 77,
        category: "fantasy-adventure",
        icon: "fas fa-dragon",
        color: "#FF3B30",
        question: "你是《权力的游戏》中的琼恩·雪诺，面对异鬼的威胁，但你知道唤醒龙需要牺牲无辜的生命，你会？",
        options: [
            { text: "唤醒龙！为了拯救世界，牺牲是必要的！", icon: "fas fa-dragon", score: 1 },
            { text: "先寻找其他方法，避免牺牲无辜", icon: "fas fa-search", score: 2 },
            { text: "拒绝唤醒，寻找其他解决方案", icon: "fas fa-shield", score: 3 },
            { text: "与盟友商量，共同决定", icon: "fas fa-users", score: 4 }
        ]
    },
    {
        id: 78,
        category: "fantasy-adventure",
        icon: "fas fa-sword",
        color: "#34C759",
        question: "你是《指环王》中的阿拉贡，面对魔多的军队，但你知道使用精灵的力量会消耗你的生命，你会？",
        options: [
            { text: "使用精灵力量！为了中土世界，我义无反顾！", icon: "fas fa-sword", score: 1 },
            { text: "先观察战况，再决定是否使用", icon: "fas fa-eye", score: 2 },
            { text: "与其他战士合作，分担消耗", icon: "fas fa-users", score: 3 },
            { text: "等待最佳时机，一击必杀", icon: "fas fa-clock", score: 4 }
        ]
    },
    {
        id: 79,
        category: "fantasy-adventure",
        icon: "fas fa-magic",
        color: "#FFD60A",
        question: "你是《魔法少女小圆》中的晓美焰，面对强大的魔女，但你知道使用时间魔法会消耗你的生命，你会？",
        options: [
            { text: "使用时间魔法！为了保护小圆，我义无反顾！", icon: "fas fa-clock", score: 1 },
            { text: "先寻找其他方法，避免消耗生命", icon: "fas fa-search", score: 2 },
            { text: "与其他魔法少女合作，分担消耗", icon: "fas fa-users", score: 3 },
            { text: "先保护自己，再考虑其他", icon: "fas fa-shield", score: 4 }
        ]
    },
    {
        id: 80,
        category: "fantasy-adventure",
        icon: "fas fa-robot",
        color: "#007AFF",
        question: "你是《攻壳机动队》中的草薙素子，面对一个可能威胁整个城市的网络病毒，但清除它可能会伤害无辜的AI，你会？",
        options: [
            { text: "立即清除病毒！城市安全比AI更重要！", icon: "fas fa-trash", score: 1 },
            { text: "先分析病毒，寻找不伤害AI的方法", icon: "fas fa-search", score: 2 },
            { text: "与AI协商，让它们主动隔离", icon: "fas fa-comments", score: 3 },
            { text: "等待更好的解决方案", icon: "fas fa-clock", score: 4 }
        ]
    },
    
    // 童话故事问题 (81-100)
    {
        id: 81,
        category: "fairy-tale",
        icon: "fas fa-crown",
        color: "#FFD60A",
        question: "你是《白雪公主》中的白雪公主，面对恶毒皇后的毒苹果，但你知道吃下它可能会让你陷入沉睡，你会？",
        options: [
            { text: "吃下苹果！为了拯救王国，我义无反顾！", icon: "fas fa-apple", score: 1 },
            { text: "先寻找其他方法，避免吃毒苹果", icon: "fas fa-search", score: 2 },
            { text: "与七个小矮人商量，共同决定", icon: "fas fa-users", score: 3 },
            { text: "拒绝吃苹果，寻找其他解决方案", icon: "fas fa-shield", score: 4 }
        ]
    },
    {
        id: 82,
        category: "fairy-tale",
        icon: "fas fa-heart",
        color: "#FF3B30",
        question: "你是《灰姑娘》中的灰姑娘，面对继母的刁难，但你知道参加舞会可能会被发现身份，你会？",
        options: [
            { text: "参加舞会！为了爱情，我义无反顾！", icon: "fas fa-heart", score: 1 },
            { text: "先想办法隐藏身份，再参加舞会", icon: "fas fa-mask", score: 2 },
            { text: "与仙女教母商量，寻找更好的方法", icon: "fas fa-magic", score: 3 },
            { text: "放弃舞会，保护自己的安全", icon: "fas fa-shield", score: 4 }
        ]
    },
    {
        id: 83,
        category: "fairy-tale",
        icon: "fas fa-frog",
        color: "#34C759",
        question: "你是《青蛙王子》中的青蛙王子，面对女巫的诅咒，但你知道只有真爱之吻才能解除诅咒，你会？",
        options: [
            { text: "主动寻找真爱之吻！为了解除诅咒，我义无反顾！", icon: "fas fa-heart", score: 1 },
            { text: "先观察对方是否真心，再决定是否接吻", icon: "fas fa-eye", score: 2 },
            { text: "与对方商量，确保双方都愿意", icon: "fas fa-comments", score: 3 },
            { text: "拒绝接吻，寻找其他解除诅咒的方法", icon: "fas fa-shield", score: 4 }
        ]
    },
    {
        id: 84,
        category: "fairy-tale",
        icon: "fas fa-magic",
        color: "#8B5CF6",
        question: "你是《美女与野兽》中的贝儿，面对野兽的求婚，但你知道接受求婚可能会让你永远留在城堡，你会？",
        options: [
            { text: "接受求婚！为了爱情，我义无反顾！", icon: "fas fa-heart", score: 1 },
            { text: "先观察野兽是否真的改变了，再决定", icon: "fas fa-eye", score: 2 },
            { text: "与野兽商量，寻找两全其美的方法", icon: "fas fa-comments", score: 3 },
            { text: "拒绝求婚，保护自己的自由", icon: "fas fa-shield", score: 4 }
        ]
    },
    {
        id: 85,
        category: "fairy-tale",
        icon: "fas fa-ship",
        color: "#007AFF",
        question: "你是《小美人鱼》中的爱丽儿，面对巫婆的诱惑，但你知道用声音换取双腿可能会让你永远失去声音，你会？",
        options: [
            { text: "交换声音！为了爱情，我义无反顾！", icon: "fas fa-heart", score: 1 },
            { text: "先寻找其他方法，避免失去声音", icon: "fas fa-search", score: 2 },
            { text: "与巫婆商量，寻找更好的交易条件", icon: "fas fa-comments", score: 3 },
            { text: "拒绝交易，保护自己的声音", icon: "fas fa-shield", score: 4 }
        ]
    },
    
    // 武侠小说问题 (86-100)
    {
        id: 86,
        category: "martial-arts",
        icon: "fas fa-sword",
        color: "#FF3B30",
        question: "你是《射雕英雄传》中的郭靖，面对蒙古大军的入侵，但你知道使用降龙十八掌会消耗大量内力，你会？",
        options: [
            { text: "使用降龙十八掌！为了保卫大宋，我义无反顾！", icon: "fas fa-dragon", score: 1 },
            { text: "先观察战况，再决定是否使用", icon: "fas fa-eye", score: 2 },
            { text: "与其他武林高手合作，分担消耗", icon: "fas fa-users", score: 3 },
            { text: "等待最佳时机，一击必杀", icon: "fas fa-clock", score: 4 }
        ]
    },
    {
        id: 87,
        category: "martial-arts",
        icon: "fas fa-fist-raised",
        color: "#FF6B35",
        question: "你是《天龙八部》中的乔峰，面对丐帮的背叛，但你知道使用降龙十八掌会伤害无辜的帮众，你会？",
        options: [
            { text: "使用降龙十八掌！为了正义，我义无反顾！", icon: "fas fa-sword", score: 1 },
            { text: "先寻找其他方法，避免伤害无辜", icon: "fas fa-search", score: 2 },
            { text: "与帮众商量，寻找和解的方法", icon: "fas fa-comments", score: 3 },
            { text: "拒绝使用，寻找其他解决方案", icon: "fas fa-shield", score: 4 }
        ]
    },
    {
        id: 88,
        category: "martial-arts",
        icon: "fas fa-magic",
        color: "#8B5CF6",
        question: "你是《笑傲江湖》中的令狐冲，面对魔教的威胁，但你知道使用独孤九剑会消耗大量内力，你会？",
        options: [
            { text: "使用独孤九剑！为了正义，我义无反顾！", icon: "fas fa-sword", score: 1 },
            { text: "先观察敌人实力，再决定是否使用", icon: "fas fa-eye", score: 2 },
            { text: "与其他武林高手合作，分担消耗", icon: "fas fa-users", score: 3 },
            { text: "等待最佳时机，一击必杀", icon: "fas fa-clock", score: 4 }
        ]
    },
    {
        id: 89,
        category: "martial-arts",
        icon: "fas fa-fire",
        color: "#FF3B30",
        question: "你是《神雕侠侣》中的杨过，面对金轮法王的威胁，但你知道使用黯然销魂掌会消耗大量内力，你会？",
        options: [
            { text: "使用黯然销魂掌！为了小龙女，我义无反顾！", icon: "fas fa-fire", score: 1 },
            { text: "先观察敌人实力，再决定是否使用", icon: "fas fa-eye", score: 2 },
            { text: "与小龙女合作，分担消耗", icon: "fas fa-users", score: 3 },
            { text: "等待最佳时机，一击必杀", icon: "fas fa-clock", score: 4 }
        ]
    },
    {
        id: 90,
        category: "martial-arts",
        icon: "fas fa-sword",
        color: "#34C759",
        question: "你是《倚天屠龙记》中的张无忌，面对明教的威胁，但你知道使用乾坤大挪移会消耗大量内力，你会？",
        options: [
            { text: "使用乾坤大挪移！为了正义，我义无反顾！", icon: "fas fa-sync", score: 1 },
            { text: "先观察敌人实力，再决定是否使用", icon: "fas fa-eye", score: 2 },
            { text: "与其他武林高手合作，分担消耗", icon: "fas fa-users", score: 3 },
            { text: "等待最佳时机，一击必杀", icon: "fas fa-clock", score: 4 }
        ]
    },
    
    // 热血动漫问题 (91-100)
    {
        id: 91,
        category: "anime",
        icon: "fas fa-fire",
        color: "#FF6B35",
        question: "你是《火影忍者》中的漩涡鸣人，面对强大的敌人，但你知道使用九尾的力量会消耗大量查克拉，你会？",
        options: [
            { text: "使用九尾力量！为了朋友，我义无反顾！", icon: "fas fa-fire", score: 1 },
            { text: "先观察敌人实力，再决定是否使用", icon: "fas fa-eye", score: 2 },
            { text: "与伙伴合作，分担消耗", icon: "fas fa-users", score: 3 },
            { text: "等待最佳时机，一击必杀", icon: "fas fa-clock", score: 4 }
        ]
    },
    {
        id: 92,
        category: "anime",
        icon: "fas fa-sword",
        color: "#FF3B30",
        question: "你是《海贼王》中的索隆，面对强大的敌人，但你知道使用三刀流会消耗大量体力，你会？",
        options: [
            { text: "使用三刀流！为了伙伴，我义无反顾！", icon: "fas fa-sword", score: 1 },
            { text: "先观察敌人实力，再决定是否使用", icon: "fas fa-eye", score: 2 },
            { text: "与伙伴合作，分担消耗", icon: "fas fa-users", score: 3 },
            { text: "等待最佳时机，一击必杀", icon: "fas fa-clock", score: 4 }
        ]
    },
    {
        id: 93,
        category: "anime",
        icon: "fas fa-bolt",
        color: "#FFD60A",
        question: "你是《龙珠》中的贝吉塔，面对强大的敌人，但你知道使用超级赛亚人变身会消耗大量体力，你会？",
        options: [
            { text: "变身超级赛亚人！为了胜利，我义无反顾！", icon: "fas fa-bolt", score: 1 },
            { text: "先观察敌人实力，再决定是否变身", icon: "fas fa-eye", score: 2 },
            { text: "与悟空合作，分担消耗", icon: "fas fa-users", score: 3 },
            { text: "等待最佳时机，一击必杀", icon: "fas fa-clock", score: 4 }
        ]
    },
    {
        id: 94,
        category: "anime",
        icon: "fas fa-magic",
        color: "#8B5CF6",
        question: "你是《魔法少女小圆》中的美树沙耶香，面对强大的魔女，但你知道使用魔法会消耗你的灵魂宝石，你会？",
        options: [
            { text: "使用魔法！为了保护大家，我义无反顾！", icon: "fas fa-star", score: 1 },
            { text: "先寻找其他方法，避免消耗灵魂", icon: "fas fa-search", score: 2 },
            { text: "与其他魔法少女合作，分担消耗", icon: "fas fa-users", score: 3 },
            { text: "先保护自己，再考虑其他", icon: "fas fa-shield", score: 4 }
        ]
    },
    {
        id: 95,
        category: "anime",
        icon: "fas fa-robot",
        color: "#007AFF",
        question: "你是《进击的巨人》中的艾伦，面对强大的巨人，但你知道使用巨人之力会消耗大量体力，你会？",
        options: [
            { text: "变身巨人！为了自由，我义无反顾！", icon: "fas fa-fire", score: 1 },
            { text: "先观察巨人实力，再决定是否变身", icon: "fas fa-eye", score: 2 },
            { text: "与伙伴合作，分担消耗", icon: "fas fa-users", score: 3 },
            { text: "等待最佳时机，一击必杀", icon: "fas fa-clock", score: 4 }
        ]
    },
    
    // 恐怖电影问题 (96-100)
    {
        id: 96,
        category: "horror-movie",
        icon: "fas fa-ghost",
        color: "#8B5CF6",
        question: "你是《咒怨》中的伽椰子，面对闯入你家的陌生人，但你知道伤害他们会让你永远无法安息，你会？",
        options: [
            { text: "立即攻击！为了保护我的家，我义无反顾！", icon: "fas fa-ghost", score: 1 },
            { text: "先观察他们的意图，再决定是否攻击", icon: "fas fa-eye", score: 2 },
            { text: "尝试与他们沟通，寻找和解的方法", icon: "fas fa-comments", score: 3 },
            { text: "拒绝攻击，寻找其他解决方案", icon: "fas fa-shield", score: 4 }
        ]
    },
    {
        id: 97,
        category: "horror-movie",
        icon: "fas fa-mask",
        color: "#FF3B30",
        question: "你是《电锯惊魂》中的竖锯，面对一个可能改变你命运的游戏，但你知道参与游戏可能会伤害无辜的人，你会？",
        options: [
            { text: "立即开始游戏！为了正义，我义无反顾！", icon: "fas fa-mask", score: 1 },
            { text: "先观察游戏规则，再决定是否参与", icon: "fas fa-eye", score: 2 },
            { text: "与参与者商量，寻找更好的方法", icon: "fas fa-comments", score: 3 },
            { text: "拒绝参与，寻找其他解决方案", icon: "fas fa-shield", score: 4 }
        ]
    },
    {
        id: 98,
        category: "horror-movie",
        icon: "fas fa-skull",
        color: "#1C1C1E",
        question: "你是《德州电锯杀人狂》中的皮脸，面对闯入你家的陌生人，但你知道伤害他们会让你永远无法摆脱诅咒，你会？",
        options: [
            { text: "立即攻击！为了保护我的家，我义无反顾！", icon: "fas fa-skull", score: 1 },
            { text: "先观察他们的意图，再决定是否攻击", icon: "fas fa-eye", score: 2 },
            { text: "尝试与他们沟通，寻找和解的方法", icon: "fas fa-comments", score: 3 },
            { text: "拒绝攻击，寻找其他解决方案", icon: "fas fa-shield", score: 4 }
        ]
    },
    {
        id: 99,
        category: "horror-movie",
        icon: "fas fa-vampire",
        color: "#8B5CF6",
        question: "你是《暮光之城》中的爱德华，面对一个可能改变你命运的选择，但你知道选择可能会伤害你爱的人，你会？",
        options: [
            { text: "立即选择！为了爱情，我义无反顾！", icon: "fas fa-vampire", score: 1 },
            { text: "先观察情况，再决定是否选择", icon: "fas fa-eye", score: 2 },
            { text: "与爱人商量，寻找更好的方法", icon: "fas fa-comments", score: 3 },
            { text: "拒绝选择，寻找其他解决方案", icon: "fas fa-shield", score: 4 }
        ]
    },
    {
        id: 100,
        category: "horror-movie",
        icon: "fas fa-witch",
        color: "#FF3B30",
        question: "你是《女巫布莱尔》中的女巫，面对闯入你领地的陌生人，但你知道伤害他们会让你永远无法安息，你会？",
        options: [
            { text: "立即攻击！为了保护我的领地，我义无反顾！", icon: "fas fa-witch", score: 1 },
            { text: "先观察他们的意图，再决定是否攻击", icon: "fas fa-eye", score: 2 },
            { text: "尝试与他们沟通，寻找和解的方法", icon: "fas fa-comments", score: 3 },
            { text: "拒绝攻击，寻找其他解决方案", icon: "fas fa-shield", score: 4 }
        ]
    },
    
    // 3A游戏问题 (101-110)
    {
        id: 101,
        category: "3a-game",
        icon: "fas fa-gamepad",
        color: "#34C759",
        question: "你是《巫师3》中的杰洛特，面对一个可能改变你命运的选择，但你知道选择可能会伤害无辜的人，你会？",
        options: [
            { text: "立即选择！为了正义，我义无反顾！", icon: "fas fa-sword", score: 1 },
            { text: "先观察情况，再决定是否选择", icon: "fas fa-eye", score: 2 },
            { text: "与相关人商量，寻找更好的方法", icon: "fas fa-comments", score: 3 },
            { text: "拒绝选择，寻找其他解决方案", icon: "fas fa-shield", score: 4 }
        ]
    },
    {
        id: 102,
        category: "3a-game",
        icon: "fas fa-robot",
        color: "#007AFF",
        question: "你是《赛博朋克2077》中的V，面对一个可能改变你命运的任务，但你知道任务可能会伤害无辜的人，你会？",
        options: [
            { text: "立即接受任务！为了生存，我义无反顾！", icon: "fas fa-rocket", score: 1 },
            { text: "先了解任务详情，再决定是否接受", icon: "fas fa-eye", score: 2 },
            { text: "与委托人商量，寻找更好的方案", icon: "fas fa-comments", score: 3 },
            { text: "拒绝任务，寻找其他机会", icon: "fas fa-shield", score: 4 }
        ]
    },
    {
        id: 103,
        category: "3a-game",
        icon: "fas fa-dragon",
        color: "#FF3B30",
        question: "你是《上古卷轴》中的龙裔，面对一个强大的龙，但你知道与龙战斗可能会伤害无辜的村民，你会？",
        options: [
            { text: "立即战斗！为了正义，我义无反顾！", icon: "fas fa-dragon", score: 1 },
            { text: "先观察龙的行为，再决定是否战斗", icon: "fas fa-eye", score: 2 },
            { text: "尝试与龙沟通，寻找和平解决的方法", icon: "fas fa-comments", score: 3 },
            { text: "拒绝战斗，寻找其他解决方案", icon: "fas fa-shield", score: 4 }
        ]
    },
    {
        id: 104,
        category: "3a-game",
        icon: "fas fa-car",
        color: "#FFD60A",
        question: "你是《GTA》中的主角，面对一个可能改变你命运的大劫案，但你知道劫案可能会伤害无辜的人，你会？",
        options: [
            { text: "立即执行劫案！为了金钱，我义无反顾！", icon: "fas fa-coins", score: 1 },
            { text: "先了解劫案详情，再决定是否执行", icon: "fas fa-eye", score: 2 },
            { text: "与同伙商量，寻找更安全的方法", icon: "fas fa-comments", score: 3 },
            { text: "拒绝劫案，寻找其他赚钱方式", icon: "fas fa-shield", score: 4 }
        ]
    },
    {
        id: 105,
        category: "3a-game",
        icon: "fas fa-space-shuttle",
        color: "#8B5CF6",
        question: "你是《质量效应》中的指挥官，面对一个可能毁灭整个星系的威胁，但你知道拯救行动需要牺牲一个星球，你会？",
        options: [
            { text: "立即行动！为了大局，我义无反顾！", icon: "fas fa-bomb", score: 1 },
            { text: "先分析情况，再决定是否行动", icon: "fas fa-eye", score: 2 },
            { text: "与船员商量，寻找更好的方案", icon: "fas fa-comments", score: 3 },
            { text: "拒绝行动，寻找其他解决方案", icon: "fas fa-shield", score: 4 }
        ]
    },
    
    // 网络短剧问题 (106-115)
    {
        id: 106,
        category: "web-drama",
        icon: "fas fa-video",
        color: "#FF3B30",
        question: "你是网络短剧中的霸道总裁，面对一个可能改变你公司命运的商业危机，但你知道解决危机需要牺牲员工的利益，你会？",
        options: [
            { text: "立即裁员！为了公司，我义无反顾！", icon: "fas fa-briefcase", score: 1 },
            { text: "先分析情况，再决定是否裁员", icon: "fas fa-eye", score: 2 },
            { text: "与员工商量，寻找共同承担的方法", icon: "fas fa-comments", score: 3 },
            { text: "拒绝裁员，寻找其他解决方案", icon: "fas fa-shield", score: 4 }
        ]
    },
    {
        id: 107,
        category: "web-drama",
        icon: "fas fa-heart",
        color: "#FF6B35",
        question: "你是网络短剧中的女主角，面对一个深爱你的男人和一个能给你更好生活的男人，你会？",
        options: [
            { text: "选择深爱的人！为了爱情，我义无反顾！", icon: "fas fa-heart", score: 1 },
            { text: "先观察两个男人的真心，再决定", icon: "fas fa-eye", score: 2 },
            { text: "与两个男人商量，寻找更好的方法", icon: "fas fa-comments", score: 3 },
            { text: "拒绝选择，保持单身", icon: "fas fa-shield", score: 4 }
        ]
    },
    {
        id: 108,
        category: "web-drama",
        icon: "fas fa-rocket",
        color: "#34C759",
        question: "你是网络短剧中的富二代，面对一个可能改变你命运的创业机会，但你知道创业需要放弃家族企业，你会？",
        options: [
            { text: "立即创业！为了证明自己，我义无反顾！", icon: "fas fa-rocket", score: 1 },
            { text: "先了解创业详情，再决定是否创业", icon: "fas fa-eye", score: 2 },
            { text: "与家人商量，寻找兼顾的方法", icon: "fas fa-comments", score: 3 },
            { text: "拒绝创业，继续家族企业", icon: "fas fa-shield", score: 4 }
        ]
    },
    {
        id: 109,
        category: "web-drama",
        icon: "fas fa-mask",
        color: "#8B5CF6",
        question: "你是网络短剧中的明星，面对一个可能毁掉你事业的丑闻，但你知道解决丑闻需要牺牲一个无辜的人，你会？",
        options: [
            { text: "立即牺牲他！为了事业，我义无反顾！", icon: "fas fa-mask", score: 1 },
            { text: "先了解丑闻详情，再决定是否牺牲", icon: "fas fa-eye", score: 2 },
            { text: "与相关人员商量，寻找更好的方法", icon: "fas fa-comments", score: 3 },
            { text: "拒绝牺牲，承担后果", icon: "fas fa-shield", score: 4 }
        ]
    },
    {
        id: 110,
        category: "web-drama",
        icon: "fas fa-graduation-cap",
        color: "#FFD60A",
        question: "你是网络短剧中的大学生，面对一个可能改变你未来的实习机会，但你知道实习需要放弃你的爱情，你会？",
        options: [
            { text: "立即选择实习！为了未来，我义无反顾！", icon: "fas fa-briefcase", score: 1 },
            { text: "先了解实习详情，再决定是否选择", icon: "fas fa-eye", score: 2 },
            { text: "与恋人商量，寻找兼顾的方法", icon: "fas fa-comments", score: 3 },
            { text: "拒绝实习，选择爱情", icon: "fas fa-shield", score: 4 }
        ]
    }
];

// 继续添加更多问题...
// 这里为了演示，我只添加了110个问题，实际项目中可以添加完整的700个问题（每类100题）

// ===== 随机选择问题函数 =====
function getRandomQuestions(count = 8, usedQuestionIds = []) {
    // 分离职场类和非职场类问题，排除已使用的问题
    const workQuestions = allQuestions.filter(q => 
        (q.category === 'work-passion' || 
        q.category === 'work-pressure' || 
        q.category === 'interpersonal' || 
        q.category === 'salary' || 
        q.category === 'company-culture') &&
        !usedQuestionIds.includes(q.id)
    );
    
    const nonWorkQuestions = allQuestions.filter(q => 
        (q.category === 'fantasy-adventure' || 
        q.category === 'fairy-tale' || 
        q.category === 'martial-arts' || 
        q.category === 'anime' ||
        q.category === 'horror-movie' ||
        q.category === '3a-game' ||
        q.category === 'web-drama') &&
        !usedQuestionIds.includes(q.id)
    );
    
    // 如果可用问题不足，则从所有问题中选择（包括已使用的）
    let selectedWorkQuestions, selectedNonWorkQuestions;
    
    if (workQuestions.length < 2) {
        // 如果职场类问题不足，从所有职场类问题中选择
        const allWorkQuestions = allQuestions.filter(q => 
            q.category === 'work-passion' || 
            q.category === 'work-pressure' || 
            q.category === 'interpersonal' || 
            q.category === 'salary' || 
            q.category === 'company-culture'
        );
        selectedWorkQuestions = allWorkQuestions
            .sort(() => 0.5 - Math.random())
            .slice(0, 2);
    } else {
        selectedWorkQuestions = workQuestions
            .sort(() => 0.5 - Math.random())
            .slice(0, 2);
    }
    
    if (nonWorkQuestions.length < 6) {
        // 如果非职场类问题不足，从所有非职场类问题中选择
        const allNonWorkQuestions = allQuestions.filter(q => 
            q.category === 'fantasy-adventure' || 
            q.category === 'fairy-tale' || 
            q.category === 'martial-arts' || 
            q.category === 'anime' ||
            q.category === 'horror-movie' ||
            q.category === '3a-game' ||
            q.category === 'web-drama'
        );
        selectedNonWorkQuestions = allNonWorkQuestions
            .sort(() => 0.5 - Math.random())
            .slice(0, 6);
    } else {
        selectedNonWorkQuestions = nonWorkQuestions
            .sort(() => 0.5 - Math.random())
            .slice(0, 6);
    }
    
    // 确保职场类问题不连续出现
    const allSelectedQuestions = [...selectedWorkQuestions, ...selectedNonWorkQuestions];
    
    // 打乱顺序，但确保职场类问题不连续
    let shuffledQuestions = [];
    let workIndex = 0;
    let nonWorkIndex = 0;
    
    // 交替插入问题，确保职场类问题不连续
    for (let i = 0; i < allSelectedQuestions.length; i++) {
        if (i % 4 === 0 && workIndex < selectedWorkQuestions.length) {
            // 每4个问题插入一个职场类问题
            shuffledQuestions.push(selectedWorkQuestions[workIndex]);
            workIndex++;
        } else if (nonWorkIndex < selectedNonWorkQuestions.length) {
            // 其他位置插入非职场类问题
            shuffledQuestions.push(selectedNonWorkQuestions[nonWorkIndex]);
            nonWorkIndex++;
        }
    }
    
    return shuffledQuestions;
}

// ===== 结果分析配置 =====
const resultConfig = {
    veryLow: {
        range: [6, 8],
        temperature: 35.0,
        title: "职场温度计：35.0°C",
        icon: "fas fa-thermometer-empty",
        color: "#007AFF",
        description: "你的职场'体温'偏低，就像体温偏低一样，可能缺乏一些激情，但整体状态稳定。",
        personality: "山姆·甘姆齐 - 职场稳定守护者",
        personalityDescription: "你就像《指环王》中的山姆·甘姆齐，虽然平凡但极其可靠。在职场中，你是那个默默守护团队稳定的人。",
        personalityOptions: [
            { name: "山姆·甘姆齐 - 职场稳定守护者", description: "你就像《指环王》中的山姆·甘姆齐，虽然平凡但极其可靠。在职场中，你是那个默默守护团队稳定的人。" },
            { name: "阿甘 - 职场纯真者", description: "你就像《阿甘正传》中的阿甘，拥有纯真的心灵和坚定的信念。在职场中，你总是能够用最简单的方式解决问题。" },
            { name: "山治 - 职场绅士", description: "你就像《海贼王》中的山治，拥有绅士风度和专业精神。在职场中，你总是能够用最优雅的方式处理问题。" },
            { name: "小黄人 - 职场开心果", description: "你就像《神偷奶爸》中的小黄人，充满活力和幽默感。在职场中，你总是能够用乐观的态度感染周围的人。" },
            { name: "史努比 - 职场哲学家", description: "你就像《花生漫画》中的史努比，拥有独特的思考方式。在职场中，你总是能够用不同的视角看待问题。" },
            { name: "哆啦A梦 - 职场助手", description: "你就像《哆啦A梦》中的哆啦A梦，总是能够帮助同事解决问题。在职场中，你是那个值得信赖的伙伴。" }
        ],
        advice: [
            "尝试在工作中找到新的兴趣点",
            "可以主动承担一些有挑战性的任务",
            "考虑学习新的技能来增加工作乐趣",
            "你的稳定性是团队的重要财富"
        ],
        encouragement: "❄️ 你的职场'体温'偏低，离职概率很低！这说明你对当前工作很满意，但也要注意保持激情，避免职场'感冒'！记住，职场如人生，需要适度的'温度'才能保持活力！"
    },
    low: {
        range: [9, 10],
        temperature: 36.0,
        title: "职场温度计：36.0°C",
        icon: "fas fa-thermometer-quarter",
        color: "#34C759",
        description: "你的职场'体温'正常偏低，工作状态稳定，但可能缺乏一些激情。",
        personality: "路飞 - 职场活力达人",
        personalityDescription: "你就像《海贼王》中的路飞，充满活力和正能量！在职场中，你总是那个能够带动团队气氛的人。",
        personalityOptions: [
            { name: "路飞 - 职场活力达人", description: "你就像《海贼王》中的路飞，充满活力和正能量！在职场中，你总是那个能够带动团队气氛的人。" },
            { name: "鸣人 - 职场忍者", description: "你就像《火影忍者》中的漩涡鸣人，拥有不屈的意志和团队精神。在职场中，你总是能够用坚持和努力感染周围的人。" },
            { name: "悟空 - 职场战士", description: "你就像《龙珠》中的孙悟空，拥有强大的战斗力和正义感。在职场中，你总是能够用实力和正义感赢得尊重。" },
            { name: "小智 - 职场训练师", description: "你就像《精灵宝可梦》中的小智，拥有冒险精神和团队合作能力。在职场中，你总是能够带领团队走向成功。" },
            { name: "海绵宝宝 - 职场乐观者", description: "你就像《海绵宝宝》中的海绵宝宝，拥有无限的乐观和创造力。在职场中，你总是能够用积极的态度面对挑战。" },
            { name: "米奇 - 职场魔法师", description: "你就像《米老鼠》中的米奇，拥有魔法般的魅力和创造力。在职场中，你总是能够用独特的魅力感染周围的人。" }
        ],
        advice: [
            "继续保持这种健康的工作状态",
            "可以尝试承担更多挑战性任务",
            "考虑成为团队中的导师角色",
            "你的正能量可以感染更多同事"
        ],
        encouragement: "🌡️ 你的职场'体温'非常健康，离职概率很低！继续保持这种状态，你就是职场中的'健康达人'！愿你在职场的道路上，永远保持这份热情与活力！"
    },
    mediumLow: {
        range: [11, 12],
        temperature: 37.0,
        title: "职场温度计：37.0°C",
        icon: "fas fa-thermometer-half",
        color: "#FFD60A",
        description: "你的职场'体温'开始轻微升温，就像身体开始发热一样，需要关注一下。",
        personality: "工藤新一 - 职场观察者",
        personalityDescription: "你就像《名侦探柯南》中的工藤新一，拥有敏锐的观察力和分析能力。在职场中，你总是能够找到问题的根源。",
        personalityOptions: [
            { name: "工藤新一 - 职场观察者", description: "你就像《名侦探柯南》中的工藤新一，拥有敏锐的观察力和分析能力。在职场中，你总是能够找到问题的根源。" },
            { name: "福尔摩斯 - 职场侦探", description: "你就像《福尔摩斯探案集》中的夏洛克·福尔摩斯，拥有敏锐的观察力和逻辑推理能力。在职场中，你总是能够发现工作中的细微问题。" },
            { name: "柯南 - 职场小侦探", description: "你就像《名侦探柯南》中的江户川柯南，拥有敏锐的观察力和分析能力。在职场中，你总是能够用独特的视角看待问题。" },
            { name: "金田一 - 职场推理家", description: "你就像《金田一少年事件簿》中的金田一一，拥有强大的推理能力。在职场中，你总是能够用逻辑思维解决复杂问题。" },
            { name: "夜神月 - 职场策略家", description: "你就像《死亡笔记》中的夜神月，拥有强大的策略思维。在职场中，你总是能够用智慧解决难题。" },
            { name: "L - 职场分析家", description: "你就像《死亡笔记》中的L，拥有独特的分析能力。在职场中，你总是能够用不同的角度分析问题。" }
        ],
        advice: [
            "仔细观察工作中的具体问题",
            "尝试与同事或上级沟通",
            "制定一些小的改进计划",
            "保持积极的心态面对挑战"
        ],
        encouragement: "🌡️ 你的职场'体温'开始升温，离职概率开始上升！这种'发热'是身体在提醒你关注健康，职场也是如此！每一次'发热'都是成长的机会，相信你能找到属于自己的职场温度！"
    },
    medium: {
        range: [13, 14],
        temperature: 38.0,
        title: "职场温度计：38.0°C",
        icon: "fas fa-thermometer-three-quarters",
        color: "#FF9500",
        description: "你的职场'体温'有点偏高，就像轻微发热一样，需要适当'降温'。",
        personality: "夏洛克·福尔摩斯 - 职场侦探",
        personalityDescription: "你就像《福尔摩斯探案集》中的夏洛克·福尔摩斯，拥有敏锐的观察力和逻辑推理能力。在职场中，你能够发现工作中的细微问题，总是能够找到问题的根源。",
        personalityOptions: [
            { name: "夏洛克·福尔摩斯 - 职场侦探", description: "你就像《福尔摩斯探案集》中的夏洛克·福尔摩斯，拥有敏锐的观察力和逻辑推理能力。在职场中，你能够发现工作中的细微问题，总是能够找到问题的根源。" },
            { name: "华生 - 职场助手", description: "你就像《福尔摩斯探案集》中的华生医生，拥有专业的技能和忠诚的品质。在职场中，你总是能够用专业能力帮助团队解决问题。" },
            { name: "波洛 - 职场推理家", description: "你就像《东方快车谋杀案》中的波洛，拥有独特的推理能力。在职场中，你总是能够用智慧解决复杂问题。" },
            { name: "马普尔小姐 - 职场观察家", description: "你就像《马普尔小姐探案》中的马普尔小姐，拥有敏锐的观察力。在职场中，你总是能够发现别人忽略的细节。" },
            { name: "江户川乱步 - 职场推理师", description: "你就像《江户川乱步》中的明智小五郎，拥有强大的推理能力。在职场中，你总是能够用逻辑思维解决难题。" },
            { name: "金田一耕助 - 职场分析家", description: "你就像《金田一耕助》中的金田一耕助，拥有独特的分析能力。在职场中，你总是能够用不同的角度分析问题。" }
        ],
        advice: [
            "分析当前工作的具体问题所在",
            "尝试与上级沟通改善工作环境",
            "制定明确的职业发展计划",
            "考虑是否需要'换药'（跳槽）"
        ],
        encouragement: "🤒 你的职场'体温'有点偏高，离职概率明显上升！理性分析后，相信你能找到最适合的'治疗方案'！记住，每一次改变都是新的开始，勇敢地踏出舒适圈，你会发现更广阔的天空！"
    },
    mediumHigh: {
        range: [15, 16],
        temperature: 39.0,
        title: "职场温度计：39.0°C",
        icon: "fas fa-thermometer-full",
        color: "#FF6B35",
        description: "你的职场'体温'明显偏高，就像明显发热一样，需要及时'治疗'。",
        personality: "托尼·斯塔克 - 职场创新者",
        personalityDescription: "你就像《钢铁侠》中的托尼·斯塔克，拥有强烈的创新欲望和改变决心。在职场中，你对现状有明确的不满，开始积极寻求改变。就像托尼总是能够创造奇迹一样，你总是能够找到改变现状的方法。",
        personalityOptions: [
            { name: "托尼·斯塔克 - 职场创新者", description: "你就像《钢铁侠》中的托尼·斯塔克，拥有强烈的创新欲望和改变决心。在职场中，你对现状有明确的不满，开始积极寻求改变。" },
            { name: "布鲁斯·韦恩 - 职场守护者", description: "你就像《蝙蝠侠》中的布鲁斯·韦恩，拥有坚定的信念和不屈的意志。在职场中，你对现状极度不满，渴望改变。" },
            { name: "史蒂夫·罗杰斯 - 职场战士", description: "你就像《美国队长》中的史蒂夫·罗杰斯，拥有正义感和改变决心。在职场中，你总是能够为了正义而勇敢地踏出舒适圈。" },
            { name: "索尔 - 职场雷神", description: "你就像《雷神》中的索尔，拥有无限的力量和改变决心。在职场中，你对现状极度不满，渴望彻底改变。" },
            { name: "金刚狼 - 职场战士", description: "你就像《X战警》中的金刚狼，拥有强烈的独立意识和改变决心。在职场中，你对现状极度不满，渴望彻底改变。" },
            { name: "蜘蛛侠 - 职场英雄", description: "你就像《蜘蛛侠》中的彼得·帕克，拥有正义感和改变决心。在职场中，你总是能够为了正义而勇敢地踏出舒适圈。" }
        ],
        advice: [
            "开始积极寻找新的工作机会",
            "提升自己的专业技能",
            "更新简历，准备面试",
            "考虑转行或创业的可能性"
        ],
        encouragement: "🌡️ 你的职场'体温'明显偏高，离职概率很高！这种'发热'是身体在告诉你：是时候做出改变了！人生没有白走的路，每一次'发热'都是你内心在呼唤更好的自己！"
    },
    high: {
        range: [17, 18],
        temperature: 40.0,
        title: "职场温度计：40.0°C",
        icon: "fas fa-thermometer-full",
        color: "#FF3B30",
        description: "你的职场'体温'已经'高烧不退'了！就像身体发烧一样，需要立即'治疗'。",
        personality: "蝙蝠侠 - 职场守护者",
        personalityDescription: "你就像《蝙蝠侠》中的布鲁斯·韦恩，拥有坚定的信念和不屈的意志。在职场中，你对现状极度不满，渴望改变。就像蝙蝠侠总是能够保护哥谭市一样，你总是能够为了更好的未来而勇敢地踏出舒适圈。",
        personalityOptions: [
            { name: "蝙蝠侠 - 职场守护者", description: "你就像《蝙蝠侠》中的布鲁斯·韦恩，拥有坚定的信念和不屈的意志。在职场中，你对现状极度不满，渴望改变。" },
            { name: "超人 - 职场英雄", description: "你就像《超人》中的克拉克·肯特，拥有正义感和改变决心。在职场中，你总是能够为了正义而勇敢地踏出舒适圈。" },
            { name: "神奇女侠 - 职场战士", description: "你就像《神奇女侠》中的戴安娜，拥有强大的力量和正义感。在职场中，你总是能够为了正义而勇敢地踏出舒适圈。" },
            { name: "绿巨人 - 职场破坏者", description: "你就像《绿巨人》中的布鲁斯·班纳，拥有强大的力量和改变决心。在职场中，你对现状极度不满，渴望彻底改变。" },
            { name: "黑寡妇 - 职场特工", description: "你就像《黑寡妇》中的娜塔莎·罗曼诺夫，拥有强大的技能和改变决心。在职场中，你总是能够为了正义而勇敢地踏出舒适圈。" },
            { name: "鹰眼 - 职场射手", description: "你就像《鹰眼》中的克林特·巴顿，拥有精准的技能和改变决心。在职场中，你总是能够为了正义而勇敢地踏出舒适圈。" }
        ],
        advice: [
            "立即开始寻找新的工作机会",
            "提升自己的专业技能和竞争力",
            "更新简历，准备面试材料",
            "考虑转行或创业的可能性"
        ],
        encouragement: "🔥 你的职场'体温'已经'高烧不退'，离职概率极高！别担心，这种'高烧'是身体在告诉你：是时候做出改变了！勇敢踏出舒适圈！"
    },
    veryHigh: {
        range: [19, 20],
        temperature: 41.0,
        title: "职场温度计：41.0°C",
        icon: "fas fa-thermometer-full",
        color: "#8B5CF6",
        description: "你的职场'体温'已经'高烧不退'了！就像身体发烧一样，需要立即'治疗'。",
        personality: "金刚狼 - 职场战士",
        personalityDescription: "你就像《X战警》中的金刚狼，拥有强烈的独立意识和改变决心。在职场中，你对现状极度不满，渴望彻底改变。就像金刚狼总是能够为了正义而战斗一样，你总是能够为了更好的未来而勇敢地踏出舒适圈。",
        personalityOptions: [
            { name: "金刚狼 - 职场战士", description: "你就像《X战警》中的金刚狼，拥有强烈的独立意识和改变决心。在职场中，你对现状极度不满，渴望彻底改变。" },
            { name: "万磁王 - 职场革命者", description: "你就像《X战警》中的万磁王，拥有强大的力量和改变决心。在职场中，你对现状极度不满，渴望彻底改变。" },
            { name: "X教授 - 职场领袖", description: "你就像《X战警》中的X教授，拥有强大的智慧和领导能力。在职场中，你总是能够为了正义而勇敢地踏出舒适圈。" },
            { name: "暴风女 - 职场掌控者", description: "你就像《X战警》中的暴风女，拥有强大的力量和改变决心。在职场中，你总是能够为了正义而勇敢地踏出舒适圈。" },
            { name: "镭射眼 - 职场精准者", description: "你就像《X战警》中的镭射眼，拥有精准的技能和改变决心。在职场中，你总是能够为了正义而勇敢地踏出舒适圈。" },
            { name: "凤凰女 - 职场毁灭者", description: "你就像《X战警》中的凤凰女，拥有毁灭性的力量和改变决心。在职场中，你对现状极度不满，渴望彻底改变。" }
        ],
        advice: [
            "立即开始寻找新的工作机会",
            "提升自己的专业技能和竞争力",
            "更新简历，准备面试材料",
            "考虑转行或创业的可能性"
        ],
        encouragement: "🔥 你的职场'体温'已经'高烧不退'，离职概率接近100%！这种'高烧'说明你必须立即做出改变！勇敢踏出舒适圈，寻找更好的机会！"
    },
    extreme: {
        range: [21, 24],
        temperature: 42.0,
        title: "职场温度计：42.0°C",
        icon: "fas fa-thermometer-full",
        color: "#FF0000",
        description: "你的职场'体温'已经'高烧不退'了！就像身体发烧一样，需要立即'治疗'。",
        personality: "雷神索尔 - 职场雷神",
        personalityDescription: "你就像《雷神》中的索尔，拥有无限的力量和改变决心。在职场中，你对现状极度不满，渴望彻底改变。就像索尔总是能够召唤雷电一样，你总是能够为了更好的未来而勇敢地踏出舒适圈。",
        personalityOptions: [
            { name: "雷神索尔 - 职场雷神", description: "你就像《雷神》中的索尔，拥有无限的力量和改变决心。在职场中，你对现状极度不满，渴望彻底改变。" },
            { name: "洛基 - 职场诡计者", description: "你就像《雷神》中的洛基，拥有强大的智慧和改变决心。在职场中，你总是能够为了正义而勇敢地踏出舒适圈。" },
            { name: "海拉 - 职场毁灭者", description: "你就像《雷神3》中的海拉，拥有毁灭性的力量和改变决心。在职场中，你对现状极度不满，渴望彻底改变。" },
            { name: "奥丁 - 职场神王", description: "你就像《雷神》中的奥丁，拥有神王的力量和改变决心。在职场中，你总是能够为了正义而勇敢地踏出舒适圈。" },
            { name: "瓦尔基里 - 职场女武神", description: "你就像《雷神3》中的瓦尔基里，拥有强大的力量和改变决心。在职场中，你总是能够为了正义而勇敢地踏出舒适圈。" },
            { name: "海姆达尔 - 职场守护者", description: "你就像《雷神》中的海姆达尔，拥有守护的力量和改变决心。在职场中，你总是能够为了正义而勇敢地踏出舒适圈。" }
        ],
        advice: [
            "立即开始寻找新的工作机会",
            "提升自己的专业技能和竞争力",
            "更新简历，准备面试材料",
            "考虑转行或创业的可能性"
        ],
        encouragement: "🔥 你的职场'体温'已经'危险高温'，离职概率接近100%！你已经到了必须改变的时刻！勇敢踏出舒适圈，去追寻真正属于你的职场天空！"
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
    },
    "fantasy-adventure": {
        name: "奇幻冒险",
        icon: "fas fa-magic",
        color: "#8B5CF6"
    },
    "fairy-tale": {
        name: "童话故事",
        icon: "fas fa-crown",
        color: "#FFD60A"
    },
    "martial-arts": {
        name: "武侠小说",
        icon: "fas fa-sword",
        color: "#FF3B30"
    },
    "anime": {
        name: "热血动漫",
        icon: "fas fa-fire",
        color: "#FF6B35"
    },
    "horror-movie": {
        name: "恐怖电影",
        icon: "fas fa-ghost",
        color: "#8B5CF6"
    },
    "3a-game": {
        name: "3A游戏",
        icon: "fas fa-gamepad",
        color: "#34C759"
    },
    "web-drama": {
        name: "网络短剧",
        icon: "fas fa-video",
        color: "#FF3B30"
    }
};

// 导出数据供其他文件使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { allQuestions, getRandomQuestions, resultConfig, categoryConfig };
}