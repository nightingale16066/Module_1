# git-config


git config --global user.name "nightingale16066"  
git config --global user.email "nightingale16066@gmail.com"  


git config --global core.autocrlf true  
git config --global core.quotepath off  
git config --global core.safecrlf warn  
git config --global init.defaultBranch main  


git init # инициализация репозитория  
git add . # добавить все файлы в track  
git commit -m 'описание' # сделать коммит  

git status # показывает текущий статус  
git diff # показывает текущие изденения до предыдущего коммита  
git diff --color-words # более развернутое изменение  
git checkout . # вернуться к последнему коммиту  