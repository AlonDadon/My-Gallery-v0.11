'use strict'

var gProjects = createProjects()

function getProjects() {
    return gProjects
}

function createProject(projectName, img, title, desc = 'lorm ipsum',publishedAt = '2021',labels = '2D game') {
    
    return {
        id: projectName,
        projectName,
        img,
        title,
        desc:makeLorem() ,
        publishedAt,
        labels,
    }
}
function createProjects() {
    var projNames = ['Minesweeper', ' In-Picture Game', ' Touch Nums',
        ' Ball Board', 'Chess', 'Todos', ' Books Shop','Safe-Content','Sokoban']

    var projSubTxt = ['Try to catch a joker', ' Will you be able to guess correctly?', 
    'To improve the ability to think fast','A game of thinking and agility',
     'The classic chess we know', 'A must-have app for any programmer',
      'Make an order to the seller','Feel safe with the app','Classic game 80s, recommended!']
    var projects = projNames.map(function (name, idx) {
        return createProject(name, idx + 1, projSubTxt[idx])
    })
    return projects
}

function getProjectById(id){
    var projectId = gProjects.find(function(project){
        return project.id === id
    })
    return projectId
}
function getIdxProjectById(id) {
    var idx = gProjects.findIndex(function (project) {
        return project.id === id
    })
    return idx
}

function makeLorem(size = 50) {
    var words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn'];
    var txt = '';
    while (size > 0) {
        size--;
        txt += words[Math.floor(Math.random() * words.length)] + ' ';
    }
    return txt;
}