// ===== 全局变量 =====
let currentQuestionIndex = 0;
let userAnswers = [];
let currentQuestions = []; // 当前测试的问题列表
let totalQuestions = 0;

// ===== DOM元素引用 =====
const welcomePage = document.getElementById('welcomePage');
const questionPage = document.getElementById('questionPage');
const resultPage = document.getElementById('resultPage');
const rankingPage = document.getElementById('rankingPage');
// 个人页已移除
// const personalPage = document.getElementById('personalPage');
const loadingOverlay = document.getElementById('loadingOverlay');

// 问题页面元素
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const questionTitle = document.getElementById('questionTitle');
const optionsContainer = document.getElementById('optionsContainer');
const prevBtn = document.getElementById('prevBtn');
const currentQuestionNum = document.getElementById('currentQuestionNum');

// 结果页面元素
const resultIcon = document.getElementById('resultIcon');
const resultTitle = document.getElementById('resultTitle');
const resultDescription = document.getElementById('resultDescription');
const personalityName = document.getElementById('personalityName');
const personalityDescription = document.getElementById('personalityDescription');
const adviceList = document.getElementById('adviceList');
const encouragementContent = document.getElementById('encouragementContent');

// ===== 页面切换函数 =====
function showPage(pageId) {
    // 隐藏所有页面
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // 显示目标页面
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        // 使用requestAnimationFrame确保DOM更新后再显示
        requestAnimationFrame(() => {
            targetPage.classList.add('active');
        });
    }
}

// ===== 获取已使用问题ID函数 =====
function getUsedQuestionIds() {
    const testHistory = JSON.parse(localStorage.getItem('testHistory') || '[]');
    const usedIds = new Set();
    
    // 从历史记录中提取所有使用过的问题ID
    testHistory.forEach(record => {
        if (record.questions && Array.isArray(record.questions)) {
            record.questions.forEach(q => {
                if (q.id) {
                    usedIds.add(q.id);
                }
            });
        }
    });
    
    return Array.from(usedIds);
}

// ===== 测试开始函数 =====
function startTest() {
    // 重置测试状态
    currentQuestionIndex = 0;
    userAnswers = [];
    
    // 记录测试开始时间
    localStorage.setItem('testStartTime', Date.now());
    
    // 获取用户历史测试中使用过的问题ID
    const usedQuestionIds = getUsedQuestionIds();
    
    // 随机选择6-8个问题，排除已使用的问题
    currentQuestions = getRandomQuestions(Math.floor(Math.random() * 3) + 6, usedQuestionIds); // 6-8个问题
    totalQuestions = currentQuestions.length;
    
    // 显示问题页面
    showPage('questionPage');
    
    // 显示第一题
    showQuestion();
    
    // 添加页面进入动画
    questionPage.classList.add('animate-fadeInUp');
}

// ===== 返回首页函数 =====
function backToHome() {
    showPage('welcomePage');
    welcomePage.classList.add('animate-fadeInScale');
    setTimeout(() => {
        welcomePage.classList.remove('animate-fadeInScale');
    }, 400);
}

// ===== 显示问题函数 =====
function showQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    
    // 更新进度条
    const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `${currentQuestionIndex + 1}/${totalQuestions}`;
    // 强制设置页码样式，确保右对齐
    progressText.style.textAlign = 'right';
    progressText.style.display = 'inline-block';
    progressText.style.width = 'auto';
    progressText.style.marginLeft = 'auto';
    // 确保父容器为flex右对齐
    try {
        const parent = progressText.parentElement;
        if (parent) {
            parent.style.display = 'flex';
            parent.style.justifyContent = 'flex-end';
            parent.style.width = '100%';
        }
    } catch (_) {}
    currentQuestionNum.textContent = currentQuestionIndex + 1;
    
    // 更新问题标题和分类
    const categoryName = categoryConfig[question.category]?.name || question.category;
    const categoryColor = categoryConfig[question.category]?.color || '#007AFF';
    questionTitle.innerHTML = `
        <div class="question-category" style="background: ${categoryColor};">${categoryName}</div>
        <div class="question-text">${question.question}</div>
    `;
    
    // 生成选项按钮
    generateOptions(question.options);
    
    // 强制刷新所有icon显示
    setTimeout(() => {
        const allIcons = document.querySelectorAll('.option-btn .option-icon, .option-btn i, .option-btn [class*="fa-"]');
        allIcons.forEach(icon => {
            // 强制设置所有样式
            icon.style.cssText = 'color: #000000 !important; background: transparent !important; text-shadow: none !important; filter: none !important; border: none !important; outline: none !important; box-shadow: none !important; -webkit-text-stroke: none !important; text-stroke: none !important; display: inline-block !important; width: 20px !important; height: 20px !important; text-align: center !important; line-height: 20px !important; font-size: 16px !important; margin-right: 8px !important; vertical-align: middle !important;';
            
            // 强制重新渲染
            icon.style.display = 'none';
            icon.offsetHeight; // 触发重排
            icon.style.display = 'inline-block';
        });
    }, 50);
    
    // 更新上一题按钮状态
    updatePrevButton();
    
    // 添加动画效果
    questionTitle.classList.add('animate-fadeInUp');
    setTimeout(() => {
        questionTitle.classList.remove('animate-fadeInUp');
    }, 600);
    
    // 强制设置所有icon颜色为黑色
    forceIconColorBlack();
}

// ===== 强制设置所有icon颜色为黑色 =====
function forceIconColorBlack() {
    // 查找所有选项按钮中的icon
    const allIcons = document.querySelectorAll('.option-btn .option-icon, .option-btn i, .option-btn [class*="fa-"]');
    
    allIcons.forEach(icon => {
        // 最强制的方法：直接设置所有可能的样式属性
        icon.style.setProperty('color', '#000000', 'important');
        icon.style.setProperty('background', 'transparent', 'important');
        icon.style.setProperty('text-shadow', 'none', 'important');
        icon.style.setProperty('filter', 'none', 'important');
        icon.style.setProperty('border', 'none', 'important');
        icon.style.setProperty('outline', 'none', 'important');
        icon.style.setProperty('box-shadow', 'none', 'important');
        icon.style.setProperty('-webkit-text-stroke', 'none', 'important');
        
        // 强制设置属性
        icon.setAttribute('style', 'color: #000000 !important; background: transparent !important; text-shadow: none !important; filter: none !important; border: none !important; outline: none !important; box-shadow: none !important; -webkit-text-stroke: none !important;');
        
        // 移除可能影响颜色的类
        icon.classList.remove('text-primary', 'text-secondary', 'text-success', 'text-warning', 'text-danger', 'text-info', 'text-light', 'text-dark', 'text-white', 'text-muted', 'text-muted', 'text-gray', 'text-gray-500', 'text-gray-600', 'text-gray-700', 'text-gray-800', 'text-gray-900');
        
        // 添加黑色类
        icon.classList.add('text-black');
        
        // 注意：CSS属性不能通过setAttribute设置，只能通过style.setProperty设置
    });
}

// ===== 生成选项按钮 =====
function generateOptions(options) {
    optionsContainer.innerHTML = '';
    
    options.forEach((option, index) => {
        const optionBtn = document.createElement('button');
        optionBtn.className = 'option-btn';
        optionBtn.setAttribute('data-score', option.score);
        
        // 创建选项内容（最强制设置icon颜色为黑色）
        const iconClass = option.icon || 'fa-circle';
        
        // 直接创建包含icon和文本的HTML
        optionBtn.innerHTML = `
            <i class="option-icon fas ${iconClass}" style="color: #000000 !important; background: transparent !important; text-shadow: none !important; filter: none !important; border: none !important; outline: none !important; box-shadow: none !important; -webkit-text-stroke: none !important; text-stroke: none !important; display: inline-block !important; width: 20px !important; height: 20px !important; text-align: center !important; line-height: 20px !important; font-size: 16px !important; margin-right: 8px !important; vertical-align: middle !important;"></i>
            <span class="option-text">${option.text}</span>
        `;
        
        // 多重保险设置icon样式
        const icon = optionBtn.querySelector('.option-icon');
        if (icon) {
            // 强制设置所有样式属性
            icon.style.setProperty('color', '#000000', 'important');
            icon.style.setProperty('background', 'transparent', 'important');
            icon.style.setProperty('text-shadow', 'none', 'important');
            icon.style.setProperty('filter', 'none', 'important');
            icon.style.setProperty('border', 'none', 'important');
            icon.style.setProperty('outline', 'none', 'important');
            icon.style.setProperty('box-shadow', 'none', 'important');
            icon.style.setProperty('-webkit-text-stroke', 'none', 'important');
            icon.style.setProperty('text-stroke', 'none', 'important');
            icon.style.setProperty('display', 'inline-block', 'important');
            icon.style.setProperty('width', '20px', 'important');
            icon.style.setProperty('height', '20px', 'important');
            icon.style.setProperty('text-align', 'center', 'important');
            icon.style.setProperty('line-height', '20px', 'important');
            icon.style.setProperty('font-size', '16px', 'important');
            icon.style.setProperty('margin-right', '8px', 'important');
            icon.style.setProperty('vertical-align', 'middle', 'important');
        }
        
        // 强制设置icon颜色为黑色（多重保险）
        setTimeout(() => {
            const icon = optionBtn.querySelector('.option-icon');
            if (icon) {
                // 强制设置所有可能的样式属性
                icon.style.color = '#000000';
                icon.style.setProperty('color', '#000000', 'important');
                icon.style.background = 'transparent';
                icon.style.setProperty('background', 'transparent', 'important');
                icon.style.textShadow = 'none';
                icon.style.setProperty('text-shadow', 'none', 'important');
                icon.style.filter = 'none';
                icon.style.setProperty('filter', 'none', 'important');
                
                // 移除可能影响颜色的类
                icon.classList.remove('text-primary', 'text-secondary', 'text-success', 'text-warning', 'text-danger', 'text-info', 'text-light', 'text-dark');
                
                // 添加黑色类
                icon.classList.add('text-black');
            }
        }, 0);
        
        // 额外的强制刷新机制
        setTimeout(() => {
            const icon = optionBtn.querySelector('.option-icon');
            if (icon) {
                // 重新设置所有样式
                icon.style.cssText = 'color: #000000 !important; background: transparent !important; text-shadow: none !important; filter: none !important; border: none !important; outline: none !important; box-shadow: none !important; -webkit-text-stroke: none !important; text-stroke: none !important; display: inline-block !important; width: 20px !important; height: 20px !important; text-align: center !important; line-height: 20px !important; font-size: 16px !important; margin-right: 8px !important; vertical-align: middle !important;';
                
                // 强制重新渲染
                icon.style.display = 'none';
                icon.offsetHeight; // 触发重排
                icon.style.display = 'inline-block';
            }
        }, 100);
        
        // 添加点击事件
        optionBtn.addEventListener('click', (e) => {
            // 移除其他选项的选中状态
            document.querySelectorAll('.option-btn').forEach(btn => {
                btn.classList.remove('selected');
            });
            
            // 添加选中状态
            optionBtn.classList.add('selected');
            
            // 延迟跳转，让用户看到选中效果
            setTimeout(() => {
                selectOption(option.score);
            }, 300);
        });
        
        // 添加动画延迟
        optionBtn.style.animationDelay = `${index * 0.1}s`;
        optionBtn.classList.add('animate-fadeInUp');
        
        optionsContainer.appendChild(optionBtn);
    });
    
    // 再次强制设置所有icon颜色为黑色
    setTimeout(() => {
        forceIconColorBlack();
    }, 100);
    
    // 多次强制设置，确保颜色正确
    setTimeout(() => {
        forceIconColorBlack();
    }, 500);
    
    setTimeout(() => {
        forceIconColorBlack();
    }, 1000);
    
    // 额外的强制刷新机制 - 确保所有icon都显示
    setTimeout(() => {
        const allIcons = document.querySelectorAll('.option-btn .option-icon, .option-btn i, .option-btn [class*="fa-"]');
        allIcons.forEach(icon => {
            // 强制设置所有样式
            icon.style.cssText = 'color: #000000 !important; background: transparent !important; text-shadow: none !important; filter: none !important; border: none !important; outline: none !important; box-shadow: none !important; -webkit-text-stroke: none !important; text-stroke: none !important; display: inline-block !important; width: 20px !important; height: 20px !important; text-align: center !important; line-height: 20px !important; font-size: 16px !important; margin-right: 8px !important; vertical-align: middle !important;';
            
            // 强制重新渲染
            icon.style.display = 'none';
            icon.offsetHeight; // 触发重排
            icon.style.display = 'inline-block';
        });
    }, 1500);
    
    // 移除MutationObserver，避免性能问题
}

// ===== 选择选项函数 =====
function selectOption(score) {
    // 保存答案
    userAnswers[currentQuestionIndex] = score;
    
    // 跳转到下一题
    nextQuestion();
}

// ===== 下一题函数 =====
function nextQuestion() {
    if (currentQuestionIndex < totalQuestions - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        // 所有问题回答完毕，显示结果
        showResult();
    }
}

// ===== 上一题函数 =====
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

// ===== 更新上一题按钮状态 =====
function updatePrevButton() {
    if (currentQuestionIndex === 0) {
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'flex';
        prevBtn.disabled = false;
        prevBtn.style.opacity = '1';
    }
}

// ===== 显示结果函数 =====
function showResult() {
    // 显示加载动画
    showLoading();
    
    // 延迟显示结果，增加仪式感
    setTimeout(() => {
        hideLoading();
        calculateResult();
        showPage('resultPage');
        
        // 添加结果页面动画
        resultPage.classList.add('animate-fadeInUp');
        
        // 强制启用移动端滚动
        setTimeout(() => {
            const resultPage = document.getElementById('resultPage');
            if (resultPage) {
                // 直接设置结果页面的滚动属性
                resultPage.style.overflowY = 'auto';
                resultPage.style.webkitOverflowScrolling = 'touch';
                resultPage.style.touchAction = 'pan-y';
                resultPage.style.overscrollBehavior = 'contain';
                resultPage.style.height = '100vh';
                
                // 添加触摸事件支持
                resultPage.addEventListener('touchstart', function(e) {
                    this.style.overflowY = 'auto';
                }, { passive: true });
                
                resultPage.addEventListener('touchmove', function(e) {
                    this.style.overflowY = 'auto';
                }, { passive: true });
            }
        }, 100);
    }, 2000);
}

// ===== 计算结果函数 =====
function calculateResult() {
    // 计算总分
    const totalScore = userAnswers.reduce((sum, score) => sum + score, 0);
    
    // 计算精确温度（35.0°C - 42.0°C，精确到小数点后一位）
    const minTemp = 35.0;
    const maxTemp = 42.0;
    const minScore = 8;  // 最低分数
    const maxScore = 32; // 最高分数（8题 × 4分）
    
    // 线性映射分数到温度
    const temperature = minTemp + ((totalScore - minScore) / (maxScore - minScore)) * (maxTemp - minTemp);
    const preciseTemp = Math.round(temperature * 10) / 10; // 精确到小数点后一位
    
    // 根据精确温度确定结果类型（更细分的区间）
    let resultType;
    if (preciseTemp <= 35.5) {
        resultType = 'veryLow';
    } else if (preciseTemp <= 36.0) {
        resultType = 'low';
    } else if (preciseTemp <= 36.5) {
        resultType = 'mediumLow';
    } else if (preciseTemp <= 37.0) {
        resultType = 'medium';
    } else if (preciseTemp <= 37.5) {
        resultType = 'mediumHigh';
    } else if (preciseTemp <= 38.0) {
        resultType = 'high';
    } else if (preciseTemp <= 38.5) {
        resultType = 'veryHigh';
    } else {
        resultType = 'extreme';
    }
    
    // 获取结果配置
    const result = resultConfig[resultType];
    
    // 更新结果页面内容，传入精确温度
    updateResultPage(result, totalScore, preciseTemp);
}

// ===== 更新结果页面 =====
function updateResultPage(result, totalScore, preciseTemp) {
    // 更新图标和标题
    resultIcon.innerHTML = `<i class="${result.icon}"></i>`;
    resultIcon.style.background = `linear-gradient(135deg, ${result.color}, ${adjustColor(result.color, 20)})`;
    resultTitle.textContent = result.title;
    resultDescription.textContent = result.description;
    
    // 更新人格化描述（基于用户答案的智能选择）
    let selectedPersonality;
    if (result.personalityOptions && result.personalityOptions.length > 0) {
        // 基于用户答案计算选择索引，确保相同温度但不同选项组合的人得到不同结果
        const answerHash = userAnswers.reduce((sum, answer, index) => sum + (answer * (index + 1)), 0);
        const personalityIndex = answerHash % result.personalityOptions.length;
        selectedPersonality = result.personalityOptions[personalityIndex];
    } else {
        selectedPersonality = {
            name: result.personality,
            description: result.personalityDescription
        };
    }
    
    personalityName.textContent = selectedPersonality.name;
    personalityDescription.textContent = selectedPersonality.description;
    
    // 更新建议列表（只显示前3条）
    adviceList.innerHTML = '';
    const advicesToShow = result.advice.slice(0, 3);
    advicesToShow.forEach(advice => {
        const li = document.createElement('li');
        li.textContent = advice;
        li.classList.add('animate-fadeInUp');
        adviceList.appendChild(li);
    });
    
    // 更新激励文案
    encouragementContent.textContent = result.encouragement;
    
    // 保存测试记录（传入选中的职场人格）
    saveTestRecord(result, totalScore, preciseTemp, selectedPersonality);
    
    // 添加动画效果
    resultIcon.classList.add('animate-fadeInScale');
    resultTitle.classList.add('animate-fadeInUp');
    setTimeout(() => {
        resultIcon.classList.remove('animate-fadeInScale');
        resultTitle.classList.remove('animate-fadeInUp');
    }, 600);
}

// ===== 加载动画控制 =====
function showLoading() {
    loadingOverlay.classList.add('active');
}

function hideLoading() {
    loadingOverlay.classList.remove('active');
}

// ===== 重新开始测试 =====
function restartTest() {
    // 重置状态
    currentQuestionIndex = 0;
    userAnswers = [];
    
    // 显示欢迎页面
    showPage('welcomePage');
    
    // 添加动画效果
    welcomePage.classList.add('animate-fadeInScale');
    setTimeout(() => {
        welcomePage.classList.remove('animate-fadeInScale');
    }, 400);
}


// ===== 个人页面功能 =====
// function showPersonal() {}

// function loadPersonalData() {}

// function clearHistory() {}

// ===== 排行榜相关功能已移除 =====

// ===== 搜索公司功能已移除 =====

// ===== 排行榜相关功能已移除 =====
function generateRankingList_removed(searchCompany = '') {
    // 获取所有测试记录
    const allRecords = getAllTestRecords();
    
    // 按公司分组计算平均温度
    const companyData = {};
    allRecords.forEach(record => {
        if (record.company) {
            if (!companyData[record.company]) {
                companyData[record.company] = {
                    name: record.company,
                    temperatures: [],
                    employees: new Set()
                };
            }
            companyData[record.company].temperatures.push(record.temperature);
            companyData[record.company].employees.add(record.userName || '匿名用户');
        }
    });
    
    // 计算每个公司的平均温度
    const companies = Object.values(companyData).map(company => {
        const avgTemp = Math.round(
            company.temperatures.reduce((sum, temp) => sum + temp, 0) / company.temperatures.length
        );
        return {
            name: company.name,
            temperature: avgTemp,
            employees: company.employees.size,
            testCount: company.temperatures.length
        };
    });
    
    // 按温度从高到低排序（温度越高，离职概率越高）
    companies.sort((a, b) => b.temperature - a.temperature);
    
    // 只显示前30名
    const topCompanies = companies.slice(0, 30);
    
    // 添加排名
    topCompanies.forEach((company, index) => {
        company.rank = index + 1;
    });
    
    // 如果搜索特定公司，确保它出现在列表中
    if (searchCompany && !topCompanies.find(c => c.name === searchCompany)) {
        const randomTemp = Math.floor(Math.random() * 20) + 30;
        const randomEmployees = Math.floor(Math.random() * 5000) + 1000;
        topCompanies.push({
            name: searchCompany,
            temperature: randomTemp,
            employees: randomEmployees,
            testCount: 0,
            rank: topCompanies.length + 1
        });
    }
    
    return topCompanies.map(company => `
        <div class="ranking-item clickable" onclick="showCompanyEmployees('${company.name}')">
            <div class="ranking-number ${company.rank <= 3 ? 'top-3' : 'other'}">
                ${company.rank}
            </div>
            <div class="ranking-info">
                <div class="ranking-company">${company.name}</div>
                <div class="ranking-stats">员工数: ${company.employees.toLocaleString()}人 • 测试次数: ${company.testCount}</div>
            </div>
            <div class="ranking-temperature">${company.temperature}°C</div>
        </div>
    `).join('');
}

// ===== 排行榜相关功能已移除 =====

// ===== 个人数据相关功能已移除 =====
function loadPersonalData_removed() {
    const testHistory = document.getElementById('testHistory');
    const history = getTestHistory();
    
    if (history.length === 0) {
        testHistory.innerHTML = `
            <div style="text-align: center; padding: 40px 20px; color: var(--text-secondary);">
                <i class="fas fa-history" style="font-size: 48px; margin-bottom: 16px; opacity: 0.5;"></i>
                <p>还没有测试记录</p>
                <p style="font-size: 14px; margin-top: 8px;">完成一次测试后，记录会显示在这里</p>
            </div>
        `;
        return;
    }
    
    testHistory.innerHTML = history.map((record, index) => `
        <div class="history-item">
            <div class="history-icon" style="background: ${record.color}; color: white;">
                <i class="${record.icon}"></i>
            </div>
            <div class="history-info">
                <div class="history-title">${record.title}</div>
                <div class="history-details">${record.date}</div>
                <div class="history-personality">${record.personality || '职场人格'}</div>
                <div class="history-personality-desc">${record.personalityDescription || '职场人格描述'}</div>
                <div class="history-advice">
                    <strong>建议：</strong>${record.advice ? record.advice.slice(0, 2).join('；') : '保持积极心态，持续学习成长'}
                </div>
            </div>
        </div>
    `).join('');
}

// ===== 获取测试历史 =====
function getTestHistory() {
    const history = localStorage.getItem('testHistory');
    return history ? JSON.parse(history) : [];
}

// ===== 获取所有测试记录 =====
function getAllTestRecords() {
    const history = localStorage.getItem('testHistory');
    return history ? JSON.parse(history) : [];
}

// ===== 保存测试记录 =====
function saveTestRecord(result, totalScore, preciseTemp, selectedPersonality) {
    const history = getTestHistory();
    const testStartTime = localStorage.getItem('testStartTime');
    const duration = testStartTime ? Math.round((Date.now() - testStartTime) / 1000) : null;
    
    const newRecord = {
        id: Date.now(),
        title: result.title,
        probability: result.probability,
        temperature: preciseTemp,
        color: result.color,
        icon: result.icon,
        date: new Date().toLocaleDateString('zh-CN'),
        timestamp: Date.now(),
        personalityName: selectedPersonality.name, // 使用选中的职场人格名称
        personalityDescription: selectedPersonality.description, // 使用选中的职场人格描述
        advice: result.advice,
        totalScore: totalScore,
        duration: duration ? `${Math.floor(duration / 60)}分${duration % 60}秒` : null,
        questions: currentQuestions // 保存本次测试的问题
    };
    
    history.unshift(newRecord);
    
    // 只保留最近20条记录
    if (history.length > 20) {
        history.splice(20);
    }
    
    localStorage.setItem('testHistory', JSON.stringify(history));
}

// ===== 计算职场温度 =====
function calculateTemperature(totalScore) {
    // 将分数转换为温度（20-50度）
    const minScore = 6; // 最低分数
    const maxScore = 24; // 最高分数
    const minTemp = 20;
    const maxTemp = 50;
    
    const temperature = Math.round(
        minTemp + (maxTemp - minTemp) * (totalScore - minScore) / (maxScore - minScore)
    );
    
    return Math.max(minTemp, Math.min(maxTemp, temperature));
}

// ===== 清空历史记录 =====
function clearHistory() {
    if (confirm('确定要清空所有测试记录吗？此操作不可恢复。')) {
        localStorage.removeItem('testHistory');
        loadPersonalData();
        showToast('历史记录已清空');
    }
}

// ===== 用户信息管理功能已移除 =====

// ===== 公司员工排行功能已移除 =====
function showCompanyEmployees_removed(companyName) {
    showPage('companyEmployeesPage');
    loadCompanyEmployees(companyName);
}

function loadCompanyEmployees(companyName) {
    const title = document.getElementById('companyEmployeesTitle');
    const subtitle = document.getElementById('companyEmployeesSubtitle');
    const employeesList = document.getElementById('employeesList');
    
    title.textContent = `${companyName} 员工排行`;
    subtitle.textContent = '查看该公司员工的职场温度排行';
    
    // 获取该公司所有员工的测试记录
    const allRecords = getAllTestRecords();
    const companyRecords = allRecords.filter(record => record.company === companyName);
    
    if (companyRecords.length === 0) {
        employeesList.innerHTML = `
            <div style="text-align: center; padding: 40px 20px; color: var(--text-secondary);">
                <i class="fas fa-users" style="font-size: 48px; margin-bottom: 16px; opacity: 0.5;"></i>
                <p>暂无该公司的测试记录</p>
                <p style="font-size: 14px; margin-top: 8px;">成为第一个测试的员工吧！</p>
            </div>
        `;
        return;
    }
    
    // 按用户分组，获取每个用户的最新测试记录
    const userRecords = {};
    companyRecords.forEach(record => {
        if (!userRecords[record.userName] || record.timestamp > userRecords[record.userName].timestamp) {
            userRecords[record.userName] = record;
        }
    });
    
    // 按温度从高到低排序
    const sortedEmployees = Object.values(userRecords).sort((a, b) => b.temperature - a.temperature);
    
    // 获取当前用户信息
    const currentUserInfo = getUserInfo();
    const isCurrentUser = currentUserInfo.userName && currentUserInfo.company === companyName;
    
    employeesList.innerHTML = sortedEmployees.map((employee, index) => {
        const isCurrent = isCurrentUser && employee.userName === currentUserInfo.userName;
        return `
            <div class="employee-item non-clickable ${isCurrent ? 'current-user' : ''}">
                <div class="employee-number ${index < 3 ? 'top-3' : 'other'}">
                    ${index + 1}
                </div>
                <div class="employee-info">
                    <div class="employee-name">
                        ${employee.userName} ${isCurrent ? '(你)' : ''}
                    </div>
                    <div class="employee-details">
                        ${employee.date} • ${employee.probability}
                    </div>
                </div>
                <div class="employee-temperature">${employee.temperature}°C</div>
            </div>
        `;
    }).join('');
}

function backToRanking() {
    showPage('rankingPage');
    loadRankingData();
}

// ===== 分享结果 =====
function shareResult() {
    const result = {
        title: resultTitle.textContent,
        probability: probabilityBadge.textContent,
        description: resultDescription.textContent
    };
    
    const shareText = `我刚完成了离职概率预测测试！\n\n结果：${result.title}\n${result.probability}\n${result.description}\n\n你也来试试看吧！`;
    
    // 检查是否支持Web Share API
    if (navigator.share) {
        navigator.share({
            title: '离职概率预测结果',
            text: shareText,
            url: window.location.href
        }).catch(err => {
            console.log('分享失败:', err);
            fallbackShare(shareText);
        });
    } else {
        fallbackShare(shareText);
    }
}

// ===== 备用分享方法 =====
function fallbackShare(text) {
    // 复制到剪贴板
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showToast('结果已复制到剪贴板！');
        }).catch(() => {
            showToast('分享功能暂不可用');
        });
    } else {
        showToast('分享功能暂不可用');
    }
}

// ===== 显示提示消息 =====
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        font-size: 14px;
        z-index: 10000;
        animation: fadeInScale 0.3s ease-out;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'fadeInScale 0.3s ease-out reverse';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 2000);
}

// ===== 页面加载完成后的初始化 =====
document.addEventListener('DOMContentLoaded', function() {
    // 添加触摸反馈
    document.addEventListener('touchstart', function(e) {
        if (e.target.classList.contains('option-btn') || 
            e.target.classList.contains('start-btn') ||
            e.target.classList.contains('action-btn')) {
            e.target.style.transform = 'scale(0.95)';
        }
    });
    
    document.addEventListener('touchend', function(e) {
        if (e.target.classList.contains('option-btn') || 
            e.target.classList.contains('start-btn') ||
            e.target.classList.contains('action-btn')) {
            setTimeout(() => {
                e.target.style.transform = '';
            }, 150);
        }
    });
    
    // 防止页面缩放
    document.addEventListener('touchmove', function(e) {
        if (e.scale !== 1) {
            e.preventDefault();
        }
    }, { passive: false });
    
    // 添加键盘支持
    document.addEventListener('keydown', function(e) {
        if (questionPage.classList.contains('active')) {
            if (e.key === 'ArrowLeft' && !prevBtn.disabled) {
                previousQuestion();
            } else if (e.key >= '1' && e.key <= '3') {
                const optionIndex = parseInt(e.key) - 1;
                const options = document.querySelectorAll('.option-btn');
                if (options[optionIndex]) {
                    options[optionIndex].click();
                }
            }
        }
    });
    
    console.log('离职概率预测系统已初始化完成！');
    console.log('问题总数:', totalQuestions);
    console.log('欢迎使用我们的职场心理测试工具！');
});

// ===== 工具函数 =====
function adjustColor(color, amount) {
    // 简单的颜色调整函数，用于生成渐变色
    const hex = color.replace('#', '');
    const r = Math.min(255, parseInt(hex.substr(0, 2), 16) + amount);
    const g = Math.min(255, parseInt(hex.substr(2, 2), 16) + amount);
    const b = Math.min(255, parseInt(hex.substr(4, 2), 16) + amount);
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// ===== 性能优化 =====
// 图片懒加载
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ===== 错误处理 =====
window.addEventListener('error', function(e) {
    console.error('页面发生错误:', e.error);
    showToast('页面出现错误，请刷新重试');
});

// ===== 页面可见性API =====
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // 页面隐藏时的处理
        console.log('页面已隐藏');
    } else {
        // 页面显示时的处理
        console.log('页面已显示');
    }
});
