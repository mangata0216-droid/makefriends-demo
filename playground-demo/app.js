const uiConfig = {
    startScreen: {
        bgImage: './Images/start.png',
        title: '互动绘本',
        subtitle: '与小明一起开始奇妙的冒险之旅',
        buttonText: '开始冒险'
    },
    endScreenA: {
        bgImage: './Images/advertisement.png',
        title: '冒险结束',
        subtitle: '谢谢你和小明一起完成了这次冒险！',
        buttonText: '立即领取'
    },
    endScreenB: {
        bgImage: './Images/addwx.png',
        title: '故事结局',
        subtitle: '希望你喜欢这个故事！'
    }
};

const config = [
    {
        id: 1,
        video: 'videos/scene1.mp4',
        progress: 25,
        hasChoice: true,
        questionText: 'How are you?',
        choices: [
            {
                text: "I'm fine, thank you.",
                nextScene: 2
            },
            {
                text: "I'm a robot.",
                nextScene: 2
            },
            {
                text: 'Goodbye.',
                nextScene: 2
            }
        ]
    },
    {
        id: 2,
        video: 'videos/scene2.mp4',
        progress: 50,
        hasChoice: false,
        nextScene: 3
    },
    {
        id: 3,
        video: 'videos/scene3.mp4',
        progress: 75,
        hasChoice: true,
        questionText: 'Can I play with your toy?',
        choices: [
            {
                text: 'Sure, let\'s share!',
                nextScene: 4
            },
            {
                text: 'No, it is only mine!',
                nextScene: 4
            },
            {
                text: 'I don\'t have a toy.',
                nextScene: 4
            }
        ]
    },
    {
        id: 4,
        video: 'videos/scene4.mp4',
        progress: 100,
        hasChoice: false,
        nextScene: 5
    },
    {
        id: 5,
        video: 'videos/scene5.mp4',
        progress: 100,
        hasChoice: true,
        questionText: 'Do you want to play together?',
        choices: [
            {
                text: 'Yes, let\'s go!',
                nextScene: 6
            },
            {
                text: 'No, I am sleeping.',
                nextScene: 6
            },
            {
                text: 'What is your name?',
                nextScene: 6
            }
        ],
        nextScene: null
    },
    {
        id: 6,
        video: 'videos/scene6.mp4',
        progress: 100,
        hasChoice: false,
        nextScene: null
    }
];

/*
流程说明：
场景1 (有选择题) → 用户选择 → 场景2 (无选择题) → 自动跳转 → 场景4 (结束)
                    ↓
场景1 (有选择题) → 用户选择 → 场景3 (有选择题) → 用户选择 → 场景4/5 (结束)
*/

class UIManager {
    constructor(uiConfig) {
        this.uiConfig = uiConfig;
        this.elements = {
            startScreen: document.getElementById('startScreen'),
            startBtn: document.getElementById('startBtn'),
            endScreenA: document.getElementById('endScreenA'),
            toEndBtn: document.getElementById('toEndBtn'),
            endScreenB: document.getElementById('endScreenB'),
            restartBtn: document.getElementById('restartBtn'),
            videoPlayer: document.getElementById('videoPlayer')
        };
        
        this.initUI();
    }
    
    initUI() {
        this.updateStartScreen();
        this.updateEndScreenA();
        this.updateEndScreenB();
    }
    
    updateStartScreen() {
        console.log('=== Updating start screen ===');
        console.log('UI Config:', this.uiConfig);
        console.log('Start screen config:', this.uiConfig.startScreen);
        console.log('Start screen element:', this.elements.startScreen);
        
        if (this.elements.startScreen && this.uiConfig.startScreen) {
            console.log('Setting background image:', this.uiConfig.startScreen.bgImage);
            
            // 使用 setProperty 设置属性
            this.elements.startScreen.style.setProperty('background-image', `url('${this.uiConfig.startScreen.bgImage}')`);
            this.elements.startScreen.style.setProperty('background-size', 'cover');
            this.elements.startScreen.style.setProperty('background-position', 'center');
            this.elements.startScreen.style.setProperty('background-repeat', 'no-repeat');
            
            console.log('Computed background image:', window.getComputedStyle(this.elements.startScreen).backgroundImage);
        } else {
            console.error('Missing start screen element or config:', {
                startScreen: this.elements.startScreen,
                startScreenConfig: this.uiConfig.startScreen
            });
        }
        
        if (this.elements.startBtn && this.uiConfig.startScreen.buttonText) {
            this.elements.startBtn.textContent = this.uiConfig.startScreen.buttonText;
        }
        
        console.log('=== Start screen update complete ===');
    }
    
    updateEndScreenA() {
        console.log('=== Updating end screen A ===');
        console.log('End screen A config:', this.uiConfig.endScreenA);
        console.log('End screen A element:', this.elements.endScreenA);
        
        if (this.elements.endScreenA && this.uiConfig.endScreenA) {
            console.log('Setting endScreenA background image:', this.uiConfig.endScreenA.bgImage);
            
            // 使用 setProperty 设置属性
            this.elements.endScreenA.style.setProperty('background-image', `url('${this.uiConfig.endScreenA.bgImage}')`);
            this.elements.endScreenA.style.setProperty('background-size', 'cover');
            this.elements.endScreenA.style.setProperty('background-position', 'center');
            this.elements.endScreenA.style.setProperty('background-repeat', 'no-repeat');
            
            console.log('Computed background image:', window.getComputedStyle(this.elements.endScreenA).backgroundImage);
        }
        
        if (this.elements.toEndBtn && this.uiConfig.endScreenA.buttonText) {
            this.elements.toEndBtn.textContent = this.uiConfig.endScreenA.buttonText;
        }
        
        console.log('=== End screen A update complete ===');
    }
    
    updateEndScreenB() {
        console.log('=== Updating end screen B ===');
        console.log('End screen B config:', this.uiConfig.endScreenB);
        console.log('End screen B element:', this.elements.endScreenB);
        
        if (this.elements.endScreenB && this.uiConfig.endScreenB) {
            console.log('Setting endScreenB background image:', this.uiConfig.endScreenB.bgImage);
            
            // 使用 setProperty 设置属性
            this.elements.endScreenB.style.setProperty('background-image', `url('${this.uiConfig.endScreenB.bgImage}')`);
            this.elements.endScreenB.style.setProperty('background-size', 'cover');
            this.elements.endScreenB.style.setProperty('background-position', 'center');
            this.elements.endScreenB.style.setProperty('background-repeat', 'no-repeat');
            
            console.log('Computed background image:', window.getComputedStyle(this.elements.endScreenB).backgroundImage);
        }
        
        console.log('=== End screen B update complete ===');
    }
    
    showStartScreen() {
        this.hideAllScreens();
        this.elements.startScreen.classList.remove('hidden');
        this.elements.startScreen.classList.add('active');
    }
    
    hideStartScreen() {
        this.elements.startScreen.classList.remove('active');
        this.elements.startScreen.classList.add('hidden');
    }
    
    showEndScreenA() {
        this.hideAllScreens();
        this.elements.videoPlayer.style.display = 'none';
        this.elements.endScreenA.classList.remove('hidden');
        this.elements.endScreenA.classList.add('active');
    }
    
    hideEndScreenA() {
        this.elements.endScreenA.classList.remove('active');
        this.elements.endScreenA.classList.add('hidden');
    }
    
    showEndScreenB() {
        this.hideAllScreens();
        this.elements.endScreenB.classList.remove('hidden');
        this.elements.endScreenB.classList.add('active');
    }
    
    hideEndScreenB() {
        this.elements.endScreenB.classList.remove('active');
        this.elements.endScreenB.classList.add('hidden');
    }
    
    showVideoPlayer() {
        this.elements.videoPlayer.style.display = 'block';
    }
    
    hideVideoPlayer() {
        this.elements.videoPlayer.style.display = 'none';
    }
    
    hideAllScreens() {
        // 隐藏所有屏幕容器和选择覆盖层
        const screenElements = ['startScreen', 'endScreenA', 'endScreenB'];
        screenElements.forEach(screenKey => {
            const element = this.elements[screenKey];
            if (element && element.classList) {
                element.classList.remove('active');
                element.classList.add('hidden');
            }
        });
        
        // 隐藏选择覆盖层
        const choiceOverlay = document.getElementById('choiceOverlay');
        if (choiceOverlay && choiceOverlay.classList) {
            choiceOverlay.classList.remove('active');
            choiceOverlay.classList.add('hidden');
        }
        
        this.showVideoPlayer();
    }
    
    onStart(callback) {
        if (this.elements.startBtn) {
            this.elements.startBtn.addEventListener('click', callback);
        }
    }
    
    onToEnd(callback) {
        if (this.elements.toEndBtn) {
            this.elements.toEndBtn.addEventListener('click', callback);
        }
    }
    
    onRestart(callback) {
        if (this.elements.restartBtn) {
            this.elements.restartBtn.addEventListener('click', callback);
        }
    }
}

class InteractiveVideoPlayer {
    constructor(config, uiConfig) {
        this.config = config;
        this.currentScene = null;
        this.uiManager = new UIManager(uiConfig);
        this.videoPlayer = document.getElementById('videoPlayer');
        this.choiceOverlay = document.getElementById('choiceOverlay');
        this.choiceOptions = document.getElementById('choiceOptions');
        this.questionText = document.getElementById('questionText');
        this.progressBar = document.getElementById('progressBar');
        this.debugMode = true;
        
        this.init();
    }
    
    init() {
        this.videoPlayer.addEventListener('ended', () => this.onVideoEnded());
        this.videoPlayer.addEventListener('error', () => this.onVideoError());
        this.videoPlayer.addEventListener('canplay', () => {
            console.log('Video can play:', this.currentScene?.video);
        });
        
        this.uiManager.onStart(() => {
            console.log('Start button clicked');
            this.uiManager.hideStartScreen();
            this.playScene(this.config[0].id);
        });
        
        this.uiManager.onToEnd(() => {
            console.log('To end button clicked');
            this.uiManager.hideEndScreenA();
            this.uiManager.showEndScreenB();
        });
        
        this.uiManager.onRestart(() => {
            console.log('Restart button clicked');
            this.uiManager.hideEndScreenB();
            this.uiManager.showStartScreen();
        });
        
        this.uiManager.showStartScreen();
    }
    
    getSceneById(id) {
        return this.config.find(scene => scene.id === id);
    }
    
    playScene(sceneId) {
        const scene = this.getSceneById(sceneId);
        
        if (!scene) {
            console.error('Scene not found:', sceneId);
            return;
        }
        
        console.log('Playing scene:', scene.id, scene.video, 'hasChoice:', scene.hasChoice, 'nextScene:', scene.nextScene);
        this.currentScene = scene;
        this.hideChoices();
        this.updateProgress(scene.progress);
        
        this.videoPlayer.src = scene.video;
        this.videoPlayer.load();
        
        const playPromise = this.videoPlayer.play();
        
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.error('Autoplay prevented:', error);
                this.videoPlayer.muted = true;
                this.videoPlayer.play().catch(e => {
                    console.error('Play failed even with muted:', e);
                });
            });
        }
    }
    
    updateProgress(value) {
        if (value !== undefined && value !== null) {
            this.progressBar.style.width = `${value}%`;
        }
    }
    
    onVideoEnded() {
        if (!this.currentScene) return;
        
        console.log('Video ended. Scene:', this.currentScene.id, 'hasChoice:', this.currentScene.hasChoice, 'nextScene:', this.currentScene.nextScene);
        
        if (this.currentScene.hasChoice && this.currentScene.choices) {
            console.log('Showing choices for scene:', this.currentScene.id);
            this.showChoices(this.currentScene.choices);
        } else if (this.currentScene.nextScene) {
            console.log('Auto-playing next scene:', this.currentScene.nextScene);
            this.playScene(this.currentScene.nextScene);
        } else {
            console.log('Story ended');
            this.uiManager.showEndScreenA();
        }
    }
    
    onVideoError() {
        console.error('Video playback error:', this.currentScene?.video);
        
        if (this.debugMode) {
            console.log('Debug mode: Simulating video end after 2 seconds');
            setTimeout(() => {
                console.log('Debug mode: Triggering video ended');
                this.onVideoEnded();
            }, 2000);
        }
    }
    
    showChoices(choices) {
        this.choiceOptions.innerHTML = '';
        
        if (this.currentScene.questionText) {
            this.questionText.textContent = this.currentScene.questionText;
        }
        
        const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
        
        choices.forEach((choice, index) => {
            const button = document.createElement('button');
            button.className = 'choice-option';
            
            const letterSpan = document.createElement('span');
            letterSpan.className = 'option-letter';
            letterSpan.textContent = letters[index] || String.fromCharCode(65 + index);
            
            const textSpan = document.createElement('span');
            textSpan.textContent = choice.text;
            
            button.appendChild(letterSpan);
            button.appendChild(textSpan);
            
            button.addEventListener('click', () => this.onChoiceClick(button, choice.nextScene));
            this.choiceOptions.appendChild(button);
        });
        
        this.choiceOverlay.classList.remove('hidden');
    }
    
    hideChoices() {
        this.choiceOverlay.classList.add('hidden');
    }
    
    onChoiceClick(button, nextSceneId) {
        button.classList.add('clicked');
        
        setTimeout(() => {
            this.hideChoices();
            if (nextSceneId) {
                this.playScene(nextSceneId);
            } else {
                this.uiManager.showEndScreenA();
            }
        }, 400);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new InteractiveVideoPlayer(config, uiConfig);
});