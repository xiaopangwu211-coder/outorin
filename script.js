// ===== 全局变量 =====
let currentQuestionIndex = 0;
let userAnswers = [];
let currentQuestions = []; // 当前测试的问题列表
let totalQuestions = 0;

// ===== DOM元素引用 =====
const welcomePage = document.getElementById('welcomePage');
const questionPage = document.getElementById('questionPage');
const resultPage = document.getElementById('resultPage');
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
const probabilityBadge = document.getElementById('probabilityBadge');
const resultDescription = document.getElementById('resultDescription');
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

// ===== 测试开始函数 =====
function startTest() {
    // 重置测试状态
    currentQuestionIndex = 0;
    userAnswers = [];
    
    // 随机选择6-8个问题
    currentQuestions = getRandomQuestions(Math.floor(Math.random() * 3) + 6); // 6-8个问题
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
    
    // 更新上一题按钮状态
    updatePrevButton();
    
    // 添加动画效果
    questionTitle.classList.add('animate-fadeInUp');
    setTimeout(() => {
        questionTitle.classList.remove('animate-fadeInUp');
    }, 600);
}

// ===== 生成选项按钮 =====
function generateOptions(options) {
    optionsContainer.innerHTML = '';
    
    options.forEach((option, index) => {
        const optionBtn = document.createElement('button');
        optionBtn.className = 'option-btn';
        optionBtn.setAttribute('data-score', option.score);
        
        // 创建选项内容
        optionBtn.innerHTML = `
            <i class="option-icon fas ${option.icon}"></i>
            <span class="option-text">${option.text}</span>
        `;
        
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
    }, 2000);
}

// ===== 计算结果函数 =====
function calculateResult() {
    // 计算总分
    const totalScore = userAnswers.reduce((sum, score) => sum + score, 0);
    
    // 根据分数确定结果类型
    let resultType;
    if (totalScore <= 12) {
        resultType = 'low';
    } else if (totalScore <= 18) {
        resultType = 'medium';
    } else {
        resultType = 'high';
    }
    
    // 获取结果配置
    const result = resultConfig[resultType];
    
    // 更新结果页面内容
    updateResultPage(result, totalScore);
}

// ===== 更新结果页面 =====
function updateResultPage(result, totalScore) {
    // 更新图标和标题
    resultIcon.innerHTML = `<i class="${result.icon}"></i>`;
    resultIcon.style.background = `linear-gradient(135deg, ${result.color}, ${adjustColor(result.color, 20)})`;
    resultTitle.textContent = result.title;
    probabilityBadge.innerHTML = `<span class="probability-text">离职概率: ${result.probability}</span>`;
    resultDescription.textContent = result.description;
    
    // 更新建议列表
    adviceList.innerHTML = '';
    result.advice.forEach(advice => {
        const li = document.createElement('li');
        li.textContent = advice;
        li.classList.add('animate-fadeInUp');
        adviceList.appendChild(li);
    });
    
    // 更新激励文案
    encouragementContent.textContent = result.encouragement;
    
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
