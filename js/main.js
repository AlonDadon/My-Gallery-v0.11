'use strict'

$(function () {
    renderCardProjects()
    // renderModal()
    $('.btn-submit').click(onContactMe)

    $('.portfolio-link').click(onClickCard)
})

function renderCardProjects() {
    var projects = getProjects()
    var strHtmls = projects.map(function (project, idx) {
        return `  <div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-project-id="${project.projectName}" data-toggle="modal" href="#portfolioModal${idx + 1}">
        <div class="portfolio-hover">
        <div class="portfolio-hover-content">
        <i class="fa fa-plus fa-3x"></i>
        </div>
        </div>
        <img class="img-fluid" src="img/portfolio/${project.img}-small.jpg" alt="">
        </a>
        <div class="portfolio-caption">
        <h4>${project.projectName}</h4>
        <p class="text-muted">${project.title}</p>
        </div>
        </div>`

    })
    $('.container-project').html(strHtmls)
}

function onClickCard() {
    var $el = $(this);
    var modalId = $el.data('project-id')
    renderModal(modalId)
}

function renderModal(id) {
    var project = getProjectById(id)
    var idx = getIdxProjectById(id)
    var strHtml = `<div class="portfolio-modal modal fade" id="portfolioModal${idx + 1}" 
    tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">    
              <div class="modal-body">
              <h2>${project.projectName}</h2>
        <p class="item-intro text-muted">${project.title}</p>
        <img class="img-fluid d-block mx-auto" src="img/portfolio/${project.img}-full.jpg" alt="">
        <!-- full txt -->
        <p>${project.desc}</p>
        <ul class="list-inline">
          <li>Date: ${project.publishedAt}</li>
          <li>Client: Coding academy</li>
          <li>Category: ${project.labels}</li>
        </ul>
        <button class="btn btn-primary" data-dismiss="modal" type="button">
          <i class="fa fa-times"></i>
          Close Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`
    $('.container-modal').html(strHtml)
}

function onContactMe() {
    var subject = $('.subject').val()
    var content = $('.content').val()
    var mailStr = `https://mail.google.com/mail/?view=cm&fs=1&to=adMilion@gmail.com&su=${subject}&body=${content}`
    window.open(mailStr, '_blank');
}